// src/components/Footer/Footer.ts
import styles from './Footer.module.css';

export const Footer = (): HTMLElement => {
  const footer = document.createElement('footer');
  footer.className = styles.footer;

  footer.innerHTML = `
    <p class="${styles.text}">© 2025 MyApp. Все права защищены.</p>
  `;

  return footer;
};