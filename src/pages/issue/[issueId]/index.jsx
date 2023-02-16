import MLayoutWithHeaderAndFooter from "../../../layout/layout-headerAndFooter";
import MIssueDetailById from "../../../components/issues/issueItem";
import { detailedIssueInfo } from "../../../core/data/examples/issues_detailed";


export default function MIssueById(props) {
    return(
        <MIssueDetailById issueDetail={props.issueDetails}/>
    )
}


export async function getServerSideProps(context) {
    const { params } = context;
    const issueId = params.issueId;
    const issueDetail = detailedIssueInfo.find(el => el.id == issueId);
    if(issueDetail == undefined){
        return{
            redirect:{
                destination: '/404',
                permanent: false,
              },
            }
        }
    
    return {
        props: {
            issueDetails: issueDetail
        }
    }
}

MIssueById.getLayout = function getLayout(page) {
    return (
        <MLayoutWithHeaderAndFooter>
            { page }
        </MLayoutWithHeaderAndFooter>
    )
}
