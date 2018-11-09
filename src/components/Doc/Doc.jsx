import brace from 'brace';
import AceEditor from 'react-ace';
import * as firebase from 'firebase';
import Firepad from 'firepad';

import * as React from 'react';

export const Doc = () => {
  var firepadRef = firebase.database().ref();
  var firepad = Firepad.fromAce(firepadRef, aceInstance.editor, {
    richTextShortcuts: true,
    richTextToolbar: true,
    defaultText: 'Hello, World!'
  });
  return <div id="firepad" />;
};
