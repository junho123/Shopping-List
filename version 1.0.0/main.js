"use strict";

const input = document.querySelector(".footer__input");
const btn = document.querySelector(".footer__btn");
const items = document.querySelector(".items");

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

  const item = document.createElement("div");
  item.setAttribute("class", "item");

  const name = document.createElement("span");
  name.setAttribute("class", "item__name");
  name.innerHTML = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "item__delete");
  deleteBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
  deleteBtn.addEventListener("click", () => {
    items.removeChild(itemRow);
  });

  const divider = document.createElement("div");
  divider.setAttribute("class", "item__divider");

  item.appendChild(name);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(divider);

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
