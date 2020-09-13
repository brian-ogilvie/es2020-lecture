import { createRunBoth } from './utils.mjs';

// Before, using OR operator ||
function displayDataOld(data) {
  const display = data || 'data not found';
  console.log(display);
}

// 2020, using nullish coalescing operator ??
function displayDataNew(data) {
  const display = data ?? 'data not found';
  console.log(display);
}

const runBoth = createRunBoth(displayDataOld, displayDataNew);

runBoth(8);

runBoth('Hello');

runBoth(null);

runBoth(undefined);

runBoth(false);

runBoth(0);

runBoth('');
