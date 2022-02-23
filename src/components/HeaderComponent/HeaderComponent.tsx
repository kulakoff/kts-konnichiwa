import {Layout, Menu} from "antd";
const { Header } = Layout;

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

const HeaderComponent = ()=>{
  return (
    <Header>
    {/* <div className="logo" >LOGO</div> */}
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      {navMenu.map((menuItem, index) => {
        const key = index + 1;
        return <Menu.Item key={key}>{menuItem.title}</Menu.Item>;
      })}
    </Menu>
  </Header>
  )
}

export default HeaderComponent