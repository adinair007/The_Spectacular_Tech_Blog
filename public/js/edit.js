const editFormHandler = async function (event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('input[name="post-body"]').value;

  console.log("----TRYING TO EDIT-----")
  await fetch(`/api/post/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  document.location.replace('/dashboard');
};

const deleteClickHandler = async function (event) {
  event.preventDefault();
  const postId = document.getElementById('post-id')
  console.log("-----TRYING TO DELETE------")
  await fetch(`/api/post/` + postId.value, {
    method: 'DELETE',
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#edit-post-form')
  .addEventListener('submit', editFormHandler);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);
