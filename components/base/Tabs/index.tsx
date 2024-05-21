import { cloneElement } from 'react';
import Link from 'next/link';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import MUITabs from '@mui/material/Tabs';

import useTabs from './index.hooks';
import type { TabPanelProps, TabsProps } from './index.types';

const Tabs = (props: Partial<TabsProps>) => {
  const {
    children,
    className,
    counters,
    hrefs = [],
    icons = [],
    labels,
    selectedIcons = [],
    value: tabValue,
    variant = 'standard',
  } = props;
  const { value = 0, handleChange } = useTabs(props);
  return (
    <Box>
      <MUITabs
        className={className}
        value={tabValue !== undefined ? tabValue : value}
        variant={variant}
        onChange={handleChange}
      >
        {(labels || []).map((label, i) => {
          const tabComponent = (
            cloneElement(
              (
                <Tab
                  classes={{
                    root: 'normal-case p-1',
                  }}
                  icon={tabValue === i ? (selectedIcons[i] || icons[i]) : icons[i]}
                  sx={{ opacity: 1 }}
                  label={(
                    <p className={icons.length ? 'm-0' : ''}>
                      <span>{label}</span>
                      {counters && (
                        <span
                          className={`ml-2 ${value === i ? 'bg-primary-100' : 'bg-n-5'} 
                      p-2 py-1 rounded-full`}
                        >
                          {counters[i] !== undefined ? counters[i] : ''}
                        </span>
                      )}
                    </p>
                  )}
                />
              ), { key: label },
            )
          );
          return hrefs.length ? (
            <Link href={hrefs[i]} className={tabValue === i ? 'text-primary-500' : 'text-n-8'}>
              {tabComponent}
            </Link>
          ) : tabComponent;
        })}
      </MUITabs>
      {children}
    </Box>
  );
};

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
};

Tabs.TabPanel = TabPanel;

export default Tabs;
