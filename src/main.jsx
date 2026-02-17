import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@fontsource/poppins";
import "@fontsource/poppins/400.css"; 
import "@fontsource/poppins/400-italic.css"; 
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import  store  from '../src/Redux/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App/>
     <Toaster
  position="bottom-center"
  toastOptions={{
    duration: 2000,
    style: {
      borderRadius: "8px",
    },
  }}
/>
    </Provider>
  </StrictMode>,
)
