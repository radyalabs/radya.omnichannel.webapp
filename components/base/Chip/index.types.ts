export interface ChipProps {
  className?: string;
  clickable?: boolean;
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  label?: string;
  selected?: boolean;
  variant?: 'filled' | 'outlined';
  onClick?: () => void;
  onDelete?: () => void;
}
