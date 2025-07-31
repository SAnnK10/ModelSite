import { cardSwiper } from '../../components/cardSwiper/cardSwiper';
import styles from './home.module.scss';

export const homePage = (): HTMLElement => {
  const hero = document.createElement('section');
  hero.className = styles.hero;

  hero.innerHTML = `
    <div class="${styles.heroContainer}">
      <div class="${styles.content}">
        <span class="${styles.heroTitle}">MODEL</span>
        <div class="${styles.subContent}">
          <span class="${styles.year}">2011 — 22.</span>
          <span class="${styles.heroTitle}">PUBLIC.</span>
        </div>
      </div>
      <a href="/" class="${styles.modelButton}">
        <span>СТАТЬ</span>
        <span>МОДЕЛЬЮ</span>
      </a>
    </div>
  `;

  const swiper = cardSwiper();

  const page = document.createElement('div');
  page.appendChild(hero);
  page.appendChild(swiper);
  return page;
};