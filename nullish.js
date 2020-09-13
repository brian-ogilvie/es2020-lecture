// Before, using OR operator ||
function oldWay(data) {
  const display = data || 'data not found';
  console.log('||', { data, display });
}

// Now, using nullish coalescing operator ??
function newWay(data) {
  const display = data ?? 'data not found';
  console.log('??', { data, display });
}

function spacer() {
  console.log('.............');
}

oldWay(8);
newWay(8);
spacer();

oldWay('Hello');
newWay('Hello');
spacer();

oldWay(null);
newWay(null);
spacer();

oldWay(undefined);
newWay(undefined);
spacer();

oldWay(false);
newWay(false);
spacer();

oldWay(0);
newWay(0);
spacer();

oldWay('');
newWay('');
spacer();

oldWay(NaN);
newWay(NaN);
spacer();
