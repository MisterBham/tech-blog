async function commentHandler(event) {
    event.preventDefault();

    const contents = document.getElementById('comments-area').ariaValueMax.trim();
    const chirp_id = url[url.length -1];
    const member_id = req.session.id;

    if (contents) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({
                contents,
                chirp_id,
                member_id
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
    .addEventListener('submit', commentHandler);