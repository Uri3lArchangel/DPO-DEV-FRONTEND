import MLayoutWithHeaderAndFooter from "../../layout/layout-headerAndFooter";
import MCPrivacyPolicy from "../../components/staticInfo/privacypolicy";

export default function MPPrivacyPolicy() {
    return(
        <MCPrivacyPolicy />        
    )
}

MPPrivacyPolicy.getLayout = function getLayout(page) {
    return(
        <MLayoutWithHeaderAndFooter>
            {page}
        </MLayoutWithHeaderAndFooter>
    )
}