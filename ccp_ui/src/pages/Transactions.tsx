import * as React from 'react';
import {memo} from 'react';
import Layout from "../components/_layout/layout";
import {request} from '../axios';
import {useEffect} from 'react';

const Trasactions = () => {

    useEffect(() => {
        getTransactions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getTransactions = () => {
        request('post', 'transactions', {wallets: [123, 1232]}).then(
            item => {
                console.log(item);
            }
        )
    }

    return (
        <Layout>
            <div>Transactions</div>
        </Layout>
    )
}

export default memo(Trasactions);