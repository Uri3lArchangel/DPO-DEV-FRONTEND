import { Col, Form, Row, Steps } from 'antd';
import {useState} from "react";
import { newIssueSteps } from "../../core/data/issue/newissueitems";
import {SwapLeftOutlined, SwapRightOutlined, SaveOutlined} from "@ant-design/icons";
import MPrimaryBtn from "../../core/ui-kit/buttons/primaryBtn";


const { Step } = Steps;
export default function MIssueCreate() {
    const [step, setStep] = useState(0);
    const stepChange = (current) => {
        console.log(current);
        setStep(current)
    }

    const onFinish = (values) => {
        console.log(values);
    }

    return(
        <Row className={'container pt-30'}>
            <Col key={'issueStepsCol'} xs={12} sm={12} md={8} lg={6} xl={6}>
                <Steps key={'issueSteps'} direction="vertical" current={step} onChange={stepChange}>
                    {
                        newIssueSteps.map((el) => (
                            <Step key={el.key} title={el.title} description={el.description}/>
                        ))
                    }
                </Steps>
            </Col>
            <Col key={'stepDetailArea'} xs={12} sm={12} md={16} lg={18} xl={18}
                 className={'d-flex flex-column justify-content-center align-items-center'}
            >
                <Form
                    key={'newIssueForm'}
                    layout={'vertical'}
                    name={'newIssue-form'}
                    onFinish={onFinish}
                >
                    {
                        newIssueSteps[step].content
                    }
                    <div key={'btnArea'} className={'d-block text-center mt-50'}>
                        {
                            step > 0 && (
                                <MPrimaryBtn
                                    label={'Previous'}
                                    action={() => setStep(step - 1)}
                                    className={'mr-30'}
                                    type={'primary'}
                                    size={'large'}
                                    icon={<SwapLeftOutlined />}
                                />
                            )
                        }
                        {
                            step < newIssueSteps.length - 1 && (
                                <MPrimaryBtn
                                    label={'Next'}
                                    action={() => setStep(step + 1)}
                                    type={'primary'}
                                    size={'large'}
                                    icon={<SwapRightOutlined />}
                                />
                            )
                        }
                        {
                            step === newIssueSteps.length - 1 && (
                                <MPrimaryBtn
                                    label={'Submit'}
                                    type={'danger'}
                                    size={'large'}
                                    icon={<SaveOutlined />}
                                    htmlType={'submit'}
                                />
                            )
                        }
                    </div>
                </Form>
            </Col>
        </Row>
    )
}
