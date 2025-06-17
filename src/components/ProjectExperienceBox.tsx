import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useLocaleFile from "./hooks/useLocaleFile";
import Card from "./reusable/Card";
import { IconMap } from "./types/IconMap";
import type Section from "./types/Section";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { highlightText, techArray } from "../utils/textUtils";
import TagsCloud from "./reusable/TagsCloud";

export default function ProjectExperienceBox() {
  interface Project {
    name: string;
    logo: string;
    description: string;
    tags: string[];
    repo: string;
    demo?: string;
  }

  const text = useLocaleFile<Section<Project>>("projects");

  if (!text) return null;

  return (
    <section
      id="projects"
      className="from-background-light to-gradient-secondary-light dark:from-background-dark dark:to-gradient-secondary-dark flex flex-col gap-0.75 bg-linear-to-b px-1 py-0.5 transition-all duration-350 ease-in-out xl:bg-none"
    >
      <h2 className="text-subheading text-title-light dark:text-title-dark font-bold transition-all duration-350 ease-in-out">
        {text.sectionName}
      </h2>
      <div className="flex w-full flex-col items-center justify-center gap-0.75 xl:flex-row xl:flex-wrap xl:justify-start">
        {text.sectionData.map((project, i) => {
          return (
            <Card key={i}>
              <div className="flex w-full flex-col gap-0.25 pb-0.5 xl:h-30">
                <div className="flex w-full items-center justify-center p-2.25">
                  <div className="bg-background-light dark:bg-background-dark shadow-effects-light dark:shadow-effects-dark shadow-logo-highlight flex aspect-square w-4 items-center justify-center rounded-xl transition-all duration-350 ease-in-out">
                    <FontAwesomeIcon
                      className="text-big-svg text-accent-light dark:text-accent-dark transition-all duration-350 ease-in-out"
                      icon={IconMap[project.logo]}
                    />
                  </div>
                </div>
                <hr className="border-gradient-light dark:border-gradient-dark w-full" />
                <div className="flex flex-col justify-between px-1 pt-0.5 pb-0.75 xl:h-full">
                  <div className="flex flex-col gap-1">
                    <div className="flex w-full items-center justify-between">
                      <h2 className="text-list text-title-light dark:text-title-dark xl:text-subheading font-bold transition-all duration-350 ease-in-out text-shadow-lg">
                        {project.name}
                      </h2>
                      <div className="flex items-center gap-0.75">
                        <FontAwesomeIcon
                          className="text-list text-accent-light dark:text-accent-dark transition-all duration-350 ease-in-out"
                          icon={faLink}
                        />
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-default-light dark:text-default-dark text-small hover:text-highlight-light hover:dark:text-highlight-dark leading-none transition-all duration-350 ease-in-out"
                        >
                          Repository
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-default-light dark:text-default-dark text-small hover:text-highlight-light hover:dark:text-highlight-dark ttransition-all leading-none duration-350 ease-in-out"
                        >
                          Demo
                        </a>
                      </div>
                    </div>
                    <p className="text-body text-default-light dark:text-default-dark leading-1.25 transition-all duration-350 ease-in-out">
                      <span className="font-bold">Description: </span>
                      {highlightText(
                        project.description,
                        techArray,
                        "text-highlight-light dark:text-highlight-dark transition-all duration-350 ease-in-out",
                      )}
                    </p>
                  </div>
                  <div className="pt-0.5">
                    <TagsCloud tags={project.tags} />
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
