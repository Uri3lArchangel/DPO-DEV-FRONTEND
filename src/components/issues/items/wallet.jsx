import {Form} from "antd";
import MEditInput from "../../../core/ui-kit/inputs/editInput";

export default function MNewIssueWallet() {
    return(
        <>
            <Form.Item label="Fund wallet">
                <MEditInput key={'walletInput1'} placeholder="Fund Wallet Address"/>
            </Form.Item>
            <Form.Item label="Treasury wallet">
                <MEditInput key={'walletInput2'} placeholder="Treasury Wallet Address"/>
            </Form.Item>
        </>
    )
}