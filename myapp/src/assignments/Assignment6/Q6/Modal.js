import styles from "./style.module.css";
const Modal = ({ status, setStatus }) => {
  return (
    <div className={styles.divUpper} onClick={() => setStatus(!status)}>
      <div className={styles.divInner}>
        <div>
          <h1>I am inside the Modal</h1>
          <h2> Hello World !</h2>
        </div>
      </div>
    </div>
  );
};

export default Modal;