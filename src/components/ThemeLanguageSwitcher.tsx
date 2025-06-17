import { faGlobe, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { selectTheme, toggleTheme } from "./redux/slices/themeSlice";
import { useState } from "react";
import LanguageSwitchDialog from "./LanguageSwitchDialog";

export default function ThemeLanguageSwitcher() {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  function openDialog() {
    setIsDialogOpen(true);
    setTimeout(() => setIsVisible(true), 10);
  }
  function closeDialog() {
    setIsVisible(false);
    setTimeout(() => setIsDialogOpen(false), 350);
  }

  return (
    <div className="relative flex items-center justify-center gap-0">
      <button
        className="flex h-3 w-3 items-center justify-center"
        onClick={() => openDialog()}
      >
        <FontAwesomeIcon
          className="text-subheading text-accent-light dark:text-accent-dark transition-all duration-350 ease-in-out"
          icon={faGlobe}
        />
      </button>
      <button
        className="flex h-3 w-3 items-center justify-center"
        onClick={() => dispatch(toggleTheme())}
      >
        <FontAwesomeIcon
          className="text-subheading text-accent-light dark:text-accent-dark transition-all duration-350 ease-in-out"
          icon={theme === "light" ? faMoon : faSun}
        />
      </button>
      {isDialogOpen ? (
        <LanguageSwitchDialog onClose={closeDialog} isVisible={isVisible} />
      ) : null}
    </div>
  );
}
