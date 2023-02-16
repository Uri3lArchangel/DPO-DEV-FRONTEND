import { Tabs, Form, Row, Col } from 'antd';
import { useState } from "react";
import { SaveOutlined } from "@ant-design/icons";
import {existingIssueItems} from "../../core/data/issue/existingissueitems";
import MPrimaryBtn from "../../core/ui-kit/buttons/primaryBtn";

const { TabPane } = Tabs;

export default function MEditIssueDetailById({issueId}) {
    const [current, setCurrent] = useState(1);
    const saveAction = () => {
        // setCurrent()
    }
    return(
        <Row className={'container'} justify={'center'}>
            <Col key={'editCol'} xs={24} sm={20} md={16} lg={12} xl={8}>
                <div key={'tabsArea'} className={'pt-40 pl-30 card-container'}>
                    <Tabs
                        key={'editTabs'}
                        defaultActiveKey={current}
                        tabPosition="top"
                        size="large"
                        onChange={() => saveAction()}
                        type={'card'}
                    >
                        {
                            existingIssueItems.map((el) => (
                                    <TabPane tab={el.title} key={el.key}>
                                        <div key={'container'} className={'container'}>
                                            <Form
                                                key={'issueEditForm'}
                                                layout={'vertical'}
                                                name={'issueEdit-form'}
                                            >
                                                {el.contentGenerator({issueId})}
                                            </Form>
                                        </div>
                                        <div key={'SaveChangeArea'} className={'d-block text-center pt-40'}>
                                            <MPrimaryBtn
                                                key={'saveBtn'}
                                                label={'Save Changes'}
                                                type={'primary'}
                                                size={'large'}
                                                icon={<SaveOutlined />}
                                            />
                                        </div>
                                    </TabPane>
                            ))
                        }
                    </Tabs>
                </div>
            </Col>
        </Row>
    )
}