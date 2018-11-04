import { Icon, Layout, Menu, Select, Button } from 'antd';
import * as React from 'react';

import 'antd/dist/antd.css';
import './App.css';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const Option = Select.Option;

// import logo from './logo.svg';

const index = () => {
  const [collapsed, setCollapsed] = React.useState(true);

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider collapsed={collapsed} onCollapse={setCollapsed} collapsible={true}>
        <div className="ltrueogo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>User</span>
              </span>
            }
          >
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="team" />
                <span>Team</span>
              </span>
            }
          >
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Icon type="file" />
            <span>File</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff' }}>
          <h1>Collab.Center</h1>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <div
            style={{
              background: '#fff',
              fontSize: 16,
              minHeight: 360,
              padding: 24
            }}
          >
            Collab.Center is an easy way to share collaborative coding docs or
            even plain text online! Just select a language and you're ready to
            go!
            <hr />
            <Select
              style={{ width: 200 }}
              showSearch={true}
              placeholder="Language"
              optionFilterProp="children"
              filterOption={true}
            >
              <Option value="js">Js</Option>
              <Option value="ts">Ts</Option>
            </Select>{' '}
            <Button type="primary">Create</Button>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Collab.Center ©2018</Footer>
      </Layout>
    </Layout>
  );
};

export default index;
