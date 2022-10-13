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

Array.from(friendItem).forEach((el) => {
  el.addEventListener('click', markComplete);
});

Array.from(friendComplete).forEach((el) => {
  el.addEventListener('click', markIncomplete);
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
  //   try {
  //     const response = await fetch(`companies/edit/${companyId}`);
  //     console.log(response);
  //     // const data = await response.json()
  //     // console.log(data)
  //     // location.reload()
  //   } catch (err) {
  //     console.log(err);
  //   }
}

async function markComplete(e) {
  // guard clause to not trigger markcomplete on button clicks
  if (e.target.parentNode.nodeName === 'BUTTON') return null;

  try {
    const friendId = this.parentNode.dataset.id;
    const response = await fetch('friends/markComplete', {
      method: 'put',
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

async function markIncomplete(e) {
  // guard clause to not trigger markcomplete on button clicks
  if (e.target.parentNode.nodeName === 'BUTTON') return null;

  const friendId = this.parentNode.dataset.id;
  try {
    const response = await fetch('friends/markIncomplete', {
      method: 'put',
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
