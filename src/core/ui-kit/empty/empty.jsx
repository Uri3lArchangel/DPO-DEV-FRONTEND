import { Empty, Button  } from 'antd';
import MPrimaryBtn from "../buttons/primaryBtn";

export default function MEmpty({ buttonLabel }) {
    return(
        <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{
                height: 60,
            }}
        >
            <Button key={'createIssueButton'} type="primary">Create Now</Button>
            <MPrimaryBtn
                key={'customActionButton'}
                type="default"
                label={buttonLabel}
            />
        </Empty>
    )
}