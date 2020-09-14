export function spacer() {
  console.log('.............', '\n');
}

export function runBoth(oldFn, newFn, data) {
  const fnName = oldFn.name.replace('Old', '');
  console.log('Function:', fnName);
  console.log('data:', JSON.stringify(data));
  console.log('Old way:');
  oldFn(data);
  console.log('New way:');
  newFn(data);
  spacer();
}

export function createRunBoth(oldFn, newFn) {
  return function applyData(data) {
    runBoth(oldFn, newFn, data);
  };
}

export function getRandomDelay() {
  return Math.random() * 1000 + 1000;
}
