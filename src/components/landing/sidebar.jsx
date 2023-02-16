import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { CheckCircleOutlined, InfoCircleOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import Link from 'next/link';


export default function MSideBar() {
    const [state, setState] = useState(true);
    const onCollapse = (collapsed) => {
        setState(collapsed);
      };
    return(
        <Layout.Sider width={200} collapsible collapsed={state} onCollapse={ onCollapse }>
            <Menu key={'sideMenu'} mode='inline'
                theme={"dark"}
            >
                <Menu.Item key="active" icon={<CheckCircleOutlined />}>
                    <Link key={'issuesLink'} href={"/issue"}>
                        Active Issues
                    </Link>
                </Menu.Item>
                <Menu.Item key="ongoing" icon={<InfoCircleOutlined />}>
                    Issuable Issues
                </Menu.Item>
                <Menu.Item key="upcoming" icon={<QuestionCircleOutlined />}>
                    Upcoming Issues
                </Menu.Item>
            </Menu>
        </Layout.Sider>
    );
}