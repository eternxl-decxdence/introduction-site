import { useState } from "react";
import Card from "./reusable/Card";
import useLocaleFile from "./hooks/useLocaleFile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCircle } from "@fortawesome/free-solid-svg-icons";
import type Section from "./types/Section";
export default function HardSkillsBox() {
  interface HardSkill {
    name: string;
    listItems: string[];
  }

  const [activeElement, setActiveElement] = useState<number | null>(null);

  const text = useLocaleFile<Section<HardSkill>>("hardSkills");
  if (!text) return null;

  return (
    <section
      id="hard-skills"
      className="text-list flex items-center justify-center px-1 py-0.5 font-normal transition-all duration-350 ease-in-out"
    >
      <Card title={text.sectionName}>
        {text.sectionData.map((entry, i) => {
          return (
            <div key={i} className="w-full">
              <button
                className="flex w-full items-center justify-start gap-0.5"
                onClick={() => setActiveElement(activeElement === i ? null : i)}
              >
                <FontAwesomeIcon
                  className={`text-accent-light dark:text-accent-dark ${i === activeElement ? "" : "-rotate-90"} transform-gpu transition-all duration-300 ease-in-out`}
                  icon={faChevronDown}
                />
                <span className="text-default-light dark:text-default-dark hover:text-highlight-light hover:dark:text-highlight-dark text-left leading-none font-semibold transition-all duration-350 ease-in-out">
                  {entry.name}
                </span>
              </button>
              <ul
                className={`flex list-inside flex-col gap-0.75 overflow-hidden pl-1.5 transition-all duration-500 ease-in-out ${i === activeElement ? "pt-0.75 opacity-100" : "max-h-0 pt-0 opacity-0"}`}
              >
                {entry.listItems.map((item, j) => (
                  <li
                    className="flex items-center justify-start gap-0.5 leading-none"
                    key={j}
                  >
                    <FontAwesomeIcon
                      className="text-accent-light dark:text-accent-dark text-[0.5rem] transition-all duration-350 ease-in-out"
                      icon={faCircle}
                    />
                    <span className="text-default-light dark:text-default-dark transition-all duration-350 ease-in-out">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </Card>
    </section>
  );
}
