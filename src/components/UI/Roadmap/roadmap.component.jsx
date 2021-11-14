import React from 'react';
import Card from '../../Card/card.component';
import './roadmap.styles.scss';

const Roadmap = () => {
  return (
    <div className='roadmap'>
      <h2 className='roadmap__title'>Roadmap</h2>
      <div className='roadmap__btns'>
        <div className='button'>Button</div>
        <div className='button'>Button</div>
      </div>
      <div className='roadmap__stages'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Roadmap;
