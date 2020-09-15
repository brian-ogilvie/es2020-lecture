import { getRandomDelay } from './utils.mjs';

async function promiseAll() {
  try {
    const results = await Promise.all([
      promise1(),
      promise2(),
      // promise3(),
      promise4(),
    ]);
    console.log('Promise.all succeeded:', results);
  } catch (e) {
    console.log('Promise.all failed:', e.message);
  }
}

async function promiseAllSettled() {
  try {
    const results = await Promise.allSettled([
      promise1(),
      promise2(),
      // promise3(),
      promise4(),
    ]);
    console.log('Promise.allSettled succeeded:', results);
  } catch (e) {
    console.log('Promise.allSettled failed:', e.message);
  }
}

async function run() {
  await promiseAll();
  await promiseAllSettled();
}
run();

function promise1() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Promise1 data');
    }, getRandomDelay());
  });
}

function promise2() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Promise2 data');
    }, getRandomDelay());
  });
}

function promise3() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject('server responsed with status 404');
    }, getRandomDelay());
  });
}

function promise4() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Promise4 data');
    }, getRandomDelay());
  });
}
