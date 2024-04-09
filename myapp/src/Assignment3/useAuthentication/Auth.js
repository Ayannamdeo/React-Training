import { AuthStatusDisplay } from "./AuthStatusDisplay";
import { AuthProvider } from "./AuthProvider"
import { ThemeProvider } from "./ThemeProvider"

export function Auth(){
    return (
      <AuthProvider>
        <ThemeProvider>
          <div>
            <h1>Question-1: user's authentication status</h1>
            <AuthStatusDisplay />
          </div>
        </ThemeProvider>
      </AuthProvider>
    );
}
