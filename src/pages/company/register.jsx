import MCRegisterCompany from "../../components/company/register";
import MLayoutWithHeaderAndFooter from "../../layout/layout-headerAndFooter";

export default function MPRegisterCompany() {
    return(
        <MCRegisterCompany />
    )
}

MPRegisterCompany.getLayout = function getLayout(page) {
    return(
        <MLayoutWithHeaderAndFooter>
            {page}
        </MLayoutWithHeaderAndFooter>
    )
}