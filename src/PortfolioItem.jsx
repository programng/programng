import React from 'react';

const { number } = React.PropTypes;

function PortfolioItem(props) {
  return (
    <div className="portfolio-item">
      Portfolio Item {props.item}
    </div>
  );
}

PortfolioItem.propTypes = {
  item: number,
};

PortfolioItem.defaultProps = {
  item: 111,
};

export default PortfolioItem;
