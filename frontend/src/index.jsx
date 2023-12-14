import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
=======
import { HashRouter } from 'react-router-dom';
>>>>>>> 40e0f267ee6070dd0ceaab74fd0ed72a7373b13f
=======
import { HashRouter } from 'react-router-dom';
>>>>>>> 40e0f267ee6070dd0ceaab74fd0ed72a7373b13f
import { App } from './components/App/App';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
ReactDOM.createRoot(document.querySelector('#root')).render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
);
