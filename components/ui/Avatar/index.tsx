import MUIAvatar from '@mui/material/Avatar';

import { stringToAcronym } from '@/utils';

import type { AvatarProps } from './index.types';

const Avatar = (props: AvatarProps) => {
  const {
    className = '',
    height = 56,
    imageUrl,
    label,
    width = 56,
  } = props;

  const getTwoChars = (value: string) => (
    value.length > 1 ? value.slice(0, 1) + value.slice(-1) : value
  );

  return (
    <MUIAvatar
      className={`bg-warning-500 text-lg text-warning-800 font-secondary font-bold ${className}`}
      src={imageUrl}
      sx={{ width, height }}
    >
      {!imageUrl && (
        label.length > 3 ? getTwoChars(stringToAcronym(label)) : label
      )}
    </MUIAvatar>
  );
};

export default Avatar;
