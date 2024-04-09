import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useTheme } from "./ThemeProvider";

export function AuthStatusDisplay(){
    const {status, setStatus} = useContext(AuthContext)
    const {theme, setTheme} = useTheme();

    return (
      <div>
    <section className={`panel-${theme}`}>
            <button onClick={() => setStatus(status === "logged in" ? "out" : "logged in") } > {status === "logged in" ? "Logout" : "Login"} </button>
            <button onClick={()=> setTheme(theme === "light" ? "dark" : "light")}>ToggleTheme</button>
            <h2>
              {status === "logged in" ? "Welcome, Ayan!" : "Please log in."}
            </h2>
    </section>
      </div>
    );
}