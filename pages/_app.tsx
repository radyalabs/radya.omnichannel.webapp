import type { AppProps } from 'next/app';
import { Poppins, Quicksand } from 'next/font/google';

import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AxiosError } from 'axios';
import id from 'date-fns/locale/id';

import ToasterContainer from '@/components/ui/ToasterContainer';
import HTTP_CODE from '@/constants/httpCode';
import { AuthProvider } from '@/contexts/AuthContext';
import { LayoutProvider } from '@/contexts/LayoutContext';
import { ModalProvider } from '@/contexts/ModalContext';
import { removeAuth } from '@/helpers';
import MUI_THEME from '@/lib/theme';
import type { BaseError } from '@/types/responses';
import { createQueryParams } from '@/utils';

import '@/styles/globals.scss';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-poppins',
});

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-quicksand',
});

const App = ({
  Component,
  pageProps,
}: AppProps) => {
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error) => {
        const { response } = error as AxiosError<BaseError>;
        const { data } = response || {};
        const { code } = data || {};
        if (code === HTTP_CODE.unauthorized) {
          removeAuth();
          const query = { returnUrl: window.location.pathname };
          window.location.href = `${window.location.origin}/login?${createQueryParams(query)}`;
        }
      },
    }),
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <main className={`${poppins.variable} ${quicksand.variable} `}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={MUI_THEME}>
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              adapterLocale={id}
            >
              <ToasterContainer />
              <ModalProvider>
                <LayoutProvider>
                  <AuthProvider>
                    <Component {...pageProps} />
                  </AuthProvider>
                </LayoutProvider>
              </ModalProvider>
            </LocalizationProvider>
          </ThemeProvider>
        </StyledEngineProvider>
      </main>
    </QueryClientProvider>
  );
};
export default App;
