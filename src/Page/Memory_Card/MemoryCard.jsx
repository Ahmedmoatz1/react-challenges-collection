import React, { useState, useEffect } from 'react';
import Card from './Card/Card';
import styles from './Memory_Card.module.css';

// 1. قائمة العناصر الأساسية
const initialItems = ['Ahmed', 'Mohamed', 'Ali', 'Omar'];

const MemoryCard = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [isLockGrid, setIsLockGrid] = useState(false);

 
  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const duplicated = [...initialItems, ...initialItems];
    const shuffled = duplicated
      .sort(() => Math.random() - 0.5)
      .map((name, index) => ({
        id: index,
        name: name,
        isFlipped: false,
        isMatched: false,
      }));

    setCards(shuffled);
    setFlippedCards([]);
    setIsLockGrid(false);
  };

  // 3. عند الضغط على كارت
  const handleCardClick = (clickedCard) => {
    // تجاهل الضغط إذا كانت الشبكة مقفلة، أو الكارت مفتوح بالفعل، أو تمت مطابقته
    if (
      isLockGrid ||
      clickedCard.isFlipped ||
      clickedCard.isMatched ||
      flippedCards.length === 2
    ) {
      return;
    }

    const updatedCards = cards.map((card) =>
      card.id === clickedCard.id ? { ...card, isFlipped: true } : card
    );
    setCards(updatedCards);

    const newFlippedCards = [...flippedCards, clickedCard];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      checkForMatch(newFlippedCards, updatedCards);
    }
  };

  const checkForMatch = ([firstCard, secondCard], currentCards) => {
    if (firstCard.name === secondCard.name) {
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.name === firstCard.name ? { ...card, isMatched: true } : card
        )
      );
      setFlippedCards([]);
    } else {
      setIsLockGrid(true);
      setTimeout(() => {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === firstCard.id || card.id === secondCard.id
              ? { ...card, isFlipped: false }
              : card
          )
        );
        setFlippedCards([]);
        setIsLockGrid(false);
      }, 1000);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h1>Memory Card</h1>
        <button onClick={initializeGame} className={styles.resetBtn}>
          إعادة اللعبة 🔄
        </button>
      </div>

      <div className={styles.cardsGrid}>
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onCardClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
};

export default MemoryCard;