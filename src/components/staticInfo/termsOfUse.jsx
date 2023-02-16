import { termsOfUse } from "../../core/data/config/termsOfUse";
import MKNTypography from "../../core/ui-kit/typography/nTypography";
import {Typography} from "antd";

export default function MPTermsOfUse() {
    return(
        <div className="container pt-50">
            <Typography.Title
                key={'termsOfUseTitle'}
                className="text-center font-40 font-bold c-green">
                Terms Of Use
            </Typography.Title>
            {
                termsOfUse.map((el, index) => (
                        <MKNTypography key={'terms' + index} title={el.title} contents={el.descriptions} htmlType titleLevel='24' contentFont={'16'}/>
                ))
            }
        </div>
    )
}