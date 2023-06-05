async function commentHandler(event) {
    event.preventDefault();

    const contents = document.getElementById('comments-area').value.trim();
    const url = window.location.toString().split('/');
    const chirp_id = url[url.length -1];

    if (contents) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({
                contents,
                chirp_id,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
};

document
    .getElementById('newcommentBtn')
    .addEventListener('click', commentHandler);

