import styles from './ChatSelect.module.css';

export const ChatSelect = ({showMenuLeft}) => {
  return (
    <div
      className={styles.container}
      style={{
        minWidth: showMenuLeft ? '250px' : '0',
        width: showMenuLeft ? '250px' : '0',
        paddingLeft: showMenuLeft ? '10px' : '0',
        paddingRight: showMenuLeft ? '10px' : '0',
        paddingBottom: 10,
        paddingTop: 10
      }}
    >
      <div className={styles.wrapper}>
      </div>
    </div>
  )
}