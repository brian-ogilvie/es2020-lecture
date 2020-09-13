function* arrayIterator(arr) {
  for (let item of arr) {
    yield item;
  }
}

export function getData() {
  return new Promise(resolve => {
    const slideNames = ['Intro', 'SprintPlanning', 'Implementation', 'Release'];
    resolve(arrayIterator(slideNames));
  });
}
