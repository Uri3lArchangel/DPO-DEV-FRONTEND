import MSimpleHeaderLayout from "../../layout/layout-simpleHeader";
import MCSignIn from "../../components/authentication/signin/signIn";

export default function MSignIn() {
    return(
        <MCSignIn />
    )
}

MSignIn.getLayout = function getLayout(page) {
    return (
        <MSimpleHeaderLayout>
            { page }
        </MSimpleHeaderLayout>
    )
}