const formEl = document.querySelector('form');
const friendNameEl = document.querySelector('#name');
const phoneNumberEl = document.querySelector('#phone');

formEl.addEventListener('submit', async (e) => {
  e.preventDefault();

  try {
    const friendId = formEl.dataset.id;
    const response = await fetch('/friends/edit', {
      method: 'put',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        friendIdFromJSFile: friendId,
        friendName: friendNameEl.value,
        phoneNumber: phoneNumberEl.value,
      }),
    });
    const data = await response.json();
    console.log(data);

    // redirected at the end
    window.location = '/friends';
  } catch (err) {
    console.log(err);
  }
});
('/edit/:friendId');
