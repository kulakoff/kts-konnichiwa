import { Layout, Menu, Space, Input, Button, Tooltip } from "antd"
import { FC } from "react";
import myIcon from "./../../assets/img/vectorSearch.svg"
const { Header, Content, Footer } = Layout;
const navMenu = [
  {
    id: 1,
    title: "Home"
  },
  {
    id: 2,
    title: "About"
  }

];

const onSearch = (value: any) => console.log(value);

const Icon = () => {
  return (
    <img src={myIcon} alt="icon_logo" />
  )
}

const ReposSearchPage: FC = () => {
  return <Layout>
    <Header>
      {/* <div className="logo" >LOGO</div> */}
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        {navMenu.map((menuItem, index) => {
          const key = index + 1;
          return <Menu.Item key={key}>{menuItem.title}</Menu.Item>;
        })}
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <div className="site-layout-content">
        <div className="content-wrapper">

          <div className="search-bar">
            <Input placeholder="Basic usage" disabled={false} />
            <Button type="primary" shape="circle" icon={<Icon />} disabled={false} style={{ marginLeft: 5 }} />

          </div>

        </div>

      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>KTS ©{new Date().getFullYear()} - konnichiwa </Footer>
  </Layout>;
}

export default ReposSearchPage