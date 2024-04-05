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