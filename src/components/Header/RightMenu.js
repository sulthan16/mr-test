import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

function RightMenu(props) {
  return (
    <Menu theme={props.theme} mode="horizontal">
      <Menu.Item key="mail">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="app">
        <Link to="/login">Login</Link>
      </Menu.Item>
    </Menu>
  );
}
export default RightMenu;