import React, { useState } from 'react';
import Card from './Card';
import CardDetails from './CardDetails';
import Navbar from './Navbar';
import Filters from './Filters';

export  const Panel = () => {
    const [selectedCard, setSelectedCard] = useState(null);
    
    const cardsData = [
        { id: 1, title: 'Brands' },
        { id: 2, title: 'Sites'},
        { id: 3, title: 'Items' },
        { id: 4, title: 'Facilities'},
        { id: 5, title: 'Safety Stock' },
        { id: 6, title: 'Carriers'},
        { id: 7, title: 'Value Added Services' },
        { id: 8, title: 'Services' },
      ];

      const handleCardClick = (card) => {
        setSelectedCard(card);
      };
    
      const handleBackClick = () => {
        setSelectedCard(null);
      };
    return (
    <>
    <section>
      <Navbar />
    </section>
      <section>
      {selectedCard ? (
        <CardDetails card={selectedCard} onBackClick={handleBackClick} />
                ) : (
                    <>
                    <section>
                        <Filters />
                    </section>
                    <div className="data-cards">
                    {cardsData.map((card) => (
                        <Card
                        key={card.id}
                        cardData={card}
                        onClick={handleCardClick}
                        />
                    ))}
                    </div></>
                )}
      </section>
      
    </>
    )
    };