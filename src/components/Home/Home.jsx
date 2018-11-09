import { Layout, Select, Button } from 'antd';
import { slide as Burger } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import * as React from 'react';

import 'antd/dist/antd.css';
import './App.css';

const { Header, Content, Footer } = Layout;
const Option = Select.Option;

// import logo from './logo.svg';

export const Home = () => {
  const [lang, setLang] = React.useState('js');

  return (
    <div>
      <Burger>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
      </Burger>
      <Layout style={{ height: '100vh' }}>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              risus ante, tincidunt ut efficitur sed, congue quis mauris. Sed
              rutrum sed quam sed semper. Etiam cursus mattis metus, vel
              ullamcorper neque. Sed nec vulputate eros. Etiam varius congue ex,
              ac placerat lorem gravida vel. Sed id lobortis odio. Aenean nisl
              sapien, tempus sed lorem ut, tristique rutrum erat. Curabitur est
              nulla, lacinia id convallis eu, auctor ut enim.
              <hr />
              <Select
                style={{ width: 200 }}
                showSearch={true}
                placeholder="Language"
                optionFilterProp="children"
                filterOption={true}
                onChange={setLang}
              >
                <Option value="js">Js</Option>
                <Option value="ts">Ts</Option>
              </Select>{' '}
              <Link to={`/doc/${lang}`}>
                <Button type="primary">Create</Button>
              </Link>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Collab.Center ©2018</Footer>
        </Layout>
      </Layout>
    </div>
  );
};
