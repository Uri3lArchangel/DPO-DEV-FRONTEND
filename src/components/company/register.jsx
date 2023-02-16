import {Checkbox, Col, Form, Input, Row, Typography} from "antd";
import {useForm} from "antd/lib/form/Form";
import {agreeItems} from "../../core/data/config/contactinfo";
import {useState} from "react";
import {SendOutlined} from "@ant-design/icons";
import MPrimaryBtn from "../../core/ui-kit/buttons/primaryBtn";

export default function MCRegisterCompany() {
    const [disabled, setDisabled] = useState(true);

    const [form] = useForm();

    const onFinish = (values) => {
        console.log(values);
    }

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
        },
    }

    const confirmChecked = () => {
        if (form.getFieldValue('storeAgreement')) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }

    return(
        <Row className="container pt-50 pb-30" justify={'center'}>
            <Col key={'companyRegisterArea'} xs={24} sm={24} md={20} lg={16} xl={16}>
                <Typography.Title key={'level1Title'} className={'c-green text-center'}>List Your Company</Typography.Title>
                <Typography.Title key={'level3Title'}  level={3} className={'text-center'}>
                    Please complete the following information to create your Account and List on the Direct Private Offers Funding Portal.
                </Typography.Title>
                <Typography.Title key={'level5title'} level={5}>Register Your Company</Typography.Title>
                <Form
                    key={'companyRegisterForm'}
                    form={form}
                    layout={'vertical'}
                    name={'companyRegister-form'}
                    onFinish={onFinish}
                    validateMessages={validateMessages}
                    scrollToFirstError
                >
                    <Form.Item
                        key={'companyName'}
                        name={'companyName'}
                        label="Company Name"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                min: 5,
                                max: 30,
                                message: 'Company Name must be between 5 and 30 characters'
                            },
                        ]}
                    >
                        <Input key={'companyNameInput'} size={'large'} placeholder={'Enter your company\'s full name'}/>
                    </Form.Item>
                    <Form.Item
                        key={'companyEmail'}
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
                        <Input key={'userEmailInput'} size={'large'} placeholder={'Enter your email address'}/>
                    </Form.Item>
                    <Form.Item
                        key={'Message'}
                        name={'message'}
                        label={'Message'}
                    >
                        <Input.TextArea key={'messageInput'} rows={5} showCount maxLength={500}/>
                    </Form.Item>
                    <Form.Item
                        key={'storeAgreement'}
                        name={'storeAgreement'}
                        valuePropName={'checked'}
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
                    <Form.Item key={'submitBtn'} className={'text-center'}>
                        <MPrimaryBtn key={'submit'}
                             icon={<SendOutlined />}
                             label={'Join Direct Private Offers'}
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
