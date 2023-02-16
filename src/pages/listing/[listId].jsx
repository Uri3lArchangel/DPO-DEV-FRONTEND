import MLayoutWithHeaderAndFooter from "../../layout/layout-headerAndFooter";
import MSListing from "../../components/staticInfo/listing";

export default function MListing(props) {
    return(
        <MSListing listId={props.listId}/>
    )
}

export async function getStaticProps(context) {
    console.log(context.params.listId);
    return {
        props: context.params
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: { listId: 'process' }
            },
            {
                params: { listId: 'costs' }
            },
            {
                params: { listId: 'support' }
            }
        ],
        fallback: false
    }
}

MListing.getLayout = function getLayout(page) {
    return(
        <MLayoutWithHeaderAndFooter>
            {page}
        </MLayoutWithHeaderAndFooter>
    )
}

