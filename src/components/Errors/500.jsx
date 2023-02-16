import { Result } from "antd";
import Link from "next/link";


export default function MWentWrong() {
    return(
        <Result
            status="500"
            title="500"
            subTitle="Sorry, something went wrong"
            extra={
                <Link href="/">
                    <a key={'backHomeHyper'}>Go Home</a>
                </Link>
            }
        />
    )
}