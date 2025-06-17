import type { ReactNode } from "react";

export const techArray: Array<string> = [
  "React.js",
  "React",
  "Typescript",
  "Tailwind CSS",
  "Tailwind",
  "Node.js",
  "Express.js",
  "Express",
  "ASP.NET",
  "Electron.js",
  "AWS",
  "MongoDB",
  "SQL",
  "REST API",
  "OAuth 2.0",
  "Vite",
  "API",
];

export function highlightText(
  text: string,
  wordlist: Array<string>,
  highlightedClassnames: string,
): ReactNode {
  const pattern = new RegExp(`(${wordlist.join("|")})`, "gi");
  const parts = text.split(pattern);
  return parts.map((part, i) =>
    wordlist.some((word) => word.toLowerCase() === part.toLowerCase()) ? (
      <span key={i} className={highlightedClassnames}>
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export async function getCurrentLocale(
  lang: "en" | "pl" | "ua" | "ru",
  neededFileName: string,
) {
  const res = await import(`../assets/locale/${lang}/${neededFileName}.json`);
  return res.default[0];
}
