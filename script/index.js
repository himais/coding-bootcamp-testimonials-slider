const INITIAL_INDEX = 0;
const HIDDEN_CLASS_NAME = 'card--hidden';
const testimonialIds = []; 

let currentTestimonial = INITIAL_INDEX;

const createCardId = (id) => `card-${id}`;

const updateElementsDisplay = (currentIndex, previousIndex) => {
  const previousElement = document.getElementById(createCardId(previousIndex));
  previousElement.classList.add(HIDDEN_CLASS_NAME);

  const currentElement = document.getElementById(createCardId(currentIndex));
  currentElement.classList.remove(HIDDEN_CLASS_NAME);
}

const changeCardPage = (nextIndex, fallbackIndex = INITIAL_INDEX) => {
  const previousIndex = currentTestimonial;

  if(testimonialIds[nextIndex]) {
    currentTestimonial = nextIndex;
  } else {
    currentTestimonial = fallbackIndex;
  }

  updateElementsDisplay(currentTestimonial, previousIndex);
}

const goToNextCard = () => {
  const nextIndex = currentTestimonial + 1;

  changeCardPage(nextIndex);
}

const goToPreviousCard = () => {
  const prevIndex = currentTestimonial - 1;
  const fallbackIndex = testimonialIds.length - 1;

  changeCardPage(prevIndex, fallbackIndex);
}

const onLoadCard = () => {
  const elements = document.querySelectorAll('.card');

  [...elements].forEach(({ id }) => {
    testimonialIds.push(id)
  });
}

window.addEventListener('load', onLoadCard);
