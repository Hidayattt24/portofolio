export interface NewsArticle {
  title: string;
  source: string;
  url: string;
  image?: string;       // URL gambar thumbnail berita
  date?: string;        // Tanggal publikasi, e.g. 'March 2025'
  excerpt?: string;     // Cuplikan isi berita (opsional)
}

export interface CollabEntry {
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
  newsLinks?: NewsArticle[];  // Publikasi / liputan berita terkait proyek
}

export const collabs: CollabEntry[] = [
{
    id: 'test-1',
    name: 'Sarniyati Yusmanita, S.Pd., M.Pd',
    role: 'Principal',
    company: 'SDN 16 Banda Aceh',
    image: '/collabs-reviews/adaptivin-1.png',
    testimonial: "Adaptivin is a fresh face in digital education at our school. Our teachers find the automated assessment incredibly helpful, while our students consistently share that learning mathematics has become an exciting and engaging experience.",
    fullTestimonial: `Adaptivin has emerged as a new face of innovation, bringing a positive transformation to the digital ecosystem at SDN 16 Banda Aceh. From an educator's perspective, this platform offers remarkable efficiency in precisely and automatically identifying students' learning difficulties.

The field trials showed immense enthusiasm; our students repeatedly expressed that the learning process has become incredibly fun and interactive. The adaptive features keep them challenged yet confident in solving mathematical problems.

We highly appreciate the technical expertise and dedication of the developers in creating a solution that is not only technologically advanced through AI integration but also highly relevant to the pedagogical needs of elementary schools.`,
    rating: 5,
    date: 'December 2025',
    project: 'Adaptivin - AI Adaptive Learning',
    projectImages: [
      '/collabs-reviews/adaptivin-8.png',
      '/collabs-reviews/adaptivin-7.png',
      '/collabs-reviews/adaptivin-6.png',
      '/collabs-reviews/adaptivin-5.png',
      '/collabs-reviews/adaptivin-2.png',
      '/collabs-reviews/adaptivin-3.png',
      '/collabs-reviews/adaptivin-4.png',

    ],
    youtubeLink: 'https://www.youtube.com/watch?v=bcycWuhBdt8',
    githubLink: 'https://github.com/Hidayattt24/adaptivin-user',
  },
{
    id: 'test-2',
    name: 'Ns. Arfiza Ridwan, MNS',
    role: 'Lecturer at Faculty of Nursing',
    company: 'Universitas Syiah Kuala',
    image: '/collabs-reviews/bukadita-3.jpeg',
    testimonial: "BUKADITA is a breakthrough in digital health. It successfully modernizes Posyandu operations from manual to digital, providing accurate data tracking that empowers our health cadres to work more efficiently.",
    fullTestimonial: `BUKADITA has proven to be an outstanding digital solution for modernizing Posyandu administrative competencies. By replacing paper-based records with an integrated web-based system, it ensures that maternal and child health data is managed with high accuracy and transparency.

The implementation of this platform has significantly strengthened the role of Posyandu cadres in Aceh. The system is intuitive enough for field workers to use while providing robust administrative oversight for nursing professionals and mentors.

Working with a developer who understands how to translate healthcare needs into a functional digital tool was a remarkable experience. This innovation is a vital step toward digital transformation in Indonesian public health services.`,
    rating: 5,
    date: 'August 2025 - September 2025',
    project: 'BUKADITA - Digital Cadre Book',
    projectImages: [
     '/collabs-reviews/bukadita-1.jpeg',
     '/collabs-reviews/bukadita-2.jpeg',
    ],
    youtubeLink: 'https://www.youtube.com/watch?v=gCaavQrSagc',
    githubLink: 'https://github.com/Hidayattt24/bukadita-user-v2',

    newsLinks: [
      {
        title: 'USK Luncurkan BUKADITA: Solusi Pendataan Akurat Kader Posyandu',
        source: 'USK News',
        url: 'https://usk.ac.id/usk-luncurkan-bukadita-solusi-pendataan-akurat-kader-posyandu/',
        date: 'August 2025',
        excerpt: 'Universitas Syiah Kuala meluncurkan platform BUKADITA untuk memperkuat digitalisasi layanan kesehatan di tingkat desa.'
      },
      {
        title: 'Solusi Digitalisasi Pendataan Kader Posyandu',
        source: 'RRI Banda Aceh',
        url: 'https://rri.co.id/banda-aceh/iptek/1890591/usk-luncurkan-bukadita-solusi-digitalisasi-pendataan-kader-posyandu',
        date: 'August 2025',
      },
      {
        title: 'Modernisasi Kompetensi Kader Posyandu via Platform Digital',
        source: 'AJNN',
        url: 'https://www.ajnn.net/news/usk-luncurkan-platform-digital-untuk-modernisasi-kompetensi-25-kader-posyandu/index.html',
      },
      {
        title: 'Tim Pengabdian USK Sosialisasikan Website BUKADITA',
        source: 'FKEP USK',
        url: 'https://fkep.usk.ac.id/tim-pengabdian-kepada-masyarakat-universitas-syiah-kuala-sosialisasikan-website-buku-kader-digital-bukadita-dorong-transformasi-digital-posyandu/',
      },
      {
        title: 'Inovasi Digital Perkuat Peran Kader Posyandu',
        source: 'TribunNews Prohaba',
        url: 'https://prohaba.tribunnews.com/nanggroe/45202/usk-sosialisasi-bukadita-inovasi-digital-untuk-perkuat-peran-kader-posyandu-transformasi-layanan',
      },
      {
        title: 'BUKADITA: Inovasi Digital untuk Kader Posyandu di Aceh',
        source: 'Yasanti',
        url: 'https://www.yasanti.or.id/bukadita-inovasi-digital-untuk-kader-posyandu-di-aceh/',
      }
    ]
  },
//   {
//     id: 'test-3',
//     name: 'Emily Rodriguez',
//     role: 'Product Owner',
//     company: 'InnovateLabs',
//     image: 'https://i.pravatar.cc/150?img=5',
//     testimonial: 'Exceptional problem-solving skills and great communication. They helped us modernize our legacy infrastructure and implement best practices for security and scalability. The results speak for themselves.',
//     fullTestimonial: `Exceptional problem-solving skills and great communication. They helped us modernize our legacy infrastructure and implement best practices for security and scalability. The results speak for themselves.

// What impressed me most was their proactive approach to identifying potential issues and suggesting improvements. They didn't just implement what we asked for; they provided valuable insights that improved our overall architecture.

// The infrastructure they built is robust, secure, and easy to maintain. Our operational costs have decreased by 30% while performance has improved significantly.`,
//     rating: 5,
//     date: 'November 2023',
//     project: 'Infrastructure Modernization',
//     projectImages: [
//       '/testimonials/innovatelabs/project-1.jpg',
//       '/testimonials/innovatelabs/project-2.jpg',
//       '/testimonials/innovatelabs/project-3.jpg',
//     ],
//     githubLink: 'https://github.com/example/infrastructure-modernization',
//   }
];
