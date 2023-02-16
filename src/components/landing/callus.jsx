import MPrimaryBtn from "../../core/ui-kit/buttons/primaryBtn";
import { PhoneFilled } from "@ant-design/icons";
import {Col, Row, Typography} from "antd";

const { Title } = Typography;

export default function MLandingCallUs() {
    return(
        <Row className="container pb-50 pt-40">
            <Col key={'iconArea'} xs={24} sm={24} md={8} lg={8} xl={8} className="d-flex justify-content-center align-items-center">
                <PhoneFilled key={'icon'} className="font-80 c-green"/>
            </Col>
            <Col key={'diskArea'} xs={24} sm={24} md={16} lg={16} xl={16}  className="text-center">
                <Title key={'title'} className={'c-green'}>Call Us Today</Title>
                <p
                    key={'subDescription'}
                    className="font-24 mb-40"
                >
                    We help business raise capital! What are you waiting for ?
                </p>
                <MPrimaryBtn key={'callBtn'} label="Call Now 647-393-8417" size="large" type="primary"/>
            </Col>
        </Row>
    )
}