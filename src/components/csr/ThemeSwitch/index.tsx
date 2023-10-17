'use client';

import React from 'react';
import { useTheme } from 'next-themes';

export default function ThemeSwitch(): React.JSX.Element {
  const { theme, setTheme } = useTheme();
  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      className='rounded-md border border-gray-300'
    >
      <option value='system'>System</option>
      <option value='light'>Light</option>
      <option value='dark'>Dark</option>
    </select>
  );
}
