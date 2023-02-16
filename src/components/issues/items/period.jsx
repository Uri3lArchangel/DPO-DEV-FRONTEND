import {rangePickerConfig} from "../../../core/data/config/ui-config";
import MRangeDatePicker from "../../../core/ui-kit/datepicker/rangedatepicker";
import {Form} from "antd";

export default function MNewIssuePeriod() {
    return(
        <>
            <Form.Item label="Active Period" {...rangePickerConfig}>
                <MRangeDatePicker key={'newRangePicker-issuePeriod'} type="new"/>
            </Form.Item>
        </>
    )
}