import MSHowItWorks from "../../components/staticInfo/howitworks";
import MLayoutWithHeaderAndFooter from "../../layout/layout-headerAndFooter";

export default function MPHowItWorks() {
    return(
        <MSHowItWorks />
    )
}

MPHowItWorks.getLayout = function getLayout(page) {
    return (
        <MLayoutWithHeaderAndFooter>
            {page}
        </MLayoutWithHeaderAndFooter>
    )
}