import { Layout } from "antd";
import MNavbar from "./navbar";
import MFooter from "./footer";

const { Content } = Layout;

export default function MLayoutWithHeaderAndFooter({ children }) {
    return(
        <Layout style={{ minHeight: '100vh' }}>
            <MNavbar key={'navbar'} />
            <Content key={'contentArea'} className="bg-white">
                { children }
            </Content>
            <MFooter key={'footer'} />
        </Layout>
    )
}