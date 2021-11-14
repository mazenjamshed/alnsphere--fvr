import React from 'react';
import './play.styles.scss';
import ImgDoctors from './../../../assets/img/doctors.png';

const Play = () => {
  return (
    <div className='play'>
      <h2 className='play__title'>Play to Earn</h2>
      <div className='play__left'>
        <div className='play__img-box'>
          <img className='play__img' src={ImgDoctors} />
        </div>
        <div className='play__content'>
          <p>
            Alns are stored as ERC-721 tokens on the Ethereum blockchain and
            hosted on IPFS.
          </p>
          <p>
            The race of Aln has its own ability and specific role and power
            within the Sphere Months of design and hard work with our
            experienced team have been needed to ensure that each Aln of the
            collection is completely unique, and special.
          </p>
        </div>
      </div>

      <div className='play__right'>
        <div className='play__content'>
          <p>
            Alns are stored as ERC-721 tokens on the Ethereum blockchain and
            hosted on IPFS.
          </p>
          <p>
            The race of Aln has its own ability and specific role and power
            within the Sphere Months of design and hard work with our
            experienced team have been needed to ensure that each Aln of the
            collection is completely unique, and special.
          </p>
        </div>
        <div className='play__img-box'>
          <img className='play__img' src={ImgDoctors} />
        </div>
      </div>
    </div>
  );
};

export default Play;
