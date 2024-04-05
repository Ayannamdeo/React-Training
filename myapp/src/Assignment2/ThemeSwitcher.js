import { createContext, useContext, useState } from "react"

const ThemeContext = createContext("light");

export function ThemeSwitcher() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <Display />
    </ThemeContext.Provider>
  );
}
function Display() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <section className={`panel-${theme}`}>
        <h1>Question-9: Theme Switcher</h1>
      </section>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "light" ? `Dark Mode` : `Light Mode`}
      </button>
    </div>
  );
}