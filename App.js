import React from 'react';
import configreStore from './src/store/configureStore';
import Root from './src';

const App = () => (
  <Root
    store={configreStore()}
  />
);

export default App;
