import WorkExperienceSection from "./home/_sections/WorkExperienceSection";
import IntroSection from "./home/_sections/IntroSection";
import SkillsSection from "./home/_sections/SkillsSection";
import EducationExperience from "./home/_sections/EduSection";

export default function Home() {
  return (
    <>
      <IntroSection />
      <SkillsSection />
      <WorkExperienceSection />
      <EducationExperience />
    </>
  )
}