import Link from 'next/link';

import { cn } from '@/lib/utils';

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Navigation Link Component
 *
 * hover:bg-muted 효과 추가한 커스텀 Link 컴포넌트입니다.\
 *
 * @param href - 이동할 경로
 * @param className - 추가적인 클래스 이름
 */
const NavigationLink = ({ href, children, className }: NavigationLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        'ml-auto px-4 py-2 text-sm',
        'transition-colors duration-300 ease-in-out hover:bg-muted',
        className
      )}
    >
      {children}
    </Link>
  );
};

export default NavigationLink;
