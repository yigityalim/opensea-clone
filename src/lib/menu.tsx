export type Menu = {
  href?: string;
  name: string;
  icon?: string;
  prefix?: string;
  children?: Menu[];
};

export default [
  {
    href: '/drops',
    name: 'Drops',
    icon: 'calendar_month',
    children: [
      {
        href: '/drops/featured',
        name: 'Featured',
      },
      {
        href: '/drops/learn-more',
        name: 'Learn More',
      },
    ],
  },
  {
    href: '/stats',
    name: 'Stats',
    icon: 'bar_chart',
    children: [
      {
        href: '/stats/rankings',
        name: 'Rankings',
      },
      {
        href: '/stats/activity',
        name: 'Activity',
      },
    ],
  },
  {
    href: '/resources',
    name: 'Resources',
    icon: 'library_books',
    children: [{}],
  },
  {
    href: '/create',
    name: 'Create',
    icon: 'edit',
  },
  {
    name: 'Language',
    icon: 'language',
    prefix: 'en',
    children: [],
  },
] as Menu[];

/*

  {
    href: '/opensea-pro',
    name: 'OpenSea Pro',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='20'
        viewBox='0 0 24 20'
        className='fill-black dark:fill-white'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M18.4234 11.6694V11.0308C18.4234 10.9718 18.3664 10.929 18.3103 10.9453L15.2945 11.8171C15.2782 11.8212 15.2639 11.8304 15.2527 11.8426C14.9298 12.1994 14.6552 12.4388 14.5825 12.5023L14.5775 12.5067C14.3901 12.6656 14.1578 12.7521 13.9134 12.7521H12.8215V11.6389H13.6893C13.7117 11.6389 13.7331 11.6307 13.7494 11.6165L13.8614 11.5136C13.9093 11.4698 13.9664 11.4169 14.0346 11.3486C14.0403 11.3429 14.0462 11.3371 14.0521 11.3312C14.088 11.2954 14.1263 11.2572 14.1639 11.2152C14.2088 11.1714 14.2526 11.1225 14.2933 11.0746C14.3615 11.0013 14.4267 10.9249 14.495 10.8444C14.5439 10.7915 14.5887 10.7314 14.6325 10.6713C14.6814 10.6143 14.7292 10.5501 14.774 10.489C14.7907 10.4645 14.8084 10.4398 14.8265 10.4146C14.8438 10.3904 14.8615 10.3657 14.8789 10.3403C14.9115 10.2914 14.9441 10.2394 14.9716 10.1906C15.0572 10.0581 15.1295 9.91657 15.1906 9.775C15.2187 9.71436 15.2411 9.65051 15.2629 9.58843C15.2656 9.58065 15.2684 9.5729 15.2711 9.56519C15.2955 9.49287 15.3159 9.42463 15.3312 9.35231C15.3678 9.18222 15.376 9.01315 15.3597 8.84407C15.3556 8.79111 15.3515 8.73917 15.3393 8.69028V8.68213C15.3352 8.6475 15.3271 8.6088 15.3159 8.57315C15.2792 8.40815 15.2222 8.24315 15.1499 8.0812C15.1254 8.02111 15.0969 7.96 15.0694 7.90398C15.0042 7.78278 14.936 7.66157 14.8586 7.54444C14.843 7.51968 14.8258 7.49458 14.8087 7.46953C14.7955 7.45028 14.7824 7.43106 14.77 7.41204C14.721 7.33652 14.666 7.26371 14.6125 7.19305C14.6004 7.17698 14.5883 7.16103 14.5764 7.14519C14.5449 7.10372 14.5103 7.06226 14.4755 7.02053C14.4564 6.99767 14.4373 6.97473 14.4186 6.95167C14.3656 6.8875 14.3137 6.82639 14.2607 6.7663C14.0713 6.55241 13.8727 6.35889 13.6954 6.19389C13.6628 6.1613 13.6272 6.1287 13.5905 6.09713C13.453 5.97185 13.3277 5.86287 13.2228 5.77833C13.1912 5.75402 13.1629 5.73008 13.1365 5.70779C13.1187 5.69273 13.1018 5.67842 13.0853 5.66528C13.0533 5.64142 13.0256 5.62027 13.0023 5.60255C12.9878 5.59152 12.9751 5.58182 12.9641 5.57361C12.956 5.5675 12.9468 5.56343 12.9377 5.56037L12.8215 5.52778V4.5663C12.8215 4.40944 12.7584 4.26889 12.6576 4.16602C12.5567 4.06315 12.4162 4 12.2614 4C11.9517 4 11.7012 4.25361 11.7012 4.5663V5.21407L11.6431 5.19778L11.4852 5.15296L11.3416 5.11324C11.3412 5.11324 11.3408 5.11307 11.3403 5.11286C11.3396 5.11257 11.3388 5.11222 11.3376 5.11222H11.3345L10.2447 4.81685C10.1968 4.80361 10.1561 4.85556 10.1805 4.89935L10.3547 5.2212C10.3646 5.24596 10.3771 5.27072 10.39 5.29617C10.3983 5.31259 10.4068 5.3293 10.4148 5.34648C10.4433 5.40352 10.4718 5.46361 10.4993 5.5237C10.5238 5.57667 10.5482 5.62861 10.5767 5.68565C10.5886 5.71223 10.6007 5.73914 10.613 5.76643C10.6586 5.86772 10.7066 5.97424 10.7539 6.08898L10.754 6.08907C10.7947 6.1858 10.8354 6.28253 10.8711 6.38333C10.9689 6.63694 11.0615 6.90787 11.142 7.18593C11.162 7.24818 11.1781 7.30842 11.1943 7.36948C11.2012 7.39533 11.2081 7.42133 11.2153 7.44769L11.2265 7.49657C11.2591 7.62593 11.2877 7.75426 11.308 7.88361C11.3243 7.97222 11.3396 8.05676 11.3477 8.14231C11.36 8.23907 11.3722 8.33583 11.3763 8.43259C11.3844 8.5212 11.3885 8.61389 11.3885 8.7025C11.3885 8.92861 11.3681 9.14657 11.3202 9.35231C11.3173 9.36328 11.3143 9.37439 11.3113 9.38558C11.2979 9.43573 11.2839 9.48773 11.2673 9.53769C11.2522 9.59113 11.2327 9.64458 11.2125 9.70008C11.2053 9.71967 11.1981 9.73952 11.1909 9.75972C11.1896 9.76316 11.1883 9.7666 11.1871 9.77005C11.172 9.81055 11.1567 9.85177 11.1379 9.89213C11.0371 10.1345 10.9118 10.3759 10.7825 10.602C10.593 10.9371 10.4026 11.2315 10.2691 11.4209C10.261 11.4331 10.253 11.4448 10.2454 11.456C10.2358 11.4699 10.2267 11.4833 10.2182 11.4963C10.1764 11.5554 10.2192 11.6389 10.2915 11.6389H11.7012V12.7521H10.2752C9.89228 12.7521 9.53784 12.5352 9.36673 12.1879C9.27811 12.0137 9.24349 11.8222 9.26386 11.6348C9.26895 11.5788 9.22719 11.5258 9.17015 11.5258H6.28978C6.24089 11.5258 6.20117 11.5656 6.20117 11.6144V11.6735C6.20117 13.5109 7.68515 15 9.51645 15H14.6834C15.6519 15 16.2019 14.1174 16.7425 13.2499C16.8931 13.0081 17.0431 12.7674 17.2012 12.5474C17.4853 12.1522 18.1688 11.8385 18.3684 11.753C18.401 11.7387 18.4234 11.7061 18.4234 11.6694ZM6.97295 10.2144L6.93018 10.2816C6.89249 10.3396 6.93425 10.417 7.00555 10.417H9.65777C9.68731 10.417 9.71481 10.4028 9.7311 10.3783C9.76573 10.3254 9.79832 10.2704 9.82786 10.2144C10.057 9.82935 10.2607 9.41278 10.3351 9.10519C10.5093 8.35759 10.1375 7.15676 9.70666 6.1912C9.67814 6.12704 9.58953 6.12093 9.55184 6.18L6.97295 10.2144Z'
          className='fill-black dark:fill-white'
        />
        <path
          d='M6.5 1L1.5 10L6.5 19H17.5L22.5 10L17.5 1H6.5Z'
          className='stroke-white stroke-2 dark:stroke-black'
        />
      </svg>
    ),
  },
  {
    name: 'Language',
    icon: 'language',
    children: [
      {
        name: 'English',
        isChecked: true,
      },
      {
        name: 'Español',
        isChecked: false,
      },
    ],
  },
  {
    name: 'Night Mode',
    icon: '',
  }
 */