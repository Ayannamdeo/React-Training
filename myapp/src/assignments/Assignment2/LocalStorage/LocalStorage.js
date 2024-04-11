// 18.Design a custom hook named useLocalStorage to interact with local storage.
// Create a useLocalStorage hook that allows storing and retrieving data from local storage.
// Implement methods for setting, getting, and removing data using the hook.
// Utilize the localStorage API within the hook to manage data.
// Develop a component that uses the useLocalStorage hook to manage user preferences.
import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage"

export function LocalStorage(){
    const [getter, setter, remover] = useLocalStorage();
    const [text, setText] = useState(getter("textkey") || "");

    return (
        <div>
          <section
            className={`panel-${
              getter("themekey") ? getter("themekey") : "light"
            }`}
            >
            <h1>Question-18: useLocalStorage custom hook.</h1>
            <br />
            <p>Select your preferred theme: </p>
            <input
              type="radio"
              name="theme"
              value="dark"
              onChange={() => setter("themekey", "dark")}
            />
            <label htmlFor="dark">Dark</label>
            <input
              type="radio"
              name="theme"
              value="light"
              onChange={() => setter("themekey", "light")}
            />
            <label htmlFor="light">Light</label>
            <br />
            <textarea
              name="textcontent"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="type something to storage"
            />
            <br />
            <button onClick={() => setter("textkey", text)}>Submit</button>
            <button onClick={() => remover()}>Remove</button>
          </section>
        </div>
    );
}

