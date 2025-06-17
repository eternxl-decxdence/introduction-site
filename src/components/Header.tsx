import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeLanguageSwitcher from "./ThemeLanguageSwitcher";
import NavigationMenu from "./NavigationMenu";
import { useState } from "react";
export default function Header() {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [isNavMenuVisible, setIsNavMenuVisible] = useState(false);

  function openNavMenu() {
    setIsNavMenuOpen(true);
    setTimeout(() => setIsNavMenuVisible(true), 10);
    console.log(
      "open nav, isNav:",
      isNavMenuOpen,
      " isVisible:",
      isNavMenuVisible,
    );
  }
  function closeNavMenu() {
    console.log(
      "closing nav, isNav:",
      isNavMenuOpen,
      " isVisible:",
      isNavMenuVisible,
    );
    setIsNavMenuVisible(false);
    setTimeout(() => setIsNavMenuOpen(false), 350);
  }

  return (
    <header className="bg-background-light dark:bg-background-dark fixed top-0 z-50 flex w-full items-center justify-between shadow-xl transition-all duration-350 ease-in-out">
      <button
        onClick={() => openNavMenu()}
        className="flex h-3 w-3 items-center justify-center"
      >
        <FontAwesomeIcon
          className="text-subheading text-accent-light dark:text-accent-dark transition-all duration-350 ease-in-out"
          icon={faBars}
        />
      </button>
      <ThemeLanguageSwitcher />
      {isNavMenuOpen && (
        <NavigationMenu onClose={closeNavMenu} isVisible={isNavMenuVisible} />
      )}
    </header>
  );
}
