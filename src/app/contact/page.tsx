"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation'; // REQUIRED: Import useRouter
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

// Define the type for your form data, including the optional _subject field
interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  city: string;
  message: string;
  _honey: string; // Honeypot field
  _subject?: string; // Optional field for email subject
}

export default function ContactPage() {
  const router = useRouter(); // REQUIRED: Initialize useRouter

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({ // Use the FormData interface
    name: '',
    email: '',
    phone: '',
    service: '',
    city: '',
    message: '',
    _honey: '', // Initialize honeypot field as empty
  });

  // Keep these useEffects for header and mobile menu functionality
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // Unified handleChange for all form inputs including honeypot
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // REQUIRED: Add handleSubmit function
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission to FormSubmit's domain

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.city || !formData.message) {
        alert('Please fill in all required fields.');
        return;
    }

    try {
      const dataToSend: FormData = { ...formData }; // Create a copy of formData
      dataToSend._subject = "New CRM Construction Quote Request"; // Set the email subject

      const response = await fetch('https://formsubmit.co/ajax/crmco1@icloud.com', { // Use the AJAX endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json', // Crucial for AJAX response
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json(); // Parse FormSubmit's JSON response

      if (response.ok && result.success === 'true') {
        // If FormSubmit confirms success, then redirect on YOUR domain
        router.push('/contact/success');
      } else {
        // Handle cases where FormSubmit indicates an error
        console.error('Form submission failed (FormSubmit response):', result);
        alert(`There was an error sending your message: ${result.message || 'Please try again.'}`);
      }
    } catch (error) {
      // Handle network errors or other unexpected issues
      console.error('Network or unexpected error during form submission:', error);
      alert('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Header component remains the same */}
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
                <span className={`w-full h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-full h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
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
                <AnimatedLink href="/services" className="px-4 py-2 text-black hover:text-red-600 transition-colors duration-200">Services</AnimatedLink>
                <AnimatedLink href="/about" className="px-4 py-2 text-black hover:text-red-600 transition-colors duration-200">About</AnimatedLink>
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
              {/* IMPORTANT: Removed action and method attributes */}
              <form onSubmit={handleSubmit} className="space-y-6"> 
                {/* Honeypot field for CAPTCHA bypass - REQUIRED */}
                <input
                  type="text"
                  name="_honey"
                  style={{ display: 'none' }} // Keep this hidden from users
                  onChange={handleChange}
                  value={formData._honey}
                />

                {/* Removed _next and _subject hidden inputs as they are for direct form submissions */}
                
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
                      <option key={service.id} value={service.name}>
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
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
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