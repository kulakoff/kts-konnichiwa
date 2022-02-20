import { Typography, Layout, Menu, Space, Input, Button, Tooltip, Drawer, List, Avatar } from "antd"
import { FC, useEffect, useState } from "react";
import myIcon from "./../../assets/img/vectorSearch.svg"
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import HeaderComponent from "@components/HeaderComponent";
import FooterComponent from "@components/FooterComponent";
//
import GitHubStore from "@store/GitHubStore";
import { RepoItem } from "@store/GitHubStore/types";
import { ApiResponse } from "@shared/store/ApiStore/types";
import React from "react";
import LoaderComponent from "@components/LoaderComponent";

import styles from "./ReposSearchPage.module.css"
import InputFieldComponent from "@components/InputFieldComponent";
//
const { Header, Content, Footer } = Layout;
const { Search } = Input
const { Text } = Typography;
const gitHubStore = new GitHubStore();
const EXAMPLE_ORGANIZATION = "ktsstudio";

const dataListItems = [
  {
    title: 'Ant Design Title 1',
    url: "http://ya.ru"
  },
  {
    title: 'Ant Design Title 2',
    url: "https://yandex.ru/news/"
  },
  {
    title: 'Ant Design Title 3',
    url: "http://ya.ru"
  },
  {
    title: 'Ant Design Title 4',
    url: "http://ya.ru"
  },
];


const onSearch = (value: any) => console.log(value);

const Icon = () => {
  return (
    <img src={myIcon} alt="icon_logo" />
  )
}

const ReposSearchPage: FC = () => {
  const [input, setInput] = useState<string>("")
  const [isLoading, setIsLoading] = useState<true | false>(false);
  const [error, setError] = useState<any>(null)
  const [items, setItems] = useState<any>([])


  useEffect(() => {
    console.log("useEffect run");
    setIsLoading(true)
    gitHubStore
      .getOrganizationReposList({
        organizationName: EXAMPLE_ORGANIZATION,
      })
      .then((result: ApiResponse<RepoItem[], any>) => {
        if (result.success) {
          setItems(result.data)
          setIsLoading(false)
        }
      });

  }, [])
  useEffect(() => {
    console.log(input)
  }, [input])


  console.log(items)
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };


  const IconText: FC<any> = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );


  return <Layout>
    <HeaderComponent />
    
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <div className="content-wrapper">

            <div className="search-bar">
              <InputFieldComponent placeholder={"Введите название организации"} value={input} onChange={(e:any) => setInput(e.target.value)}></InputFieldComponent>
              <Button type="primary" shape="circle" icon={<Icon />} disabled={false} style={{ marginLeft: 5 }} onClick={() => console.log(input)} />

            </div>
            <Button type="primary" onClick={showDrawer}>
              test open drawer
            </Button>

            {isLoading ?
              <LoaderComponent /> :
              <List
                itemLayout="vertical"
                pagination={{
                  onChange: page => {
                    console.log(page);
                  },
                  pageSize: 5,
                }}
                dataSource={items}
                renderItem={(item: any) => (
                  <List.Item
                    key={item.id}
                    actions={[
                      <IconText icon={StarOutlined} text={item.stargazers_count} key="list-vertical-star-o" />,
                      <Text type="secondary">Updated: {new Date(item.pushed_at).toDateString()}</Text>
                    ]}
                  >
                    <List.Item.Meta
                      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                      title={item.name}
                      description={item.owner.login}
                    />

                  </List.Item>
                )}
              />}

            <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible}>
              <p>Some contents 1 ...</p>
              <p>Some contents 2 ...</p>
              <p>Some contents 3 ...</p>
            </Drawer>


          </div>

        </div>
      </Content>
          <FooterComponent />

    

  </Layout>;
}

export default ReposSearchPage