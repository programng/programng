import React from 'react';
import PortfolioItem from './PortfolioItem';

function Portfolio() {
  const items = [0, 1, 2, 3, 4];
  return (
    <div className="portfolio">
      COMING SOON!
      {items.map(item => <PortfolioItem item={item} />)}
    </div>
  );
}

export default Portfolio;
