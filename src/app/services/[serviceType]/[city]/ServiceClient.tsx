"use client";
export async function generateStaticParams() {
  const services = ["demolition", "excavation", "dumpster-rentals", "concrete-washouts"];
  const cities = [
    "san-diego",
    "chula-vista",
    "el-cajon",
    "escondido",
    "la-mesa",
    "national-city",
    "oceanside",
    "carlsbad",
    "poway",
    "santee"
  ];

  const paths = [];

  for (const service of services) {
    for (const city of cities) {
      paths.push({ serviceType: service, city });
    }
  }

  return paths;
}
export const dynamicParams = false;


import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Head from "next/head";

// City data
const cityData = {
  "san-diego": "San Diego",
  "chula-vista": "Chula Vista",
  "el-cajon": "El Cajon",
  "escondido": "Escondido",
  "la-mesa": "La Mesa",
  "national-city": "National City",
  "oceanside": "Oceanside",
  "carlsbad": "Carlsbad",
  "poway": "Poway",
  "santee": "Santee"
};

// Add type definitions
interface DumpsterImage {
  size: string;
  image: string;
  dimensions: string;
  capacity: string;
  price: string;
  bestFor: string[];
}

interface Testimonial {
  text: string;
  author: string;
  location: string;
  rating?: number;
}

interface FAQ {
  question: string;
  answer: string;
}

interface WhyChooseUsItem {
  title: string;
  description: string;
  icon: string;
}

interface BaseService {
  title: string;
  description: string;
  heroImage: string;
  metadata: ServiceMetadata;
  features: string[];
  whyChooseUs: WhyChooseUsItem[];
  testimonials: Testimonial[];
  faq: FAQ[];
}

interface StandardService extends BaseService {}

interface DumpsterService extends BaseService {
  dumpsterImages: DumpsterImage[];
}

type ServiceData = {
  [key: string]: StandardService | DumpsterService;
};

// Add metadata type
interface ServiceMetadata {
  title: string;
  description: string;
}

