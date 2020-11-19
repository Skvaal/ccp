import * as React from 'react';
import {FC, useEffect, memo} from 'react';
import {Table} from 'antd';
import {TableProps} from "antd/es/table";

interface TableInterface {
    getInitialData: any,
    setInitialSelectedRow: any,
}

const TableComponent: FC<TableProps<TableInterface> & TableInterface> = (props) => {
    useEffect(() =>{
        setInitialData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function setInitialData() {
        await props.getInitialData();
        props.setInitialSelectedRow();
    }

    return (
        <Table {...props} />
    )
};

export default memo(TableComponent);