import {Form} from "antd";
import MCheckBoxGroup from "../../../core/ui-kit/inputs/checkboxgroup";
import {fundraiseTypes} from "../../../core/data/config/fundraiseTypes";
import {stableCoins} from "../../../core/data/config/stableCoins";
import {useState} from "react";

export default function MNewIssueFundRaise() {
    const [state, setState] = useState(false);
    return(
        <>
            <Form.Item label="Fund-raise Types">
                <MCheckBoxGroup key={'checkBoxGroup-fundTypes'} options={fundraiseTypes}/>
            </Form.Item>
            <Form.Item  label="Stable Coins">
                <MCheckBoxGroup key={'checkBoxGroup-stableCoins'} options={stableCoins}/>
            </Form.Item>
        </>

    )
}
