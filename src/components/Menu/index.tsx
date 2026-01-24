import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useState } from "react";

type AvaibleThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvaibleThemes>("dark");

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Página inicial Home"
        title="Página inicial Home"
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ver Histórico"
        title="Ver Histórico"
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Configurações"
        title="Configurações"
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Mudar tema para Light ou Dark"
        title="Mudar tema para Light ou Dark"
        onClick={handleThemeChange}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
