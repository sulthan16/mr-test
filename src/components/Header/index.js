import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';

import './styles.css'

function Header() {
  const [ visible, setVisible ] = useState(false);

  return (
    <nav className="menuBar">
      <div className="logo">
        <Link to="/">logo</Link>
      </div>
      <div className="menuCon">
        <div className="leftMenu">
          <LeftMenu theme="dark" />
        </div>
        <div className="rightMenu">
          <RightMenu theme="dark" />
        </div>
        <Button className="barsMenu" type="primary" onClick={()=>setVisible(true)}>
          <span className="barsBtn"></span>
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={()=>setVisible(false)}
          visible={visible}
        >
          <LeftMenu theme="light"/>
          <RightMenu theme="light"/>
        </Drawer>
      </div>
    </nav>
  );
}

export default withRouter(Header)