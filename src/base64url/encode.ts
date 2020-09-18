export const base64ToBase64Url = (base64: string) =>
  base64.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

const encode = (value: string): string => base64ToBase64Url(btoa(value));

export default encode;
