function* arrayIterator(arr) {
  for (let item of arr) {
    yield item;
  }
}

export function getData() {
  return new Promise(resolve => {
    const slideNames = ['One', 'Two', 'Three', 'Four'];
    resolve(arrayIterator(slideNames));
  });
}
