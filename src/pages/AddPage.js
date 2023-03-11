import React from 'react';
import { useDispatch } from 'react-redux';
import ThreadInput from '../components/ThreadInput/ThreadInput';
import { asyncAddThread } from '../states/thread/action';

function AddPage() {
  const dispatch = useDispatch();

  const onAddThread = ({ title, category, body }) => {
    dispatch(asyncAddThread({ title, category, body }));
  };

  return (
    <section className="home-page">
      <ThreadInput onAddThread={onAddThread} />
    </section>
  );
}

export default AddPage;
