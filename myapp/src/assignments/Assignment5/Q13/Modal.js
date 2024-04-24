import { useEffect } from "react";
import './Modal.css'
import { ReactPortal } from "./ReactPortal";

export function Modal({children, isOpen, handleClose}){

    useEffect(()=> {
        const close_on_escape = e => e.key === "Escape" ? handleClose() : null;
        document.addEventListener("keydown", close_on_escape);
        
         return () => document.removeEventListener("keydown", close_on_escape);

    }, [handleClose]);

    if(!isOpen) return null;

    return (
        <ReactPortal>

      <div className="modal" onClick={handleClose}>
        <div className="modal-container" onClick={e=>e.stopPropagation()}>
          <p>{children}</p>
          <br />
          <button className="modal-close-btn" onClick={handleClose}>
            Close me!
          </button>
        </div>
      </div>
        </ReactPortal>
    );
}