export const renderMessagesTwo = ({text}) => {
  const pattern = /`([^`]+)`/g;
  const matches = [...text.matchAll(pattern)];
  const result = [];

  let lastIndex = 0;

  for (const match of matches) {
    if (match.index > lastIndex) {
      const textSegment = text.substring(lastIndex, match.index).trim();
      if (textSegment.length > 0) {

        result.push({ content: textSegment, type: 'text' });
      }
    }

    const codeContent = match[1];
    result.push({ content: codeContent, type: 'allotted' });

    lastIndex = match.index + match[0].length;
  }

  const remainingText = text.substring(lastIndex).trim();
  if (remainingText.length > 0) {
    result.push({ content: remainingText, type: 'text' });
  }

  return result;
}

