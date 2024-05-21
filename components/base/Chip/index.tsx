import MUIChip from '@mui/material/Chip';

import type { ChipProps } from './index.types';

import styles from './index.module.scss';

const Chip = (props: ChipProps) => {
  const {
    className,
    clickable,
    color = 'default',
    label = '',
    selected,
    variant = 'filled',
    onClick,
    onDelete,
  } = props;

  const chipStyles = [styles.chip];

  if (className) chipStyles.push(className);

  if (selected) chipStyles.push(styles.selected);

  if (variant === 'outlined') chipStyles.push(styles.outlined);
  if (variant === 'filled') chipStyles.push(styles.filled);

  if (color === 'primary') chipStyles.push(styles.primary);
  if (color === 'secondary') chipStyles.push(styles.secondary);
  if (color === 'success') chipStyles.push(styles.success);
  if (color === 'warning') chipStyles.push(styles.warning);
  if (color === 'error') chipStyles.push(styles.danger);

  return (
    <MUIChip
      className={chipStyles.join(' ')}
      clickable={clickable}
      label={label}
      onClick={onClick}
      onDelete={onDelete}
    />
  );
};

export default Chip;
