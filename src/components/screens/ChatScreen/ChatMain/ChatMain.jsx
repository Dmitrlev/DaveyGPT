import {ChatInput} from "./ChatInput/ChatInput";
import styles from './ChatMain.module.css';
import {MessagesBlock} from "./MessagesBlock/MessagesBlock";

export const ChatMain = () => {
  return (
    <div className={styles.container}>
      <MessagesBlock />
      <ChatInput />
    </div>
  )
};


