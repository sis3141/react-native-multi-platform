import { LocalStorage } from "./localstorage";

export const cookieController = {
  get: (key: string) => LocalStorage.getString(key),

  set: (key: string, value: any) => LocalStorage.set(key, value),
  remove: async (key: string) => LocalStorage.delete(key),
  clear: async () => LocalStorage.clearAll(),
};
