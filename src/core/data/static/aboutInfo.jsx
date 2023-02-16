import {BulbOutlined, GoldOutlined, RadarChartOutlined} from "@ant-design/icons";

const style = 'font-80 c-white';

export const aboutInfo = {
    title: 'About',
    content: [
        'Direct Private Offers is a Funding Portal where investors can invest in great “up and coming” companies.  Our platform attracts a wide range of businesses, from seed and start-up stage companies to more established growth companies, companies that are income-producing and going concerns, and those that may already be reporting companies and/or quoted on OTC Markets.  \n' +
        '\n' +
        'Direct Private Offers helps ventures seeking access to growth capital and provides a convenient forum to connect with potential investors and other stakeholders. '
    ]
}

export const mission = {
    id: 'mission',
    title: 'Mission',
    content: [
        'Direct Private Offers supports companies raising capital via Prospectus Exempt Direct Private Offers.  We do this by introducing smart innovative capital to promising start-up and emerging growth companies; and by supporting them through the entire stock offering continuum.'
    ],
    background: ' bg-green',
    icon: <GoldOutlined className={style}/>
}

export const vision = {
    id: 'vision',
    title: 'Vision',
    content: [
        'Direct Private Offers addresses an unfulfilled need in the economy by introducing a completely integrated solution to the capital-raising process. Matching smart capital to promising ventures is an important function of a healthy economy. Leveraging technology with human resources and automated internet marketing will ensure capital raises are cost-efficient.  Direct Private Offers is committed to the ongoing development of technology, human resources, and ‘lean start-up business model generation’.'
    ],
    background: 'bg-red',
    icon: <BulbOutlined className={style}/>
}

export const approach = {
    id: 'approach',
    title: 'Approach',
    content: [
        'Direct Private Offers is a niche Funding Portal that uses technology to maintain competitive advantages over competitors.   We leverage Social Media, Digital Marketing channels, and active ‘personal touch’ marketing to attract Investors to Innovative Prospectus Exempt Direct Private Offers.  We record and monitor website traffic to the respective listings. Analyzing these metrics allows us to support our Issuers by helping them focus their marketing efforts.  DPO deploys well-informed staff and partners and is dedicated to employing state of the art solutions. '
    ],
    background: 'bg-dark',
    icon: <RadarChartOutlined className={style} />
}