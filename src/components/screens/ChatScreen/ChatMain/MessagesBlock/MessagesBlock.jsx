import styles from './MessagesBlock.module.css';
import { RenderDavidMessage } from "./RenderDavidMessage/RenderDavidMessage";
import { RenderClientMessage } from "./RenderClientMessage/RenderClientMessage";
import { useLayoutEffect, useRef } from "react";

export const MessagesBlock = ({ dataThisChat }) => {
  const CONTAINER_SCROLL = useRef();

  useLayoutEffect(() => {
    scrollToBottom();
  }, [dataThisChat?.chatMessages]);

  const scrollToBottom = () => {
    requestAnimationFrame(() => {
      CONTAINER_SCROLL.current.scrollIntoView({ behavior: 'smooth' });
    });
  };

  return (
    <div ref={CONTAINER_SCROLL} className={styles.container}>
      <div className={styles.wrapper}>
        {dataThisChat?.chatMessages?.map((message) => (
          <div
            key={message.messageId}
            className={`${styles['wrapper-message']} ${
              message.messageSender === "DAVID"
                ? styles['wrapper-message-DAVID']
                : styles['wrapper-message-CLIENT']
            }`}
          >
            <div className={styles['block-message']}>
              {message.messageSender === "DAVID" ? (
                <RenderDavidMessage state={message} />
              ) : (
                <RenderClientMessage state={message} />
              )}
              <p style={{
                position: 'absolute',
                top: '0px',
                left: '101%',
                opacity: 0.7,
                fontSize: '60%'
              }}>{message?.messageTime}</p>
            </div>
          </div>
        ))}
      </div>
      <div ref={CONTAINER_SCROLL} />
    </div>
  );
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