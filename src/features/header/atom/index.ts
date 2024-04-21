import { atom, useAtom } from "jotai";
import {
  INITIAL_IS_LEFT_ICON_ATOM,
  INITIAL_IS_RIGHT_ICON_ATOM,
  INITIAL_MENU_ITEMS_ATOM,
} from "../constants";
import type { MenuItem } from "../types";

const isLeftIconAtom = atom(INITIAL_IS_LEFT_ICON_ATOM);
const isRightIconAtom = atom(INITIAL_IS_RIGHT_ICON_ATOM);
const menuItemsAtom = atom(INITIAL_MENU_ITEMS_ATOM);

export const useHeaderAtom = () => {
  const [isLeftIcon, setIsLeftIcon] = useAtom(isLeftIconAtom);
  const [isRightIcon, setIsRightIcon] = useAtom(isRightIconAtom);

  const showLeftIcon = () => {
    setIsLeftIcon(true);
  };

  const hideLeftIcon = () => {
    setIsLeftIcon(false);
  };

  const showRightIcon = () => {
    setIsRightIcon(true);
  };

  const hideRightIcon = () => {
    setIsRightIcon(false);
  };

  const [menuItems, setMenuItems] = useAtom(menuItemsAtom);

  const replaceMenuItems = (newMenuItems: MenuItem[]) => {
    setMenuItems(newMenuItems);
  };

  const activateMenu = (id: string) => {
    const newMenuItems = menuItems.map((menuItem) => {
      if (menuItem.id === id) {
        return {
          ...menuItem,
          active: true,
        };
      }
      return {
        ...menuItem,
        active: false,
      };
    });
    replaceMenuItems(newMenuItems);
  };

  return {
    isLeftIcon,
    isRightIcon,
    showLeftIcon,
    hideLeftIcon,
    showRightIcon,
    hideRightIcon,
    menuItems,
    replaceMenuItems,
    activateMenu,
  };
};
