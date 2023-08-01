import styles from './SettingsScreen.module.css';
import {useDispatch, useSelector} from "react-redux";
import {setIsActive} from "../../../store/reducers/setting/setting";
import {IoCloseOutline} from "react-icons/io5";

export const SettingsScreen = () => {

  const dispatch = useDispatch();
  const {isActive} = useSelector(state => state.setting);

  return (
    <div className={`${styles.container} ${!isActive && styles.fonNone}`}>
      <div
        onClick={() => dispatch(setIsActive({isActive: false}))}
        className={`${styles.fon} ${!isActive && styles.fonNone}`}
      ></div>
      <div className={`${styles.block} ${!isActive && styles.blockNone}`}>
        <button
          className={styles['button-close-block']}
          onClick={() => dispatch(setIsActive({isActive: false}))}
        ><IoCloseOutline color={'white'} size={25}/></button>
      </div>
    </div>
  )
}