import { Layout } from 'antd';
import Image from "next/image";
import Link from "next/link";
//local
import MFooter from "./footer";
//style
import styles from "../../styles/local/navbar.module.scss";

const { Header, Content } = Layout;

export default function MSimpleHeaderLayout({ children }) {
    return(
        <Layout style={{ minHeight: '100vh' }}>
            <Header key={'navRow'} className='p-sticky top-0 no-padding z-10 bg-white d-flex
            align-items-center'
            >
                <Link key={'navLogo'} href={"/"}>
                    <a key={'logoLink'} className={'ph-30 d-flex align-items-center ' + styles.logoArea} >
                        <Image key={'logImg'}
                               alt="logo"
                               src="/assets/icons/directprivateoffers-logo-bd.png"
                               width={300} height={44}
                        />
                    </a>
                </Link>
            </Header>
            <Content key={'contentArea'} className='bg-white align-items-center justify-content-center pt-5'>
                    { children }
            </Content>
            <MFooter key={'footer'}/>
        </Layout>
    )
}