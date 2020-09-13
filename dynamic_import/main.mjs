import { getData } from './services/SlideService.mjs';

const slideDeck = document.getElementById('slides');
const nextBtn = document.getElementById('next');

// Here's the dynamic import!
async function importAndDisplay(moduleName) {
  const { html } = await import(`./slides/${moduleName}.mjs`);
  slideDeck.innerHTML = html();
  nextBtn.innerText = 'Next';
}

function completeSlideShow() {
  slideDeck.innerHTML = '<div>You have completed the slideshow!</div>';
  nextBtn.disabled = true;
}

const getNext = iterator => () => {
  const { value: slideName, done } = iterator.next();
  if (slideName) {
    importAndDisplay(slideName);
  }
  if (done) {
    completeSlideShow();
  }
};

async function run() {
  const slideIterator = await getData();
  nextBtn.addEventListener('click', getNext(slideIterator));
}

run();
