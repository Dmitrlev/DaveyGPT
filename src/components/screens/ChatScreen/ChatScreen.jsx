import styles from './ChatScreen.module.css';
import {ChatMain} from "./ChatMain/ChatMain";
import {ChatSelect} from "./ChatSelect/ChatSelect";

export const ChatScreen = () => {
  return (
    <div className={styles.container}>
      <ChatSelect />
      <ChatMain />
    </div>
  );
};
