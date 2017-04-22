import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'; // required

import Main from './components/app/Main.jsx';

function renderApp() {
  ReactDOM.render(
    <AppContainer>
      <Main />
    </AppContainer>,
    document.getElementById('main')
  );
}

renderApp();

if (module.hot) {
  module.hot.accept('./components/app/Main.jsx', renderApp);
}
