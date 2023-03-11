import React from 'react';
import PropTypes from 'prop-types';
import CategoriesItem from './CategoriesItem';

function CategoriesList({ threads, threadFilterByCategories }) {
  return (
    <div className="categories-list">
      {
        threads.map((thread) => (
          <CategoriesItem
            key={thread.id}
            {...thread}
            threadFilterByCategories={threadFilterByCategories}
          />
        ))
      }
    </div>
  );
}

const threadsItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  ownerId: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
};

CategoriesList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadsItemShape)).isRequired,
  threadFilterByCategories: PropTypes.func.isRequired,
};

export default CategoriesList;
