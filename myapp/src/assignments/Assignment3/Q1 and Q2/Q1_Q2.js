// 1.create two components: a parent component that acts as a provider and a child component that consumes the context.
// Create a context to manage a user's authentication status (logged in or out).
// Implement a login button in the child component that, when clicked, updates the authentication status in the context to "logged in."
// Display a message in the child component based on the user's authentication status. If the user is logged in, show "Welcome, [username]!" Otherwise, display "Please log in."

// 2.Extend the previous application to demonstrate the use of nested contexts.
// Create a new context to manage user preferences (e.g., theme preference).
// Modify the parent component to provide both the authentication and preferences contexts.
// Create a child component that consumes both contexts.
// Allow the user to change their theme preference (light/dark) using a button in the child component.
// Display the theme preference in the UI and adjust the component's styling accordingly.



import { AuthStatusDisplay } from "./AuthStatusDisplay";
import { AuthProvider } from "./AuthProvider"
import { ThemeProvider } from "./ThemeProvider"

export function Q1_Q2(){
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
