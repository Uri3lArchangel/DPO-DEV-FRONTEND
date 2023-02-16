import { LoginOutlined, UsergroupAddOutlined } from "@ant-design/icons";

export const menus = {
    mainMenus: [
        {
            key: 'navhome',
            name: 'Home',
            url: '/'
        },
        {
            key: 'navabout',
            name: 'About',
            url: '/information/about'
        },
        {
            key: 'navcontact',
            name: 'Contact',
            url: '/information/contact'
        },
        {
            key: 'navissues',
            name: 'Issues',
            url: '/issue'
        }
    ],
    subMenus: [
        {
            key: 'navsignin',
            name: 'Sign In',
            url: '/auth/signin',
            icon: <LoginOutlined />,
            type: true
        },
        {
            key: 'navregister',
            name: 'Register',
            url: '/auth/signup',
            icon: <UsergroupAddOutlined />,
            type: true
        }
    ]
}
