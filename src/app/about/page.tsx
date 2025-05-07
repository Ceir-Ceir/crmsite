"use client";

import Link from "next/link";
import { useState } from "react";

export default function About() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <main className="min-h-screen">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/">
            <span className="text-2xl font-bold text-red-600">CRM Construction</span>
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
      <section className="relative py-20 bg-gradient-to-b from-red-600 to-red-700 text-white">
        <div className="absolute inset-0 bg-[url('/assets/pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Building Excellence in Construction</h1>
            <p className="text-xl text-white/90">
              Your trusted partner in construction services across San Diego County
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Our Story */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    At CRM Construction, we've built our reputation on delivering exceptional construction services throughout San Diego County. Our journey is defined by our commitment to quality, safety, and customer satisfaction.
                  </p>
                  <p>
                    With years of experience in the industry, we've grown to become a trusted name in construction, serving both residential and commercial clients with the same dedication to excellence.
                  </p>
                </div>
              </div>

              {/* Our Values */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Values</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">Safety First</h3>
                      <p className="text-gray-600">Our Veriforce certified crews ensure the highest standards of safety on every project.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">Efficiency</h3>
                      <p className="text-gray-600">We pride ourselves on timely project completion and rapid response to client needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">Quality</h3>
                      <p className="text-gray-600">Every project is completed with meticulous attention to detail and superior craftsmanship.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Overview */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Our Services</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">General Engineering</h3>
                  <p className="text-gray-600">Expert installation of storm drains, utilities, and comprehensive engineering solutions for your construction needs.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Demolition & Excavation</h3>
                  <p className="text-gray-600">Professional site preparation, trenching, and utility installation services with precision and care.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Washouts & Dumpster</h3>
                  <p className="text-gray-600">Convenient waste management solutions with flexible scheduling and reliable service.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Trucking & Deliveries</h3>
                  <p className="text-gray-600">Efficient transportation and delivery services to keep your project moving forward.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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