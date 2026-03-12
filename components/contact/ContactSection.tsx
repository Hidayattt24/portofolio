'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export default function ContactSection() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/yourusername',
      color: 'hover:bg-gray-800',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://linkedin.com/in/yourusername',
      color: 'hover:bg-blue-600',
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      url: 'https://twitter.com/yourusername',
      color: 'hover:bg-sky-500',
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      url: 'mailto:hello@example.com',
      color: 'hover:bg-red-600',
    },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <MessageCircle className="w-8 h-8 text-[var(--accent-green)]" />
          <h1 className="text-3xl md:text-4xl font-normal text-[var(--text-primary)]">
            Get In Touch
          </h1>
        </div>
        <p className="text-lg text-[var(--text-secondary)]">
          Have a project in mind? Let&apos;s discuss how I can help bring your ideas to life.
        </p>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-1"
        >
          <div className="bg-[var(--card-bg)] rounded-[var(--radius-xl)] border-[3px] border-[var(--card-border)] shadow-[var(--shadow-md)] p-6">
            <h2 className="text-xl font-medium text-[var(--text-primary)] mb-6">
              Contact Information
            </h2>
            <ContactInfo />

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t-[3px] border-[var(--card-border)]">
              <h3 className="text-sm font-medium text-[var(--text-secondary)] mb-4">
                Connect with me
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    className={`p-3 bg-[var(--button-primary-bg)] text-white border-[3px] border-[var(--card-border)] rounded-[var(--radius-md)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-6 p-4 bg-green-100 border-[3px] border-green-600 rounded-[var(--radius-md)]"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-green-800">
                  Available for new projects
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column - Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-[var(--card-bg)] rounded-[var(--radius-xl)] border-[3px] border-[var(--card-border)] shadow-[var(--shadow-md)] p-6 md:p-8">
            <h2 className="text-xl font-medium text-[var(--text-primary)] mb-6">
              Send me a message
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8 bg-[var(--accent-green)] rounded-[var(--radius-xl)] border-[3px] border-[var(--card-border)] shadow-[var(--shadow-md)] p-8 text-center"
      >
        <h3 className="text-2xl font-medium text-white mb-2">
          Prefer a quick chat?
        </h3>
        <p className="text-white/90 mb-4">
          Schedule a 30-minute call to discuss your project requirements
        </p>
        <a
          href="https://calendly.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-white text-[var(--accent-green)] border-[3px] border-[var(--card-border)] rounded-[var(--radius-md)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200 font-medium"
        >
          Schedule a Call
        </a>
      </motion.div>
    </div>
  );
}
