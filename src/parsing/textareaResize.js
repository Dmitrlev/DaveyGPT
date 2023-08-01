export const textareaResize = (e, height) => {
  const maxHeight = height;
  const check = e.target.scrollHeight <= maxHeight;

  setTimeout(() => {
    e.target.style.height = 'auto';
    const newHeight = e.target.scrollHeight;
    if(check) {
      e.target.style.overflow = 'hidden';
      e.target.style.height = `${newHeight}px`;
    } else {
      e.target.style.overflow = 'auto';
      e.target.style.height = `${maxHeight}px`;
    }
  }, 1);
};