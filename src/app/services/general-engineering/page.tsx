"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function GeneralEngineering() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <main className="min-h-screen">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="CRM Construction Logo"
              width={150}
              height={75}
              className="h-14 w-auto"
            />
          </Link>
          <nav className="hidden md:flex space-x-6 items-center">
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-gray-700 hover:text-red-600 transition flex items-center"
              >
                Services
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  <Link
                    href="/services/general-engineering"
                    className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                  >
                    General Engineering
                  </Link>
                  <Link
                    href="/services/demolition-excavation"
                    className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                  >
                    Demolition / Excavation
                  </Link>
                  <Link
                    href="/services/washouts-dumpster"
                    className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                  >
                    Washouts / Dumpster
                  </Link>
                  <Link
                    href="/services/trucking-deliveries"
                    className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                  >
                    Trucking / Deliveries
                  </Link>
                </div>
              )}
            </div>
            <Link href="/about" className="text-gray-700 hover:text-red-600 transition">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-red-600 transition">Contact</Link>
          </nav>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{ objectFit: 'cover' }}
          >
            <source src="/assets/Stormcrm.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="container mx-auto px-4 z-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">General Engineering</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Comprehensive Engineering Solutions</h2>
            <div className="prose prose-lg">
              <p className="mb-6">
                Our general engineering services cover a wide range of construction needs, from infrastructure development to utility installation.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Key Services</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <div>
                    <h4 className="font-bold">Storm Drain Installation</h4>
                    <p>Expert installation of storm drain systems to manage water flow and prevent flooding.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <div>
                    <h4 className="font-bold">Utility Installation</h4>
                    <p>Professional installation of sewer, gas, and water lines with precision and care.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <div>
                    <h4 className="font-bold">Certified Crews</h4>
                    <p>Our Veriforce certified teams ensure the highest standards of safety and quality.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-red-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <form action="https://formsubmit.co/crmco1@icloud.com" method="POST" className="max-w-md mx-auto space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70"
              required
            />
            <textarea
              name="message"
              placeholder="Project Details"
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-white text-red-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl"
            >
              Get a Quote
            </button>
          </form>
        </div>
      </section>
    </main>
  );
} 