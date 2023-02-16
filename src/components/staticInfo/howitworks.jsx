import {Card, Divider, Typography} from "antd";
import { descriptions, actions } from "../../core/data/static/howitworks";
import {useRouter} from "next/router";
import MPrimaryBtn from "../../core/ui-kit/buttons/primaryBtn";
const { Meta } = Card;



export default function MSHowItWorks() {
    const router = useRouter();
    return(
        <div className={'container d-flex flex-column pt-40'}>
            <Typography.Title key={'howItWorksTitle'} className={'text-center c-green'}>
                How it works
            </Typography.Title>
            <Card
                key={'howItWorksCard'}
                className={'font-24'}
                style={{ width: '100%' }}
                actions={
                    actions.map((el, index) => (
                        <MPrimaryBtn key={'action' + index} action={() => router.push(el.url)} icon={el.icon} label={el.label}
                            type={'danger'} size={'large'}
                        />
                    ))
                }
            >
                {
                    descriptions.map((el, index, array) => {
                        if (index === array.length - 1) {
                            return(
                                <>
                                    <Meta
                                        avatar={el.avatar}
                                        description={el.description}
                                    />
                                </>
                            )
                        } else {

                            return(
                                <>
                                    <Meta
                                        avatar={el.avatar}
                                        description={el.description}
                                    />
                                    <Divider />
                                </>
                            )
                        }
                    })
                }
            </Card>
        </div>
    )
}

