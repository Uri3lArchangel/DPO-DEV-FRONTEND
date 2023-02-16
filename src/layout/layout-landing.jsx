import { Layout } from 'antd';
const { Content } = Layout;
import  MNavbar  from './navbar';
import MFooter from "./footer";

export default function MLayoutLanding({children}) {
    return (
            <Layout style={{ minHeight: '100vh' }}>
                <MNavbar key={'navbar'} />
                <Layout key={'layout'}>
                    <Layout key={'subLayout'}>
                        <Content key={'landingContent'} className="bg-white">
                            { children }
                        </Content>
                    </Layout>
                </Layout>
                <MFooter key={'staticFooter'} />
            </Layout>
    )
}
