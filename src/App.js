import React from 'react';
import { Provider } from 'react-redux';
import store from './store'
import Shows from './components/Shows'


function App() {
  return (
    <Provider store={store}>
      <Shows />
    </Provider>
  );
}

export default App;