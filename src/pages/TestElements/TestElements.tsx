import React from "react";
import { Button, Radio, Menu, Dropdown } from 'antd';
import { MenuInfo } from 'rc-menu/lib/interface';


type StateType = {
}

type PropsType = {}

class TestElements extends React.Component<PropsType, StateType> {

  handleMenuClick(e: MenuInfo) {
    console.log('click', e);
  }


  getMenu() {
    return (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">1st item</Menu.Item>
        <Menu.Item key="2">2nd item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
      </Menu>)
  }



  render() {
    return (
      <>
        <Button>test</Button>
        <Dropdown.Button overlay={this.getMenu()}>Actions</Dropdown.Button>
      </>

    );
  }
}


export default TestElements
