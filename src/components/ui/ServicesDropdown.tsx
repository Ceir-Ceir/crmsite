import { useState } from 'react';
import AnimatedLink from './AnimatedLink';

interface ServicesDropdownProps {
  isScrolled: boolean;
}

export default function ServicesDropdown({ isScrolled }: ServicesDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 focus:outline-none"
      >
        <AnimatedLink 
          href="/services/general-engineering" 
          isScrolled={isScrolled}
          className={`${isScrolled ? 'text-gray-800 hover:text-red-600' : 'text-white hover:text-red-200'}`}
        >
          Services
        </AnimatedLink>
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
          <AnimatedLink 
            href="/services/general-engineering" 
            className="block px-4 py-2 text-gray-800 hover:text-red-600 group"
            isScrolled={true}
          >
            General Engineering
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full" />
          </AnimatedLink>
          <AnimatedLink 
            href="/services/demolition-excavation" 
            className="block px-4 py-2 text-gray-800 hover:text-red-600 group"
            isScrolled={true}
          >
            Demolition / Excavation
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full" />
          </AnimatedLink>
          <AnimatedLink 
            href="/services/washouts-dumpster" 
            className="block px-4 py-2 text-gray-800 hover:text-red-600 group"
            isScrolled={true}
          >
            Washouts / Dumpster
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full" />
          </AnimatedLink>
          <AnimatedLink 
            href="/services/trucking-deliveries" 
            className="block px-4 py-2 text-gray-800 hover:text-red-600 group"
            isScrolled={true}
          >
            Trucking / Deliveries
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full" />
          </AnimatedLink>
        </div>
      )}
    </div>
  );
} 