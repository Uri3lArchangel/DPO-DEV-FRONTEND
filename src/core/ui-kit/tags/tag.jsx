import { Tag } from 'antd';

export default function MTag({ label, color }) {
    return(
        <Tag color={color}>{ label }</Tag>
    )
}