import { privacyData } from "../../core/data/config/privacypolicy";
import MKNTypography from "../../core/ui-kit/typography/nTypography";
import {Typography} from "antd";

export default function MCPrivacyPolicy() {
    return(
        <div className="container pt-50">
            <Typography.Title
                key={'privacyPolicyTitle'}
                className="text-center c-green"
            >
                Privacy Policy
            </Typography.Title>
            {
                privacyData.map((el, index) => (
                    <MKNTypography
                        key={'policy' + index}
                        title={el.title}
                        contents={el.descriptions}
                        htmlType
                        titleLevel='24'
                        contentFont={'16'}
                    />
                ))
            }
        </div>
    )
}