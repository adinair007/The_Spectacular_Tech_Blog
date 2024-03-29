const commentFormHandler = async function (event) {
  event.preventDefault();

  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const comment_body = document.querySelector(
    'textarea[name="comment-body"]'
  ).value;

  if (comment_body) {
    console.log("-----POSTING COMMENT------")
    await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        comment_body,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    document.location.reload();
  }
};

document
  .querySelector('#new-comment-form')
  .addEventListener('submit', commentFormHandler);
