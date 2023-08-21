import React, { useEffect, useRef, useState } from "react";
import styles from './ChatInput.module.css';
import { ButtonSubmitForm } from "./ButtonSubmitForm/ButtonSubmitForm";
import { setChatValue } from "../../../../../store/reducers/chat/chat";
import { useDispatch } from "react-redux";
import {textareaResize} from "../../../../../parsing/textareaResize";

export const ChatInput = ({ sendMessage, value, chatId }) => {

  const dispatch = useDispatch();
  const [isFocused, setIsFocused] = useState(false);
  const [isBlock, setIsBlock] = useState(false);
  const MAIN_INPUT = useRef();

  useEffect(() => {
    setIsBlock(value !== '');
  }, [value]);

  const onCountPlaceholderPosition = () => value === '';
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleSubmit = () => !onCountPlaceholderPosition() && sendMessage(value, chatId);
  const handleTextareaKeyDown = event => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit(); // Вызывает вашу функцию отправки сообщения
    }
  };

  return (
    <div className={`${styles.container} ${isFocused ? styles['container-focus'] : ''}`}>
      <form
        onSubmit={handleSubmit}
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
            ref={MAIN_INPUT}
            value={value}
            onChange={(e) => {
              dispatch(setChatValue({chatValue: e.target.value, chatId}));
              textareaResize(e, 150);
            }}
            onKeyDown={handleTextareaKeyDown}
            className={styles.textarea}
          />
          <ButtonSubmitForm show={isBlock}/>
        </div>
      </form>
    </div>
  )
};
