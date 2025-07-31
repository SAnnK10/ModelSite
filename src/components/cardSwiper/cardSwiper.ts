import styles from './CardSwiper.module.scss';

interface Card {
  image: string;
  date: string;
  title: string;
  text: string;
}

const cards: Card[] = [
    {
      image: "/images/card1.jpg",
      date: "September // 2022",
      title: "Marianna Korzhimanova",
      text:  "Latest Magazine"
    },
    {
      image: "/images/card2.jpg",
      date: "November // 2022",
      title: "Nastya Koteneva",
      text:  "В тестовой съемке от Ольга Кулева"
    },
    {
      image: "/images/card3.jpg",
      date: "October // 2022",
      title: "Tanya Reutt",
      text:  "Danitlevi"
    },
    {
      image: "/images/card1.jpg",
      date: "September // 2022",
      title: "Marianna Korzhimanova",
      text:  "Latest Magazine"
    },
    {
      image: "/images/card2.jpg",
      date: "November // 2022",
      title: "Nastya Koteneva",
      text:  "В тестовой съемке от Ольга Кулева"
    },
    {
      image: "/images/card3.jpg",
      date: "October // 2022",
      title: "Tanya Reutt",
      text:  "Danitlevi"
    },
];

export const cardSwiper = (): HTMLElement => {
    const swiper = document.createElement('section');
    swiper.className = styles.swiper;
    const inner = document.createElement('div');
    inner.className = styles.styleInner;

    const header = document.createElement('div');
    header.className = styles.headerRow;

    const title = document.createElement('h1');
    title.className = styles.title;
    title.textContent = 'News';

    const prevBtn = document.createElement('button');
    prevBtn.className = styles.navButton + ' ' + styles.prev;
    prevBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="24" height="24">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor"/>
        </svg>
    `;

    const nextBtn = document.createElement('button');
    nextBtn.className = styles.navButton + ' ' + styles.next;
    nextBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="24" height="24">
        <path d="M8.59 7.41L10 6l6 6-6 6-1.41-1.41L13.17 12z" fill="currentColor"/>
        </svg>
    `;

    header.appendChild(title);
    header.appendChild(prevBtn);
    header.appendChild(nextBtn);

    cards.forEach(card => {
        const cardEl = document.createElement('div');
        cardEl.className = styles.card;
        cardEl.innerHTML = `
            <div class="${styles.cardBody}">
                <span class="${styles.cardDate}">${card.date}</span>
                <img src="${card.image}" alt="${card.title}" class="${styles.cardImage}" />
                <p class="${styles.cardTitle}">${card.title}</p>
                <span class="${styles.cardText}">${card.text}</span>
            </div>
        `;
        inner.appendChild(cardEl);
    });
    swiper.appendChild(header);
    swiper.appendChild(inner);

    prevBtn.addEventListener('click', () => {
        inner.scrollBy({ left: -300, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
        inner.scrollBy({ left: 300, behavior: 'smooth' });
    });
    return swiper;
}