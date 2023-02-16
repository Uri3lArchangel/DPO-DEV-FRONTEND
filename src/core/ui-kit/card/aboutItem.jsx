import { Col, Row } from "antd";
import MKNTypography from "../typography/nTypography";

export default function MKAboutItem({ background, info }) {

    return(
        <Row className={"mt-30 pv-30 " + background }>
            <Col key={'iconCol'} xs={24} sm={12} md={8} lg={6}  xl={6}
            className="d-flex justify-content-center align-items-center">
                { info.icon }
            </Col>
            <Col key={'descriptionCol'} xs={24} sm={12} md={16} lg={18}  xl={18}
             className="ph-20">
                <MKNTypography
                    key={'description'}
                    title={info.title}
                    contents={info.content}
                    color="c-white"
                    contentFont={16}
                />
            </Col>
        </Row>
    )
}