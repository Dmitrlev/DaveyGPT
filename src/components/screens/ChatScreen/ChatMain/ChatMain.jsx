import {ChatInput} from "./ChatInput/ChatInput";
import styles from './ChatMain.module.css';
import {MessagesBlock} from "./MessagesBlock/MessagesBlock";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {FiSettings} from "react-icons/fi";
import {setIsActive, setTemperature} from "../../../../store/reducers/setting/setting";
import {PiChatsDuotone} from "react-icons/pi";
import {useGptMessage} from "../../../../hooks/api/useGptMessage";
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';
import './slider-styles.css';

export const ChatMain = ({showMenuLeft, setShowMenuLeft}) => {

  const dispatch = useDispatch();
  const { sendMessage, cancelRequest } = useGptMessage();

  const idThisChat = Number(useParams().id);
  const dataThisChat = useSelector(state => state.chat.data.find((item) => item.chatId === idThisChat));
  const {temperature} = useSelector(state => state.setting.settings);

  return (
    <div className={styles.container}>
      <div className={styles['button-close-menu-left']}>
        <button
          className={styles['button-close-menu-left-item']}
          onClick={() => setShowMenuLeft(!showMenuLeft)}
        ><PiChatsDuotone color={'white'} size={18}/></button>
        <button
          className={styles['button-close-menu-left-item']}
          onClick={() => dispatch(setIsActive({isActive: true}))}
        ><FiSettings color={'white'} size={18}/></button>
        <div className={styles['slider-block']}  title={titleTem}>
          <div className={styles['slider-wrapper']}>
            <Slider
              min={0}
              max={2}
              step={0.1} // Шаг в десятых долях
              value={temperature}
              onChange={(temperature) => dispatch(setTemperature({temperature}))}
              vertical={true}
            />
            <span>{temperature}</span>
          </div>
          <p>Температура</p>
        </div>
      </div>
      {dataThisChat === undefined ? <FoundRouterUndefined /> : (
        <>
          <MessagesBlock
            dataThisChat={dataThisChat}
          />
          <ChatInput
            sendMessage={sendMessage}
            value={dataThisChat?.chatValue}
            chatId={dataThisChat?.chatId}
          />
        </>
      )}

    </div>
  )
};

const FoundRouterUndefined = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <p
        style={{
          color: "white",
          fontWeight: '800',
          fontSize: '140%',
          opacity: 0.3
        }}
      >Такого чата нет!</p>
    </div>
  )
}

const titleTem = 'Когда вы обращаетесь к ChatGPT, вы можете указать параметр "temperature", который влияет на степень случайности ответов модели. Значение параметра temperature может быть любым числом, но обычно оно находится в диапазоне от 0 до 1.\n' +
  '\n' +
  'При использовании низкого значения temperature (близкого к 0) модель будет давать более точные и предсказуемые ответы. Она будет склонна выбирать наиболее вероятные слова и фразы, что может быть полезно, если вам нужны более конкретные ответы.\n' +
  '\n' +
  'С другой стороны, при использовании высокого значения temperature (близкого к 1) модель будет давать более разнообразные и творческие ответы. Она будет иметь большую свободу выбора слов и фраз, что может быть полезно, если вы ищете более экспериментальные или неожиданные ответы.\n' +
  '\n' +
  'Важно отметить, что при использовании более высокого значения temperature модель может давать менее связанные или нелогичные ответы. Поэтому рекомендуется экспериментировать с разными значениями temperature, чтобы найти оптимальный баланс между точностью и творчеством ответов.'
