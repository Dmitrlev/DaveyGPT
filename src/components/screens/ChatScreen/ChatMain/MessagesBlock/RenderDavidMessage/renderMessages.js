import {renderMessagesTwo} from "./renderMessagesTwo";

export const renderMessages = (text) => {
  const pattern = /```([^`]+)```/gs;
  const matches = [...text.matchAll(pattern)];
  const result = [];

  let lastIndex = 0;

  for (const match of matches) {
    if (match.index > lastIndex) {
      const textSegment = text.substring(lastIndex, match.index).trim();
      if (textSegment.length > 0) {

        result.push({ content: renderMessagesTwo({text: textSegment}), type: 'text' });
      }
    }

    const codeContent = match[1];
    result.push({ content: codeContent, type: 'code' });

    lastIndex = match.index + match[0].length;
  }

  const remainingText = text.substring(lastIndex).trim();
  if (remainingText.length > 0) {
    result.push({ content: renderMessagesTwo({text: remainingText}), type: 'text' });
  }

  return result;
}

