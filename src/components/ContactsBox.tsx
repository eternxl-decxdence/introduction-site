import Card from "./reusable/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconMap } from "./types/IconMap";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import useLocaleFile from "./hooks/useLocaleFile";
import type Section from "./types/Section";

export default function ContactsBox() {
  interface Contact {
    icon: string;
    text: string;
    link?: string;
  }
  const text = useLocaleFile<Section<Contact>>("contacts");

  if (!text) return null;

  return (
    <section
      id="contacts"
      className="text-list flex items-center justify-center px-1 py-0.5 font-normal transition-all duration-350 ease-in-out"
    >
      <Card title={text.sectionName}>
        {text.sectionData.map((entry, i) => {
          return (
            <span
              key={i}
              className="flex w-full items-center justify-start gap-0.5 leading-none font-normal"
            >
              <FontAwesomeIcon
                icon={IconMap[entry.icon]}
                className="text-accent-light dark:text-accent-dark text-subheading transition-all duration-350 ease-in-out"
              />
              {entry.link ? (
                <a
                  target="_blank"
                  href={entry.link}
                  className="text-default-light dark:text-default-dark hover:text-highlight-light dark:hover:text-highlight-dark transition-all duration-350 ease-in-out hover:font-medium"
                >
                  {entry.text}
                </a>
              ) : (
                <span className="text-default-light dark:text-default-dark transition-all duration-350 ease-in-out">
                  {entry.text}
                </span>
              )}
            </span>
          );
        })}

        <div className="flex w-full items-center justify-between">
          <a
            href="https://github.com/eternxl-decxdence"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-light text-default-light dark:text-default-dark dark:bg-gradient-dark hover:bg-effects-light dark:hover:bg-effects-dark hover:text-tag-light flex items-center gap-0.75 rounded-xl px-0.75 py-0.5 shadow-lg transition-all duration-350 ease-in-out"
          >
            <FontAwesomeIcon className="text-subheading" icon={faGithub} />
            <span className="leading-none">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/tymofii-soliar-a2b733314/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-light text-default-light hover:text-tag-light hover:bg-effects-light dark:hover:bg-effects-dark dark:text-default-dark dark:bg-gradient-dark flex items-center gap-0.75 rounded-xl px-0.75 py-0.5 shadow-lg transition-all duration-350 ease-in-out"
          >
            <FontAwesomeIcon className="text-subheading" icon={faLinkedin} />
            <span className="leading-none">LinkedIn</span>
          </a>
        </div>
      </Card>
    </section>
  );
}
