import { store } from 'react-notifications-component';

function showNotification(notificationType: any, text: string) {
  store.addNotification({
        message: text,
        type: notificationType,
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 5000,
        }
    });
}

export default showNotification;