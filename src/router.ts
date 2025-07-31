import { renderAppLayouts } from "./layouts/appLayout";
import { aboutPage } from "./pages/about/about";
import { homePage } from "./pages/home/home";

export type RouteHandler = () => HTMLElement;

export const routes: Record<string, RouteHandler> = {
    '/' : homePage,
    '/about' : aboutPage,
}

export const navigateTo = (path: string): HTMLElement => {
    const handler = routes[path];
    if (handler){
        return handler();
    } else {
        const notFound = document.createElement('div');
        notFound.innerHTML = '<h1>404 - page not found ~\\_(=-=)_/~</h1>'
        return notFound;
    }
}

export const initRouter = (): void => {
    const renderCurrentPage = async () => {
        const page = navigateTo(location.pathname);
        await renderAppLayouts(page);
    };
    
    window.addEventListener('popstate', () => {
        renderCurrentPage();
    });

    document.addEventListener('click', async (e) => {
        const target = e.target as HTMLAnchorElement;
        if (target.matches('a[href]')) {
            e.preventDefault();
            const href = target.getAttribute('href') || '/';
            history.pushState(null, '', href);
            await renderCurrentPage();
        }
    });

    renderCurrentPage();
};