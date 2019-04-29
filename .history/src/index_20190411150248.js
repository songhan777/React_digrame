import  React from 'react';
import ReactDom,{render} from 'react-dom';
import { Provider } from 'mobx-react'
import * as stores from './store/index'

import App from "./APP";
render(
    <Provider store={stores} >
        <App/>
    </Provider>
    ,document.querySelector('#root'));


