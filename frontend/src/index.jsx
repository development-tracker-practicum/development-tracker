import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App/App';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
ReactDOM.createRoot(document.querySelector('#root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
