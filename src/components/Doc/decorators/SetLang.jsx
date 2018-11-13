import { Redirect } from 'react-router';
import * as React from 'react';

export default ({ match }) => {
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

    window.firebase
      .database()
      .ref('docs/')
      .child(match.params.padid)
      .set({
        lang: match.params.lang
      });
  });

  return <Redirect to={`/doc/${match.params.padid}`} />;
};
