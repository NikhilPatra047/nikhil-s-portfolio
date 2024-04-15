import WorkExperienceSection from "./_sections/WorkExperienceSection";
import IntroSection from "./_sections/IntroSection";
import SkillsSection from "./_sections/SkillsSection";
import EducationExperience from "./_sections/EduSection";

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