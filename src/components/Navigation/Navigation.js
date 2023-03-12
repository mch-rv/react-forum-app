import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NavBar from '../Styled/NavBar';

function Navigation({ authUser, signOut }) {
  const { id, avatar, name } = authUser;

  return (
    <NavBar className="NavBar">
      <img src={avatar} alt={id} title={name} />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/leaderboards">Leaderboards</Link>
      </nav>
      <button type="button" onClick={signOut}>Sign out</button>
    </NavBar>
  );
}

const authUserShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,

};

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
