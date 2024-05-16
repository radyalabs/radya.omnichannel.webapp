import type { Decorator, Preview } from '@storybook/react';
import { withThemeByClassName, withThemeFromJSXProvider } from '@storybook/addon-themes';

import '@/styles/globals.scss';
import { ThemeProvider } from '@mui/material';
import { Plus_Jakarta_Sans, Rubik } from 'next/font/google';

import theme from '@/lib/theme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-rubik',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-jakarta',
});

// @ts-ignore
export const decorators: Decorator = [
  withThemeFromJSXProvider({
    themes: {
      light: theme,
      dark: theme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
  }),
  withThemeByClassName({
    themes: {
      // nameOfTheme: 'classNameForTheme',
      light: '',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
// @ts-ignore
  (Story) => (
    <main className={`${rubik.variable} ${plusJakartaSans.variable} `} id="__next">
      <Story />
    </main>
  ),
];

export default preview;
