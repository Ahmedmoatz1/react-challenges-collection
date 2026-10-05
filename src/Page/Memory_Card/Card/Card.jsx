import React from 'react';
import styles from './Card.module.css';

const Card = ({ card, onCardClick }) => {
  // الكارت يظهر مقلوبًا إما لأنه مفتوح حاليًا أو تمت مطابقته بنجاح
  const isFlipped = card.isFlipped || card.isMatched;

  return (
    <div
      className={`${styles.cardContainer} ${card.isMatched ? styles.matched : ''}`}
      onClick={() => onCardClick(card)}
    >
      <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`}>
        {/* الوجه الأمامي */}
        <div className={styles.cardFront}>
          <img src=".\logo.png" alt="Logo" />
        </div>

        {/* الظهر */}
        <div className={styles.cardBack}>
          
          <h1>{card.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;