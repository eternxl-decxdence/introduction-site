import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { selectLanguage } from "./redux/slices/languageSlice";
import { setLanguage } from "./redux/slices/languageSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function LanguageSwitchDialog({
  onClose,
  isVisible,
}: {
  onClose: () => void;
  isVisible: boolean;
}) {
  const dispatch = useAppDispatch();
  const lang = useAppSelector(selectLanguage);
  const buttons: { locale: "en" | "pl" | "ru" | "ua"; text: string }[] = [
    { locale: "en", text: "English" },
    { locale: "pl", text: "Polski" },
    { locale: "ua", text: "Українська" },
    { locale: "ru", text: "Русский" },
  ];
  function changeLanguage(locale: "en" | "pl" | "ru" | "ua") {
    dispatch(setLanguage(locale));
  }
  return (
    <div
      className="absolute top-3 right-0 z-0 flex h-screen w-screen flex-col items-end justify-start"
      onClick={onClose}
    >
      <div
        className={`bg-background-light dark:bg-background-dark flex w-10 flex-col items-start justify-between gap-0.5 overflow-hidden rounded-b-xl p-1 shadow-2xl transition-all duration-350 ease-in xl:shadow-xl ${isVisible ? "h-10" : "h-0"}`}
      >
        {buttons.map((button, i) => {
          return (
            <button
              className="flex w-full items-center justify-start"
              key={i}
              onClick={() => changeLanguage(button.locale)}
            >
              {lang === button.locale ? (
                <div className="flex w-full items-center justify-between">
                  <span className="text-accent-light dark:text-accent-dark leading-none font-medium transition-all duration-350 ease-in-out select-none">
                    {button.text}
                  </span>
                  <FontAwesomeIcon
                    className="text-accent-light dark:text-accent-dark text-[0.5rem] transition-all duration-350 ease-in-out"
                    icon={faCircle}
                  />
                </div>
              ) : (
                <span className="text-default-light dark:text-default-dark w-full text-left leading-none transition-all duration-350 ease-in-out select-none">
                  {button.text}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
