import { JSX, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export default function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div
      className={cn(
        'container mx-auto h-[5000px] w-full p-4 pt-20 md:p-8 lg:p-12 xl:p-16',
        className
      )}
    >
      {children}
    </div>
  );
}
