import { atom, useAtom, useAtomValue } from "jotai";
import {
  INITIAL_CURRENT_MENU_ATOM,
  INITIAL_IS_LEFT_ICON_ATOM,
  INITIAL_IS_RIGHT_ICON_ATOM,
  INITIAL_LIST_MENU_ITEMS_ATOM,
  INITIAL_MENU_ITEMS_ATOM,
} from "../constants";
import type { ListMenuItem, MenuItem } from "../types";

const isLeftIconAtom = atom(INITIAL_IS_LEFT_ICON_ATOM);
const isRightIconAtom = atom(INITIAL_IS_RIGHT_ICON_ATOM);
const menuItemsAtom = atom(INITIAL_MENU_ITEMS_ATOM);
const listMenuItemsAtom = atom(INITIAL_LIST_MENU_ITEMS_ATOM);
const currentMenuAtom = atom((get) => {
  const menuItems = get(menuItemsAtom);
  return (
    menuItems.find((menuItem) => menuItem.active) || INITIAL_CURRENT_MENU_ATOM
  );
});
const renderListMenuItemsAtom = atom((get) => {
  const [firstListMenuItem, ...restListMenuItems] = get(listMenuItemsAtom);
  const currentListMenuItem = restListMenuItems.find((_restListMenuItem) => {
    return _restListMenuItem.id === get(currentMenuAtom).id;
  });
  return [firstListMenuItem, currentListMenuItem];
});
const selectedListMenuAtom = atom((get) => {
  const listMenuItems = get(renderListMenuItemsAtom);
  return (
    listMenuItems.find((listMenuItem) => listMenuItem?.active) ??
    listMenuItems[0]
  );
});

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
  const currentMenu = useAtomValue(currentMenuAtom);
  const [listMenuItems, setListMenuItems] = useAtom(listMenuItemsAtom);
  const renderListMenuItems = useAtomValue(renderListMenuItemsAtom);
  const selectedListMenu = useAtomValue(selectedListMenuAtom);

  const replaceMenuItems = (newMenuItems: MenuItem[]) => {
    setMenuItems(newMenuItems);
  };

  const replaceListMenuItems = (newListMenuItems: ListMenuItem[]) => {
    setListMenuItems(newListMenuItems);
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

  const acvivateListMenu = (id: string) => {
    const newListMenuItems = listMenuItems.map((listMenuItem) => {
      if (listMenuItem.id === id) {
        return {
          ...listMenuItem,
          active: true,
        } as ListMenuItem;
      }
      return {
        ...listMenuItem,
        active: false,
      } as ListMenuItem;
    });
    replaceListMenuItems(newListMenuItems);
  };

  return {
    isLeftIcon,
    isRightIcon,
    showLeftIcon,
    hideLeftIcon,
    showRightIcon,
    hideRightIcon,
    menuItems,
    listMenuItems,
    currentMenu,
    renderListMenuItems,
    selectedListMenu,
    replaceMenuItems,
    activateMenu,
    acvivateListMenu,
  };
};
