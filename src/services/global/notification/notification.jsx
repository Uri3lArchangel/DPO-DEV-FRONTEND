import { notification } from 'antd';

export const openNotification = (props) => {
        notification.open({
            key: props.key,
            message: props.title,
            description: props.description,
            icon: props.icon
        });
    }

export const closeNotification = (key) => {
        notification.close(key);
}

