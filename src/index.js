import React from 'react';       // 只需要引入React 和  ReactDOM 无需引入 Component
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';          // 引入组件App
import registerServiceWorker from './registerServiceWorker';    // 主要是用于在生产环境中为用户在本地创建一个service worker 来缓存资源到本地，提升应用的访问速度，

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
