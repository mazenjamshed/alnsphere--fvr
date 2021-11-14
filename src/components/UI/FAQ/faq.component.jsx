import React from 'react';
import './faq.styles.scss';
import Card from './../../Card/card.component';

const FAQ = () => {
  return (
    <div className='faq'>
      <h2 className='faq__title'>FAQ</h2>

      <div className='faq__cards'>
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default FAQ;
