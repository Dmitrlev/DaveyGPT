// customTheme.js
import { androidstudio } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const customTheme = (language) => ({
  ...androidstudio,
  [`pre[class*="language-${language}"]`]: {
    ...androidstudio[`pre[class*="language-${language}"]`],
  },
  [`code[class*="language-${language}"]`]: {
    ...androidstudio[`code[class*="language-${language}"]`],

  },
});

export default customTheme;
