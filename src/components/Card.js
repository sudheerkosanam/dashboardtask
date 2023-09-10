import React from 'react';

function Card({ cardData, onClick }) {
    return (
      <div className="card" onClick={() => onClick(cardData)}>
        <p>{cardData.title}</p>
      </div>
    );
  }

export default Card;