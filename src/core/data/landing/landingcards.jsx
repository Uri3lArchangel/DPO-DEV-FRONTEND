import {BulbOutlined, GoldOutlined, RadarChartOutlined} from "@ant-design/icons";
const style = 'font-80 c-green'
export const LandingCards = [
    {
        key: 'raise',
        title: 'RAISE',
        description: 'Issuers are able to create a listing and start funding campaigns to raise investment capital from multiple investors.',
        button: {
            label: 'LIST',
            url: '/company/register'
        },
        icon: <GoldOutlined className={style}/>
    },
    {
        key: 'invest',
        title: 'INVEST',
        description: 'Investors are able to browse investment opportunities and easily contact Issuers;  and securely participate in a funding round.',
        button: {
            label: 'INVEST',
            url: '/signup/investor'
        },
        icon: <BulbOutlined className={style}/>
    },
    {
        key: 'market',
        title: 'MARKET',
        description: 'Companies listed on DPO may be promising start-up companies, to established revenue producing \'going concern\' businesses.',
        button: {
            label: 'INVEST',
            url: '/signup/issuer'
        },
        icon: <RadarChartOutlined className={style}/>
    }
]