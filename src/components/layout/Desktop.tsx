import ProfilePicture from "../ProfilePicture";
import IntroductionBlock from "../IntroductionBlock";
import ContactsBox from "../ContactsBox";
import HardSkillsBox from "../HardSkillsBox";

import LanguageBox from "../LanguageBox";
import ProjectExperienceBox from "../ProjectExperienceBox";
import ExperienceBlock from "../reusable/ExperienceBlock";
import { useAppSelector } from "../redux/hooks";
import { selectTheme } from "../redux/slices/themeSlice";

export default function Desktop() {
  const theme = useAppSelector(selectTheme);
  return (
    <div
      className={`${theme} font-montserrat bg-gradient-light dark:bg-gradient-dark flex h-full max-w-screen justify-center gap-0 transition-all duration-350 ease-in-out`}
    >
      <aside className="bg-background-light dark:bg-background-dark flex w-28 flex-col gap-0.5 px-0.5 py-1 transition-all duration-350 ease-in-out">
        <ProfilePicture />
        <ContactsBox />
        <LanguageBox />
        <HardSkillsBox />
      </aside>
      <main className="bg-background-light dark:bg-background-dark flex max-w-54 flex-col gap-0.5 px-0.5 py-1 transition-all duration-350 ease-in-out">
        <IntroductionBlock />
        <ProjectExperienceBox />
        <ExperienceBlock data="work" />
        <ExperienceBlock data="education" />
      </main>
    </div>
  );
}
