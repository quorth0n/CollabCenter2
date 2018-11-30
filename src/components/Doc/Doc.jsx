import { Layout } from 'antd';
import { Route } from 'react-router';
import * as React from 'react';

import SetLang from './decorators/SetLang';

import './Doc.css';

const { Header, Sider } = Layout;

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

    const firepadRef = window.firebase
      .database()
      .ref('docs/')
      .child(match.params.padid);

    firepadRef.once('value').then(snap => {
      const lang = window.CodeMirror.findModeByMIME(snap.val().lang);
      codeMirror.setOption('mode', snap.val().lang);
      window.CodeMirror.autoLoadMode(codeMirror, lang.mode);
    });

    window.CodeMirror.modeURL =
      'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.17.0/mode/%N/%N.js';
    const codeMirror = window.CodeMirror(
      document.getElementById('firepad-container'),
      {
        lineNumbers: true,
        styleActiveLine: true,
        matchBrackets: true,
        theme: 'cobalt'
      }
    );

    const userId = Math.floor(Math.random() * 9999999999).toString();
    const firepad = window.Firepad.fromCodeMirror(firepadRef, codeMirror, {
      userId: userId
    });
    firepad.on('ready', function() {
      if (firepad.isHistoryEmpty()) {
        firepad.setHtml(
          "/* Hello, and Welcome to Collab.Center! This is how it works:<br> 1. Put some code here.<br> 2. Share the URL with your friends so you can collaborate.<br> 3. Toggle some options above.<br> That's all there is to it! */"
        );
      }
    });

    window.FirepadUserList.fromDiv(
      firepadRef.child('users'),
      document.getElementById('firepad-userlist'),
      userId
    );
  }, []);

  return (
    <Layout style={{ overflow: 'hidden', height: '100vh' }}>
      <Header>
        <h1>Collab.Center</h1>
      </Header>
      <Layout>
        <Sider width={200}>
          <div id="firepad-userlist" style={{ height: '100%' }} />
        </Sider>
        <Layout>
          <div id="firepad-container" style={{ height: '100%' }} />
        </Layout>
      </Layout>

      <Route path={`${match.path}/:lang`} component={SetLang} />
    </Layout>
  );
};
