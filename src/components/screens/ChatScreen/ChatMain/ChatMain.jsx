import {ChatInput} from "./ChatInput/ChatInput";
import styles from './ChatMain.module.css';

export const ChatMain = () => {
  return (
    <div className={styles.container}>
      <ChatInput />
    </div>
  )
};
