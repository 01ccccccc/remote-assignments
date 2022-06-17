const titleChange = document.querySelector('.headline');
const callAction = document.getElementById('btnAction');

titleChange.addEventListener('click', () => {
    //const newHeadline = document.querySelector('.headline');
    titleChange.textContent = "Have a Good Time!";
})


callAction.addEventListener('click', () => {
    const hiddenContent = document.getElementById('hidden-content');
    hiddenContent.style.display = "flex";
});

