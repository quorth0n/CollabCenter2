import { Layout, Select, Button } from 'antd';
import { v4 } from 'uuid';
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
      <Layout style={{ overflow: 'hidden', height: '100vh' }}>
        <Layout>
          <Header>
            <h1>Collab.Center (v2)</h1>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <div
              style={{
                background: '#fff',
                fontSize: '1.5em',
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
                style={{ width: '50vw', height: '1.5em' }}
                showSearch={true}
                placeholder="Language"
                optionFilterProp="children"
                filterOption={true}
                onChange={setLang}
              >
                {window.CodeMirror.modeInfo.map(mode => (
                  <Option
                    key={mode.mode}
                    value={mode.mime !== 'null' ? mode.mime : mode.mode}
                  >
                    {mode.name}
                  </Option>
                ))}
              </Select>{' '}
              <Link to={`/doc/${v4()}/${lang.replace(/\//g, '%2F')}`}>
                <Button type="primary">Create!</Button>
              </Link>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Collab.Center ©2018</Footer>
        </Layout>
      </Layout>
    </div>
  );
};
