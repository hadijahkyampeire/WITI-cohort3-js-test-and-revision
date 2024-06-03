document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('bucket-form');
  const input = document.getElementById('bucket-input');
  const bucketList = document.getElementById('bucket-list');
  const doneList = document.getElementById('done-list');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    addBucketItem(input.value);
    input.value = '';
  });

  function addBucketItem(item) {
    const li = document.createElement('li');
    li.textContent = item;

    const actions = document.createElement('div');
    actions.className = 'actions';

    const editBtn = document.createElement('button');
    editBtn.className = 'edit';
    editBtn.innerHTML = '✏️';
    editBtn.onclick = () => editBucketItem(li, item);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.innerHTML = '❌';
    deleteBtn.onclick = () => deleteBucketItem(li);

    const doneBtn = document.createElement('button');
    doneBtn.className = 'done';
    doneBtn.innerHTML = '✔️';
    doneBtn.onclick = () => markItemAsDone(li);

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);
    actions.appendChild(doneBtn);
    li.appendChild(actions);

    bucketList.appendChild(li);
  }

  function editBucketItem(li, oldValue) {
    const newValue = prompt('Edit the item:', oldValue);
    if (newValue) {
      li.firstChild.textContent = newValue;
    }
  }

  function deleteBucketItem(li) {
    li.parentElement.removeChild(li);
  }

  function markItemAsDone(li) {
    li.removeChild(li.querySelector('.actions'));
    doneList.appendChild(li);
  }
});
