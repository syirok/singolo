const MENU = document.getElementById('menu');
const BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-btn');

document.getElementById('form-cont').reset();

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('li').forEach(el => el.classList.remove('active'));
    event.target.parentElement.classList.add('active');
});


BUTTON.addEventListener('click', () => {
    const subject = document.getElementById('Subject').value.toString();
    if (subject == '') {
        document.getElementById('result-sub').parentElement.innerText = 'Without subject';
    } else {document.getElementById('result-sub').innerText = subject;}

    const description = document.getElementById('Description').value.toString();
    if (description == '') {
        document.getElementById('result-des').parentElement.innerText = 'Without description';
    } else {document.getElementById('result-des').innerText = description;}
    
    document.getElementById('message-block').classList.remove('hidden');
});

CLOSE_BUTTON.addEventListener('click', () => {
    //document.getElementById('result-sub').innerText = '';
    //document.getElementById('result-des').innerText = '';
    document.getElementById('message-block').classList.add('hidden');
    document.getElementById('form-cont').reset();
});
