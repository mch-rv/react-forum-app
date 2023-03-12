import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Styled/Card';

function CategoriesItem({ category }) {
  return (
    <Card padding="0.5rem" borderRadius="5px">
      <p data-testid="categories">{`#${category}`}</p>
    </Card>
  );
}

CategoriesItem.propTypes = {
  category: PropTypes.string,
};

CategoriesItem.defaultProps = {
  category: null,
};

export default CategoriesItem;
