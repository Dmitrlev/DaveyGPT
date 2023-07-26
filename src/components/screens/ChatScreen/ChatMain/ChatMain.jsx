import {ChatInput} from "./ChatInput/ChatInput";
import styles from './ChatMain.module.css';
import {MessagesBlock} from "./MessagesBlock/MessagesBlock";
import {BiFoodMenu} from "react-icons/bi";

export const ChatMain = ({showMenuLeft, setShowMenuLeft}) => {
  return (
    <div className={styles.container}>
      <button
        className={styles['button-close-menu-left']}
        onClick={() => setShowMenuLeft(!showMenuLeft)}
      >
        <BiFoodMenu color={'white'}/>
      </button>
      <MessagesBlock />
      <ChatInput />
    </div>
  )
};


