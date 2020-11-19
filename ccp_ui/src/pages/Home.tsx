import * as React from 'react';
import {memo} from 'react';
import Layout from "../components/_layout/layout";
import { Typography, Button } from 'antd';
import HomeStyle from '../styles/home.module.scss';
import {useEffect, useState} from 'react';
import * as bip39 from "bip39";

const Home = () => {

    const [showSeed, setShowSeed] = useState<boolean>(false)

    useEffect(() => {
        if(localStorage.getItem('mnemonic')){
            setShowSeed(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { Title } = Typography;

    const generateSeed = async () => {
        let mnemonic = await bip39.generateMnemonic();
        await localStorage.setItem('mnemonic', mnemonic);
        setShowSeed(true);
    }

    return (
        <Layout>
            <div className={HomeStyle.wrapper}>
                <div className={HomeStyle.container}>
                    {showSeed && <><div className={HomeStyle.header}>
                        <Title level={3}>Запишите ваш Seed</Title>
                    </div>
                        <div className={HomeStyle.body}>
                        {`Seed: ${localStorage.getItem('mnemonic')}`}
                        </div></>}
                    {!showSeed &&
                        <div className={HomeStyle.buttonContainer}>
                            <Button onClick={generateSeed} type="primary" shape="round" size={'large'}>
                                Сгенерировать Seed
                            </Button>
                        </div>}
                </div>
            </div>
        </Layout>
    )
}

export default memo(Home);