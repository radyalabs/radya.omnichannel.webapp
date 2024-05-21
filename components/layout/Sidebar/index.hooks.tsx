import MENUS from '@/constants/menu';
import { useLayoutContext } from '@/contexts/LayoutContext';

const useSidebar = () => {
  const { isCollapsed, collapseSidebar, showSidebar } = useLayoutContext();
  const menus = MENUS;

  return {
    isCollapsed,
    menus,
    collapseSidebar,
    showSidebar,
  };
};

export default useSidebar;
