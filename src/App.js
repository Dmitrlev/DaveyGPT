import {ChatScreen} from "./components/screens/ChatScreen/ChatScreen";
import styles from './App.module.css';

function App() {
  return (
    <>
      <div className={styles.container}>
        <ChatScreen />
      </div>
      <p className={styles.errorContainer}>Иди купи себе компьютер!</p>
    </>
  );
}
export default App;
