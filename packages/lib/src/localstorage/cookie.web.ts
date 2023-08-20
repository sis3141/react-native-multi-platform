import Cookies from "universal-cookie";
import { CookieGetOptions, CookieSetOptions } from "universal-cookie";

import { COOKIE_KEYS } from "./unions";

const cookies = new Cookies();

const getDefaultExpireDate = () => {
  const now = new Date();
  now.setDate(now.getDate() + 90);
  return now;
};

const getDefaultSetType = () => ({
  path: "/",
  expires: getDefaultExpireDate(),
  secure: process.env.NODE_ENV === "production",
});

export const cookieController = {
  get: (key: string, options?: CookieGetOptions | undefined) =>
    cookies.get(key, options),
  set: (key: string, value: any, options?: CookieSetOptions | undefined) =>
    cookies.set(key, value, { ...getDefaultSetType(), ...options }),

  remove: (key: string, options?: CookieSetOptions | undefined) =>
    cookies.remove(key, options),
  clear: () =>
    Object.values(COOKIE_KEYS).forEach((cookieKey) => {
      cookies.remove(cookieKey);
    }),
};
