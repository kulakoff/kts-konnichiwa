import { Layout } from "antd";
const { Footer } = Layout;


const FooterComponent = () => {
  return <Footer style={{ textAlign: 'center' }}>KTS ©{new Date().getFullYear()} - konnichiwa </Footer>

}

export default FooterComponent