import {useEffect, useState} from "react";
import {textareaResize} from "../../../../../parsing/textareaResize";
import styles from './ChatInput.module.css';

export const ChatInput = () => {

  const [cache, setCache] = useState(null);
  const [value, setValue] = useState('');

  useEffect(() => {
    console.log(cache)
  }, [cache])

  const onCountPlaceholderPosition = () => {
    return value === ''
  }

  return (
    <div className={styles.container}>
      <form
        onSubmit={(e) => alert('go')}
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
            readOnly={false}
            autoFocus={true}
            rows={1}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => textareaResize(e, cache, setCache, 150)}
            className={styles.textarea}
          />
        </div>
      </form>
    </div>
  )
};