// Update service data with metadata
const serviceData: ServiceData = {
  "demolition": {
    title: "Demolition Services",
    description: "Professional demolition services",
    heroImage: "/assets/bckyrdemo.png",
    metadata: {
      title: "Best Demolition Services in {location} | CRM Construction",
      description: "Fast, reliable demolition services in {location} with free quotes and transparent pricing. Call CRM Construction today."
    },
    features: [
      "Same-day service available",
      "Licensed & insured team",
      "No hidden fees",
      "Free estimates",
      "24/7 customer support",
      "Environmentally responsible disposal"
    ],
    whyChooseUs: [
      {
        title: "Fast Service",
        description: "Get your demolition project started within hours, not days",
        icon: "clock"
      },
      {
        title: "Transparent Pricing",
        description: "No hidden fees or surprise charges",
        icon: "dollar"
      },
      {
        title: "Local Team",
        description: "We're your neighbors, serving your community",
        icon: "location"
      },
      {
        title: "Expert Support",
        description: "Professional guidance for your project",
        icon: "support"
      }
    ],
    testimonials: [
      {
        text: "The demolition work was completed quickly and professionally. Great service!",
        author: "John D.",
        location: "San Diego",
        rating: 5
      },
      {
        text: "Excellent team and competitive pricing. Would definitely use again.",
        author: "Maria S.",
        location: "Chula Vista",
        rating: 5
      }
    ],
    faq: [
      {
        question: "How fast can I get service?",
        answer: "We offer same-day service for projects scheduled before 2 PM."
      },
      {
        question: "What's included in the price?",
        answer: "The price includes labor, equipment, disposal fees, and cleanup. No hidden charges."
      },
      {
        question: "Do I need a permit?",
        answer: "We handle all necessary permits and paperwork for your demolition project."
      }
    ]
  },
  "excavation": {
    title: "Excavation Services",
    description: "Expert excavation services",
    heroImage: "/assets/washout.png",
    metadata: {
      title: "Best Excavation Services in {location} | CRM Construction",
      description: "Fast, reliable excavation services in {location} with free quotes and transparent pricing. Call CRM Construction today."
    },
    features: [
      "Same-day service available",
      "Licensed & insured team",
      "No hidden fees",
      "Free estimates",
      "24/7 customer support",
      "Precise grading and leveling"
    ],
    whyChooseUs: [
      {
        title: "Fast Service",
        description: "Get your excavation project started within hours, not days",
        icon: "clock"
      },
      {
        title: "Transparent Pricing",
        description: "No hidden fees or surprise charges",
        icon: "dollar"
      },
      {
        title: "Local Team",
        description: "We're your neighbors, serving your community",
        icon: "location"
      },
      {
        title: "Expert Support",
        description: "Professional guidance for your project",
        icon: "support"
      }
    ],
    testimonials: [
      {
        text: "The excavation work was completed ahead of schedule. Great service!",
        author: "Robert K.",
        location: "San Diego",
        rating: 5
      },
      {
        text: "Professional team and excellent results. Highly recommend!",
        author: "Lisa M.",
        location: "Oceanside",
        rating: 5
      }
    ],
    faq: [
      {
        question: "How fast can I get service?",
        answer: "We offer same-day service for projects scheduled before 2 PM."
      },
      {
        question: "What's included in the price?",
        answer: "The price includes labor, equipment, and cleanup. No hidden charges."
      },
      {
        question: "Do you handle utility marking?",
        answer: "Yes, we coordinate with utility companies to mark all underground lines before excavation."
      }
    ]
  },
  "concrete-washouts": {
    title: "Concrete Washout Services",
    description: "Professional concrete washout services",
    heroImage: "/assets/washout.jpg",
    metadata: {
      title: "Best Concrete Washout Services in {location} | CRM Construction",
      description: "Fast, reliable concrete washout services in {location} with free quotes and transparent pricing. Call CRM Construction today."
    },
    features: [
      "Same-day service available",
      "Licensed & insured team",
      "No hidden fees",
      "Free estimates",
      "24/7 customer support",
      "Environmentally compliant disposal"
    ],
    whyChooseUs: [
      {
        title: "Fast Service",
        description: "Get your washout service within hours, not days",
        icon: "clock"
      },
      {
        title: "Transparent Pricing",
        description: "No hidden fees or surprise charges",
        icon: "dollar"
      },
      {
        title: "Local Team",
        description: "We're your neighbors, serving your community",
        icon: "location"
      },
      {
        title: "Expert Support",
        description: "Professional guidance for your project",
        icon: "support"
      }
    ],
    testimonials: [
      {
        text: "Fast and reliable washout service. Great team!",
        author: "David P.",
        location: "San Diego",
        rating: 5
      },
      {
        text: "Excellent service and competitive pricing. Will use again!",
        author: "Sarah L.",
        location: "Carlsbad",
        rating: 5
      }
    ],
    faq: [
      {
        question: "How fast can I get service?",
        answer: "We offer same-day service for projects scheduled before 2 PM."
      },
      {
        question: "What's included in the price?",
        answer: "The price includes setup, cleanup, and disposal. No hidden charges."
      },
      {
        question: "Do you provide containment?",
        answer: "Yes, we provide all necessary containment equipment for your washout needs."
      }
    ]
  }
};

// Add type guard
function isDumpsterService(service: StandardService | DumpsterService): service is DumpsterService {
  return 'heroImage' in service;
}

