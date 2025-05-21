import Link from 'next/link';
import { ReactNode } from 'react';

interface AnimatedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  isNavLink?: boolean;
  isScrolled?: boolean;
  onClick?: () => void;
}

export default function AnimatedLink({ 
  href, 
  children, 
  className = '', 
  isNavLink = false,
  isScrolled = false,
  onClick
}: AnimatedLinkProps) {
  const baseStyles = "relative inline-block text-base md:text-lg transition-colors duration-300";
  const navLinkStyles = isNavLink ? "py-2 px-4" : "";
  const textColorStyles = isScrolled ? "text-gray-800 hover:text-red-600" : "text-white hover:text-red-200";
  
  // Override text color for mobile menu items
  const mobileMenuStyles = className.includes("text-black") ? "text-black hover:text-red-600" : textColorStyles;
  
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className={`${baseStyles} ${navLinkStyles} ${mobileMenuStyles} ${className}`}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
    </Link>
  );
} 