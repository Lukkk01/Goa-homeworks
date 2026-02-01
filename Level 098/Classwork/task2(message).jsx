import styles from "./Message.module.css";

function Message() {
  return (
    <div>
      <p className={styles.text}>
        This paragraph is styled using CSS Modules
      </p>
    </div>
  );
}

export default Message;
