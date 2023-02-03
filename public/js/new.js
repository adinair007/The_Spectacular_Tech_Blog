const newPostFormHandler = async function (event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]');
  const body = document.querySelector('textarea[name="post-body"]');

  if (!title.value) {
    alert('Please give your post a title.');
  }

  if (!body.value) {
    alert('Please provide some content for your post.');
  }

  if (title && body) {
    const response = await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({
        title: title.value,
        body: body.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log('success');
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed To Create Post. -__-');
    }
  }
};

document
  .querySelector('#new-post-form')
  .addEventListener('submit', newPostFormHandler);
