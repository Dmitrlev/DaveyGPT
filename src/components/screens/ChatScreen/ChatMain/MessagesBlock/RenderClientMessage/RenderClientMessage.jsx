import styles from './RenderClientMessage.module.css';

export const RenderClientMessage = ({state}) => {
  const {messageContent} = state;

  return (
    <div className={styles.container}>
      <p className={styles.content}>{messageContent}</p>
    </div>
  )
}