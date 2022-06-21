/**
 * Notification Hook
 * @param message 알림 메세지
 * @param options 알림 옵션
 * @returns handler
 */
export default function useNotification(
  message: string,
  options: NotificationOptions
) {
  if (!('Notification' in window)) {
    return;
  }

  const fireNotIf = () => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          // eslint-disable-next-line no-new
          new Notification(message, options);
        } else {
          console.log('hi');
        }
      });
    } else {
      // eslint-disable-next-line no-new
      new Notification(message, options);
    }
  };

  // eslint-disable-next-line consistent-return
  return fireNotIf;
}
