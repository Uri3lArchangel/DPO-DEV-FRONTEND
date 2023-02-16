import {useState} from "react";
import {Form, Row, Col, Input, Select, Card, Typography, Checkbox} from 'antd';
import {SendOutlined} from "@ant-design/icons";
//Static Data
import { agreeItems } from "../../core/data/config/contactinfo";
import {DTRegisterTypes} from "../../core/data/config/registerType";
//Service
import {
    validateMessages,
    onAgreeChange,
    onFinish
} from "../../services/local/staticInfo/contact";
import {useRouter} from "next/router";
import MPrimaryBtn from "../../core/ui-kit/buttons/primaryBtn";

const { Option } = Select;
const { Meta } = Card;
const { Title } = Typography;

export default function MCContact() {
    const [disabled, setDisabled] = useState(true);
    const router = useRouter();
    return(
        <>
            <Row className='container pt-50 pb-30'>
                <Col key={'registerOptions'} xs={24} sm={24} md={12} lg={9} xl={7}
                     className={'pr-40 d-flex flex-column justify-content-space-around'}
                >
                    {
                        DTRegisterTypes.map((el) => (
                            <Card
                                key={el.id}
                                className={'mb-20'}
                                actions={[
                                    <MPrimaryBtn
                                        key={'custom'}
                                        icon={<SendOutlined />}
                                        type={'primary'}
                                        label={el.button.label}
                                        action={() => router.push(el.button.routerLink)}
                                    />
                                ]}
                            >
                                <Meta
                                    key={'optionDescription'}
                                    className="text-center"
                                    title={ <Title level={5}>{el.title}</Title> }
                                    description={ el.process.map((el, index) => (
                                        <p key={index} style={{color: 'black !important'}}>{index + 1}.{el}</p>
                                    )) }
                                />
                            </Card>
                        ))
                    }
                </Col>
                <Col key={'contact-formArea'} xs={24} sm={24} md={12} lg={15} xl={17} >
                    <Title key={'title'} className={'mt-30 c-green text-center'}>Contact Us</Title>
                    <Form key={'contact-form'} name={"contactus-form"} onFinish={onFinish} validateMessages={validateMessages}
                          layout={'vertical'}
                          initialValues={{role: '2'}}
                    >
                        <Form.Item key={'userName'} name={['user', 'name']}
                                   label={'Name'}
                                   rules={[
                                       {
                                           required: true
                                       }
                                   ]}
                        >
                            <Input key={'userNameInput'} size={'large'}/>
                        </Form.Item>
                        <Form.Item
                            key={'userEmail'}
                            name={['user', 'email']}
                            label="Email"
                            rules={[
                                {
                                    type: 'email',
                                    required: true
                                },
                            ]}
                        >
                            <Input key={'userEmailInput'} size={'large'}/>
                        </Form.Item>
                        <Form.Item
                            key={'userRole'}
                            name={['user', 'role']}
                            label={'Your Role'}
                            rules={[
                                {
                                    required: true
                                }
                            ]}
                        >
                            <Select key={'userRoleSelect'} size={'large'} >
                                <Option key={'1'} value={'1'}>Investor</Option>
                                <Option key={'2'} value={'2'}>Issuer</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            key={'userPhone'}
                            name={['user', 'phoneNumber']}
                            label={'Phone Number'}
                        >
                            <Input key={'userPhoneInput'} size={'large'}/>
                        </Form.Item>
                        <Form.Item
                            key={'userMessage'}
                            name={['user', 'message']}
                            label={'Message'}
                            rules={[
                                {
                                    // TODO: Need to fix textarea validation
                                    required: true
                                }
                            ]}
                        >
                            <Input.TextArea key={'userMessageArea'} rows={5} maxLength={500} showCount placeholder={'Enter A Message'}/>
                        </Form.Item>
                        <Form.Item
                            key={'userAgreement'}
                            name={['user', 'agreement']}
                        >
                            <Checkbox key={'userAgreementCheckBox'} onChange={() => setDisabled(onAgreeChange)}>
                                {agreeItems.storeInfo}
                            </Checkbox>
                        </Form.Item>
                        <Form.Item key={'submitBtn'} className={'text-center'} >
                            <MPrimaryBtn
                                key={'submit'}
                                label={'Send Message'}
                                type={'primary'}
                                size={'large'}
                                htmlType={'submit'}
                                icon={<SendOutlined />}
                                disabled={disabled}
                            />
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    )
}
