import { Input } from 'antd';

export default function MEditInput({prefix,suffix, placeholder}) {
    return(
            <Input
            placeholder={placeholder}
            prefix={prefix}
            suffix={suffix}
            size='large'
            />
    )
}