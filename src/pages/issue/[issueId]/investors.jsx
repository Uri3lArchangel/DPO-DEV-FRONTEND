import MLayoutWithHeaderAndFooter from "../../../layout/layout-headerAndFooter";
import {Typography} from "antd";

export default function MIssueInvestorsById(props) {
    return(
        // <h1>Investors By Issue Id</h1>
        <div className={'container'}>
            <Typography.Title key={'issueInvestorsTitle'}>
                Investors of Issue: {props.issueTitle}
            </Typography.Title>

        </div>
    )
}

MIssueInvestorsById.getLayout = function getLayout(page) {
    return(
        <MLayoutWithHeaderAndFooter>
            {page}
        </MLayoutWithHeaderAndFooter>
    )
}