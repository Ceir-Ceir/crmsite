import { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  fullWidth?: boolean;
}

const baseStyles = 'inline-flex items-center justify-center min-h-[48px] px-6 py-2 text-base md:text-lg font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

const variants = {
  primary: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-400 shadow-lg hover:shadow-xl hover:scale-105',
  secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-400',
  outline: 'border-2 border-red-600 text-red-600 hover:bg-red-50 focus:ring-red-400'
};

export default function Button({ 
  children, 
  variant = 'primary', 
  href, 
  fullWidth = false,
  className = '',
  ...props 
}: ButtonProps) {
  const buttonClasses = `${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
} 