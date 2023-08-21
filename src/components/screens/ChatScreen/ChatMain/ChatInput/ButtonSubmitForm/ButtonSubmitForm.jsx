import styles from "./ButtonSubmitForm.module.css";
import {IoSend} from "react-icons/io5";

export const ButtonSubmitForm = ({show}) => {
  return (
    <button
      type="submit"
      className={styles['button-submit-form']}
    >
      <div className={`${styles['button-submit-form-fon']} ${show && styles['button-submit-form-fon-active']}`}></div>
      <IoSend className={styles['button-submit-form-icon']} color={'#b400ff'} size={20}/>
    </button>
  )
}