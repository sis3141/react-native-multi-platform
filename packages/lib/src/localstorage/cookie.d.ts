import { CookieGetOptions, CookieSetOptions } from "universal-cookie";
type CookieController = {
  get: (key: string, options?: CookieGetOptions) => any;
  set: (key: string, value: any, options?: CookieSetOptions) => any;
  remove: (key: string, options?: CookieSetOptions | undefined) => any;
  clear: () => void;
};
export declare const cookieController: CookieController;
