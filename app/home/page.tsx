import { BioCard } from "@/components/bio-card";
import SocialLinks from "@/components/SocialLinks";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col gap-8">
      <BioCard />
      <SocialLinks />
    </div>
  );
}
