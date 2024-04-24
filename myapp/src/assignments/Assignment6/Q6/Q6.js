// 6.Create a React component (Modal) that displays a modal dialog with content. Users can open and close the modal. Write tests to check if the modal opens and closes when triggered.

import { useState } from "react";
import Modal from "./Modal";

export function Q6 () {
  const [status, setStatus] = useState(false);
  return (
    <div >
      <button onClick={() => setStatus(!status)}>Toggle</button>
      <h1>Modal</h1>
      {status ? <Modal status={status} setStatus={setStatus} /> : null}
    </div>
  );
};

