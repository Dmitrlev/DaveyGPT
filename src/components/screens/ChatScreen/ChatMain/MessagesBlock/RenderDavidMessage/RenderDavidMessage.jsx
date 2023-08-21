import {CodeBlock} from "../../CodeBlock/CodeBlock";
import styles from './RenderDavidMessage.module.css';
import {renderMessages} from "./renderMessages";

export const RenderDavidMessage = ({state}) => {

  const {messageContent} = state;

  return (
    <div className={styles.container}>
      {renderMessages(messageContent).map((item, index) => {
        if(item.type === 'text') {
          return (
            <div>
              {item?.content?.map((item, index) => {
                if (item.type === 'text') {
                  return item?.content;
                } else if(item.type === 'allotted') {
                  return <span className={styles['allotted-style']}>{item?.content}</span>
                }
              })}
            </div>
          )
        } else if(item.type === 'code') {
          const wordsIndex = item.content.indexOf('\n');
          const firstWord = item.content.substring(0, wordsIndex);
          const remainingWords = item.content.substring(wordsIndex + 1);
          return <CodeBlock content={remainingWords} language={firstWord}/>
        }
      })}
    </div>
  )
}

