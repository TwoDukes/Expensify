import React from 'react';
import {Link} from 'react-router-dom';
import { Header } from './Header';

export const NotFoundPage = () => (
  <div>
    <div className='page-header'>
      <div className='content-container'>
        <h1 className='page-header__title'>404 - Page not found</h1>
        <Link className='button' to="/">Go Home</Link>
      </div>
    </div>
  </div>
);

export default NotFoundPage;