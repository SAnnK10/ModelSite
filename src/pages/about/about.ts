// src/pages/About/About.ts
import styles from './about.module.scss';

export const aboutPage = (): HTMLElement => {
  const page = document.createElement('div');
  page.className = styles.about;

  page.innerHTML = `
    <h2 class="${styles.title}">О нас</h2>
    <div class="${styles.content}">
      <p>Мы — модельное Агенство MODEL PUBLIC</p>
    </div>
  `;

  return page;
};