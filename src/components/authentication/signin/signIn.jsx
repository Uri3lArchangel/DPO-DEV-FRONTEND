import { Checkbox, Col, Form, Input, Row} from "antd";
import {LockOutlined, MailOutlined, SendOutlined} from "@ant-design/icons";
import Link from "next/link";
import MPrimaryBtn from "../../../core/ui-kit/buttons/primaryBtn";
import Head from "next/head";

export default function MCSignIn() {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const validateMessages = {
        required: '${label} is required',
        types: {
            email: '${label} is not a valid email'
        }
    }
    return(
        <>
            <Head>
                <title key={'title'}>Sign In</title>
            </Head>
            <Row className={'container pt-50 pb-30'} justify={'center'}>
                <Col key={'signInFormArea'} xs={24} sm={20} md={16} lg={12} xl={8}>
                    <Form
                        key={'signInForm'}
                        name={'signIn-form'}
                        layout={'vertical'}
                        validateMessages={validateMessages}
                        onFinish={onFinish}
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
                                prefix={<MailOutlined className="site-form-item-icon"/>}
                                key={'userEmailInput'}
                                size={'large'}
                                placeholder={'Enter your email address'}
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
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                key={'userPasswordInput'}
                                size={'large'}
                                placeholder={'Enter your password'}
                            />
                        </Form.Item>
                        <Form.Item key={'widgets'}>
                            <Form.Item
                                key={'rememberMe'}
                                name="remember"
                                valuePropName="checked"
                                noStyle
                            >
                                <Checkbox key={'rememberCheck'} size={'large'}>Remember me</Checkbox>
                            </Form.Item>
                            <Link key={'forgot'} href={'auth/forgot-password'}>
                                <a key={'forgotLink'} className="c-green f-right">
                                    Forgot password
                                </a>
                            </Link>
                        </Form.Item>
                        <Form.Item
                            key={'regiser'}
                        >
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            I don't have the account.
                            <Link key={'forgot'} href={'/auth/signup'}>
                                <a key={'forgotLink'} className="c-green">
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                     Register Now
                                </a>
                            </Link>
                        </Form.Item>
                        <Form.Item
                            key={'submit'}
                            className={'text-center'}
                        >
                            <MPrimaryBtn
                                icon={<SendOutlined />}
                                key={'submitBtn'}
                                htmlType={'submit'}
                                label={'Sign In'}
                                type={'primary'}
                                size={'large'}
                            />
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    )
}