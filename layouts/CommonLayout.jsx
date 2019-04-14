import React from 'react';
import Header from '../components/Header';

const CommonLayout = (props) => {
  return (
    <div>
      <Header />
      <div>
        {props.children}
      </div>
    </div>
  )
}

export default CommonLayout;
