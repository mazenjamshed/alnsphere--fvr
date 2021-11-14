import React from 'react';
import './overview.styles.scss';
import ImgDoctors from './../../../assets/img/doctors.png';

const Overview = () => {
  return (
    <section className='overview'>
      <div className='button'>Button here</div>
      <div className='overview__content'>
        <div className='overview__left'>
          <h2 className='overview__heading'>
            AlnSphere represents an NFT collection of 9999 unique Aliens
          </h2>
          <p className='overview__desc'>
            Alns are stored as ERC-721 tokens on the Ethereum blockchain and
            hosted on IPFS.
          </p>
          <p className='overview__desc'>
            The race of Aln has its own ability and specific role and power
            within the Sphere Months of design and hard work with our
            experienced team have been needed to ensure that each Aln of the
            collection is completely unique, and special.
          </p>
          <div className='overview__buttons'>
            <div className='button'>Button</div>
            <div className='button'>Button</div>
          </div>
        </div>
        <div className='overview__right'>
          <div className='overview__img-box'>
            <img className='overview__img' src={ImgDoctors} alt='aliens' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
