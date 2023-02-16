import {createContext, useEffect, useState} from "react";
import {closeNotification, openNotification} from "../services/global/notification/notification";

const NotificationContext = createContext({
    notification: null, // {title, message, status}
    showNotification: () => {},
    hideNotification: () => {}
})

export function NotificationContextProvider(props) {
    const [activeNotification, setActiveNotification] = useState();

    useEffect(() => {
        if (activeNotification) {
            openNotification(activeNotification);
            const timer = setTimeout(() => {
                closeNotification(activeNotification.key);
                setActiveNotification(null);
            }, 3000);
            return () => {
                clearTimeout(timer);
            }
        }
    }, [activeNotification]);

    const showNotificationHandler = (notificationData) => {
        setActiveNotification(notificationData);
    }

    const hideNotificationHandler = () => {
        setActiveNotification(null);
    }

    const context = {
        notification: activeNotification,
        showNotification: showNotificationHandler,
        hideNotification: hideNotificationHandler
    }

    return(
        <NotificationContext.Provider value={context}>
            { props.children }
        </NotificationContext.Provider>
    )
}

export default NotificationContext;