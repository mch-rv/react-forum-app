import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ThreadList from '../components/Threads/ThreadsList';
import ButtonAdd from '../components/Button/ButtonAdd';
import CategoriesList from '../components/Categories/CategoriesList';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import {
  asyncToogleUpVoteThread,
  asyncToogleDownVoteThread,
  asyncClearUpVoteToggleThread,
  asyncClearDownVoteToggleThread,
} from '../states/thread/action';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onUpVote = (threadId) => {
    dispatch(asyncToogleUpVoteThread({ threadId }));
  };

  const onDownVote = (threadId) => {
    dispatch(asyncToogleDownVoteThread({ threadId }));
  };

  const onNeutralUpVote = (threadId) => {
    dispatch(asyncClearUpVoteToggleThread({ threadId }));
  };

  const onNeutralDownVote = (threadId) => {
    dispatch(asyncClearDownVoteToggleThread({ threadId }));
  };

  const filterThreads = threads.filter(
    (thread, index) => threads.findIndex((item) => item.category === thread.category) === index,
  );

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <section className="home-page">
      <header>
        <p className="home-page__header-title">Kategori popular</p>
        <CategoriesList threads={filterThreads} />
      </header>
      <h2 className="home-page__title">Diskusi Tersedia</h2>
      <ThreadList
        threads={threadList}
        upVote={onUpVote}
        downVote={onDownVote}
        onNeutralUpVote={onNeutralUpVote}
        onNeutralDownVote={onNeutralDownVote}
      />
      <div className="home-page__action">
        <ButtonAdd />
      </div>
    </section>
  );
}

export default HomePage;
