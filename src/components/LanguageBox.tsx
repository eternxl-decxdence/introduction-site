import useLocaleFile from "./hooks/useLocaleFile";
import Card from "./reusable/Card";
import type Section from "./types/Section";

export default function LanguageBox() {
  interface Language {
    langName: string;
    level: number;
  }
  const maxLevel = 5;
  const text = useLocaleFile<Section<Language>>("languages");
  if (!text) return null;

  return (
    <section
      id="languages"
      className="text-list flex items-center justify-center px-1 py-0.5 font-normal transition-all duration-350 ease-in-out"
    >
      <Card title={text.sectionName}>
        {text.sectionData.map((entry, i) => {
          return (
            <div className="flex w-full items-center justify-between" key={i}>
              <span className="text-default-light dark:text-default-dark leading-none font-semibold transition-all duration-350 ease-in-out">
                {entry.langName}
              </span>
              <div className="align-center flex justify-center gap-0.25">
                {Array.from({ length: maxLevel }).map((_, j) => {
                  return (
                    <svg
                      key={j}
                      className={`transition-all duration-350 ease-in-out ${entry.level > j ? "fill-highlight-light dark:fill-highlight-dark" : "fill-gradient-light dark:fill-gradient-dark"} h-0.5 w-1.25`}
                    >
                      <rect width={100} height={100}></rect>
                    </svg>
                  );
                })}
              </div>
            </div>
          );
        })}
      </Card>
    </section>
  );
}
/*  */
