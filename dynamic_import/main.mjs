import { getData } from './services/SlideService.mjs';

const slideDeck = document.getElementById('slides');
const nextBtn = document.getElementById('next');

// Here's the dynamic import!
async function importAndDisplay(moduleName) {
  try {
    const { html } = await import(`./slides/${moduleName}.mjs`);
    slideDeck.innerHTML = html();
  } catch (e) {
    displayError(e);
  }
}

async function run() {
  // slideIterator will return a list of slide names in order:
  // 'Intro', 'SprintPlanning', 'Implementation', 'Release'
  const slideIterator = await getData();
  nextBtn.addEventListener('click', getNext(slideIterator));
}

run();

function completeSlideShow() {
  slideDeck.innerHTML = '<div>You have completed the slideshow!</div>';
  nextBtn.disabled = true;
}

function getNext(iterator) {
  return function returnNext() {
    nextBtn.innerText = 'Next';
    const { value: slideName, done } = iterator.next();
    if (slideName) {
      importAndDisplay(slideName);
    }
    if (done) {
      completeSlideShow();
    }
  };
}

function displayError(e) {
  const div = document.createElement('div');
  div.innerText = e.message;
  slideDeck.append(div);
}
