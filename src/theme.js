const switchButton = document.getElementById('switch');

export function cambiarTema() {

    const colorSystem = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }
    function insertLogo() {
        let readLs = localStorage.getItem('theme');
        if (readLs === 'light' || colorSystem === 'light') {
            switchButton.innerHTML = `<span><i class="fa-regular fa-sun"></i></span>`
        } else if (readLs === 'dark' || colorSystem === 'dark') {
            switchButton.innerHTML = `<span><i class="fa-regular fa-moon"></i></span>`
        }
    }

    switchButton.addEventListener('click', () => {
        switchButton.classList.toggle('active');
        let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
        setTheme(switchToTheme);
        insertLogo();
    })
    setTheme(localStorage.getItem('theme') || colorSystem);
    insertLogo();
}

