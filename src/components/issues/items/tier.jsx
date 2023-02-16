import {Form} from "antd";
import MEditInput from "../../../core/ui-kit/inputs/editInput";

export default function MNewIssueTier() {
    return(
        <>
            <Form.Item  label="Rate per Tier">
                <MEditInput key={'tier-Rate'} prefix="$" placeholder="Rate Per Tier"/>
            </Form.Item>
            <Form.Item label="Total ST per Tier">
                <MEditInput key={'tier-totalST'} placeholder="Total ST per Tier"/>
            </Form.Item>
        </>
    )
}