const INITIAL_INDEX = 0;
let currentIndex = INITIAL_INDEX;

const cards = [
  {
    id: 1,
    author: 'Tanya Sinclair',
    role: 'UX Engineer',
    image: 'images/image-tanya.jpg',
    imageSubtitle: "Tanya",
    testimonial: 'I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.'
  },
  {
    id: 2,
    author: 'John Tarkpor',
    role: 'Junior Front-end Developer',
    image: 'images/image-john.jpg',
    imageSubtitle: "John",
    testimonial: 'If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.'
  }
];

const createCardId = (id) => `card-${id}`;

const formatTestimonial = testimonial => `“ ${testimonial} ”`;

const updateTestimonial = () => {
  const card = cards[currentIndex];

  document.querySelector('.card').id = createCardId(card.id);
  document.getElementById('testimonial').textContent = formatTestimonial(card.testimonial);
  document.getElementById('author').textContent = card.author;
  document.getElementById('role').textContent = card.role;

  const picture = document.getElementById('picture');
  picture.src = card.image;
  picture.alt = card.imageSubtitle;
}

const changePage = (nextPage, fallback = INITIAL_INDEX) => {
  if(cards[nextPage]) {
    currentIndex = nextPage;
  } else {
    currentIndex = fallback;
  }

  updateTestimonial();
}

const goToNextCard = () => {
  const nextPage = currentIndex + 1;

  changePage(nextPage);
}

const goToPreviousCard = () => {
  const prevPage = currentIndex - 1;
  const fallback = cards.length -1;

  changePage(prevPage, fallback);
}

const onLoadPage = () => {
  updateTestimonial();
  document.querySelector('.slider').classList.remove('slider--hidden');
}

window.addEventListener('load', onLoadPage);
