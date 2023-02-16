import styles from './landscape.module.css';
import {Card, Button, Typography} from "antd";
import {landscapeInfo} from "../../core/data/landing/landscape";
import {useRouter} from "next/router";


export default function MLandscape() {
    const router = useRouter();


    return(
        <div className={styles.landscape + " vh-100 d-flex flex-column align-items-center justify-content-center pb-50"}>
            <Card key={'landscape-card'} className={styles.card + ""}
                actions={
                    landscapeInfo.buttons.map((el, index) => (
                        <Button key={'landscapeButton' + index}  type={el.type} size="large" className="mr-30" ghost={true}
                            onClick={() => router.push(el.navigation)}
                        >{el.label}</Button>
                    ))
                }
            >
                <Typography.Title key={'landscape-title'} className="c-white text-center">{ landscapeInfo.title }</Typography.Title>
                <Typography.Title key={'landscape-subtitle'}  level={3} className="c-white">{ landscapeInfo.subtitle }</Typography.Title>
            </Card>
        </div>
    )
}