import {useState} from "react";
import {textareaResize} from "../../../../../parsing/textareaResize";
import styles from './ChatInput.module.css';
import {IoSend} from "react-icons/io5";

export const ChatInput = () => {

  const [cache, setCache] = useState(null);
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const onCountPlaceholderPosition = () => {
    return value === ''
  };

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  return (
    <div className={`${styles.container} ${isFocused ? styles['container-focus'] : ''}`}>
      <form
        className={styles.form}
      >
        <div className={styles.label}>
          <p
            className={
            `${styles.textareaName}` +
            ' ' +
            `${onCountPlaceholderPosition() ? styles.textareaNameRelative : styles.textareaNameAbsolute}`
          }
          >Send a messages</p>
          <textarea
            onFocus={handleFocus}
            onBlur={handleBlur}
            readOnly={false}
            rows={1}
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
              textareaResize(e, cache, setCache, 150)
            }}
            onKeyDown={(e) => textareaResize(e, cache, setCache, 150)}
            className={styles.textarea}
          />
          <button className={styles['button-submit-form']}>
            <IoSend color={'#00bda6'}/>
          </button>
        </div>
      </form>
    </div>
  )
};