import * as React from 'react';

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
      console.log(config);
      window.firebase.initializeApp(config);
    }
    const firepadRef = window.firebase.database().ref(`docs/`).child(match.params.padid);
    //// Create CodeMirror (with lineWrapping on).
    const codeMirror = window.CodeMirror(document.getElementById('firepad-container'), {
      lineNumbers: true,
      mode: 'javascript',
    });
    //// Create Firepad (with rich text toolbar and shortcuts enabled).
    const firepad = window.Firepad.fromCodeMirror(firepadRef, codeMirror);
    firepad.on('ready', function () {
      if (firepad.isHistoryEmpty()) {
        firepad.setHtml('function () {\nconsole.log("test");\n}');
      }
    });
  });

  return (
    <div>
      <div style={{ height: '100vh' }} id="firepad-container"></div>
    </div>
  );

};
