import React from 'react';
import {memo} from 'react';
import MenuComponent from "../Menu/menu";
import {useState} from 'react';
import cl from 'classnames';
import layoutStyle from '../../styles/layout.module.scss';
import {Drawer} from 'antd'
import { MenuOutlined } from "@ant-design/icons";

export interface LayoutProps {
    children: any
}

const Layout = ({children}: LayoutProps) => {

    const [visible, setVisible] = useState(false);

    const onClose = () => {
        setVisible(false);
    }

    const showDrawer = () => {
        setVisible(true);
    }

    return (
        <div className={layoutStyle.wrapper}>
            <div className={layoutStyle.header}>
                <div className={layoutStyle.hideOnMd}>
                    <MenuOutlined onClick={showDrawer} style={{fontSize: '20px', cursor: 'pointer'}} />
                </div>
            </div>
            <div className={layoutStyle.container}>
                <Drawer
                    className={layoutStyle.hideOnMd}
                    closable={false}
                    placement={'left'}
                    onClose={onClose}
                    visible={visible}
                    bodyStyle={{padding: 'unset'}}
                >
                    <MenuComponent />
                </Drawer>
                <div className={cl(layoutStyle.menu, layoutStyle.hideOnSm)}>
                    <MenuComponent />
                </div>
                <div className={layoutStyle.page}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default memo(Layout);