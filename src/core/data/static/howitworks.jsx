import {
    BulbOutlined,
    FileSearchOutlined,
    PhoneOutlined,
    SearchOutlined,
    UnorderedListOutlined
} from "@ant-design/icons";

const avatarStyle = 'c-green font-48'

export const descriptions = [
    {
        avatar: <SearchOutlined className={avatarStyle}/>,
        description: 'Search the Direct Private Offers Funding Portal for Issues that meet your criteria.',
    },
    {
        avatar: <FileSearchOutlined className={avatarStyle}/>,
        description: 'Resource the Issuer\'s videos, blogs, soundbites and Offering Documents to conduct your due diligence.',
    },
    {
        avatar: <PhoneOutlined className={avatarStyle}/>,
        description: 'Contact the Issuer directly via an "Expression of Interest".',
    }
]

export const actions = [
    {
        label: 'List',
        icon: <UnorderedListOutlined />,
        url: '/company/register'
    },
    {
        label: 'Invest',
        icon: <BulbOutlined />,
        url: '/invest'
    }
]