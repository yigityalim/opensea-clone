'use client';

import {
  JSX,
  Context,
  createContext,
  ReactNode,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useCallback,
} from 'react';

type MenuContextType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;

  isSearchOpen: boolean;
  setIsSearchOpen: Dispatch<SetStateAction<boolean>>;
};

const MenuContext: Context<MenuContextType> = createContext<MenuContextType>({
  isOpen: false,
  setIsOpen: () => {},
  isSearchOpen: false,
  setIsSearchOpen: () => {},
});

export default function MenuProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const body: HTMLElement = document.body;
  const scrollBarWidth: number = body.offsetWidth - body.scrollWidth;

  const toggleOverflow = useCallback(() => {
    if (isOpen || isSearchOpen) {
      body.style.overflow = 'hidden';
      body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      body.style.overflow = 'auto';
      body.style.paddingRight = '0px';
    }
  }, [body.style, isOpen, isSearchOpen, scrollBarWidth]);

  useEffect(() => {
    toggleOverflow();
  }, [isOpen, toggleOverflow]);

  const context: MenuContextType = {
    isOpen,
    setIsOpen,
    isSearchOpen,
    setIsSearchOpen,
  } as MenuContextType;

  return (
    <MenuContext.Provider value={context}>{children}</MenuContext.Provider>
  );
}

export function useMenu(): MenuContextType {
  const context: MenuContextType = useContext<MenuContextType>(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context as MenuContextType;
}
