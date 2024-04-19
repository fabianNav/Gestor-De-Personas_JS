const switchButton = document.getElementById('switch');

export function cambiarTema() {

    const colorSystem = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const setTheme = (theme) => {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        }

    switchButton.addEventListener('click', () => {
        switchButton.classList.toggle('active');
        let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
        setTheme(switchToTheme);
    })
    setTheme(localStorage.getItem('theme') || colorSystem);
}

