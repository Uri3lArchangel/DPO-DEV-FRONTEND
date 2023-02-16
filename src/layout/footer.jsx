import {Row, Col, Divider, Layout, Typography} from 'antd';
import Image from "next/image";
import Link from "next/link";
import { contactInfo } from "../core/data/config/contactinfo";
import {MailFilled, PhoneFilled } from "@ant-design/icons";
import { footerOptions } from "../core/data/config/footerOptions";

const { Footer } = Layout;

export default function MFooter() {
    return(
        <Footer className={'bg-white pv-40'} style={{boxShadow: '0px -2px 5px #d1d1d1'}}>
            <Row key={'containerArea'} className={'container'}>
                <Col key={'firstCol'} xs={24} sm={24} md={8} lg={8} xl={8}>
                    <Image key={'footerLogo'} src="/assets/images/dpo-logo-footer.png" alt={'Footer Logo'} width={220} height={120}/>
                    <Link key={'telephoneLink'} href={'tel:' + contactInfo.mobile} >
                        <a key={'telephoneHyper'} className={'d-flex align-items-center font-18 pt-10'}>
                            <PhoneFilled key={'phoneIcon'} className={'c-green font-28 mr-10'}/>
                            {contactInfo.mobile}
                        </a>
                    </Link>
                    <Link key={'emailLink'} href={'mailto:' + contactInfo.email}>
                        <a key={'emailHyper'} className={'d-flex font-18 align-items-center pt-10'}>
                            <MailFilled key={'emailIcon'} className={'c-green font-28 mr-10'}/>
                            {contactInfo.email}
                        </a>
                    </Link>
                </Col>
                <Col key={'secondCol'} xs={24} sm={24} md={8} lg={8} xl={8} className={'d-flex flex-column align-items-center'}>
                    <Typography.Title
                        key={'secondColTitle'}
                        level={3}
                        className={'c-green'}
                    >
                        {footerOptions.list.label}
                    </Typography.Title>
                    {
                        footerOptions.list.children.map((el, index) => (
                            <Link href={el.url} key={'listing' + index}>
                                <a key={'secondColOptionHyper' + index} className={'font-18 pt-10'}>{el.label}</a>
                            </Link>
                        ))
                    }
                </Col>
                <Col key={'thirdCol'} xs={24} sm={24} md={8} lg={8} xl={8} className={'d-flex flex-column align-items-center'}>
                    <Typography.Title
                        key={'thirdColTitle'}
                        level={3}
                        className={'c-green'}
                    >
                        {footerOptions.information.label}
                    </Typography.Title>
                    {
                        footerOptions.information.children.map((el, index) => (
                            <Link href={el.url} key={'information' + index}>
                                <a key={'thirdColOptionHyper' + index} className={'font-18 pt-10'}>{el.label}</a>
                            </Link>
                        ))
                    }
                </Col>
            </Row>
            <Divider key={'footerDivider'} />
            <p key={'rightReserved'} className={'text-center font-14'}>© 2022 Direct Private Offers All Rights Reserved.
                <Link key={'termsLink'} href={'/information/terms'}>
                    <a key={'termsHyper'} className={'font-bold'}> Terms of Use </a>
                </Link>
                  |
                <Link key={'policyLink'} href={'/information/privacy'}>
                    <a key={'policyHyper'} className={'font-bold'}> Privacy Policy</a>
                </Link>
            </p>
        </Footer>
    )
}