import styles from './ChatScreen.module.css';
import {ChatMain} from "./ChatMain/ChatMain";
import {ChatSelect} from "./ChatSelect/ChatSelect";
import {useEffect, useState} from "react";
import {LocalStorage} from "../../../services/LocalStorage/LocalStorage.service";

export const ChatScreen = () => {

  const [showMenuLeft, setShowMenuLeft] = useState(LocalStorage.get('showMenuLeft'));

  useEffect(() => {
    LocalStorage.set('showMenuLeft', showMenuLeft)
  }, [showMenuLeft])

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
