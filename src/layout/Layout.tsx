import React from "react";
// import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./Layout.module.scss";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  GithubOutlined,
  DribbbleOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  InfoCircleOutlined
} from "@ant-design/icons";
import FooterComponent from "@components/FooterComponent";
import { Outlet, NavLink } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class LayoutScreen extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed: any) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<DribbbleOutlined  />}>
              <NavLink to="/">Main Page</NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<GithubOutlined />}>
              <NavLink to="/repos">Repository</NavLink>
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Users">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
            <Menu.Item key="10" icon={<InfoCircleOutlined />}>
              <NavLink to="/about">About</NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Outlet />
            </div>
          </Content>
          <FooterComponent />
        </Layout>
      </Layout>
    );
  }
}

export default LayoutScreen;
