export const isValidJson = (str: string): boolean => {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
};

export const formatJson = (str: string): string => {
  try {
    const parsed = JSON.parse(str);
    return JSON.stringify(parsed, null, 2);
  } catch {
    return str; // Return original if invalid
  }
};

export const minifyJson = (str: string): string => {
  try {
    const parsed = JSON.parse(str);
    return JSON.stringify(parsed);
  } catch {
    return str;
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const parseJson = (str: string): any => {
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
};
