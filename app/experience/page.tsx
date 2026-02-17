import { 
  ExperienceSection, 
  EducationSection, 
  OrganizationSection 
} from "@/components/experience";

export default function ExperiencePage() {
  return (
    <div className="w-full flex flex-col gap-12">
      <ExperienceSection />
      <EducationSection />
      <OrganizationSection />
    </div>
  );
}
