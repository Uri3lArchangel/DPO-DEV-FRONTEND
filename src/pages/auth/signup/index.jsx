import MCRegisterOptions from '../../../components/authentication/register/options';
import MLayoutWithHeaderAndFooter from "../../../layout/layout-headerAndFooter";
import {Row} from "antd";

export default function MPRegisterOptions() {
    return(
        <Row className={'container pt-50 pb-30 d-flex justify-content-space-around'}>
                <MCRegisterOptions key={'registerOptions'}/>
        </Row>
    )
}

MPRegisterOptions.getLayout = function getLayout(page) {
    return(
        <MLayoutWithHeaderAndFooter>
            { page }
        </MLayoutWithHeaderAndFooter>
    )
}