import React from 'react';
import s from './preloader.module.css';
import loading from '../../../assets/images/loading.gif';

const Preloader = (props) => {
  return <img className={s.loading} src={loading} />
}

export default Preloader;