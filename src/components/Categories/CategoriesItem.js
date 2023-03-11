import React from 'react';
import PropTypes from 'prop-types';

function CategoriesItem({ category, threadFilterByCategories }) {
  return (
    <div className="thread-item__category">
      <button type="button" onClick={threadFilterByCategories}>{`#${category}`}</button>
    </div>
  );
}

CategoriesItem.propTypes = {
  category: PropTypes.string.isRequired,
  threadFilterByCategories: PropTypes.string.isRequired,
};

export default CategoriesItem;
