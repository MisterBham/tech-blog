async function deleteHandler(event) {
    event.preventDefault();

    const url = window.location.toString().split('/');
    const chirp_id = url[url.length -1];

    const response = await fetch(`/api/chirp/${chirp_id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};

document
    .getElementById('deleteBtn')
    .addEventListener('click', deleteHandler);