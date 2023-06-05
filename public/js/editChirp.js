async function editChirp(event) {
    event.preventDefault();

    const url = window.location.toString().split('/');
    const chirp_id = url[url.length -1];

    const title = document.querySelector('#chirpTitle').value.trim();
    const contents = document.querySelector('#chirpContents').value.trim();

    if (title && contents) {
        const response = await fetch(`/api/chirp/${chirp_id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title,
                contents,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to edit Chirp')
        }
    }
};

document.querySelector('.editChirpForm').addEventListener('submit', editChirp);