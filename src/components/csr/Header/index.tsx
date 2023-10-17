'use client';

import { ChangeEvent, JSX, useState } from 'react';
import { Logo } from '@/components/csr/Logo';
import { cn } from '@/lib/utils';
import { useMenu } from '@/context/MenuContext';
import menu, { Menu } from '@/lib/menu';
import { useTheme } from 'next-themes';
import socialMedia from '@/lib/socialMedia';
import { AnimatePresence, motion } from 'framer-motion';
import useScrollBackground from '@/hooks/useScrollBackground';

export default function Header(): JSX.Element {
  const { isOpen, setIsOpen, isSearchOpen, setIsSearchOpen } = useMenu();
  const scroll = useScrollBackground();

  return (
    <AnimatePresence>
      <header className={cn('h-full w-full')}>
        {isSearchOpen ? (
          <SearchMenu />
        ) : (
          <nav
            className={cn(
              'fixed left-0 right-0 top-0 z-10 flex h-20 w-full items-center justify-between px-4 transition-colors duration-300 md:container md:mx-auto',
              isOpen ? 'bg-white dark:bg-gray-3' : 'bg-transparent',
              !isOpen && scroll && 'bg-white dark:bg-gray-3'
            )}
          >
            <Logo />
            <button
              className={cn(
                'relative inline-flex h-9 min-w-0 items-center rounded-xl border-0 px-3 py-2 font-[inherit] text-[100%] transition-colors',
                isOpen ? 'bg-base-2 dark:bg-dark-elevation-1' : 'bg-opacity-50'
              )}
            >
              <i className='material-symbols-outlined'>wallet</i>
              <span className='ml-2 truncate text-ellipsis text-start'>
                Login
              </span>
            </button>
            <div className='flex flex-row items-center justify-between gap-x-4'>
              <i
                className='material-symbols-outlined'
                onClick={() => {
                  setIsSearchOpen(true);
                  setIsOpen(false);
                  window.scrollTo(0, 0);
                }}
              >
                search
              </i>
              <i
                className='material-symbols-outlined justify-centerr flex items-center'
                onClick={() => {
                  setIsOpen(!isOpen);
                  setIsSearchOpen(false);
                }}
              >
                {isOpen ? 'close' : 'menu'}
              </i>
            </div>
          </nav>
        )}
        {isOpen && !isSearchOpen && <Menu />}
      </header>
    </AnimatePresence>
  );
}

