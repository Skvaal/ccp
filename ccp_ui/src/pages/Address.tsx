import * as React from 'react';
import {memo} from 'react';
import Layout from "../components/_layout/layout";
import {Table} from 'antd';

const Address = () => {

    const columns: any[] = [
        {title: 'Адреса'},
        {
            title: 'Баланс'
        }
    ]

    return (
        <Layout>
            <Table dataSource={[]} columns={columns} />
        </Layout>
    )
}

export default memo(Address);