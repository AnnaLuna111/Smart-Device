// Реализация скрытия/раскрытия текста при клике на кнопку

export const initButtons = () => {

  const button = document.querySelector('[data-hide-button]');
  button.addEventListener('click', ({target}) => {
    const block = target.closest('[data-hide]');

    if (button.textContent === 'Подробнее') {
      button.textContent = 'Свернуть';
    } else {
      button.textContent = 'Подробнее';
    }

    if (block) {
      block.classList.toggle('is-open');
    }

    const breakpoint = window.matchMedia('(max-width:767px)');

    if (breakpoint && block.classList.contains('is-open')) {
      const text = block.querySelector('span');
      text.classList.remove('hidden-mobile');
    } else {
      const text = block.querySelector('span');
      text.classList.add('hidden-mobile');
    }
  });
};
