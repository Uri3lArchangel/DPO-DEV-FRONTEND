import { useRouter } from 'next/router';
import {Card} from 'antd';
import MTag from "../tags/tag";
import Image from 'next/image';
import {EditOutlined, EyeOutlined} from "@ant-design/icons";
import UserContext from "../../../store/user-context";
import {useContext, useState, useEffect} from "react";
import MPrimaryBtn from "../buttons/primaryBtn";

export default function MIssueCard({info}) {
    // Navigation on Button Click
    const router = useRouter();
    const navigateToDetailedIssue = async (pass) => {
        if (pass.type === 'view') {
            if (role) {
                await router.push(`/issue/${pass.url}`);
            } else {

            }
        } else {
            await router.push(`/issue/${pass.url}`);
        }
    }
    //Role statement changes
    const [role, setRole] = useState();
    // User Context useContext
    const userCtx = useContext(UserContext);
    //Watch changes on useCtx
    useEffect(() => {
        if (userCtx.userInfo) {
            setRole(userCtx.userInfo.role)
        } else {
            setRole(null);
        }
    }, [userCtx]);

    const viewDetailBtn = <MPrimaryBtn type="primary" size="large" label="See Details" action={() => navigateToDetailedIssue({url: info.id, type: 'view'})} icon={<EyeOutlined />}/>
    const editBtn = <MPrimaryBtn type="danger" size="large" label="Edit Issue" action={() => navigateToDetailedIssue({url: info.id+'/edit', type: 'edit' })} icon={<EditOutlined />}/>

    let actions = [];
    if (!role || role === 'investor' ) {
        actions = [viewDetailBtn];
    } else if (role === 'admin') {
        actions = [viewDetailBtn, editBtn];
    }

    return(
        <Card
            hoverable
            style={{width: 240}}
            cover={<Image alt={info.title} src={info.background} width={400} height={300} />}
            actions={actions}
        >
            <Card.Meta
                key={'metaData'}
                title={info.title}
                description={info.description}
            />
            <div key={'tags'} className="pt-20">
                <MTag key={'openTag'} label="Open" color="red"/>
                <MTag key={'issuableTag'} label="Issuable" color="blue"/>
            </div>
            {/*<Button onClick={() => userCtx.logIn({ role: 'admin'})}>Test</Button>*/}
            {/*<Button onClick={() => userCtx.logOut()}>Log Out</Button>*/}
        </Card>
    )
}