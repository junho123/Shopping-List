'use strict';

const input = document.querySelector('.footer__input');
const btn = document.querySelector('.footer__btn');
const items = document.querySelector('.items');
const form = document.querySelector('.new-form');

let id = 0;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  onAdd();
});

// 입력한 내용이 리스트에 추가되어 보여진다
function onAdd() {
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }

  const item = createItem(text);
  items.appendChild(item);

  input.value = '';
  input.focus();
  item.scrollIntoView({ block: 'center' });
}

// 새로운 아이템을 생성 (텍스트 + 삭제 버튼)
function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');
  itemRow.setAttribute('data-id', id);
  itemRow.innerHTML = `
    <div class="item">
      <span class="item__name">${text}</span>
      <button class="item__delete">
        <i class="fas fa-trash-alt" data-id=${id}></i>
      </button>
    </div>
    <div class="item__divider"></div>
  `;

  id++;
  return itemRow;
}

// 쓰레기통 버튼 클릭시 해당 id의 row 삭제
items.addEventListener('click', (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});
