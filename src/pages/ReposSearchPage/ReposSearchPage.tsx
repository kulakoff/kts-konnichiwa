import { message, Typography, Layout, Space, Input, Button, Tooltip, Drawer, List, Avatar, Image } from "antd"
import { FC, useState } from "react";
import myIcon from "./../../assets/img/vectorSearch.svg"
import { StarOutlined, StarTwoTone } from '@ant-design/icons';
import HeaderComponent from "@components/HeaderComponent";
import FooterComponent from "@components/FooterComponent";
//
import GitHubStore from "@store/GitHubStore";
import { BranchesType, RepoItem } from "@store/GitHubStore/types";
import { ApiResponse } from "@shared/store/ApiStore/types";
import React from "react";
import LoaderComponent from "@components/LoaderComponent";
import InputFieldComponent from "@components/InputFieldComponent";
import ButtonComponent from "@components/ButtonComponent";
import IconComponent from "@components/IconComponent";

import vectorSearch from "@assets/img/vectorSearch.svg"

import RepoBranchesDrawer from "@components/RepoBranchesDrawer";
//
const { Header, Content, Footer } = Layout;
const { Text } = Typography;
const gitHubStore = new GitHubStore();


const ReposSearchPage: FC = () => {
  const [input, setInput] = useState<string>("")
  const [isLoading, setIsLoading] = useState<true | false>(false);
  const [error, setError] = useState<any>(null)
  const [items, setItems] = useState<any>([])
  const [selesctRepo, setSelectRepo] = useState<string>("")
  const [branhesList, setBranhesList] = useState<any>([])
  const [visible, setVisible] = useState(false);


  const info = (messageValue: string) => {
    message.info(messageValue);
  };
  const warning = (messageValue: string) => {
    message.warning(messageValue);
  };

  const searchOrg = () => {
    if (input !== "") {
      setIsLoading(true)
      gitHubStore
        .getOrganizationReposList({
          organizationName: input,
        })
        .then((result: ApiResponse<RepoItem[], any>) => {
          console.log(result)
          if (result.success) {
            setItems(result.data)
            setIsLoading(false)
          }
          else if (!result.success) {
            setIsLoading(false)
            warning(`По Вашему запросу "${input}" совпадения не найдены.`)
          }
        });
    }
    else {
      info("Укажите название организации")
    }
  }

  const getBranches = (item: string) => {
    setSelectRepo(item)
    console.log(selesctRepo)
    setIsLoading(true)
    gitHubStore
      .getBranchesList({
        owner: input,
        repo: item
      })
      .then((result: ApiResponse<BranchesType[], any>) => {
        if (result.success) {
          setBranhesList(result.data)
          setIsLoading(false)
          showDrawer()
        }
      });
  }

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
    setSelectRepo("")
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
            <InputFieldComponent placeholder={"Введите название организации"} value={input} onChange={(e: any) => setInput(e.target.value)} onPressEnter={() => searchOrg()}></InputFieldComponent>
            <ButtonComponent disabled={isLoading} onClick={() => searchOrg()} icon={<IconComponent icon={vectorSearch} />} >
              button
            </ButtonComponent>
          </div>

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
                  onClick={async (e) => {
                    getBranches(item.name)
                  }}
                  key={item.id}
                  actions={[
                    <IconText
                      icon={StarOutlined}
                      text={item.stargazers_count}
                      key="list-vertical-star-o" />,
                    <Text type="secondary">Updated: {new Date(item.pushed_at).toDateString()}</Text>
                  ]}
                >
                  <List.Item.Meta
                    avatar={<Avatar
                      size={80}
                      src={item.owner.avatar_url}
                    />}
                    title={item.name}
                    description={item.owner.login}
                  />
                </List.Item>
              )}
            />}

          <RepoBranchesDrawer onClose={onClose} visible={visible} drawData={branhesList} />


        </div>

      </div>
    </Content>
    <FooterComponent />



  </Layout>;
}

export default ReposSearchPage