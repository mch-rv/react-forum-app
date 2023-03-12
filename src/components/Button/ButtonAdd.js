import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlusCircle } from 'react-icons/fi';
import AddButton from '../Styled/AddButton';

function ButtonAdd() {
  return (
    <Link to="/new"><AddButton type="button" aria-label="Add" title="Tambah"><FiPlusCircle /></AddButton></Link>
  );
}

export default ButtonAdd;
