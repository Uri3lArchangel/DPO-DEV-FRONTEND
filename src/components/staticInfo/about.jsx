import Image from "next/image";
import MKNTypography from "../../core/ui-kit/typography/nTypography";
import { aboutInfo, mission, vision, approach } from "../../core/data/static/aboutInfo";
import MPrimaryBtn from "../../core/ui-kit/buttons/primaryBtn";
import { useRouter } from "next/router";
import {Col, Divider, Row} from "antd";
import MKAboutItem from "../../core/ui-kit/card/aboutItem";

export default function MSAbout() {
    
    const router = useRouter();
    const navigateToHowItWorks = async () => {
        await router.push('/how-it-works');
    }

    const aboutItems = [ mission, vision, approach ]

    return(
        <>
            <Row className="container pt-30">
                <Col key={'imageCol'} xs={24} sm={24} md={12} lg={12} xl={12} className="d-flex flex-column justify-content-center">
                    <Image key={'aboutUsImage'} src="/assets/images/about.jpg" alt="about" width={500} height={400}/>
                    <MPrimaryBtn key={'howItWorksButton'} type="primary" label="How It Works" size="large"
                        action={() => navigateToHowItWorks() }
                    />
                </Col>
                <Col key={'DescriptionCol'} xs={24} sm={24} md={12} lg={12} xl={12} className="ph-20 pt-30">
                    <MKNTypography key={'typography'} title={aboutInfo.title} contents={aboutInfo.content} contentFont={18}/>
                </Col>
            </Row>
            <Divider dashed />
            <div className={'container pb-30'}>
                {
                    aboutItems.map((el) => (
                        <MKAboutItem key={el.id} info={el} background={el.background}/>
                    ))
                }
            </div>
        </>
    )
}