import notifee, { Notification } from "@notifee/react-native";

export const showLocalNotification = async (notiObj: Notification) => {
  const channelId = await notifee.createChannel({
    id: "default",
    name: "Default Channel",
  });
  notifee.displayNotification(notiObj);
};

export const onNotificationEvent = {
  foreground: notifee.onForegroundEvent,
  background: notifee.onBackgroundEvent,
};
