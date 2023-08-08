import styles from './ChatScreen.module.css';
import {ChatMain} from "./ChatMain/ChatMain";
import {ChatSelect} from "./ChatSelect/ChatSelect";
import {useState} from "react";

export const ChatScreen = () => {

  const [showMenuLeft, setShowMenuLeft] = useState(false);

  return (
    <div className={styles.container}>
      <ChatSelect
        showMenuLeft={showMenuLeft}
      />
      <ChatMain
        showMenuLeft={showMenuLeft}
        setShowMenuLeft={setShowMenuLeft}
      />
    </div>
  );
};
