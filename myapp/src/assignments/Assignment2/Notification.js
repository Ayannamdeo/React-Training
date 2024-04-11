
// 7.Create a functional component called Notification.
// Use the useState hook to manage a state variable named message initialized to an empty string.
// Use the useEffect hook to show a notification message for 5 seconds whenever the message state changes.
// Render the notification message in a <div> element.
// After 5 seconds, clear the message to hide the notification.import { useEffect, useState } from "react";
import { useEffect, useState } from "react";

export function Notification(){
    const [message, setMessage] = useState("");
    useEffect(() => {
      if (message) {
        const set_time_id = setTimeout(() => setMessage(""), 5000);
        return () => clearTimeout(set_time_id);
      }
    }, [message]);

    return (
      <div>
        <h1>Question-7: Notification</h1>
        <div>
          <input
            type="text"
            name="message"
            placeholder="type your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {message && <h2>{message}</h2>}
        </div>
      </div>
    );
}