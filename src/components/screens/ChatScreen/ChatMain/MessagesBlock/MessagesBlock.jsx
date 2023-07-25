import {CodeBlock} from "../CodeBlock/CodeBlock";
import styles from './MessagesBlock.module.css';

export const MessagesBlock = () => {
  return (
    <div className={styles.container}>
      <CodeBlock
        content={codeString}
        language="javascript"
      />
    </div>
  )
}

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