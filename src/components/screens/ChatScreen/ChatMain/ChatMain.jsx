import {ChatInput} from "./ChatInput/ChatInput";
import styles from './ChatMain.module.css';
import {MessagesBlock} from "./MessagesBlock/MessagesBlock";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {FiSettings} from "react-icons/fi";
import {setIsActive} from "../../../../store/reducers/setting/setting";
import {PiChatsDuotone} from "react-icons/pi";
import {useGptMessage} from "../../../../hooks/api/useGptMessage";

export const ChatMain = ({showMenuLeft, setShowMenuLeft}) => {

  const dispatch = useDispatch();
  const { sendMessage, cancelRequest } = useGptMessage();

  const idThisChat = Number(useParams().id);
  const dataThisChat = useSelector(state => state.chat.data.find((item) => item.chatId === idThisChat));

  return (
    <div className={styles.container}>
      <div className={styles['button-close-menu-left']}>
        <button
          className={styles['button-close-menu-left-item']}
          onClick={() => setShowMenuLeft(!showMenuLeft)}
        ><PiChatsDuotone color={'white'} size={18}/></button>
        <button
          className={styles['button-close-menu-left-item']}
          onClick={() => dispatch(setIsActive({isActive: true}))}
        ><FiSettings color={'white'} size={18}/></button>
      </div>
      <MessagesBlock
        dataThisChat={dataThisChat}
      />
      <ChatInput
        sendMessage={sendMessage}
        value={dataThisChat?.chatValue}
        chatId={dataThisChat?.chatId}
      />
    </div>
  )
};


