import { CookieSetOptions, CookieGetOptions } from "universal-cookie";

import { LocalStorage } from "./localstorage";

export const cookieController = {
  get: async (key, options: CookieGetOptions) => LocalStorage.getItem(key),
  set: async (key, value, options: CookieSetOptions) =>
    LocalStorage.setItem(key, value),
  clear: async () => LocalStorage.clear(),
  remove: async (key) => LocalStorage.removeItem(key),
};
