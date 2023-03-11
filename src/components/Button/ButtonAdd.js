import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlusCircle } from 'react-icons/fi';

function ButtonAdd() {
  return (
    <Link to="/new"><button className="action" type="button" aria-label="Add" title="Tambah"><FiPlusCircle /></button></Link>
  );
}

export default ButtonAdd;