function Menu(): JSX.Element {
  const [selectedMenu, setSelectedMenu] = useState<Menu | null>(null);
  const { theme, setTheme } = useTheme();
  return (
    <motion.aside
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.2, ease: 'easeIn' }}
      className={cn(
        'fixed bottom-0 left-0 right-0 top-20 z-20 flex flex-col items-center justify-center bg-elevation-1 dark:bg-dark-elevation-2'
      )}
    >
      <ul className='flex h-full w-full flex-col gap-y-4 overflow-y-auto'>
        {selectedMenu ? (
          <li className='flex flex-col items-center justify-start gap-x-4 font-semibold'>
            <header
              onClick={() => setSelectedMenu(null)}
              className='flex w-full items-center justify-start border-b border-b-border-2 px-2.5 py-6 dark:border-b-dark-border-2'
            >
              <i className='material-symbols-outlined' style={{ fontSize: 24 }}>
                chevron_left
              </i>
              {selectedMenu.name}
            </header>
            {selectedMenu.children &&
              selectedMenu.children.map((item, index) => (
                <div //Link
                  //href={item.href}
                  className='flex w-full items-center justify-start gap-x-4 px-2.5 py-6 font-semibold'
                  key={index}
                >
                  {item.name}
                </div>
              ))}
          </li>
        ) : (
          menu.map((item, index) => (
            <li
              className='flex items-center justify-start gap-x-4 px-2.5 py-4 font-semibold'
              key={index}
              onClick={item.children ? () => setSelectedMenu(item) : undefined}
            >
              {item.icon && (
                <i
                  className='material-symbols-outlined'
                  style={{ fontSize: 32 }}
                >
                  {item.icon}
                </i>
              )}
              {item.name}
              {item.children && (
                <div className='ml-auto flex items-center justify-center gap-x-0.5'>
                  {item.prefix && <span>{item.prefix}</span>}
                  <i className='material-symbols-outlined'>chevron_right</i>
                </div>
              )}
            </li>
          ))
        )}
        {!selectedMenu && (
          <>
            <li className='flex items-center justify-start gap-x-4 px-2.5 py-4 font-semibold'>
              <a
                href='https://pro.opensea.io'
                className='flex items-center justify-center gap-x-2 font-semibold'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  viewBox='0 0 24 20'
                  fill='none'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M18.4234 11.6694V11.0308C18.4234 10.9718 18.3664 10.929 18.3103 10.9453L15.2945 11.8171C15.2782 11.8212 15.2639 11.8304 15.2527 11.8426C14.9298 12.1994 14.6552 12.4388 14.5825 12.5023L14.5775 12.5067C14.3901 12.6656 14.1578 12.7521 13.9134 12.7521H12.8215V11.6389H13.6893C13.7117 11.6389 13.7331 11.6307 13.7494 11.6165L13.8614 11.5136C13.9093 11.4698 13.9664 11.4169 14.0346 11.3486C14.0403 11.3429 14.0462 11.3371 14.0521 11.3312C14.088 11.2954 14.1263 11.2572 14.1639 11.2152C14.2088 11.1714 14.2526 11.1225 14.2933 11.0746C14.3615 11.0013 14.4267 10.9249 14.495 10.8444C14.5439 10.7915 14.5887 10.7314 14.6325 10.6713C14.6814 10.6143 14.7292 10.5501 14.774 10.489C14.7907 10.4645 14.8084 10.4398 14.8265 10.4146C14.8438 10.3904 14.8615 10.3657 14.8789 10.3403C14.9115 10.2914 14.9441 10.2394 14.9716 10.1906C15.0572 10.0581 15.1295 9.91657 15.1906 9.775C15.2187 9.71436 15.2411 9.65051 15.2629 9.58843C15.2656 9.58065 15.2684 9.5729 15.2711 9.56519C15.2955 9.49287 15.3159 9.42463 15.3312 9.35231C15.3678 9.18222 15.376 9.01315 15.3597 8.84407C15.3556 8.79111 15.3515 8.73917 15.3393 8.69028V8.68213C15.3352 8.6475 15.3271 8.6088 15.3159 8.57315C15.2792 8.40815 15.2222 8.24315 15.1499 8.0812C15.1254 8.02111 15.0969 7.96 15.0694 7.90398C15.0042 7.78278 14.936 7.66157 14.8586 7.54444C14.843 7.51968 14.8258 7.49458 14.8087 7.46953C14.7955 7.45028 14.7824 7.43106 14.77 7.41204C14.721 7.33652 14.666 7.26371 14.6125 7.19305C14.6004 7.17698 14.5883 7.16103 14.5764 7.14519C14.5449 7.10372 14.5103 7.06226 14.4755 7.02053C14.4564 6.99767 14.4373 6.97473 14.4186 6.95167C14.3656 6.8875 14.3137 6.82639 14.2607 6.7663C14.0713 6.55241 13.8727 6.35889 13.6954 6.19389C13.6628 6.1613 13.6272 6.1287 13.5905 6.09713C13.453 5.97185 13.3277 5.86287 13.2228 5.77833C13.1912 5.75402 13.1629 5.73008 13.1365 5.70779C13.1187 5.69273 13.1018 5.67842 13.0853 5.66528C13.0533 5.64142 13.0256 5.62027 13.0023 5.60255C12.9878 5.59152 12.9751 5.58182 12.9641 5.57361C12.956 5.5675 12.9468 5.56343 12.9377 5.56037L12.8215 5.52778V4.5663C12.8215 4.40944 12.7584 4.26889 12.6576 4.16602C12.5567 4.06315 12.4162 4 12.2614 4C11.9517 4 11.7012 4.25361 11.7012 4.5663V5.21407L11.6431 5.19778L11.4852 5.15296L11.3416 5.11324C11.3412 5.11324 11.3408 5.11307 11.3403 5.11286C11.3396 5.11257 11.3388 5.11222 11.3376 5.11222H11.3345L10.2447 4.81685C10.1968 4.80361 10.1561 4.85556 10.1805 4.89935L10.3547 5.2212C10.3646 5.24596 10.3771 5.27072 10.39 5.29617C10.3983 5.31259 10.4068 5.3293 10.4148 5.34648C10.4433 5.40352 10.4718 5.46361 10.4993 5.5237C10.5238 5.57667 10.5482 5.62861 10.5767 5.68565C10.5886 5.71223 10.6007 5.73914 10.613 5.76643C10.6586 5.86772 10.7066 5.97424 10.7539 6.08898L10.754 6.08907C10.7947 6.1858 10.8354 6.28253 10.8711 6.38333C10.9689 6.63694 11.0615 6.90787 11.142 7.18593C11.162 7.24818 11.1781 7.30842 11.1943 7.36948C11.2012 7.39533 11.2081 7.42133 11.2153 7.44769L11.2265 7.49657C11.2591 7.62593 11.2877 7.75426 11.308 7.88361C11.3243 7.97222 11.3396 8.05676 11.3477 8.14231C11.36 8.23907 11.3722 8.33583 11.3763 8.43259C11.3844 8.5212 11.3885 8.61389 11.3885 8.7025C11.3885 8.92861 11.3681 9.14657 11.3202 9.35231C11.3173 9.36328 11.3143 9.37439 11.3113 9.38558C11.2979 9.43573 11.2839 9.48773 11.2673 9.53769C11.2522 9.59113 11.2327 9.64458 11.2125 9.70008C11.2053 9.71967 11.1981 9.73952 11.1909 9.75972C11.1896 9.76316 11.1883 9.7666 11.1871 9.77005C11.172 9.81055 11.1567 9.85177 11.1379 9.89213C11.0371 10.1345 10.9118 10.3759 10.7825 10.602C10.593 10.9371 10.4026 11.2315 10.2691 11.4209C10.261 11.4331 10.253 11.4448 10.2454 11.456C10.2358 11.4699 10.2267 11.4833 10.2182 11.4963C10.1764 11.5554 10.2192 11.6389 10.2915 11.6389H11.7012V12.7521H10.2752C9.89228 12.7521 9.53784 12.5352 9.36673 12.1879C9.27811 12.0137 9.24349 11.8222 9.26386 11.6348C9.26895 11.5788 9.22719 11.5258 9.17015 11.5258H6.28978C6.24089 11.5258 6.20117 11.5656 6.20117 11.6144V11.6735C6.20117 13.5109 7.68515 15 9.51645 15H14.6834C15.6519 15 16.2019 14.1174 16.7425 13.2499C16.8931 13.0081 17.0431 12.7674 17.2012 12.5474C17.4853 12.1522 18.1688 11.8385 18.3684 11.753C18.401 11.7387 18.4234 11.7061 18.4234 11.6694ZM6.97295 10.2144L6.93018 10.2816C6.89249 10.3396 6.93425 10.417 7.00555 10.417H9.65777C9.68731 10.417 9.71481 10.4028 9.7311 10.3783C9.76573 10.3254 9.79832 10.2704 9.82786 10.2144C10.057 9.82935 10.2607 9.41278 10.3351 9.10519C10.5093 8.35759 10.1375 7.15676 9.70666 6.1912C9.67814 6.12704 9.58953 6.12093 9.55184 6.18L6.97295 10.2144Z'
                    className='fill-gray-3 dark:fill-white'
                    fill='currentColor'
                  />
                  <path
                    d='M6.5 1L1.5 10L6.5 19H17.5L22.5 10L17.5 1H6.5Z'
                    className='stroke-gray-3 stroke-2 dark:stroke-white'
                  />
                </svg>
                <span className='truncate text-ellipsis text-start'>
                  OpenSea Pro
                </span>
              </a>
            </li>
            <li className='flex items-center justify-start gap-x-4 px-2.5 py-4 font-semibold'>
              <i className='material-symbols-outlined' style={{ fontSize: 32 }}>
                {theme === 'dark' ? 'dark_mode' : 'mode_night'}
              </i>
              Language
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                type='button'
                value='on'
                className={cn(
                  'ml-auto inline-flex h-6 w-12 shrink-0 cursor-pointer items-center rounded-full border-[6px] border-transparent bg-component-gray-3 transition-colors disabled:pointer-events-none disabled:opacity-40',
                  theme === 'dark' && 'bg-blue-3'
                )}
              >
                <span
                  className={cn(
                    'pointer-events-none block h-[14px] w-[14px] translate-x-0 rounded-full bg-white transition-transform',
                    theme === 'dark' && 'translate-x-[22px]'
                  )}
                />
              </button>
            </li>
          </>
        )}
      </ul>
      <footer className='mt-auto flex h-20 w-full flex-row items-center justify-center gap-x-4 border-t border-t-border-2 p-2 dark:border-t-dark-border-2'>
        {socialMedia.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className='flex items-center justify-center'
          >
            {item.icon}
          </a>
        ))}
      </footer>
    </motion.aside>
  );
}

