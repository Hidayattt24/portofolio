'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Phone } from 'lucide-react';

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
  index: number;
}

function ContactInfoItem({ icon, title, content, link, index }: ContactInfoItemProps) {
  const Item = (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-center gap-4 p-4 bg-white border-[3px] border-[var(--card-border)] rounded-[var(--radius-md)] hover:shadow-[var(--shadow-sm)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 h-[80px]"
    >
      <div className="flex-shrink-0 w-12 h-12 bg-[var(--accent-green)] rounded-full flex items-center justify-center text-white">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium text-[var(--text-secondary)] mb-1">{title}</h3>
        <p className="text-[var(--text-primary)] font-medium truncate">{content}</p>
      </div>
    </motion.div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        {Item}
      </a>
    );
  }

  return Item;
}

export default function ContactInfo() {
  const contactItems = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'hello@example.com',
      link: 'mailto:hello@example.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      content: 'San Francisco, CA',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Response Time',
      content: 'Within 24 hours',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4">
      {contactItems.map((item, index) => (
        <ContactInfoItem key={index} {...item} index={index} />
      ))}
    </div>
  );
}
