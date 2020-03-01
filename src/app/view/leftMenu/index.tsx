import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Layout, Menu } from 'antd';
import './index.css';

const { Sider } = Layout;

interface IMenuProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}

interface IMenuItems {
  path: string;
  label: string;
  icon: string;
}

const menu: IMenuItems[] = [
  {
    path: '/dashboard',
    label: 'Dashboard',
    icon: 'pie-chart'
  },
  {
    path: '/orders',
    label: 'Orders',
    icon: 'bell'
  },
  {
    path: '/recipes',
    label: 'Recipes',
    icon: 'read'
  },
  {
    path: '/ingredients',
    label: 'Ingredients',
    icon: 'database'
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
        {menu.map((item, pos) => (
          <Menu.Item key={item.path}>
            <Icon type={item.icon} />
            <span>{item.label}</span>
            <Link to={`${item.path}`}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
}
