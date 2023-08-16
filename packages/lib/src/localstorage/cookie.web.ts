import Cookies from "universal-cookie";

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
  get: (key, options) => cookies.get(key, options),
  set: (key, value, options) =>
    cookies.set(key, value, { ...getDefaultSetType(), ...options }),

  remove: (key, options) => cookies.remove(key, options),
  clear: () =>
    Object.values(
      COOKIE_KEYS.forEach((cookieKey) => {
        cookies.remove(cookieKey);
      })
    ),
};
