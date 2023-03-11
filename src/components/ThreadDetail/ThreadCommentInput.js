import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

function ThreadCommentInput({ onAddCommentThread, id }) {
  const [content, setContent] = useInput('');

  function onAddComment() {
    if (content.trim()) {
      onAddCommentThread(id, content);
    }
  }

  return (
    <form className="comment-input">
      <textarea type="text" placeholder=" " value={content} onChange={setContent} required />
      <button type="button" onClick={onAddComment}>Post Comment</button>
    </form>
  );
}

ThreadCommentInput.propTypes = {
  id: PropTypes.string.isRequired,
  onAddCommentThread: PropTypes.func.isRequired,
};

export default ThreadCommentInput;
