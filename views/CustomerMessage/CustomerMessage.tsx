'use client';

import { useState } from 'react';

import Button from '@/components/base/Button';
import Select from '@/components/base/Select';
import type { ModifiedSelectChangeEvent } from '@/components/base/Select/index.types';
import Modal from '@/components/ui/Modal';

import ChatRoomCustomer from './components/ChatRoomCustomer/ChatRoomCustomer';
import useCustomerMessage from './CustomerMessage.hooks';

const CustomerMesage = () => {
  const {
    dataList = [],
    isLoadingList,
  } = useCustomerMessage();

  const [openModal, setOpenModal] = useState<boolean>(true);
  const [selectedUser, setSelectedUser] = useState<string>('');
  const [selectedUserTemp, setSelectedUserTemp] = useState<string>('');

  const toggleModal = () => {
    setOpenModal((prev) => !prev);
  };

  const onSelectUser = (event: ModifiedSelectChangeEvent) => {
    const { target } = event;
    const { value } = target;
    setSelectedUserTemp(String(value));
  };

  const confirmSelectUser = () => {
    setSelectedUser(selectedUserTemp);
    toggleModal();
  };

  return (
    <>
      <ChatRoomCustomer userId={selectedUser} />

      <Modal
        title="Select user to continue"
        open={openModal}
        onClose={toggleModal}
        width={520}
        fullWidth
      >
        <Modal.Content className="flex gap-4">
          <Select
            options={dataList}
            onChange={onSelectUser}
            disabled={isLoadingList}
            placeholder="Please select customer sample"
            className="w-full"
            value={selectedUserTemp}
            block
          />

          <Button onClick={confirmSelectUser} color="default">
            Select
          </Button>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default CustomerMesage;
