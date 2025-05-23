"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import AnimatedLink from "@/components/ui/AnimatedLink";
import ServicesDropdown from '@/components/ui/ServicesDropdown';

export default function WashoutsDumpsterPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <AnimatedLink href="/" className="text-2xl font-bold text-red-600">
              <Image
                src="/assets/logo.png"
                alt="ATSITE Logo"
                width={150}
                height={75}
                className="h-14 w-auto"
              />
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
              <Button href="#contact-form">Get a Quote</Button>
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
                <div className="relative group">
                  <button className="w-full text-left px-4 py-2 text-black hover:text-red-600 transition-colors duration-200">
                    Services
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block z-50">
                    <AnimatedLink href="/services/washouts-dumpster" className="block px-4 py-2 text-black hover:text-red-600 hover:bg-gray-50 transition-colors duration-200">Washouts & Dumpster</AnimatedLink>
                    <AnimatedLink href="/services/trucking-deliveries" className="block px-4 py-2 text-black hover:text-red-600 hover:bg-gray-50 transition-colors duration-200">Trucking & Deliveries</AnimatedLink>
                    <AnimatedLink href="/services/general-engineering" className="block px-4 py-2 text-black hover:text-red-600 hover:bg-gray-50 transition-colors duration-200">General Engineering</AnimatedLink>
                    <AnimatedLink href="/services/demolition-excavation" className="block px-4 py-2 text-black hover:text-red-600 hover:bg-gray-50 transition-colors duration-200">Demolition & Excavation</AnimatedLink>
                  </div>
                </div>
                <AnimatedLink href="/about" className="px-4 py-2 text-black hover:text-red-600 transition-colors duration-200">About</AnimatedLink>
                <AnimatedLink href="/contact" className="px-4 py-2 text-black hover:text-red-600 transition-colors duration-200">Contact</AnimatedLink>
                <Button href="/contact" fullWidth>Get a Quote</Button>
              </div>
            </nav>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/washout-dump.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="container mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Washouts & Dumpster Rental
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button href="#contact-form" variant="primary">
                Get a Quote
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Professional Waste Management Solutions
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We provide comprehensive concrete washout and dumpster rental services to keep your construction site clean and compliant with environmental regulations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card padding="lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Concrete Washouts</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our concrete washout services help prevent environmental contamination by properly disposing of concrete waste and wash water.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-600">Compliant with environmental regulations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-600">Proper containment and disposal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-600">Regular maintenance and cleaning</span>
                  </li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card padding="lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dumpster Rental</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Choose from our range of dumpster sizes to meet your project's waste management needs.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">10 Yard Dumpster</span>
                    <span className="text-gray-900 font-semibold">Contact for Pricing</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">15 Yard Dumpster</span>
                    <span className="text-gray-900 font-semibold">Contact for Pricing</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">20 Yard Dumpster</span>
                    <span className="text-gray-900 font-semibold">Contact for Pricing</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact-form" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card padding="lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Request a Quote
              </h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-colors"
                    placeholder="(555) 555-5555"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-colors"
                    placeholder="Tell us about your project"
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