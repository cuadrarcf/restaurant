import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { PieChartOutlined, BellOutlined, ReadOutlined, DatabaseOutlined } from '@ant-design/icons';
import './index.css';

const { Sider } = Layout;

interface IMenuProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}

interface IMenuItems {
  path: string;
  label: string;
  icon: any;
}

const menu: IMenuItems[] = [
  {
    path: '/dashboard',
    label: 'Dashboard',
    icon: () => <PieChartOutlined />
  },
  {
    path: '/orders',
    label: 'Orders',
    icon: () => <BellOutlined />
  },
  {
    path: '/recipes',
    label: 'Recipes',
    icon: () => <ReadOutlined />
  },
  {
    path: '/ingredients',
    label: 'Ingredients',
    icon: () => <DatabaseOutlined />
  }
];

export function LeftMenu(props: IMenuProps) {
  const { collapsed, onCollapse } = props;
  const pathname = document.location.pathname;
  const selected = [pathname === '/' ? '/dashboard' : pathname];

  return (
    <Sider theme="light" collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo-container">
        <div className="logo" />
      </div>

      <Menu theme="light" defaultSelectedKeys={selected} mode="inline">
        {menu.map((item, pos) => {
          const MenuIcon = item.icon;

          return (
            <Menu.Item key={item.path}>
              <MenuIcon />
              <span>{item.label}</span>
              <Link to={`${item.path}`}>{item.label}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
}
