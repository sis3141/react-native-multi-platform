export const initNetCheck = async () => {
  if (navigator.onLine) {
    return true;
  } else {
    const id = setTimeout(() => {
      clearTimeout(id);
      if (navigator.onLine) {
        return true;
      } else {
        return false;
      }
    }, 500);
  }
};
