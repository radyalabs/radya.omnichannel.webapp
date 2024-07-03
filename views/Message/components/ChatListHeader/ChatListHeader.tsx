import React from 'react';

import Button from '@/components/base/Button';
import TextField from '@/components/base/Textfield';
import Typography from '@/components/base/Typography';
import {
  IcFilter, IcFolderCheck, IcSearch, IcX,
} from '@/components/icons';
import DropdownButton from '@/components/ui/DropdownButton';

import type {
  ChatListHeaderProps,
} from './ChatListHeader.types';

const ChatListHeader = (props: ChatListHeaderProps) => {
  const {
    unresolvedChat,
    searchValue,
    handleChangeSearch,
    handleResetSearch,
    handleSearchEnter,
  } = props;

  return (
    <div className="bg-n-4 px-5 py-4 flex justify-between relative">
      <div>
        <Typography variant="title" className="text-n-9">Inbox</Typography>
        <Typography className="text-n-7">{ `Unserved Inbox: ${unresolvedChat}` }</Typography>
      </div>
      <div className="flex *:p-0 gap-2">
        <Button variant="text" color="primary"><IcFolderCheck /></Button>
        <Button variant="text" color="primary"><IcFilter /></Button>
        <DropdownButton
          className="border-0 p-2"
          variant="text"
          dropdownIcon={false}
          menuItems={[
            {
              label: (
                <div className="flex justify-between items-center gap-3 w-full">
                  <TextField
                    placeholder="Search customer"
                    className="w-full ml-4"
                    value={searchValue}
                    onChange={handleChangeSearch}
                    onKeyDown={handleSearchEnter}
                    prependObject={<IcSearch />}
                    block
                  />

                  <Button
                    color="primary"
                    size="small"
                    className="mr-4"
                    onClick={handleResetSearch}
                  >
                    <IcX className="[&>*]:fill-gray-50" onClick={handleResetSearch} />
                  </Button>
                </div>
              ),
              dismissDropdown: false,
            },
          ]}
        >
          <IcSearch className="[&>*]:fill-primary-500" />
        </DropdownButton>
      </div>
    </div>
  );
};

export default ChatListHeader;
