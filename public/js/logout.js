const logoutFormHandler = async () => {
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert("Logout Failed -__-''");
  }
};

document
  .querySelector('#logout-link')
  .addEventListener('click', logoutFormHandler);
