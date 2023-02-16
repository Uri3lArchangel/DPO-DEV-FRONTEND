import {Row, Col, Card} from 'antd';
import MPrimaryBtn from "../../core/ui-kit/buttons/primaryBtn";
import {useRouter} from "next/router";

export default function MLandingOptions({cards}) {
    const router = useRouter();
    return(
        <Row className="container pt-30">
            {
                cards.map((el, index) => (
                    <Col key={el.key} xs={24} sm={24} md={8} lg={8} xl={8} className={'mt-30'}>
                        <Card
                            key={'card' + index}
                            className="pt-30 mr-20 option"
                            cover={ el.icon }
                            actions={[
                                <MPrimaryBtn key={'actionKey'} size="large" type="primary" label={ el.button.label }
                                    action={() => router.push(el.button.url)}
                                />
                            ]}
                        >
                            <Card.Meta
                                key={'metaData'+ index}
                                className="text-center"
                                title={ el.title }
                                description={ el.description }
                            />
                        </Card>
                    </Col>
                ))
            }
        </Row>
    )
}