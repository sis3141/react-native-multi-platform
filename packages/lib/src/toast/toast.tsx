import React, { useState, useCallback, PropsWithChildren } from "react";
import { TextStyle } from "react-native";

import {
  ToastProvider,
  useToast as useToastNotifications,
} from "react-native-toast-notifications";

import { sleep } from "../utils";

const TOAST_DURATION_MS = 1600;

export function useToast() {
  const toast = useToastNotifications();
  const [toastUseable, setToastUsable] = useState(true);
  function showDefaultToast(message: string) {
    if (toast) {
      toast?.show?.(message);
    }
  }
  const showToastWithDuration = useCallback(
    (message: string, sleepDuration = TOAST_DURATION_MS) => {
      if (!toastUseable) {
        return;
      }
      setToastUsable(false);
      showDefaultToast(message);
      sleep(sleepDuration).then(() => setToastUsable(true));
    },
    [toastUseable]
  );
  return { toast, showDefaultToast, showToastWithDuration };
}

interface ToastProviderOption {
  offsetBottom: number;
  textStyle: TextStyle;
  normalColor: Color;
}

export function CustomToastProvider(
  props: PropsWithChildren<ToastProviderOption>
) {
  return (
    <ToastProvider
      duration={TOAST_DURATION_MS}
      offsetBottom={props.offsetBottom}
      textStyle={props.textStyle}
      normalColor={props.normalColor}
    >
      {props?.children}
    </ToastProvider>
  );
}
