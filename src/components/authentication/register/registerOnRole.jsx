import {Checkbox, Col, Form, Input, Row, Typography} from "antd";
import {MailOutlined, SendOutlined} from "@ant-design/icons";
import {agreeItems} from "../../../core/data/config/contactinfo";
import {useState} from "react";
import {useForm} from "antd/lib/form/Form";
import MPrimaryBtn from "../../../core/ui-kit/buttons/primaryBtn";

export default function MCRegisterOnRole(props) {
    let role;
    switch (props.role) {
        case 'investor':
            role = 'Investor';
            break ;
        case 'issuer':
            role = 'Issuer';
            break ;
        case 'accredited':
            role = 'Accredit Investor'
            break ;
    }

    const [disabled, setDisabled] = useState(true);

    const [form] = useForm();

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!'
        }
    }

    const onFinish = (values) => {
        console.log(values);
    }

    const confirmChecked = () => {
        if (form.getFieldValue('storeAgreement') && form.getFieldValue('purchaseAgreement')) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }

    return(
        <Row className={'container pt-50 pb-30 '} justify={'center'}>
            <Col key={'issueRegisterCol'} md={20} sm={24} xs={24} lg={16} xl={12}>
                <Typography.Title key={'issuerRegister'} className={'c-green text-center'}>{role} Registration</Typography.Title>
                <Form
                    form={form}
                    key={'issuerRegister-form'}
                    name={'issuerRegister-form'}
                    layout={'vertical'}
                    onFinish={onFinish}
                    validateMessages={validateMessages}
                    scrollToFirstError
                >
                    <Form.Item
                        key={'userEmail'}
                        name={'email'}
                        label="Email"
                        rules={[
                            {
                                type: 'email',
                                required: true
                            },
                        ]}
                        hasFeedback
                    >
                        <Input
                            key={'userEmailInput'}
                            size={'large'}
                            placeholder={'Enter your email address'}
                            prefix={<MailOutlined className="site-form-item-icon"/>}
                        />
                    </Form.Item>
                    <Form.Item
                        key={'confirmEmail'}
                        name={'confirmEmail'}
                        label="Confirm Email"
                        rules={[
                            {
                                required: true
                            },
                            ({getFieldValue}) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('email') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two email addresses you have entered do not match'))
                                }
                            })
                        ]}
                        hasFeedback
                    >
                        <Input
                            key={'confirmEmailInput'}
                            size={'large'}
                            placeholder={'Confirm your email address'}
                            prefix={<MailOutlined className="site-form-item-icon"/>}
                        />
                    </Form.Item>
                    <Form.Item
                        key={'userPassword'}
                        name={'password'}
                        label="Password"
                        rules={[
                            {
                                required: true
                            }
                        ]}
                        hasFeedback
                    >
                        <Input.Password key={'userPasswordInput'} size={'large'} placeholder={'Enter your password'}/>
                    </Form.Item>
                    <Form.Item
                        key={'confirmPassword'}
                        name={"confirm"}
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password key={'confirmPasswordInput'} size={'large'}/>
                    </Form.Item>
                    <Form.Item
                        key={'storeInfoAgreement'}
                        name={'storeAgreement'}
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (_, value) =>
                                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                            },
                        ]}
                    >
                        <Checkbox
                            key={'userAgreementCheckBox'}
                            onChange={confirmChecked}
                        >{agreeItems.storeInfo}</Checkbox>
                    </Form.Item>

                    <Form.Item
                        key={'purchaseInfoAgreement'}
                        name={'purchaseAgreement'}
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (_, value) =>
                                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                            },
                        ]}
                    >
                        <Checkbox
                            key={'userAgreementCheckBox'}
                            onChange={confirmChecked}
                        >{agreeItems.purchaseInfo}</Checkbox>
                    </Form.Item>

                    <Form.Item key={'submitBtn'} className={'text-center'}>
                        <MPrimaryBtn key={'submit'}
                             icon={<SendOutlined />}
                             label={'Create My Profile'}
                             type={'primary'}
                             size={'large'}
                             htmlType={'submit'}
                             disabled={disabled}
                        />
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}