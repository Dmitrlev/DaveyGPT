import SyntaxHighlighter from "react-syntax-highlighter";
import styles from './CodeBlock.module.css';
import customTheme from "./customTheme";
import {IoCopyOutline} from "react-icons/io5";
import {useEffect, useState} from "react";
import {GiCheckMark} from "react-icons/gi";

export const CodeBlock = ({content, language}) => {

  const [onCopy, setOnCopy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content)
      .then(() => {
        console.log('go')
        setOnCopy(true);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if(onCopy === true) {
      setTimeout(() => setOnCopy(false), 2000)
    }
  }, [onCopy])

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.headerBlock}>
          <p className={styles.language}>{language} code</p>
          <button
            className={styles.copyBlock}
            disabled={onCopy}
            onClick={handleCopy}
          >
            {onCopy ?  <GiCheckMark size={10} color={'white'}/> : <IoCopyOutline size={15} color={'white'}/>}
            <p>{onCopy ? 'Copied!' : 'Copy code'}</p>
          </button>
        </div>
        <div className={styles.codeBlock}>
          <SyntaxHighlighter
            lineNumberStyle={{}}
            language={language === 'jsx' ? 'javascript' : language}
            style={customTheme(language)}
            showLineNumbers={false}
            showInlineLineNumbers={false}
          >
            {content}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}