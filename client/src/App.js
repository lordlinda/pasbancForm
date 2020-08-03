import React from 'react'
import {Provider} from 'react-redux'

import Main from './components/Main.js'
import store from './redux/store.js'
function App() {
  return (
  	<Provider store={store}>
    <div>
    <Main />
    </div>
    </Provider>
  );
}

export default App;
