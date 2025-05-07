"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <main className="min-h-screen">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Image
            src="/assets/logo.png"
            alt="CRM Construction Logo"
            width={150}
            height={75}
            className="h-14 w-auto"
          />
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
      <section className="relative h-[80vh] flex items-center justify-center text-white">
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
            <source src="/assets/vidcrm.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="container mx-auto px-4 z-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Heavy-Duty Construction.<br />
            Reliable Service.<br />
            Since 1997.
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
            <Link
              href="/contact"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get a Quote
            </Link>
            <a
              href="tel:+16191234567"
              className="text-xl font-bold hover:text-red-400 transition"
            >
              (619) 123-4567
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* General Engineering */}
            <Link href="/services/general-engineering" className="block">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">General Engineering</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Storm drain installation
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Sewer, gas, and water lines
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Veriforce certified crews
                  </li>
                </ul>
              </div>
            </Link>

            {/* Demolition / Excavation */}
            <Link href="/services/demolition-excavation" className="block">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Demolition / Excavation</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Site preparation and grading
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Trenching and compaction
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Utility trenching
                  </li>
                </ul>
              </div>
            </Link>

            {/* Washouts / Dumpster Rental */}
            <Link href="/services/washouts-dumpster" className="block">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Washouts / Dumpster Rental</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    16'x8'x2' box (holds 7 yards)
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Weekly rentals
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Prompt and reliable delivery
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Custom project pricing
                  </li>
                </ul>
              </div>
            </Link>

            {/* Trucking / Material Deliveries */}
            <Link href="/services/trucking-deliveries" className="block">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Trucking / Material Deliveries</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Super 10 dump trucks available
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Hauling: demo, dirt, asphalt, aggregate
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Equipment transport
                  </li>
                </ul>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <section className="bg-red-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-xl font-bold mb-4 md:mb-0">
              Call us: (619) 123-4567
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-sm">Serving all of San Diego County</p>
              <Link
                href="/services/trucking-deliveries"
                className="bg-white text-red-600 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300 shadow-md hover:shadow-lg"
              >
                Request Pickup
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Location</h3>
              <p>123 Construction Way</p>
              <p>San Diego, CA 92101</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Certifications</h3>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white rounded-lg px-4 py-2">
                  <span className="text-red-600 font-bold">Veriforce</span>
                </div>
                <div className="bg-white rounded-lg px-4 py-2">
                  <span className="text-red-600 font-bold">ISNetworld</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-400">
                Providing reliable, high-quality construction services to San Diego County since 1997. We're committed to excellence in every project.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; {new Date().getFullYear()} CRM Construction. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
