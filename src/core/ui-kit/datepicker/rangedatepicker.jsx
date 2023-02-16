import { DatePicker } from "antd";
const { RangePicker } = DatePicker;
import moment from 'moment';

export default function MRangeDatePicker({ type, start_date, end_date }) {
    const dateFormat = 'YYYY-MM-DD';
    if (type === 'new') {
        // Component to be rendered on Issue Creation Page
        return(
                <RangePicker renderExtraFooter={() => 'extra footer'} size="large"/>
        )
    } else if (type === 'edit') {
        //Component to be rendered on Issue Edit Page - admin/issuers
        return(
                <RangePicker
                    defaultValue={[moment(start_date, dateFormat), moment(end_date, dateFormat)]}
                />
        )
    } else if (type === 'view') {
        //Component to rendered on Issue View Page - investors
        return(
                <RangePicker
                    defaultValue={[moment(start_date, dateFormat), moment(end_date, dateFormat)]}
                    disabled
                />
        )
    }

}