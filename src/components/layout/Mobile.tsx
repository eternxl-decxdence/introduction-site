import ProfilePicture from "../ProfilePicture";
import IntroductionBlock from "../IntroductionBlock";
import ContactsBox from "../ContactsBox";
import HardSkillsBox from "../HardSkillsBox";
import Header from "../Header";
import LanguageBox from "../LanguageBox";
import ProjectExperienceBox from "../ProjectExperienceBox";
import ExperienceBlock from "../reusable/ExperienceBlock";
import { useAppSelector } from "../redux/hooks";
import { selectTheme } from "../redux/slices/themeSlice";

export default function Mobile() {
  const theme = useAppSelector(selectTheme);
  return (
    <div className={`${theme} font-montserrat`}>
      <div className="bg-background-light dark:bg-background-dark h-full max-w-screen transition-all duration-350 ease-in-out">
        <Header />
        <ProfilePicture />
        <IntroductionBlock />
        <ContactsBox />
        <HardSkillsBox />
        <LanguageBox />
        <ProjectExperienceBox />
        <ExperienceBlock data="work" />
        <ExperienceBlock data="education" />
      </div>
    </div>
  );
}
