async function newChirp(event) {
    event.preventDefault();

    const title = document.querySelector('#chirpTitle').value.trim();
    const contents = document.querySelector('#chirpContents').value.trim();

    if (title && contents) {
        const response = await fetch('/api/chirp', {
            method: 'POST',
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
            alert('Failed to add Chirp')
        }
    }
};

document.querySelector('.newChirpForm').addEventListener('submit', newChirp);