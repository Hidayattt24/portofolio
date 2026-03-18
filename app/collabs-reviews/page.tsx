import { CollabsReviewsSection } from '@/components/collabs-reviews';

export const metadata = {
  title: 'Collabs & Reviews | Hidayat Nur Hakim',
  description: 'Collaborations and reviews from clients and partners who have worked with Hidayat Nur Hakim.',
};

export default function CollabsReviewsPage() {
  return (
    <div className="w-full">
      <CollabsReviewsSection />
    </div>
  );
}
