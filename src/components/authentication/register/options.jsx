import {DTRegisterTypes} from "../../../core/data/config/registerType";
import {Card, Typography} from "antd";
import {SendOutlined} from "@ant-design/icons";
import {useRouter} from "next/router";
import MPrimaryBtn from "../../../core/ui-kit/buttons/primaryBtn";

export default function MCRegisterOptions() {
    const router = useRouter();
    return(
        <>
        {
            DTRegisterTypes.map((el) => (
                <Card
                    key={el.id}
                    className={'mb-20'}
                    actions={[
                        <MPrimaryBtn
                            key={'custom'}
                            icon={<SendOutlined />}
                            type={'primary'} label={el.button.label}
                            action={() => router.push(el.button.routerLink)}
                        />
                    ]}
                >
                    <Card.Meta
                        key={'optionDescription'}
                        className="text-center"
                        title={ <Typography.Title level={5}>{el.title}</Typography.Title> }
                        description={ el.process.map((el, index) => (
                            <p key={index} style={{color: 'black !important'}}>{index + 1}.{el}</p>
                        )) }
                    />
                </Card>
            ))
        }
        </>
    )
}