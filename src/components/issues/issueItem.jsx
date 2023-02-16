import { Row, Col, Descriptions } from "antd";
import MRangeDatePicker from "../../core/ui-kit/datepicker/rangedatepicker";
import MTag from "../../core/ui-kit/tags/tag";
import MIssueDetailCard from "../../core/ui-kit/card/detailissuecard";


export default function MIssueDetailById({issueDetail}) {
    return(
        <Row className="container pt-50 pb-50">
            <Col key={'detailCardCol'} xs={24} sm={24} md={12} lg={8} xl={8} className="d-flex align-items-center">
                <MIssueDetailCard key={'detailCard'} background={issueDetail.background} alt={issueDetail.title}/>
            </Col>
            <Col key={'descriptionCol'}  xs={24} sm={24} md={12} lg={16} xl={16} className="ph-30">
                <Descriptions key={'description'} title={issueDetail.title} className="d-flex flex-column" bordered
                    column={1}
                >
                    <Descriptions.Item key={'itemDescription'} label="Description">{issueDetail.description}</Descriptions.Item>
                    <Descriptions.Item key={'item-period'} label="Period">
                        <MRangeDatePicker key={'rangPicker'} type="view" start_date={issueDetail.start_date} end_date={issueDetail.end_date}/>
                    </Descriptions.Item>
                    <Descriptions.Item key={'item-open'} label="Security Token Offering">
                        <MTag key={'tagOpen'} label="open" color="blue"/>
                    </Descriptions.Item>
                    <Descriptions.Item key={'item-open1'} label="Security Token Offering">
                        <MTag key={'tagOpen1'} label="open" color="blue"/>
                    </Descriptions.Item>
                    <Descriptions.Item key={'itemCap'} label="Cap">
                        <MTag key={'capOpen'} label="open" color="blue" />
                    </Descriptions.Item>
                    <Descriptions.Item key={'itemMint'} label="Tokens Minted">
                        { issueDetail.tminted }
                    </Descriptions.Item>
                    <Descriptions.Item key={'itemSold'} label="Tokens Sold">
                        { issueDetail.tsold }
                    </Descriptions.Item>
                    <Descriptions.Item key={'itemRaised'} label="Fund Raised">
                        {
                            issueDetail.fundraised.fiat.usd &&
                                <MTag color="orange" label={`\$${issueDetail.fundraised.fiat.usd}(US)`}/>
                        }
                        {
                            issueDetail.fundraised.fiat.cad &&
                                <MTag color="purple" label={'$' + issueDetail.fundraised.fiat.cad  + '(CA)'}/>
                        }
                        {
                            issueDetail.fundraised.crypto.ether &&
                                <MTag color="magenta" label={issueDetail.fundraised.crypto.ether  + ' Ether'}/>
                        }
                        {
                            issueDetail.fundraised.crypto.dai &&
                                <MTag color="geekblue" label={issueDetail.fundraised.crypto.dai  + ' DAI'}/>
                        }
                        {
                            issueDetail.fundraised.crypto.usdt &&
                                <MTag color="red" label={issueDetail.fundraised.crypto.usdt  + ' USDT'}/>
                        }
                        {
                            issueDetail.fundraised.crypto.usdc &&
                                <MTag color="cyan" label={issueDetail.fundraised.crypto.ether  + 'USDC'}/>
                        }
                    </Descriptions.Item>
                    <Descriptions.Item key={'itemInvestors'} label="Number of Investors">
                        { issueDetail.investors }
                    </Descriptions.Item>
                    <Descriptions.Item key={'itemLocked'} label="Balance Locked">
                        { issueDetail.balanceLocked }
                    </Descriptions.Item>
                    <Descriptions.Item key={'itemUnlocked'} label="Balance Unlocked">
                        { issueDetail.balanceUnlocked }
                    </Descriptions.Item>
                </Descriptions>
            </Col>
        </Row>
    )
}