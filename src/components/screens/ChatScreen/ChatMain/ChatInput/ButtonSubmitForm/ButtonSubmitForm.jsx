import styles from "./ButtonSubmitForm.module.css";
import {IoSend} from "react-icons/io5";

export const ButtonSubmitForm = ({show}) => {
  return (
    <button className={styles['button-submit-form']}>
      <div className={`${styles['button-submit-form-fon']} ${show && styles['button-submit-form-fon-active']}`}></div>
      <IoSend className={styles['button-submit-form-icon']} color={'#02ffe7'} size={20}/>
    </button>
  )
}