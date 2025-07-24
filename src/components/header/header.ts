import styles from './header.module.css'

const loadSvg = async (path: string): Promise<string> => {
    try {
        const response = await fetch(path);
        if (!response.ok) throw new Error(`Svg not found: ${path}`);
        return await response.text();
    } catch (err) {
        console.error(err);
        return `<span>Logo</span>`;
    }
}

export const Header = async (): Promise<HTMLElement> => {
    const header = document.createElement('header');
    const isHomePage = location.pathname === '/';
    header.className = isHomePage ? styles.header + ' ' + styles.dark : styles.header + ' ' + styles.light;

    const container = document.createElement('div');
    container.className = styles.container;

    const svgLogo= await loadSvg('/logo.svg');
    const svgArrow = await loadSvg('/arrow-l.svg')

    const currentLang = localStorage.getItem('lang') || 'ru';
    const langs = {
        ru: 'RU',
        en: 'EN',
        es: 'ES',
    }
    
    container.innerHTML = `
        <a href='/'">${svgLogo}</a>
        <button class="${styles.langButton}" aria-haspopup="true" aria-expanded="false">
            ${langs[currentLang as keyof typeof langs]}
        </button>
        <div class="${styles.right}">
            <nav class="${styles.nav}">
                <a class="${styles.navLink}">Models</a>
                <a class="${styles.navLink}">Become a model</a>
                <a href='/about' class="${styles.navLink}">About</a>
                <a class="${styles.navLink}">Contacts</a>
                <a class="${styles.navLink}">FAQ</a>
            </nav>
            <p>${svgArrow}Fallen Greatness</p>
        </div>
    `;

    const svgElement = container.querySelector('svg');
    if (svgElement) {
        svgElement.setAttribute('width', '50');
        svgElement.setAttribute('height', '50');
        
        svgElement.querySelectorAll('path, circle, rect, polygon').forEach(el => {
            el.setAttribute('fill', 'currentColor');
        });
    }
    
    header.appendChild(container);
    return header;
}