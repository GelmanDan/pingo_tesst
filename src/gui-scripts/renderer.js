const { ipcRenderer } = require('electron');
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from '../gui/App';
// import * as serviceWorker from '../serviceWorker';
// import '../../public/index.scss';

const select = selector => document.querySelector(selector)

let container = select('#messages')
let progressBar = select('#progressBar')
let version = select('#version')

//
// ReactDOM.render(<App/>, document.getElementById('root'));
//
// serviceWorker.register();

ipcRenderer.on('message', (event, text) => {

  let message = document.createElement('div')
  message.innerHTML = text
  container.appendChild(message)

})

ipcRenderer.on('version', (event, text) => {
  version.innerText = text
})

ipcRenderer.on('download-progress', (event, text) => {
  progressBar.style.width = `${text}%`
})