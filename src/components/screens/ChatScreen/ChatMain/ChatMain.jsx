import {ChatInput} from "./ChatInput/ChatInput";
import styles from './ChatMain.module.css';
import {MessagesBlock} from "./MessagesBlock/MessagesBlock";
import {BiFoodMenu} from "react-icons/bi";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

export const ChatMain = ({showMenuLeft, setShowMenuLeft}) => {

  const idThisChat = Number(useParams().id);

  const dataThisChat = useSelector(state => state.chat.data.find((item) => item.chatId === idThisChat));

  return (
    <div className={styles.container}>
      <div className={styles['button-close-menu-left']}>
        <button
          className={styles['button-close-menu-left-item']}
          onClick={() => setShowMenuLeft(!showMenuLeft)}
        ><BiFoodMenu color={'white'} size={18}/></button>
        <button
          className={styles['button-close-menu-left-item']}
          onClick={() => setShowMenuLeft(!showMenuLeft)}
        ><BiFoodMenu color={'white'} size={18}/></button>
      </div>
      <MessagesBlock dataThisChat={dataThisChat}/>
      <ChatInput />
    </div>
  )
};


