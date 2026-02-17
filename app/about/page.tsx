import { 
  AboutMe, 
  TechStack, 
  SoftSkills, 
  Languages 
} from "@/components/about";

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col gap-8">
      <AboutMe />
      <TechStack />
      <SoftSkills />
      <Languages />
    </div>
  );
}
