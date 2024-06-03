document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('grocery-form');
  const input = document.getElementById('grocery-input');
  const list = document.getElementById('grocery-list');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    addGroceryItem(input.value);
    input.value = '';
  });

  function addGroceryItem(item) {
    const li = document.createElement('li');
    li.textContent = item;
    
    const actions = document.createElement('div');
    actions.className = 'actions';
    
    const editBtn = document.createElement('button');
    editBtn.className = 'edit';
    editBtn.innerHTML = '✏️';
    editBtn.onclick = () => editGroceryItem(li, item);
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.innerHTML = '❌';
    deleteBtn.onclick = () => deleteGroceryItem(li);
    
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);
    li.appendChild(actions);
    
    list.appendChild(li);
  }

  function editGroceryItem(li, oldValue) {
    const newValue = prompt('Edit the item:', oldValue);
    if (newValue) {
      li.firstChild.textContent = newValue;
    }
  }

  function deleteGroceryItem(li) {
    list.removeChild(li);
  }
});
