"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function TruckingDeliveries() {
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
      <section className="relative h-[70vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-[center_80%]"
          >
            <source src="/assets/Truckinghero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container mx-auto px-4 z-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Trucking & Material Deliveries</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Fleet Overview */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-red-600">Our Fleet</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Super 10 Dump Trucks</h3>
                    <p className="text-gray-600">Our modern fleet of Super 10 dump trucks is maintained to the highest standards, ensuring reliable and efficient material transport for your projects.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Equipment Transport</h3>
                    <p className="text-gray-600">Specialized equipment transport services with proper securing and handling procedures to ensure safe delivery of your valuable machinery.</p>
                  </div>
                </div>
              </div>

              {/* Services Overview */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-red-600">Material Services</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Comprehensive Hauling</h3>
                    <p className="text-gray-600">Expert handling of various materials including demolition debris, dirt, asphalt, and aggregate with proper loading and transport protocols.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Project Coordination</h3>
                    <p className="text-gray-600">Seamless coordination with your project timeline to ensure materials arrive exactly when needed, keeping your construction schedule on track.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Benefits */}
            <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-8 text-center text-red-600">Why Choose Our Trucking Services?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
                  <p className="text-gray-600">Consistent on-time delivery to keep your project moving forward</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Safety First</h3>
                  <p className="text-gray-600">Rigorous safety protocols and well-maintained equipment</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Efficient Service</h3>
                  <p className="text-gray-600">Optimized routes and experienced drivers for maximum efficiency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Schedule Your Material Delivery?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contact us today to discuss your project requirements and get a detailed quote for our trucking services.</p>
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