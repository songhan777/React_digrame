import  React from 'react';
import ReactDom,{render} from 'react-dom';
import { Provider, observer, inject } from 'mobx-react'

import App from "./APP";
render(
    <div>
        <App/>
    </div>
    ,document.querySelector('#root'));


