import { Result } from "antd";
import Link from "next/link";


export default function MPageNotFound() {
    return(
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited doesn't exist"
            extra={
                <Link href="/">
                    <a key={'backHomeHyper'}>Go Home</a>
                </Link>
        }
        />
    )
}