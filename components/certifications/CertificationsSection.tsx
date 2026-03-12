"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import CertificationCard from "./CertificationCard";
import CertificationModal from "./CertificationModal";
import SearchBar from "./SearchBar";
import { certifications } from "@/data/certifications";

export default function CertificationsSection() {
  const [selectedCertification, setSelectedCertification] = useState<
    (typeof certifications)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleViewDetails = (certification: (typeof certifications)[0]) => {
    setSelectedCertification(certification);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCertification(null), 300);
  };

  const filteredCertifications = useMemo(() => {
    if (!searchQuery.trim()) return certifications;

    const query = searchQuery.toLowerCase();
    return certifications.filter((cert) => {
      return (
        cert.title.toLowerCase().includes(query) ||
        cert.issuer.toLowerCase().includes(query) ||
        cert.description.toLowerCase().includes(query) ||
        cert.skills.some((skill) => skill.toLowerCase().includes(query))
      );
    });
  }, [searchQuery]);

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
          <Shield className="w-8 h-8 text-[var(--accent-green)]" />
          <h1 className="text-3xl md:text-4xl font-normal text-[var(--text-primary)]">
            Professional Certifications
          </h1>
        </div>
        <p className="text-lg text-[var(--text-secondary)]">
          Industry-recognized certifications validating expertise in cloud and
          DevOps technologies
        </p>
      </motion.div>

      {/* Search Bar */}
      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Search by title, issuer, skills..."
      />

      {/* Certifications Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
      >
        {filteredCertifications.length > 0 ? (
          filteredCertifications.map((certification, index) => (
            <CertificationCard
              key={index}
              {...certification}
              index={index}
              onViewDetails={() => handleViewDetails(certification)}
            />
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-[var(--text-secondary)] text-lg">
              No certifications found matching &quot;{searchQuery}&quot;
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Certification Modal */}
      {selectedCertification && (
        <CertificationModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          {...selectedCertification}
        />
      )}
    </div>
  );
}
