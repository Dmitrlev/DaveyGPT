import styles from './ChatItem.module.css';
import {NavLink} from "react-router-dom";

export const ChatItem = ({state}) => {

  const {
    chatName,
    chatId,
    chatValue,
    chatMessages,
    chatLoader,
    chatFixed,
    chatPrint,
  } = state;

  return (
    <NavLink
      to={`/${chatId}`}
      className={styles.container}
    >
      <p className={styles.name}>{chatName}</p>
      <div className={styles['bottom-content']}>
        <p className={styles['bottom-content-role-name']}>DaveyGPT:</p>
        <p className={styles['bottom-content-content-text']}>
          Тут должно быть твое последнее сообщение
        </p>
      </div>
    </NavLink>
  )
}