import './GlobalModule.js';

function runInBrowser() {
  window.logGlobalObject();
}

function runInWorker() {
  const worker = new Worker('./worker.mjs');
  worker.postMessage('logGlobalObject');
}

const browserButton = document.getElementById('browser-button');
const workerButton = document.getElementById('worker-button');
browserButton.addEventListener('click', runInBrowser);
workerButton.addEventListener('click', runInWorker);
