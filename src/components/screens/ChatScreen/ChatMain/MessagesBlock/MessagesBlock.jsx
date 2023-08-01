import styles from './MessagesBlock.module.css';
import {RenderDavidMessage} from "./RenderDavidMessage/RenderDavidMessage";
import {RenderClientMessage} from "./RenderClientMessage/RenderClientMessage";

export const MessagesBlock = ({dataThisChat}) => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {dataThisChat?.chatMessages?.map(message => {
          return (
            <div className={`${styles['wrapper-message']} ${message.messageSender === "DAVID" ? styles['wrapper-message-DAVID'] : styles['wrapper-message-CLIENT']}`}>
              <div className={styles['block-message']}>
                {
                  message.messageSender === "DAVID" ?
                    <RenderDavidMessage
                      key={message.messageId}
                      state={message}
                    />
                    :
                    <RenderClientMessage
                      key={message.messageId}
                      state={message}
                    />
                }
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
};




// <CodeBlock
//   content={codeString}
//   language="javascript"
// />













const codeString = '// customTheme.js\n' +
  'import { androidstudio } from \'react-syntax-highlighter/dist/esm/styles/hljs\';\n' +
  '\n' +
  'const customTheme = (language) => ({\n' +
  '  ...androidstudio,\n' +
  '  [`pre[class*="language-${language}"]`]: {\n' +
  '    ...androidstudio[`pre[class*="language-${language}"]`],\n' +
  '  },\n' +
  '  [`code[class*="language-${language}"]`]: {\n' +
  '    ...androidstudio[`code[class*="language-${language}"]`],\n' +
  '\n' +
  '  },\n' +
  '});\n' +
  '\n' +
  'export default customTheme;\n'