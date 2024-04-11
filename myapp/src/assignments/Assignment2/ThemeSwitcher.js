// 9.Create a theme switcher application using the useContext hook.
// Create a context to manage the current theme (e.g., light or dark).
// Provide a button to toggle between the two themes.
// Use the useContext hook to access the theme value and update it.
// Apply different styles and colors to components based on the selected theme.


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