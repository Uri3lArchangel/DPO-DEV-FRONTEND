import { Card } from 'antd';
import Image from 'next/image';
import { EyeOutlined, EditOutlined } from "@ant-design/icons";
import {useRouter} from "next/router";
import MPrimaryBtn from "../buttons/primaryBtn";

export default function MIssueDetailCard({ background, alt }) {
    const router = useRouter();
    const navigateTo = (url) => {
        router.push(router.asPath + url).then(() => {});
    }
    return(
        <Card
            bodyStyle={{padding: 0}}
            cover={
                <Image src={background} alt={alt} width={500} height={400}/>
            }
            actions={[
                <MPrimaryBtn
                    key={'viewBtn'}
                    type={'primary'}
                    size={'large'}
                    label={'Investors'}
                    icon={<EyeOutlined />}
                    action={() => navigateTo('/investors')}
                />,
                <MPrimaryBtn
                    key={'editBtn'}
                    type={'danger'}
                    size={'large'}
                    label={'Edit'}
                    icon={<EditOutlined />}
                    action={() => navigateTo('/edit')}
                />
            ]}
        />
    )
}