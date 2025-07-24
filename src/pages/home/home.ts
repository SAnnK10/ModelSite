// src/pages/Home/Home.ts
import styles from './Home.module.css';

export const homePage = (): HTMLElement => {
  const page = document.createElement('div');
  page.className = styles.hero;

  page.innerHTML = `
    <div class="${styles.container}">
      <div class="${styles.content}">
        <span class="${styles.title}">MODEL</span>
        <div class="${styles.subContent}">
          <span class="${styles.year}">2011 — 22.</span>
          <span class="${styles.title}">PUBLIC.</span>
        </div>
      </div>
      <a href="/" class="${styles.modelButton}">
        <span>СТАТЬ</span>
        <span>МОДЕЛЬЮ</span>
      </a>
    </div>
  `;

  return page;
};