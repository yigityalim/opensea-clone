import { useMemo, useState } from 'react';
import { useEventListener } from 'usehooks-ts';

export default function useScrollBackground(threshold: number = 20): boolean {
  const [scroll, setScroll] = useState<boolean>(false);

  const handleScroll = useMemo(() => {
    return () => {
      if (window.scrollY > threshold) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
  }, [threshold]);

  useEventListener('scroll', handleScroll);

  return scroll;
}
