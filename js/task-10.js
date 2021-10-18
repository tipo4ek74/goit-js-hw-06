/* Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит 
  количество элементов в input и нажимает кнопку
Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, 
коллекция элементов очищается.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>
Создай функцию createBoxes(amount), которая принимает один параметр - число. 
Функция создает столько <div>, сколько
  указано в amount и добавляет их в div#boxes.

  Размеры самого первого <div> - 30px на 30px.
    Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
    Все элементы должены иметь случайный цвет фона в формате HEX. Используй 
    готовую функцию getRandomHexColor для
    получения цвета.
    function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
    Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем 
    самым удаляя все созданные элементы. */

let inputVal = document.querySelector("input[type='number']");
let divList = document.getElementById("boxes");
let dataCreate = document.querySelector('button[data-create]');
let dataDestroy = document.querySelector('button[data-destroy]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

dataCreate.addEventListener('click', addDiv)

let size = 20;

function addDiv() {
  let i = 0;
  
  let param = +inputVal.value
  while (i < param) {
    i++;
    let bgcolor = getRandomHexColor();
    size += 10;
    let items = document.createElement("div");
    items.style.backgroundColor = bgcolor;
    items.style.width = size + "px";
    items.style.height = size + "px";
    divList.append(items);
  }
}

dataDestroy.addEventListener('click', () => {
  divList.innerHTML = ''
  size = 20;
})

