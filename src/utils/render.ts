export const render = (element: HTMLElement | null): void => {
    const app = document.getElementById('app');
    if (app){
        app.innerHTML = '';
        if (element) app.appendChild(element);
    } 
}