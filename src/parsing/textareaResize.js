import {parsingPX} from "./parsingPX";

export const textareaResize = (e, cache, setCache, height) => {
  const maxHeight = height;
  const check = parsingPX(e.target.style.height) <= maxHeight;

  setTimeout(() => {
    e.target.style.height = 'auto';
    const newHeight = e.target.scrollHeight;

    if(check) {
      e.target.style.overflow = 'hidden';
      e.target.style.height = `${newHeight}px`;
      setCache(newHeight);
    } else {
      e.target.style.overflow = 'auto';
      e.target.style.height = `${newHeight <= maxHeight ? newHeight : cache}px`;
    }
  }, 1);
};