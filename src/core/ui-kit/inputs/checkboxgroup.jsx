import { Checkbox } from 'antd';

export default function MCheckBoxGroup({options}) {
    const onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
    }
    return(
            <Checkbox.Group options={options} 
             onChange={onChange} />
    )
}