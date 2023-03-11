import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncReceiveLeaderboard } from '../states/Leaderboards/action';
import LeaderboardList from '../components/Leaderboard/LeaderboardList';

function HomePage() {
  const {
    leaderboards = [],
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboard());
  }, [dispatch]);

  const leaderboardsList = leaderboards.map((leaderboard) => ({
    ...leaderboard,
  }));

  return (
    <section className="leaderboards-page">
      <header>
        <h2 className="leaderboards-page__header">Klasmen Pengguna Aktif</h2>
      </header>
      <div className="leaderboards-page__header-title">
        <p className="leaderboards-page__title">Pengguna</p>
        <p className="leaderboards-page__title">Skor</p>
      </div>
      <article>
        <LeaderboardList leaderboards={leaderboardsList} />
      </article>
    </section>
  );
}

export default HomePage;
