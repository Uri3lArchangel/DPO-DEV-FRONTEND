import React from 'react';
import Head from "next/head";
import styles from '../../styles/local/Home.module.scss'
import MKBackTop from "../core/ui-kit/backtop/backtop";


export default function MLayOutRoot({children}) {

    return (
        <div className={styles.container}>
            <MKBackTop key={'backTop'}/>
            <Head key={'head'}>
                <title key={'title'}>Direct Private Offers</title>
                <meta key={'meta'} name="description" content="Direct Private Offers" />
                <link key={'icon'} rel="icon" href="/assets/images/handshake.png" />
            </Head>
            <main key={'main-content'}>
                {children}
            </main>
        </div>
    )
}