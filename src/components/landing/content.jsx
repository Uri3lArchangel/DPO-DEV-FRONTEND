import MLandingOptions from "./options";
import MLandingWhyChoose from "./whychoose";
import MLandingCallUs from "./callus";

import {LandingCards} from "../../core/data/landing/landingcards";
import {WhyChooseUs} from "../../core/data/landing/chooseus";
import { Divider} from "antd";
import MLandscape from "./landscape";
import MKDrawer from "../../core/ui-kit/drawer/drawer";
import {AcknowledgeData} from '../../core/data/config/acknowledge';
import { useEffect, useState } from "react";


export default function MLandingContent() {
    const [drawerVisible, setDrawerVisible] = useState(true);
    useEffect(() => {
        let checkStatus = localStorage.getItem('acknowledged');
        setDrawerVisible(!checkStatus);
    }, [])

    const onAcknowledgeClick = () => {
        localStorage.setItem('acknowledged', true);
        setDrawerVisible(false);
    }

    return(
        <div className="container-fluid no-padding">
            <MLandscape key={'landscape'}/>
            <MLandingOptions key={'options'} cards={LandingCards}/>
            <Divider key={'firstDivider'}/>
            <MLandingWhyChoose key={'whyChooseUs'} detail={WhyChooseUs}/>
            <Divider key={'secondDivider'}/>
            <MLandingCallUs key={'callUs'}/>
            <MKDrawer key={'drawer'} visible={drawerVisible} action={onAcknowledgeClick} {...AcknowledgeData}/>
        </div>
    )
}
