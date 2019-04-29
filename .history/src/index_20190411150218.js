import  React from 'react';
import ReactDom,{render} from 'react-dom';
import { Provider, observer, inject } from 'mobx-react'

import App from "./APP";
render(
    <Provider store={stores} >
        <App/>
    </Provider>
    ,document.querySelector('#root'));


