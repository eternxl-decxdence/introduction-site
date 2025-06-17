import useLocaleFile from "./hooks/useLocaleFile";
import { useState } from "react";
import type Section from "./types/Section";

export default function NavigationMenu({
  onClose,
  isVisible,
}: {
  onClose: () => void;
  isVisible: boolean;
}) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  interface NavItems {
    name: string;
    sectionId: string;
  }
  const text = useLocaleFile<Section<NavItems>>("sections");
  if (!text) return null;

  return (
    <div
      className={`align-start absolute top-0 left-0 flex h-screen w-screen justify-start transition-all duration-350 ease-in-out ${isVisible ? "bg-black/30" : "bg-black/0"}`}
      onClick={() => onClose()}
    >
      <div
        className={`bg-background-light dark:bg-background-dark flex-colshadow-2xl flex h-full w-16 flex-col p-1 transition-all duration-350 ease-in-out ${isVisible ? "m-0" : "-ml-16"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-accent-light dark:text-accent-dark text-subheading pb-1 font-bold">
          {text.sectionName}
        </h2>
        {text.sectionData.map((value, index) => {
          return (
            <div
              key={index}
              className="flex h-3 w-full items-center justify-start gap-0.5"
            >
              <div className="flex aspect-square h-full flex-col items-center justify-center">
                <div className="border-accent-light dark:border-accent-dark -mb-px w-0 grow border-1"></div>
                <div
                  className={`border-accent-light dark:border-accent-dark aspect-square transition-all duration-350 ease-in-out ${activeSection === value.sectionId ? "w-1" : "w-0.5"} rounded-full border-4`}
                ></div>
                <div className="border-accent-light dark:border-accent-dark -mt-px w-0 grow border-1"></div>
              </div>
              <a
                className={`transition-all duration-350 ease-in-out ${activeSection === value.sectionId ? "text-highlight-light dark:text-highlight-dark font-bold" : "text-default-light dark:text-default-dark font-semibold"}`}
                href={`#${value.sectionId}`}
                onClick={() => setActiveSection(value.sectionId)}
              >
                {value.name}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
