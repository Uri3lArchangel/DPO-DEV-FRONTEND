import MLayoutWithHeaderAndFooter from "../../layout/layout-headerAndFooter";
import MPTermsOfUse from "../../components/staticInfo/termsOfUse";

export default function MPTermsAndConditions() {
    return(
        <MPTermsOfUse />
    )
}

MPTermsAndConditions.getLayout = function getLayout(page) {
    return(
        <MLayoutWithHeaderAndFooter>
            {page}
        </MLayoutWithHeaderAndFooter>
    )
}