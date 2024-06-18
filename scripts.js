// Получение элементов
const hoverElement = document.querySelector('.title');
const targetElement = document.querySelector('.preview-card');

// Добавление события наведения
hoverElement.addEventListener('mouseover', () => {
    targetElement.style.boxShadow = '15px 15px 0px black';
});

// Добавление события снятия наведения
hoverElement.addEventListener('mouseout', () => {
  targetElement.style.boxShadow = '7.5px 7.5px 0px black';
});