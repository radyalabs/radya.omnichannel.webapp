import { ENDPOINT } from '@/constants/apiURL';
import useGetData from '@/hooks/useGetData';
import type { SelectItem } from '@/types/inputs';
import type { UserListResponse } from '@/types/user';

const useCustomerMessage = () => {
  const { USER_MGMT } = ENDPOINT;

  const {
    data: dataList,
    isLoading: isLoadingList,
  } = useGetData<SelectItem[], UserListResponse>(
    ['userList'],
    USER_MGMT.USERS,
    {
      normalizer: (data: UserListResponse): SelectItem[] => {
        const { items = [] } = data;

        return items.map((item) => ({
          label: String(item.fullName),
          value: String(item.userId),
        }));
      },
    },
  );

  return {
    dataList,
    isLoadingList,
  };
};

export default useCustomerMessage;
