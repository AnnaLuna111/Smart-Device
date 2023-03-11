// Реализация аккордеона
export const initAccordions = () => {

  const buttons = document.querySelectorAll('[data-accordion-button]');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', ({target}) => {
      const accordion = target.closest('[data-accordion]');
      const groups = accordion.querySelectorAll('[data-accordion-item]');
      const groupCurrent = target.closest('[data-accordion-item]');
      const isOpen = document.querySelector('.is-open');

      groups.forEach((group) => {
        if (group === groupCurrent) {
          group.classList.toggle('is-open');
        }

        if (isOpen) {
          isOpen.classList.remove('is-open');
        }
      });
    });
  }
};
