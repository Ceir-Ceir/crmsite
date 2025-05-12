import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
}

export default function Card({ 
  children, 
  className = '',
  padding = 'md'
}: CardProps) {
  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <div className={`
      bg-white 
      rounded-xl 
      ${paddingStyles[padding]} 
      shadow-md 
      hover:shadow-xl 
      transition-all 
      duration-300 
      hover:-translate-y-1 
      transform 
      text-base 
      md:text-lg 
      leading-relaxed
      ${className}
    `}>
      {children}
    </div>
  );
} 