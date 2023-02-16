import MLayoutWithHeaderAndFooter from "../../../layout/layout-headerAndFooter";
import MCRegisterOnRole from "../../../components/authentication/register/registerOnRole";

export default function MPRegisterOnRole(props) {
    console.log(props);
    return(
        <MCRegisterOnRole role={props.role}/>
    )
}

export async function getServerSideProps(context) {
    const { params } = context;
    return {
        props: {
            role: params.role
        }
    }
}

MPRegisterOnRole.getLayout = function getLayout(page) {
    return(
        <MLayoutWithHeaderAndFooter>
            { page }
        </MLayoutWithHeaderAndFooter>
    )
}