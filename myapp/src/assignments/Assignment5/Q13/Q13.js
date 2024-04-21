// 13.Design and implement a Modal component in React.
// Allow customization of the modal content and provide options to open, close, and toggle the modal.
// Use this component to display various types of content.
import { useState } from "react";
import { Modal } from "./Modal";

export function Q13() {
  const [toggle, setToggle] = useState(false);

  return (
    <div style={{ position: "relative", border: "2px solid ", width: '100vw', height: "100vh", margin: '-1rem'}}>
      <h1>Q13: Modal implementation.</h1>
      <h2>Open modal pop by clicking the button__</h2>
      <br />
      <button onClick={() => setToggle(true)}>Click me!</button>
      <br />
      <Modal isOpen={toggle} handleClose={() => setToggle(false)}>
        This is Modal content
      </Modal>
    </div>
  );
}
