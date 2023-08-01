import {ChatScreen} from "./components/screens/ChatScreen/ChatScreen";
import styles from './App.module.css';
import {Route, Routes} from "react-router-dom";
import {SettingsScreen} from "./components/screens/SettingsScreen/SettingsScreen";

function App() {

  console.log('Привет мы запускаемся)')

  return (
    <>
      <div className={styles.container}>
        <Routes>
          <Route path='/:id?' element={<ChatScreen />} />
          <Route path='/settings' element={<SettingsScreen />} />
        </Routes>
      </div>
      <p className={styles.errorContainer}>Иди купи себе компьютер!</p>
    </>
  );
}
export default App;
