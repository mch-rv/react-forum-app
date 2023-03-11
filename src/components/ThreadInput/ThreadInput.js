import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

function ThreadInput({ onAddThread }) {
  const [title, setTitle] = useInput('');
  const [category, setCategory] = useInput('');
  const [body, setBody] = useInput('');
  const navigate = useNavigate();

  async function onAddthread() {
    if (title.trim() && body.trim() && category.trim()) {
      onAddThread({ title, body, category });
      navigate('/');
    }
  }

  return (
    <form className="thread-input">
      <input type="text" placeholder="Judul" value={title} onChange={setTitle} required />
      <input type="text" placeholder="Kategori" value={category} onChange={setCategory} required />
      <textarea type="text" placeholder=" " value={body} onChange={setBody} required />
      <button type="button" onClick={onAddthread}>Post Thread</button>
    </form>
  );
}

ThreadInput.propTypes = {
  onAddThread: PropTypes.func.isRequired,
};

export default ThreadInput;
