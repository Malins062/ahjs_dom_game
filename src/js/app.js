import FieldsWidget from './fields-widget';

/* eslint-disable no-alert */
const COUNT_FIELDS = 16; // Количество игровых полей

console.log('Game loaded...');

const titleGame = document.querySelector('.title');
let playing = false;

titleGame.addEventListener('click', () => {
  if (!playing) {
    console.log('Game start..');

    playing = true;
    // const widget = new FieldsWidget(document.getElementsByClassName('el'));
    const widget = new FieldsWidget(document.querySelectorAll('.el'));
    window.widget = widget;

    // Обработка кликов на каждое поле
    widget.allElements.forEach((element) => {
      element.addEventListener('click', () => {
        if (element.classList.contains('active')) {
          clearInterval(gameInterval);
          element.classList.add('dead');
          element.innerText = 'УБИТ';
          console.log('Game over..');
        }
      });
    });

    // Старт игры
    const gameInterval = setInterval(() => {
      // Удаление из поля гоблина
      widget.deactivateField();

      // Вывод гоблина в новом поле
      widget.activateField(Math.floor(1 + Math.random() * COUNT_FIELDS));
    }, 1000);
  } else {
    alert('Игра уже запущена!');
  }
});
