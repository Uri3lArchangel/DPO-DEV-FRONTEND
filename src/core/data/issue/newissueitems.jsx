import MNewIssueMeta from "../../../components/issues/items/meta";
import MNewIssuePeriod from "../../../components/issues/items/period";
import MNewIssueTier from "../../../components/issues/items/tier";
import MNewIssueFundRaise from "../../../components/issues/items/fundraise";
import MNewIssueWallet from "../../../components/issues/items/wallet";

export const newIssueSteps = [
    {
        key: 'nMeta',
        title: 'Meta',
        description: 'General Info of issue',
        content:  <MNewIssueMeta />
    },
    {
        key: 'nPeriod',
        title: 'Period',
        description: 'Period of issue',
        content: <MNewIssuePeriod />
    },
    {
        key: 'nTier',
        title: 'Tier',
        description: 'Set Rate and Total Tier',
        content: <MNewIssueTier />
    },
    {
        key: 'nFund',
        title: 'Fund',
        description: 'Fund Raise Types',
        content: <MNewIssueFundRaise />
    },
    {
        key: 'nWallet',
        title: 'Wallet',
        description: 'Fund and Treasury Wallet',
        content: <MNewIssueWallet />
    }
]