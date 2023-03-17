import ytdl from "ytdl-core";

export const validateUrl = (url: string): boolean => {
  let isValid = false;

  if (ytdl.validateURL(url)) 
      isValid = true;

  return isValid;
}

export const validateId = (url: string): boolean => {
  let isValid = false;

  if (ytdl.validateID(url)) 
      isValid = true;

  return isValid;
}