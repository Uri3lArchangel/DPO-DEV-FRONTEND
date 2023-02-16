import MNewIssueMeta from "../../../components/issues/items/meta";
import MNewIssuePeriod from "../../../components/issues/items/period";
import MNewIssueTier from "../../../components/issues/items/tier";
import MNewIssueFundRaise from "../../../components/issues/items/fundraise";
import MNewIssueWallet from "../../../components/issues/items/wallet";
import MIssueStatus from "../../../components/issues/items/status";

export const existingIssueItems = [
    {
        key: 'status',
        title: 'Status',
        contentGenerator: (props) => <MIssueStatus {...props} />
    },
    {
        key: 'meta',
        title: 'Meta',
        contentGenerator: (props) => <MNewIssueMeta {... props}/>
    },
    {
        key: 'period',
        title: 'Period',
        contentGenerator: (props) => <MNewIssuePeriod {... props}/>
    },
    {
        key: 'tier',
        title: 'Tier',
        contentGenerator: (props) => <MNewIssueTier {... props}/>
    },
    {
        key: 'fund',
        title: 'Fund',
        contentGenerator: (props) => <MNewIssueFundRaise {... props}/>
    },
    {
        key: 'wallet',
        title: 'Wallet',
        contentGenerator: (props) => <MNewIssueWallet {... props}/>
    },
]