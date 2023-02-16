import { Row, Col } from 'antd';
import { tempIssues } from "../../core/data/examples/issues_temp";
import MIssueCard from "../../core/ui-kit/card/issuecard";

export default function MIssueOverView() {

    return(
        <Row className="container pt-30">
            {
                tempIssues.map((el, index) => (
                    <Col xs={24} sm={24} md={12} lg={8} xl={6} className="pb-30 justify-content-center d-flex"
                         key={el.id}
                    >
                        <MIssueCard key={'issueCard' + index} info={el} />
                    </Col>
                ))
            }
        </Row>
    )
}


