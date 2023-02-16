import { Switch } from 'antd';

export default function MSwitch({ on, off, type, checked }) {
    if (type == 'edit') {
    // Switch on editable Issue Page - admin/issuers
        return(
            <Switch
                checkedChildren={on}
                unCheckedChildren={off}
                checked={checked}
            />
        )
    } else {
    // Switch on viewable Issue Page - Investors
        return(
            <Switch
                checkedChildren={on}
                unCheckedChildren={off}
                checked={checked}
                disabled
            />
        )
    }
}