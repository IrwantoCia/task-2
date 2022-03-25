import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Card from "../components/Card";
import Link from "next/link";
import MenuIcon from "../components/MenuIcon";
import {useState} from "react";
import {useSelector} from "react-redux";

export default function Home() {
    const data = useSelector(state => state.app);

    return (
        <div className={styles.container}>
            <Head>
                <title>Test-2</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <div className={styles.content}>
                    <MenuIcon/>

                    <div className={styles.menu}>
                        <Link href={"/save"}>
                            <a>
                                <Card>
                                    <p>Data Simpanan</p>
                                    <p>Total: {data.totalSavings}</p>
                                </Card>
                            </a>
                        </Link>

                        <Link href={"/lend"}>
                            <a>
                                <Card>
                                    <p>Data Pinjaman</p>
                                    <p>Total: {data.totalLoans}</p>
                                </Card>
                            </a>
                        </Link>

                        <Link href={"/pay"}>
                            <a>
                                <Card>
                                    <p>Data Bayar</p>
                                    <p>Total: {data.totalPayments}</p>
                                </Card>
                            </a>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}
