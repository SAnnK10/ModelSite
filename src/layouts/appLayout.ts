import { Header } from "./header/header";

export const renderAppLayouts = async (pageContent: HTMLElement): Promise<void> => {
    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = '';

    const layout = document.createElement('div');
    layout.style.minHeight = '100vh';
    layout.style.display = 'flex';
    layout.style.flexDirection = 'column';
    
    const header = await Header();
    layout.appendChild(header);

    const main = document.createElement('main');
    main.style.flex = '1';
    main.appendChild(pageContent);
    layout.appendChild(main);

    // layout.appendChild(Footer());

    app.appendChild(layout);
};