'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import CertificationCard from './CertificationCard';
import CertificationModal from './CertificationModal';

interface Certification {
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId: string;
  description: string;
  detailedDescription: string;
  images?: string[];
  skills: string[];
  competencies?: string[];
  verificationLink?: string;
}

const certifications: Certification[] = [
  {
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    issueDate: 'October 2022',
    expiryDate: 'October 2025',
    credentialId: 'AWS-SA-A2022-157892',
    description: 'Validates technical expertise in designing distributed systems on AWS, demonstrating ability to architect and deploy secure and robust applications.',
    detailedDescription: 'The AWS Certified Solutions Architect – Associate examination is intended for individuals who perform a solutions architect role and have one or more years of hands-on experience designing available, cost-efficient, fault-tolerant, and scalable distributed systems on AWS.',
    images: ['/certifications/aws-saa.jpg', '/certifications/aws-saa-badge.jpg'],
    skills: ['AWS EC2', 'AWS S3', 'AWS RDS', 'AWS Lambda', 'CloudFormation', 'VPC', 'IAM', 'Route 53'],
    competencies: [
      'Design resilient architectures',
      'Design high-performing architectures',
      'Design secure applications and architectures',
      'Design cost-optimized architectures',
    ],
    verificationLink: 'https://www.credly.com/badges/aws-saa',
  },
  {
    title: 'Google Cloud Professional Cloud Architect',
    issuer: 'Google Cloud',
    issueDate: 'June 2023',
    expiryDate: 'June 2025',
    credentialId: 'GCP-PCA2023-489231',
    description: 'Professional certification demonstrating expertise in cloud architecture, infrastructure design, and security on Google Cloud Platform.',
    detailedDescription: 'A Professional Cloud Architect enables organizations to leverage Google Cloud technologies. With a thorough understanding of cloud architecture and Google Cloud Platform, this individual can design, develop, and manage robust, secure, scalable, highly available, and dynamic solutions to drive business objectives.',
    images: ['/certifications/gcp-pca.jpg'],
    skills: ['Compute Engine', 'Cloud Storage', 'BigQuery', 'Kubernetes', 'Cloud SQL', 'App Engine', 'Cloud Functions', 'Networking'],
    competencies: [
      'Design and plan cloud solution architecture',
      'Manage and provision cloud solution infrastructure',
      'Design for security and compliance',
      'Analyze and optimize technical and business processes',
      'Manage implementation and ensure solution and operations reliability',
    ],
    verificationLink: 'https://www.credential.net/gcp-pca',
  },
  {
    title: 'Microsoft Certified: Azure Solutions Architect Expert',
    issuer: 'Microsoft',
    issueDate: 'March 2023',
    credentialId: 'MS-AZ305-782934',
    description: 'Demonstrates advanced skills in designing cloud and hybrid solutions that run on Microsoft Azure, including compute, network, storage, and security.',
    detailedDescription: 'Candidates for the Azure Solutions Architect Expert certification should have subject matter expertise in designing cloud and hybrid solutions that run on Microsoft Azure, including compute, network, storage, monitoring, and security.',
    images: ['/certifications/azure-expert.jpg', '/certifications/azure-badge.jpg'],
    skills: ['Azure VMs', 'Azure Functions', 'Azure Storage', 'Azure AD', 'ARM Templates', 'Azure Networking', 'Azure Monitor', 'Azure Security'],
    competencies: [
      'Design identity, governance, and monitoring solutions',
      'Design data storage solutions',
      'Design business continuity solutions',
      'Design infrastructure solutions',
    ],
    verificationLink: 'https://learn.microsoft.com/verify-cert',
  },
  {
    title: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'The Linux Foundation',
    issueDate: 'August 2023',
    expiryDate: 'August 2026',
    credentialId: 'LF-CKA2023-934821',
    description: 'Performance-based certification that validates skills, knowledge, and competency to perform the responsibilities of Kubernetes administrators.',
    detailedDescription: 'The Certified Kubernetes Administrator (CKA) program provides assurance that CKAs have the skills, knowledge, and competency to perform the responsibilities of Kubernetes administrators. The exam is an online, proctored, performance-based test that requires solving multiple tasks from a command line running Kubernetes.',
    images: ['/certifications/cka.jpg'],
    skills: ['Kubernetes', 'Docker', 'Container Orchestration', 'Cluster Management', 'kubectl', 'Helm', 'YAML', 'Linux'],
    competencies: [
      'Cluster architecture, installation, and configuration',
      'Workloads and scheduling',
      'Services and networking',
      'Storage management',
      'Troubleshooting cluster and application issues',
    ],
    verificationLink: 'https://training.linuxfoundation.org/certification/verify',
  },
  {
    title: 'Terraform Associate',
    issuer: 'HashiCorp',
    issueDate: 'January 2023',
    expiryDate: 'January 2025',
    credentialId: 'HC-TFAS2023-12948',
    description: 'Validates foundational knowledge and skills in Infrastructure as Code using HashiCorp Terraform in cloud environments.',
    detailedDescription: 'The Terraform Associate certification is for Cloud Engineers specializing in operations, IT, or development who know the basic concepts and skills associated with open source HashiCorp Terraform. Candidates will be best prepared for this exam if they have professional experience using Terraform in production, but performing the exam objectives in a personal demo environment may also be sufficient.',
    images: ['/certifications/terraform.jpg', '/certifications/terraform-badge.jpg'],
    skills: ['Terraform', 'HCL', 'Infrastructure as Code', 'AWS', 'Azure', 'GCP', 'State Management', 'Modules'],
    competencies: [
      'Understand infrastructure as code concepts',
      'Understand Terraform purpose and workflow',
      'Navigate Terraform workflow',
      'Implement and maintain state',
      'Read, generate, and modify configuration',
      'Understand Terraform Cloud and Enterprise capabilities',
    ],
    verificationLink: 'https://www.credly.com/badges/hashicorp-terraform',
  },
];

export default function CertificationsSection() {
  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (certification: Certification) => {
    setSelectedCertification(certification);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCertification(null), 300);
  };

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
          Industry-recognized certifications validating expertise in cloud and DevOps technologies
        </p>
      </motion.div>

      {/* Certifications List - Single Column */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col gap-6"
      >
        {certifications.map((certification, index) => (
          <CertificationCard
            key={index}
            {...certification}
            index={index}
            onViewDetails={() => handleViewDetails(certification)}
          />
        ))}
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
