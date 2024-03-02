import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './Componets/App'
import { Provider } from 'react-redux';
import myStore from './Store/Sagas/Store'



const root = ReactDOM.createRoot(document.getElementById("root")); 

root.render(
    <>
    <Provider store={myStore}> 
    <App/>
    </Provider> 
    </>
) 