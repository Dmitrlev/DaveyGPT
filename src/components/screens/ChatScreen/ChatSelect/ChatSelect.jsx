import styles from './ChatSelect.module.css';
import {useDispatch, useSelector} from "react-redux";
import {ChatItem} from "./ChatItem/ChatItem";
import {AiOutlinePlus} from "react-icons/ai";
import {addAllChat, addNewChat} from "../../../../store/reducers/chat/chat";
import {useEffect, useLayoutEffect} from "react";
import {LocalStorage} from "../../../../services/LocalStorage/LocalStorage.service";

export const ChatSelect = ({showMenuLeft}) => {

  const dispatch = useDispatch();

  const styleContainer = {
    minWidth: showMenuLeft ? '250px' : '0',
    width: showMenuLeft ? '250px' : '0',
    paddingLeft: showMenuLeft ? '10px' : '0',
    paddingRight: showMenuLeft ? '10px' : '0',
    paddingBottom: 10,
    paddingTop: 10
  };

  const dataThisChat = useSelector(state => state.chat.data);

  useEffect(() => {
    const storedChat = LocalStorage.get('chat');
    if (storedChat) {
      dispatch(addAllChat(storedChat));
    }
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() =>  LocalStorage.set('chat', dataThisChat), 0)
  }, [dataThisChat]);

  return (
    <div
      className={styles.container}
      style={styleContainer}
    >
      <div className={styles.wrapper}>
        <button
          onClick={() => {
            const chatName = prompt('Веддите название нового чата', 'новый');
            chatName && dispatch(addNewChat({chatName}));
          }}
          className={styles['button-new-chat']}
        >
          <AiOutlinePlus color={'white'} size={20}/>
          <p>New Chat</p>
        </button>
        {dataThisChat?.map(chat => (
          <ChatItem
            key={chat.chatId}
            state={chat}
          />
        ))}
      </div>
    </div>
  )
};