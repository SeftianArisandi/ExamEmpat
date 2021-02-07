import React from 'react';
import Loader from './components/Loader';
import Home from './components/Home';
import ContactSuccess from './components/ContactSuccess';
import ContactError from './components/ContactError';


import { Provider } from 'react-redux';
import store from './app/store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Loader />
        <Home />
        <ContactSuccess />
        <ContactError />
      </Provider>
    </div>
  )
}

export default App;
