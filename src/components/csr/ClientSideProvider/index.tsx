'use client';

import React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import MenuProvider from '@/context/MenuContext';

export default function ClientSideProvider({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <NextThemesProvider attribute='class' defaultTheme='system' enableSystem>
      <MenuProvider>{children}</MenuProvider>
    </NextThemesProvider>
  );
}
