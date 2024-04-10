// 10.Develop a language switcher application using the useContext hook.
// Create a context to manage the current language (e.g., English or Spanish).
// Provide buttons to switch between languages.
// Use the useContext hook to access the current language value.
// Display different language versions of the application's content.


import { createContext,useContext, useState } from "react";

const LanguageContext = createContext();

export function LanguageSwitch() {
  const [language, setLanguage] = useState("English");
  const toggle_language = () =>
    setLanguage(prevState => prevState === "English" ? "Japanese" : "English");

  return (
    <LanguageContext.Provider value={{ language, toggle_language }}>
      <div>
        <h1>Question-10: LanguageSwitch</h1>
        <Content />
        <Button />
      </div>
    </LanguageContext.Provider>
  );
}

function Content() {
  const { language } = useContext(LanguageContext);
  return (
    <h1>
      {language === "English" ? "This is English Language" : "これは日本語です"}
    </h1>
  );
}
function Button() {
  const { language, toggle_language } = useContext(LanguageContext);
  return (
    <button onClick={toggle_language}>
      {language === "English" ? "Japanese" : "English"}
    </button>
  );
}