"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import AnimatedLink from "@/components/ui/AnimatedLink";
import ServicesDropdown from '@/components/ui/ServicesDropdown';

const services = [
  { id: 'washouts-dumpster', name: 'Washouts & Dumpster Rental' },
  { id: 'trucking-deliveries', name: 'Trucking & Deliveries' },
  { id: 'general-engineering', name: 'General Engineering' },
  { id: 'demolition-excavation', name: 'Demolition & Excavation' }
];

export default function ContactPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    city: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <AnimatedLink href="/" className="text-2xl font-bold text-red-600">
              ATSITE
            </AnimatedLink>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-400 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <ServicesDropdown isScrolled={isScrolled} />
              <AnimatedLink href="/about" isScrolled={isScrolled}>About</AnimatedLink>
              <Button href="/contact">Get a Quote</Button>
            </nav>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 bg-white z-40 pt-20"
          >
            <nav className="container mx-auto px-4">
              <div className="flex flex-col space-y-4">
                <div className="relative">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      const dropdown = document.getElementById('mobile-services-dropdown');
                      if (dropdown) {
                        dropdown.classList.toggle('hidden');
                      }
                    }}
                    className="w-full text-left px-4 py-2 text-gray-800 hover:text-red-600 transition-colors duration-200 flex items-center justify-between"
                  >
                    <span>Services</span>
                    <svg 
                      className="w-4 h-4 transform transition-transform duration-200" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div id="mobile-services-dropdown" className="hidden pl-4 space-y-2 mt-2">
                    <AnimatedLink 
                      href="/services/washouts-dumpster" 
                      className="block px-4 py-2 text-gray-800 hover:text-red-600 hover:bg-gray-50 transition-colors duration-200 rounded-lg"
                    >
                      Washouts & Dumpster
                    </AnimatedLink>
                    <AnimatedLink 
                      href="/services/trucking-deliveries" 
                      className="block px-4 py-2 text-gray-800 hover:text-red-600 hover:bg-gray-50 transition-colors duration-200 rounded-lg"
                    >
                      Trucking & Deliveries
                    </AnimatedLink>
                    <AnimatedLink 
                      href="/services/general-engineering" 
                      className="block px-4 py-2 text-gray-800 hover:text-red-600 hover:bg-gray-50 transition-colors duration-200 rounded-lg"
                    >
                      General Engineering
                    </AnimatedLink>
                    <AnimatedLink 
                      href="/services/demolition-excavation" 
                      className="block px-4 py-2 text-gray-800 hover:text-red-600 hover:bg-gray-50 transition-colors duration-200 rounded-lg"
                    >
                      Demolition & Excavation
                    </AnimatedLink>
                  </div>
                </div>
                <AnimatedLink 
                  href="/about" 
                  className="px-4 py-2 text-gray-800 hover:text-red-600 transition-colors duration-200 rounded-lg"
                >
                  About
                </AnimatedLink>
                <Button href="/contact" fullWidth>Get a Quote</Button>
              </div>
            </nav>
          </motion.div>
        )}
      </header>

      {/* Contact Form Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <Card padding="lg">
              <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Contact Us
              </h1>
              <p className="text-gray-600 text-center mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-colors"
                    placeholder="(555) 555-5555"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Type
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-colors"
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map(service => (
                      <option key={service.id} value={service.id}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-colors"
                    placeholder="Your city"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-colors"
                    placeholder="Tell us about your project"
                    required
                  />
                </div>
                <Button type="submit" fullWidth>
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
} 