import {useEffect, useState} from "react";
import {textareaResize} from "../../../../../parsing/textareaResize";
import styles from './ChatInput.module.css';
import {ButtonSubmitForm} from "./ButtonSubmitForm/ButtonSubmitForm";
import {setChatValue} from "../../../../../store/reducers/chat/chat";
import {useDispatch} from "react-redux";

export const ChatInput = ({value, chatId}) => {

  const dispatch = useDispatch();
  const [isFocused, setIsFocused] = useState(false);
  const [isBlock, setIsBlock] = useState(false);

  useEffect(() => {
    setIsBlock(value !== '');
  }, [value]);

  useEffect(() => {
    console.log(value)
  }, [chatId])

  const onCountPlaceholderPosition = () => value === '';

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className={`${styles.container} ${isFocused ? styles['container-focus'] : ''}`}>
      <form
        className={styles.form}
      >
        <div className={styles.label}>
          <p className={`${styles.textareaName} ${onCountPlaceholderPosition() ? styles.textareaNameRelative : styles.textareaNameAbsolute}`}>
            Send a messages
          </p>
          <textarea
            onFocus={handleFocus}
            onBlur={handleBlur}
            readOnly={false}
            rows={1}
            value={value}
            onChange={(e) => {
              dispatch(setChatValue({chatValue: e.target.value, chatId}));
              textareaResize(e, 150);
            }}
            className={styles.textarea}
          />
          <ButtonSubmitForm show={isBlock}/>
        </div>
      </form>
    </div>
  )
};