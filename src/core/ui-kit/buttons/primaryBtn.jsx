import { Button } from 'antd';

export default function MPrimaryBtn(props) {
    return(
        <Button
            type={props.type}
            size={props.size}
            icon={props.icon}
            onClick={props.action}
            ghost={props.ghost}
            className={props.className}
            htmlType={props.htmlType}
            disabled={props.disabled}
        >{ props.label }</Button>
    );
}