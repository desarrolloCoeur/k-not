'use client'
import { useState } from 'react';






const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        { id: 1, image: '/img/whale-whatching-1.webp' },
        { id: 2, image: '/img/whale-whatching-2.webp' },
        { id: 3, image: '/img/whale-whatching-3.webp' },
        { id: 4, image: '/img/whale-whatching-4.webp' },
        { id: 5, image: '/img/whale-whatching-5.webp' },
        { id: 6, image: '/img/whale-whatching-6.webp' },
        { id: 7, image: '/img/whale-whatching-1.webp' },
        { id: 8, image: '/img/whale-whatching-2.webp' },
      ];
    
    
  const handleClickNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= items.length - 4 ? 0 : prevIndex + 1));
  };

  const handleClickPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 4 : prevIndex - 1));
  };

  const handleSwipeLeft = () => {
    handleClickNext();
  };

  const handleSwipeRight = () => {
    handleClickPrev();
  };
  return (
    <div className="carousel">
      <button onClick={handleClickPrev}>Anterior</button>
      <div className="carousel-items">
        {items.slice(currentIndex, currentIndex + 4).map((item) => (
          <img key={item.id} src={item.image} alt={`Imagen ${item.id}`} />
        ))}
      </div>
      <button onClick={handleClickNext}>Siguiente</button>
    </div>
  )
}

export default Carousel