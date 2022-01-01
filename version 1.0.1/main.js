"use strict";

const input = document.querySelector(".footer__input");
const btn = document.querySelector(".footer__btn");
const items = document.querySelector(".items");

let id = 0;

/**입력한 내용이 리스트에 추가되어 보여진다
 *
 * @param
 * @returns
 */
function onAdd() {
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }

  const item = createItem(text);
  items.appendChild(item);

  input.value = "";
  input.focus();
  item.scrollIntoView({ block: "center" });
}

/**새로운 아이템을 생성 (텍스트 + 삭제 버튼)
 *
 * @param {String} text 입력 받은 텍스트
 * @returns 리스트에 들어갈 li 아이템
 */
function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");
  itemRow.setAttribute("data-id", id);
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

btn.addEventListener("click", () => {
  onAdd();
});

input.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    onAdd();
  }
});

items.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});
