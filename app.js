document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const input = document.querySelector('input[name="message"]');
    const responseBox = document.querySelector('#response');

    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        const message = input.value;

        const res = await fetch('http://127.0.0.1:5000/message', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message })
        });

        const data = await res.json();
        responseBox.innerText = data.reply;
        input.value = '';
    });
});


