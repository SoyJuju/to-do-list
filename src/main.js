let to_do_list = document.getElementById('to-do-list');
let add_btn = document.getElementById('add-items-button');
const popup_box = document.querySelector('.popup_container');
let counter = 0;
let len_counter = 0;
let edit_counter = 0;
let counter_limit = 0;
let up_index_counter = 0;
let del_counter = 0;

function addList(item_name) {
  let to_do_item = document.createElement('li');
  let to_do_container = document.createElement('div');
  to_do_container.classList.add('to-do-items');

  let to_do_text = document.createElement('p');
  let icons = document.createElement('div');
  let btn_image = document.createElement('img');
  let to_do_btn = document.createElement('button');
  let edit_image = document.createElement('img');
  let to_edit_btn = document.createElement('button');
  to_do_btn.classList.add('del-btn');
  to_edit_btn.classList.add('edit-btn');
  icons.classList.add('item-icons');
  to_do_btn.setAttribute('id', 'delete-items');

  to_do_item.appendChild(to_do_container);
  to_do_container.appendChild(to_do_text);
  icons.appendChild(to_edit_btn);
  icons.appendChild(to_do_btn);
  to_do_container.appendChild(icons);

  to_do_text.appendChild(document.createTextNode(item_name));
  btn_image.src =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjMiIGQ9Ik0xOS41LDExLjVWMTBjMC0yLjUsMi00LjUsNC41LTQuNXM0LjUsMiw0LjUsNC41djEuNSI+PC9wYXRoPjxsaW5lIHgxPSI4LjUiIHgyPSIzOS41IiB5MT0iMTEuNSIgeTI9IjExLjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMyI+PC9saW5lPjxsaW5lIHgxPSIzNi41IiB4Mj0iMzYuNSIgeTE9IjIzLjUiIHkyPSIxMS41IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjMiPjwvbGluZT48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjMiIGQ9Ik0xMS41LDE4Ljd2MTkuOGMwLDIuMiwxLjgsNCw0LDRoMTdjMi4yLDAsNC0xLjgsNC00VjMxIj48L3BhdGg+PGxpbmUgeDE9IjIwLjUiIHgyPSIyMC41IiB5MT0iMTkuNSIgeTI9IjM0LjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMyI+PC9saW5lPjxsaW5lIHgxPSIyNy41IiB4Mj0iMjcuNSIgeTE9IjE5LjUiIHkyPSIzNC41IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjMiPjwvbGluZT4KPC9zdmc+';
  to_do_btn.appendChild(btn_image);
  to_do_list.appendChild(to_do_item);
  edit_image.src =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjMiIGQ9Ik0xOC40LDIxLjhMMzIuMSw4LjFjMi4zLTIuMyw2LTIuMSw4LjEsMC40YzEuOCwyLjIsMS41LDUuNS0wLjUsNy41bC0yLjgsMi44Ij48L3BhdGg+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMyIgZD0iTTMyLjUsMjMuM0wxNy45LDM3LjhjLTAuNCwwLjQtMC44LDAuNi0xLjMsMC44TDYuNSw0MS41bDIuOS0xMC4xYzAuMS0wLjUsMC40LTAuOSwwLjgtMS4zbDMuNy0zLjciPjwvcGF0aD48bGluZSB4MT0iMjkuMSIgeDI9IjM2LjkiIHkxPSIxMS4xIiB5Mj0iMTguOSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMyI+PC9saW5lPgo8L3N2Zz4=';
  to_edit_btn.appendChild(edit_image);
}

function generateMap() {
  map = [];
  for (let i = 0; i < counter; i++) {
    map.push(0);
  }
  return map;
}

function findIndex(map, index) {
  let edit_index_forward = 0;

  if (index === 0) {
    return index;
  }

  for (let i = index - 1; i >= 0; i--) {
    if (map[i] === 0) {
      for (let i = index; i >= 0; i--) {
        if (map[i] === 1) {
          edit_index_forward++;
        }
      }
      return index - edit_index_forward;
    }
  }

  for (let i = index; i < counter; i++) {
    if (map[i] === 0) {
      return 0;
    }
  }
}

function getIndex(map, index) {
  let down_index_counter = 0;
  let down_index_forward = 0;

  if (index === 0) {
    map[index] = 1;
    up_index_counter++;
    return index;
  }

  for (let i = index - 1; i >= 0; i--) {
    if (map[i] === 0) {
      for (let i = index; i >= 0; i--) {
        if (map[i] === 1) {
          down_index_forward++;
        }
      }
      map[i + 1 + down_index_counter] = 1;
      return index - down_index_forward;
    }
    down_index_counter++;
  }

  for (let i = index; i < counter; i++) {
    if (map[i] === 0) {
      up_index_counter++;
      map[i] = 1;
      return 0;
    }
  }
}

function deleteItems(map, del_btns) {
  for (let a = 0; a < counter; a++) {
    del_btns[a].addEventListener('click', () => {
      len_counter++;
      if (len_counter + a === counter) {
        let del_index = getIndex(map, a);
        del_btns[del_index].parentElement.parentElement.parentElement.remove();
        len_counter = 0;
        del_counter++;
      }
    });
  }
}

function inputPopup(text, index, btn_arr) {
  popup_box.toggleAttribute('data-visible');
  popup_box.setAttribute('aria-expnded', true);
  document.getElementById('edit-box').value = text;

  const edit_btn = document.getElementById('edit-items-button');
  edit_btn.addEventListener('click', () => {
    btn_arr[index].parentElement.parentElement.firstChild.innerHTML =
      document.getElementById('edit-box').value;
    popup_box.removeAttribute('data-visible');
    popup_box.setAttribute('aria-expnded', false);
  });

  const quit_btn = document.getElementById('quit-btn');
  quit_btn.addEventListener('click', () => {
    popup_box.removeAttribute('data-visible');
    popup_box.setAttribute('aria-expnded', false);
  });
}

function editItems(map, edit_btns) {
  for (let a = 0; a < counter; a++) {
    edit_btns[a].addEventListener('click', () => {
      edit_counter++;
      if (edit_counter + a === counter) {
        let edit_index = findIndex(map, a);
        current_text =
          edit_btns[edit_index].parentElement.parentElement.firstChild
            .innerHTML;
        inputPopup(current_text, edit_index, edit_btns);
        edit_counter = 0;
      }
    });
  }
}

function addItem() {
  let item_name = document.getElementById('input-box').value;
  addList(item_name);
  document.getElementById('input-box').value = '';

  let del_btns = document.getElementsByClassName('del-btn');
  let edit_btns = document.getElementsByClassName('edit-btn');

  counter -= del_counter;
  del_counter = 0;
  up_index_counter = 0;
  counter++;

  let map = generateMap();
  deleteItems(map, del_btns);
  editItems(map, edit_btns);
}

add_btn.addEventListener('click', () => {
  addItem();
});
