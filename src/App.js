import {ChatScreen} from "./components/screens/ChatScreen/ChatScreen";
import styles from './App.module.css';
import {Route, Routes} from "react-router-dom";

function App() {

  console.log('Привет мы запускаемся)')

  return (
    <>
      <div className={styles.container}>
        <Routes>
          <Route path='/:id?' element={<ChatScreen />} />
        </Routes>
      </div>
      <p className={styles.errorContainer}>Иди купи себе компьютер!</p>
    </>
  );
}
export default App;
