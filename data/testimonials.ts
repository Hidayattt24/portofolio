export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  testimonial: string;
  fullTestimonial?: string;
  rating: number;
  date?: string;
  project?: string;
  projectImages?: string[];
  youtubeLink?: string;
  githubLink?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechVision Inc',
    image: 'https://i.pravatar.cc/150?img=1',
    testimonial: 'Working with this developer was an absolute pleasure. The attention to detail and technical expertise shown throughout our cloud migration project was exceptional. They delivered a scalable AWS infrastructure that exceeded our expectations.',
    fullTestimonial: `Working with this developer was an absolute pleasure. The attention to detail and technical expertise shown throughout our cloud migration project was exceptional. They delivered a scalable AWS infrastructure that exceeded our expectations.

The migration was completed ahead of schedule, and the documentation provided was comprehensive and easy to follow. Our team was able to quickly adapt to the new infrastructure thanks to the thorough training sessions provided.

I highly recommend their services to anyone looking for a skilled cloud architect who truly understands both the technical and business aspects of modern infrastructure.`,
    rating: 5,
    date: 'January 2024',
    project: 'AWS Cloud Migration',
    projectImages: [
      '/testimonials/techvision/project-1.jpg',
      '/testimonials/techvision/project-2.jpg',
      '/testimonials/techvision/project-3.jpg',
    ],
    youtubeLink: 'https://youtube.com/watch?v=example1',
    githubLink: 'https://github.com/example/aws-migration',
  },
  {
    id: 'test-2',
    name: 'Michael Chen',
    role: 'Engineering Manager',
    company: 'DataFlow Solutions',
    image: 'https://i.pravatar.cc/150?img=12',
    testimonial: 'Outstanding work on our Kubernetes infrastructure! The deployment pipeline they set up has significantly improved our development workflow. Their deep understanding of DevOps practices is evident in every aspect of the solution.',
    fullTestimonial: `Outstanding work on our Kubernetes infrastructure! The deployment pipeline they set up has significantly improved our development workflow. Their deep understanding of DevOps practices is evident in every aspect of the solution.

The CI/CD pipeline implementation reduced our deployment time from hours to minutes. The monitoring and alerting system they configured has helped us catch issues before they impact our users.

Their ability to explain complex concepts in simple terms made it easy for our entire team to understand and maintain the infrastructure. A true professional who goes above and beyond.`,
    rating: 5,
    date: 'December 2023',
    project: 'Kubernetes Infrastructure Setup',
    projectImages: [
      '/testimonials/dataflow/project-1.jpg',
      '/testimonials/dataflow/project-2.jpg',
    ],
    youtubeLink: 'https://youtube.com/watch?v=example2',
    githubLink: 'https://github.com/example/k8s-infrastructure',
  },
  {
    id: 'test-3',
    name: 'Emily Rodriguez',
    role: 'Product Owner',
    company: 'InnovateLabs',
    image: 'https://i.pravatar.cc/150?img=5',
    testimonial: 'Exceptional problem-solving skills and great communication. They helped us modernize our legacy infrastructure and implement best practices for security and scalability. The results speak for themselves.',
    fullTestimonial: `Exceptional problem-solving skills and great communication. They helped us modernize our legacy infrastructure and implement best practices for security and scalability. The results speak for themselves.

What impressed me most was their proactive approach to identifying potential issues and suggesting improvements. They didn't just implement what we asked for; they provided valuable insights that improved our overall architecture.

The infrastructure they built is robust, secure, and easy to maintain. Our operational costs have decreased by 30% while performance has improved significantly.`,
    rating: 5,
    date: 'November 2023',
    project: 'Infrastructure Modernization',
    projectImages: [
      '/testimonials/innovatelabs/project-1.jpg',
      '/testimonials/innovatelabs/project-2.jpg',
      '/testimonials/innovatelabs/project-3.jpg',
    ],
    githubLink: 'https://github.com/example/infrastructure-modernization',
  },
  {
    id: 'test-4',
    name: 'David Park',
    role: 'Lead Developer',
    company: 'CloudFirst Systems',
    image: 'https://i.pravatar.cc/150?img=13',
    testimonial: 'Highly skilled in Terraform and infrastructure as code. The modular approach they took made our infrastructure easy to manage and replicate across environments. Great collaboration and technical depth.',
    fullTestimonial: `Highly skilled in Terraform and infrastructure as code. The modular approach they took made our infrastructure easy to manage and replicate across environments. Great collaboration and technical depth.

The Terraform modules they created are well-documented, reusable, and follow industry best practices. Our team can now provision new environments in minutes instead of days.

Their expertise in multi-cloud strategies helped us avoid vendor lock-in while maintaining consistency across our AWS and GCP deployments. Absolutely recommend working with them.`,
    rating: 5,
    date: 'October 2023',
    project: 'Terraform Infrastructure as Code',
    projectImages: [
      '/testimonials/cloudfirst/project-1.jpg',
      '/testimonials/cloudfirst/project-2.jpg',
    ],
    youtubeLink: 'https://youtube.com/watch?v=example3',
    githubLink: 'https://github.com/example/terraform-modules',
  },
  {
    id: 'test-5',
    name: 'Lisa Anderson',
    role: 'VP of Engineering',
    company: 'ScaleUp Technologies',
    image: 'https://i.pravatar.cc/150?img=9',
    testimonial: 'Professional, knowledgeable, and reliable. They architected a multi-region deployment strategy that has proven to be both cost-effective and highly available. Our uptime has improved dramatically.',
    fullTestimonial: `Professional, knowledgeable, and reliable. They architected a multi-region deployment strategy that has proven to be both cost-effective and highly available. Our uptime has improved dramatically.

The disaster recovery plan they implemented gave us peace of mind, and when we actually needed it during an outage, everything worked flawlessly. The automated failover saved us from significant downtime.

Their strategic thinking and ability to balance technical requirements with business needs made them an invaluable partner in our growth journey.`,
    rating: 5,
    date: 'September 2023',
    project: 'Multi-Region Architecture',
    projectImages: [
      '/testimonials/scaleup/project-1.jpg',
    ],
    githubLink: 'https://github.com/example/multi-region-architecture',
  },
  {
    id: 'test-6',
    name: 'James Wilson',
    role: 'DevOps Lead',
    company: 'NextGen Apps',
    image: 'https://i.pravatar.cc/150?img=14',
    testimonial: 'Incredible expertise in cloud security and compliance. They helped us achieve SOC 2 compliance while maintaining developer productivity. The security automation they implemented is top-notch.',
    fullTestimonial: `Incredible expertise in cloud security and compliance. They helped us achieve SOC 2 compliance while maintaining developer productivity. The security automation they implemented is top-notch.

They conducted a thorough security audit and implemented fixes for all identified vulnerabilities. The automated security scanning and compliance checks they set up have become an integral part of our development process.

Their knowledge of security best practices and ability to implement them without hindering development velocity is remarkable. A true security-minded architect.`,
    rating: 5,
    date: 'August 2023',
    project: 'Security & Compliance Implementation',
    projectImages: [
      '/testimonials/nextgen/project-1.jpg',
      '/testimonials/nextgen/project-2.jpg',
      '/testimonials/nextgen/project-3.jpg',
    ],
    youtubeLink: 'https://youtube.com/watch?v=example4',
    githubLink: 'https://github.com/example/security-compliance',
  },
];
