import type { ReactNode } from "react";

export default function Card({
  title,
  children,
}: {
  title?: string;
  children?: ReactNode;
}) {
  return (
    <div className="from-gradient-secondary-light to-gradient-light dark:to-gradient-dark dark:from-gradient-secondary-dark w-full max-w-24 rounded-xl bg-linear-to-b p-[0.0625rem] shadow-xl/30 transition-all duration-350 ease-in-out">
      <div
        className={`bg-background-light leading-default dark:bg-background-dark flex flex-col items-center justify-center gap-0.75 rounded-[calc(var(--radius-xl)-0.0625rem)] transition-all duration-350 ease-in-out ${title && "px-2 pt-0.5 pb-1"}`}
      >
        {title && (
          <h2 className="text-subheading leading-nonde text-title-light dark:text-title-dark font-bold transition-all duration-350 ease-in-out">
            {title}
          </h2>
        )}
        {children && children}
      </div>
    </div>
  );
}
