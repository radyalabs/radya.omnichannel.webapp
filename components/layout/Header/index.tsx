'use client';

import React from 'react';

import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@/components/base/Typography';
import { IcLogout } from '@/components/icons';
import DropdownButton from '@/components/ui/DropdownButton';
import { APP_TITLE } from '@/constants/config';
import { stringToAcronym } from '@/utils';

import useHeader from './index.hooks';

const Header = () => {
  const {
    profile,
    handleLogout,
  } = useHeader();
  const {
    fullName = '',
    profilePictureUri = '',
  } = profile || {};

  return (
    <AppBar className="w-full bg-n-1 py-3 shadow fixed z-30">
      <Toolbar className="transition-width transition-slowest ease px-7 [&>*]:text-n-13 ml-24 gap-2">
        <Typography
          variant="title"
          as="span"
          align="left"
          className="font-semibold grow"
        >
          {APP_TITLE}
        </Typography>
        <DropdownButton
          className="border-0 h-11 p-2"
          variant="text"
          dropdownIcon={false}
          menuItems={[
            {
              label: (
                <div className="flex justify-between items-center gap-3">
                  <Avatar
                    className="bg-primary-200 text-lg text-primary-500 font-secondary font-bold"
                    src={profilePictureUri}
                    sx={{ width: 56, height: 56 }}
                  >
                    {!profilePictureUri ? stringToAcronym(fullName) : ''}
                  </Avatar>
                  <div className="flex flex-col gap-1">
                    <Typography as="span" className="text-base" variant="title" type="secondary">
                      {fullName}
                    </Typography>
                  </div>
                </div>
              ),
            },
            {
              icon: <IcLogout className="fill-danger-500" />,
              label: 'Sign Out',
              danger: true,
              onClick: handleLogout,
            },
          ]}
        >
          <Avatar
            className="bg-primary-200 text-lg text-primary-500 font-secondary font-bold"
            src={profilePictureUri}
          >
            {!profilePictureUri ? stringToAcronym(fullName) : ''}
          </Avatar>
        </DropdownButton>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
