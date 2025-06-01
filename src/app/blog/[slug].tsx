"use client";

import { useState, useEffect } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import AnimatedLink from "@/components/ui/AnimatedLink";
import ServicesDropdown from "@/components/ui/ServicesDropdown";
import Card from "@/components/ui/Card";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <AnimatedLink href="/" className="text-2xl font-bold text-red-600">
              <Image
                src="/assets/logo.png"
                alt="CRM Construction Logo"
                width={150}
                height={75}
                className="h-14 w-auto"
              />
            </AnimatedLink>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-400"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>

            <nav className="hidden md:flex items-center space-x-8">
              <ServicesDropdown isScrolled={isScrolled} />
              <AnimatedLink href="/about" isScrolled={isScrolled}>
                About
              </AnimatedLink>
              <Button href="/contact">Get a Quote</Button>
            </nav>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 bg-white z-40 pt-20"
          >
            <nav className="container mx-auto px-4">
              <div className="flex flex-col space-y-4">
                <ServicesDropdown isScrolled={isScrolled} />
                <AnimatedLink
                  href="/about"
                  className="px-4 py-2 text-black hover:text-red-600 transition-colors duration-200"
                >
                  About
                </AnimatedLink>
                <Button href="/contact" fullWidth>
                  Get a Quote
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <BlogContent slug={params.slug} />
            </article>

            {/* CTA Section */}
            <section className="mt-16">
              <Card padding="lg">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Ready to Start Your Project?
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Get in touch with us today for a free quote and consultation.
                  </p>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <Button href="/contact" variant="primary">
                      Get a Quote
                    </Button>
                    <a
                      href="tel:+16197784997"
                      className="text-xl font-bold text-gray-900 hover:text-red-600 transition"
                    >
                      (619) 778-4997
                    </a>
                  </div>
                </div>
              </Card>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Location</h3>
              <p>1527 Old Highway 80 #103</p>
              <p>El Cajon, CA 92021</p>
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
                Providing reliable, high-quality construction services to San
                Diego County since 1997. We're committed to excellence in every
                project.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>
              &copy; {new Date().getFullYear()} CRM Construction. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}

// Server-side MDX loader
function BlogContent({ slug }: { slug: string }) {
  const filePath = path.join(process.cwd(), "src/app/blog", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return <p className="text-red-600 font-bold">Post not found.</p>;
  }

  const source = fs.readFileSync(filePath, "utf8");
  const { content } = matter(source);
  return <MDXRemote source={content} />;
}
