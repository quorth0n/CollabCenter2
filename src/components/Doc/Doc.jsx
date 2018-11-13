import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Helmet from 'react-helmet';
import * as React from 'react';

import './Doc.css';

const { Header, Content, Sider } = Layout;

export const Doc = ({ match }) => {

  React.useEffect(() => {
    if (!window.firebase.apps.length) {
      const config = {
        apiKey: process.env.REACT_APP_apikey,
        authDomain: process.env.REACT_APP_authdomain,
        databaseURL: process.env.REACT_APP_databaseurl,
        projectId: process.env.REACT_APP_projectid,
        storageBucket: process.env.REACT_APP_storagebucket,
        messagingSenderId: process.env.REACT_APP_messagingsenderid
      };
      window.firebase.initializeApp(config);
    }

    const firepadRef = window.firebase.database().ref(`docs/`).child(match.params.padid);

    const codeMirror = window.CodeMirror(document.getElementById('firepad-container'), {
      lineNumbers: true,
      styleActiveLine: true,
      matchBrackets: true,
      mode: 'text/x-go',
    });

    const userId = Math.floor(Math.random() * 9999999999).toString();
    const firepad = window.Firepad.fromCodeMirror(firepadRef, codeMirror, {
      userId: userId
    });
    firepad.on('ready', function () {
      if (firepad.isHistoryEmpty()) {
        firepad.setHtml('function () {\nconsole.log("test");\n}');
      }
    });

    const firepadUserList = window.FirepadUserList.fromDiv(firepadRef.child('users'), document.getElementById('firepad-userlist'), userId);

  });

  return (
    <Layout style={{ overflow: 'hidden', height: '100vh' }}>
      <Helmet>
        <script src={`https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.17.0/mode/${'go'}/${'go.js'}`}></script>
      </Helmet>
      <Header>
        <h1>Collab.Center</h1>
      </Header>
      <Layout>
        <Sider width={200}>
          <div id="firepad-userlist" style={{ height: '100%' }}></div>
        </Sider>
        <Layout >
          <div id="firepad-container" style={{ height: '100%' }}></div>
        </Layout>
      </Layout>

      <Route path={`${match.path}/:lang`} component={withSetLang} />
    </Layout>
  );

};
