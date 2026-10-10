import React from 'react';
import styles from './Card.module.css';

const Card = ({ card, onCardClick }) => {
  const isFlipped = card.isFlipped || card.isMatched;

  return (
    <div
      className={`${styles.cardContainer} ${card.isMatched ? styles.matched : ''}`}
      onClick={() => onCardClick(card)}
    >
      <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`}>
        <div className={styles.cardFront}>
          <img src=".\logo.png" alt="Logo" />
        </div>

        <div className={styles.cardBack}>
          
          <h1>{card.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;