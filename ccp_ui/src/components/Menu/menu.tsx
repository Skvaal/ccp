import * as React from 'react';
import {useEffect, useState} from 'react';
import {memo} from 'react';
import {Menu} from 'antd'
import {useLocation, Link} from "react-router-dom";

const MenuComponent = () => {
    const [router, setRouter] = useState(['/']);
    const handleClick = (e: any) => {
        setRouter([e.key])
    }

    const location = useLocation();

    useEffect(() => {
        setRouter([location.pathname]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Menu
            onClick={handleClick}
            selectedKeys={router}
            mode="inline"
            style={{height: '100%'}}
        >
            <Menu.Item key="/"><Link to={'/'}>Главное меню</Link></Menu.Item>
            <Menu.Item key="/address"><Link to={'/address'}>Адреса</Link></Menu.Item>
            <Menu.Item key="/transactions"><Link to={'/transactions'}>Транзакции</Link></Menu.Item>
        </Menu>
    )
}

export default memo(MenuComponent);