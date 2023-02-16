import { Result } from 'antd';
import Link from "next/link";

export default function MNotAllowed() {
    return(
        <Result
            status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page."
            extra={
                <Link href="/">
                    <a key={'backHomeHyper'}>Back Home</a>
                </Link>
            }
        />
    )
}