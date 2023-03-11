import React from 'react';
import PropTypes from 'prop-types';

function CategoriesItem({ category }) {
  return (
    <div className="thread-item__category">
      <p data-testid="categories">{`#${category}`}</p>
    </div>
  );
}

CategoriesItem.propTypes = {
  category: PropTypes.string.isRequired,
};

export default CategoriesItem;
