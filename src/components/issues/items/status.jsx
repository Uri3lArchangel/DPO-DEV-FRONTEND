import { Form } from 'antd';
import MSwitch from "../../../core/ui-kit/Switch/switch";
import MEditInput from "../../../core/ui-kit/inputs/editInput";

export default function MIssueStatus({issueId}) {
    console.log(issueId);
    return(
        <>
            <Form.Item label={'Pause/Unpause STO'}>
                <MSwitch key={'status-paused'} on={'Paused'} off={'Unpaused'} type={'edit'}/>
            </Form.Item>
            <Form.Item label={'Freeze/Unfreeze Transfers'}>
                <MSwitch key={'status-freeze'} on={'Freeze'} off={'Unfreeze'} type={'edit'}/>
            </Form.Item>
            <Form.Item label={'Can Transfer'}>
                <MEditInput key={'status-TransferInput'} placeholder={'Transfter From'} />
                <MEditInput key={'status-TransferInput'} placeholder={'Transfter To'} />
            </Form.Item>
            <Form.Item label={'Transfer Ownership'}>
                <MEditInput key={'status-newOwner'} placeholder={'New Owner'} />
            </Form.Item>
        </>
    )
}