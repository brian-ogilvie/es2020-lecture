import './GlobalModule.js';

function runInBrowser() {
  window.logGlobalObject();
}
const browserButton = document.getElementById('browser-button');
browserButton.addEventListener('click', runInBrowser);

function runInWorker() {
  const worker = new Worker('./worker.mjs');
  worker.postMessage('logGlobalObject');
}
const workerButton = document.getElementById('worker-button');
workerButton.addEventListener('click', runInWorker);
