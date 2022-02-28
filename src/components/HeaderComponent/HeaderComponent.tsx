import {NavLink} from "react-router-dom";
import {Layout, Menu} from "antd";
import MenuItem from "antd/lib/menu/MenuItem";
const { Header } = Layout;


const navMenu = [
  {
    id: 1,
    title: "Home",
    path: "/"
  },
  {
    id: 2,
    title: "About",
    path: "/about"
  },
  {
    id: 3,
    title: "Contacts",
    path: "/contacts"
  }

];

const HeaderComponent = ()=>{
  return (
    <Header>
    {/* <div className="logo" >LOGO</div> */}
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      {navMenu.map((menuItem, index) => {
        const key = index + 1;
        return <Menu.Item key={key}><NavLink to={menuItem.path}>{menuItem.title}</NavLink></Menu.Item>;
      })}
    </Menu>
  </Header>
  )
}

export default HeaderComponent

{/* <NavLink to="/" style={style}> Main </NavLink> */}