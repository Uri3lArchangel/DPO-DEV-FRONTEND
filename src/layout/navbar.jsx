import {useEffect, useState} from "react";
import {Layout, Menu, Row} from 'antd';
import { UserOutlined } from '@ant-design/icons/lib/icons';
import Link from 'next/link';
import Image from 'next/image';
import { menus }  from '../core/data/layoutItems/menu';
const { Header } = Layout;
const { SubMenu } = Menu;
import styles from '../../styles/local/navbar.module.scss';
import {useRouter} from "next/router";

export default function MNavbar () {
    const router = useRouter();

    const [currentMenu, setCurrentMenu] = useState();

    useEffect(()=> {
        const path = router.pathname;
        if (path === '') {

        }
    }, [])

    const handleMenuClick = (e) => {
        console.log(e);
        setCurrentMenu(e.key);
    }

    return (
        <Header className='p-sticky top-0 no-padding z-10 bg-white'>
            <Row key={'navRow'} className={"d-flex ph-30"}>
                <Link key={'logoLink'} href={"/"}>
                    <a key={'logoTag'} className={'d-flex align-items-center ' + styles.logoArea} >
                        <Image key={'logoImage'} alt="logo"
                               src="/assets/icons/directprivateoffers-logo-bd.png"
                               width={300} height={44}
                        />
                    </a>
                </Link>
                <Menu key={'navMenu'} selectedKeys={currentMenu}
                      onClick={handleMenuClick}
                      mode="horizontal"
                      className={'d-block text-right ' + styles.menubar}
                >
                    {
                        menus.mainMenus.map((element, index) => (
                                <Menu.Item key={element.key}>
                                    <Link key={'menuLink' + index} href={element.url}>
                                        {element.name}
                                    </Link>
                                </Menu.Item>
                            )
                        )
                    }
                    <SubMenu key='subMenu' icon={<UserOutlined />} title={'Account'}>
                        {
                            menus.subMenus.map((el, index) => (
                                    <Menu.Item key={el.key} icon={el.icon}>
                                        <Link key={'submenu' + index} href={el.url}>
                                            {el.name}
                                        </Link>
                                    </Menu.Item>
                                )
                            )
                        }
                    </SubMenu>
                </Menu>
            </Row>
        </Header>        
    );
}