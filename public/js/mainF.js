const deleteBtn = document.querySelectorAll('.del');
const friendItem = document.querySelectorAll('span.not');
const friendComplete = document.querySelectorAll('span.completed');
const editBtn = document.querySelectorAll('.edit');

Array.from(deleteBtn).forEach((el) => {
  el.addEventListener('click', deleteFriend);
});

Array.from(editBtn).forEach((el) => {
  el.addEventListener('click', editFriend);
});


async function deleteFriend() {
  const friendId = this.parentNode.dataset.id;
  try {
    const response = await fetch('friends/deleteFriend', {
      method: 'delete',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        friendIdFromJSFile: friendId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

function editFriend() {
  const friendId = this.parentNode.dataset.id;
  window.location = `friends/edit/${friendId}`;
}