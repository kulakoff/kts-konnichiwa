import { Layout } from "antd";
const { Footer } = Layout;


const FooterComponent = () => {
  return <Footer style={{ textAlign: 'center' }}>KTS © {new Date().getFullYear()} - Konnichiwa </Footer>

}

export default FooterComponent