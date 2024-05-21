'use client';

import React, { Fragment } from 'react';
import Image from 'next/image';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import mark from '@/assets/brand_mark_primary.svg';
import Typography from '@/components/base/Typography';
import { APP_TITLE } from '@/constants/config';

import MenuItem from './components/MenuItem';
import useSidebar from './index.hooks';

const Sidebar = () => {
  const {
    isCollapsed,
    menus,
    collapseSidebar,
    showSidebar,
  } = useSidebar();
  return (
    <aside
      className={`${!isCollapsed ? 'w-64' : 'w-24'} font-sans fixed h-full drop-shadow-xl z-50 transition-width transition-slowest ease`}
      aria-label="Sidebar"
    >
      <div
        className={`overflow-y-auto bg-primary-500 h-full ${!isCollapsed ? 'px-2' : ''}`}
        onMouseEnter={showSidebar}
        onMouseLeave={collapseSidebar}
      >
        <div className={`flex px-2 py-5 items-center ${!isCollapsed ? 'px-4 justify-between' : 'justify-center'}`}>
          <Image
            src={mark}
            alt="Brand Logo"
            className="h-12 w-auto object-contain"
            priority
          />
          {!isCollapsed && (
            <Typography
              variant="title"
              as="span"
              align="left"
              className="font-semibold grow text-n-1 whitespace-nowrap h-fit"
            >
              {APP_TITLE}
            </Typography>
          )}
        </div>

        <List
          sx={{ width: '100%' }}
          component="nav"
          className="py-0"
        >
          {menus.map((menu) => (
            !menu.subMenu ? (
              <MenuItem menu={menu} key={menu.id} />
            ) : (
              <Fragment key={menu.id}>
                <ListItemButton
                  classes={{
                    root: 'rounded-2xl mb-2 justify-center whitespace-nowrap text-neutral-700 text-base',
                  }}
                >
                  {!isCollapsed && (
                    <ListItemText
                      classes={{ primary: 'text-sm font-secondary' }}
                      primary={menu.name}
                    />
                  )}
                </ListItemButton>
                <List
                  component="div"
                  disablePadding
                  className="mb-5"
                >
                  {
                    (menu.subMenu || []).map((submenu) => (
                      <MenuItem menu={submenu} key={submenu.id} />
                    ))
                  }
                </List>
              </Fragment>
            )
          ))}
        </List>
      </div>
    </aside>
  );
};
export default Sidebar;
