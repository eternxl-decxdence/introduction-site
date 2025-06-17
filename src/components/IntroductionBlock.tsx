import { highlightText, techArray } from "../utils/textUtils";
import useBreakpoint from "./hooks/useBreakpoint";
import useLocaleFile from "./hooks/useLocaleFile";
import TagsCloud from "./reusable/TagsCloud";
import type Section from "./types/Section";
import ThemeLanguageSwitcher from "./ThemeLanguageSwitcher";
export default function IntroductionBlock() {
  interface IntroductionData {
    introduction: string;
    jobTitle: string;
    name: string;
    softSkills: string[];
  }

  const text = useLocaleFile<Section<IntroductionData>>("introduction");
  const isDesktop = useBreakpoint(1280);
  if (!text) return null;

  return (
    <section
      id="about-me"
      className="bg-background-light dark:bg-background-dark flex flex-col items-start justify-center gap-0.25 p-0.75 transition-all duration-350 ease-in-out"
    >
      {isDesktop ? (
        <div className="flex w-full items-start justify-between">
          <h1 className="leading-default text-default-light dark:text-default-dark text-heading font-bold transition-all duration-350 ease-in-out xl:text-[2rem]">
            {text.sectionData[0].name}
          </h1>
          <ThemeLanguageSwitcher />
        </div>
      ) : (
        <h1 className="leading-default text-default-light dark:text-default-dark text-heading font-bold transition-all duration-350 ease-in-out xl:text-[2rem]">
          {text.sectionData[0].name}
        </h1>
      )}
      <h2 className="leading-default text-title-light dark:text-title-dark text-subheading font-semibold transition-all duration-350 ease-in-out xl:text-[1.5rem]">
        {text.sectionData[0].jobTitle}
      </h2>
      <p
        style={{ whiteSpace: "pre-line" }}
        className="font-regular text-body font-montserrat text-default-light dark:text-default-dark leading-default px-1 pt-0.5 pb-1 transition-all duration-350 ease-in-out"
      >
        {highlightText(
          text.sectionData[0].introduction,
          techArray,
          "text-highlight-light dark:text-highlight-dark transition-all duration-350 ease-in-out",
        )}
      </p>
      <div className="px-1">
        <TagsCloud tags={text.sectionData[0].softSkills} />
      </div>
    </section>
  );
}
