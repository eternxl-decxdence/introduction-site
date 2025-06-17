import useLocaleFile from "../hooks/useLocaleFile";
import type Section from "../types/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function ExperienceBlock({ data }: { data: string }) {
  interface Experience {
    title: string;
    place?: string;
    subtitle?: string;
    timespan: string;
    location?: string;
    description: string;
    listedHighlights: string[];
  }
  const text = useLocaleFile<Section<Experience>>(data);
  if (!text) return null;

  return (
    <section
      id={data}
      className="flex flex-col gap-0.75 px-1 py-0.5 transition-all duration-350 ease-in-out"
    >
      <h2 className="text-subheading text-title-light dark:text-title-dark w-full font-bold transition-all duration-350 ease-in-out">
        {text.sectionName}
      </h2>
      {text.sectionData.map((entry, i) => {
        return (
          <div key={i} className="flex flex-col gap-0.25 p-0.25">
            <h3 className="text-list text-title-light dark:text-title-dark w-full leading-none font-semibold transition-all duration-350 ease-in-out">
              {entry.title}
            </h3>
            {entry.subtitle && (
              <h3 className="text-list text-default-light dark:text-default-dark w-full leading-none font-semibold transition-all duration-350 ease-in-out">
                {entry.subtitle}
              </h3>
            )}
            {entry.place && (
              <span className="text-body text-default-light dark:text-default-dark leading-none italic transition-all duration-350 ease-in-out">
                {entry.place}
              </span>
            )}
            <div className="flex items-center justify-start gap-0.25">
              <span className="text-small text-default-light dark:text-default-dark transition-all duration-350 ease-in-out">
                {entry.timespan}
              </span>
              {entry.location && (
                <>
                  <div className="bg-default-light dark:bg-default-dark inline-block min-h-1 min-w-px transition-all duration-350 ease-in-out" />
                  <span className="text-small text-default-light dark:text-default-dark">
                    {entry.location}
                  </span>
                </>
              )}
            </div>
            <p className="text-body text-default-light dark:text-default-dark indent-1 transition-all duration-350 ease-in-out">
              {entry.description}
            </p>
            <ul className="flex list-inside flex-col gap-0.5 p-0.5">
              {entry.listedHighlights.map((highlight, i) => {
                return (
                  <li
                    key={i}
                    className="flex items-start justify-start gap-0.5"
                  >
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="text-accent-light dark:text-accent-dark p-0.25 text-[0.5rem] transition-all duration-350 ease-in-out"
                    />
                    <span className="text-body leading-default text-default-light dark:text-default-dark transition-all duration-350 ease-in-out">
                      {highlight}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </section>
  );
}
