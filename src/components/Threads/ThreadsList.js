import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem, { threadItemShape } from './Threadtem';

function ThreadsList({
  threads, upVote, downVote, onNeutralUpVote, onNeutralDownVote,
}) {
  return (
    <div className="threads-list">
      {
         threads.map((thread) => (
           <ThreadItem
             key={thread.id}
             {...thread}
             upVote={upVote}
             downVote={downVote}
             onNeutralUpVote={onNeutralUpVote}
             onNeutralDownVote={onNeutralDownVote}
           />
         ))
      }
    </div>
  );
}

ThreadsList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  onNeutralUpVote: PropTypes.func.isRequired,
  onNeutralDownVote: PropTypes.func.isRequired,
};

export default ThreadsList;