function SearchMenu(): JSX.Element {
  const { setIsSearchOpen } = useMenu();

  const [search, setSearch] = useState<string>('');

  const data = [
    {
      name: 'CryptoPunks',
    },
    {
      name: 'Bored Ape Yacht Club',
    },
    {
      name: 'Meebits',
    },
    {
      name: 'Art Blocks',
    },
  ];

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.aside
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeIn' }}
      className='fixed left-0 right-0 top-0 z-10 flex h-full w-full flex-col'
    >
      <div className='flex h-20 w-full items-center justify-between border-b border-b-border-1 px-4 dark:border-b-dark-border-3'>
        <i
          className='material-symbols-outlined p-4'
          onClick={() => setIsSearchOpen(false)}
        >
          chevron_left
        </i>
        <input
          type='text'
          className='h-16 w-full bg-transparent text-lg font-semibold focus:outline-none'
          placeholder='Search'
          autoFocus
          value={search}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
        />
        <i
          className='material-symbols-outlined'
          style={{ fontSize: 20 }}
          onClick={() => setSearch('')}
        >
          close
        </i>
      </div>
      {search && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeIn' }}
          className='flex h-[calc(100dvh-5rem)] w-full flex-col items-start justify-center bg-white dark:bg-gray-3'
        >
          {filteredData.length === 0 ? (
            <div className='flex w-full items-center justify-start gap-x-4 px-2.5 py-4 font-semibold'>
              Bulunamadı
            </div>
          ) : (
            filteredData.map((item, index) => (
              <div
                key={index}
                className='flex w-full items-center justify-start gap-x-4 px-2.5 py-4 font-semibold'
              >
                {item.name}
              </div>
            ))
          )}
        </motion.div>
      )}
    </motion.aside>
  );
}