export default function ServicePage({ params }: { params: { serviceType: string; city: string } }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    zip: "",
    message: ""
  });
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const cityName = cityData[params.city as keyof typeof cityData];
  const service = serviceData[params.serviceType as keyof typeof serviceData];
  const isDumpsterRental = params.serviceType === "dumpster-rentals";

  useEffect(() => {
    const handleScroll = () => {
      setIsStickyVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!cityName || !service) {
    return <div>Page not found</div>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Head>
        <title>{service.metadata.title.replace("{location}", cityName)}</title>
        <meta name="description" content={service.metadata.description.replace("{location}", cityName)} />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Minimal Header */}
        <header className="bg-white shadow-sm py-3">
          <div className="container mx-auto px-4">
            <Link href="/">
              <Image
                src="/assets/logo.png"
                alt="CRM Construction Logo"
                width={150}
                height={75}
                className="h-12 w-auto"
              />
            </Link>
          </div>
        </header>

        {/* Breadcrumb Navigation */}
        <nav className="bg-gray-50 py-3 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-gray-500 hover:text-red-600 transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href="/services" className="text-gray-500 hover:text-red-600 transition-colors">
                  Services
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link 
                  href={`/services/${params.serviceType}`}
                  className="text-gray-500 hover:text-red-600 transition-colors"
                >
                  {service?.title}
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-800 font-medium">
                {cityName}
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center text-white">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="absolute inset-0 z-0">
            <Image
              src={service.heroImage}
              alt={`${service.title} in ${cityName}`}
              fill
              className="object-cover object-[center_35%]"
              priority
            />
          </div>
          <div className="container mx-auto px-4 z-20 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Need {service.title} in {cityName}?
            </h1>
            <p className="text-xl md:text-2xl mb-4">
              Fast service. Transparent pricing. Free estimates.
            </p>
            <p className="text-lg md:text-xl mb-8 text-red-400 font-semibold">
              Limited availability — book today.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
              <Link
                href="#contact-form"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get My Free Quote
              </Link>
              <Link
                href="#service-options"
                className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View {service.title} Options
              </Link>
            </div>
            <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <form action="https://formsubmit.co/crmco1@icloud.com" method="POST" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70"
                  />
                </div>
                <input
                  type="text"
                  name="zip"
                  placeholder="ZIP Code"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70"
                />
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  Get Free Quote
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg">Licensed & Insured</h3>
              </div>
              <div>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg">
                  {params.serviceType === "dumpster-rentals" ? "Same-Day Delivery" :
                   params.serviceType === "demolition" ? "Rapid Mobilization Within 48 Hours" :
                   params.serviceType === "excavation" ? "Timely Start, On-Schedule Completion" :
                   "Scheduled Pickup Within 24–48 Hours"}
                </h3>
              </div>
              <div>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg">No Hidden Fees</h3>
              </div>
              <div>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg">Local Support</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Service Options */}
        {isDumpsterRental && isDumpsterService(service) && (
          <section id="service-options" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Choose Your Dumpster Size</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {service.dumpsterImages.map((dumpster: DumpsterImage, index: number) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="relative h-64 mb-6">
                      <Image
                        src={dumpster.image}
                        alt={`${dumpster.size} Dumpster`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{dumpster.size} Dumpster</h3>
                    <div className="space-y-4">
                      <div>
                        <span className="font-semibold">Dimensions:</span> {dumpster.dimensions}
                      </div>
                      <div>
                        <span className="font-semibold">Capacity:</span> {dumpster.capacity}
                      </div>
                      <div className="text-red-600 font-bold text-xl">
                        Contact for Pricing
                      </div>
                      <div>
                        <span className="font-semibold">Best for:</span>
                        <ul className="list-disc list-inside mt-2">
                          {dumpster.bestFor.map((use: string, i: number) => (
                            <li key={i} className="text-gray-600">{use}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Link
                      href="#contact-form"
                      className="mt-6 block w-full bg-red-600 hover:bg-red-700 text-white text-center font-bold py-3 px-6 rounded-lg transition duration-300"
                    >
                      Reserve This Size
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {service.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <div className="italic text-gray-600 mb-4">
                      "{testimonial.text}"
                    </div>
                    <div className="font-semibold text-gray-800">
                      - {testimonial.author}, {testimonial.location}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {isDumpsterRental && isDumpsterService(service) && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Questions About {service.title}?</h2>
                <div className="space-y-6">
                  {service.faq.map((item: FAQ, index: number) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-xl font-bold mb-3">{item.question}</h3>
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Final CTA Block */}
        <section id="contact-form" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
              <form action="https://formsubmit.co/crmco1@icloud.com" method="POST" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Send My Quote Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Sticky CTA */}
        {isStickyVisible && (
          <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 md:hidden">
            <div className="container mx-auto px-4 py-3">
              <Link
                href="#contact-form"
                className="block w-full bg-red-600 hover:bg-red-700 text-white text-center font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}

        {/* Minimal Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-gray-400 mb-4">
                Proudly serving {cityName} and surrounding areas in San Diego County.
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-400">
                <a href="tel:+16197784997" className="hover:text-white transition">
                  (619) 778-4997
                </a>
                <span className="hidden md:inline">•</span>
                <a href="mailto:crmco1@icloud.com" className="hover:text-white transition">
                  crmco1@icloud.com
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
} 