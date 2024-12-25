document.getElementById('hamburger').addEventListener('click', () => {
    const menu = document.querySelector('.menu');
    const isShown = menu.classList.contains("show");
    menu.classList.toggle('show', !isShown);
    document.getElementById('hamburger').classList.toggle('close', !isShown);
})

window.toggleGrid = () => {
    const grid = document.getElementById('figmagrid');

    grid.classList.toggle('show', !grid.classList.contains('show'));
}