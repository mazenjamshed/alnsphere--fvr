import React from 'react';
import FAQ from '../../components/UI/FAQ/faq.component';
import Gallery from '../../components/UI/Gallery/gallery.component';
import Hero from '../../components/UI/Hero/hero.component';
import Navbar from '../../components/UI/Navbar/navbar.component';
import Overview from '../../components/UI/Overview/overview.component';
import Play from '../../components/UI/Play Section/play.component';
import Roadmap from '../../components/UI/Roadmap/roadmap.component';
import ChoosenOnes from '../../components/UI/Section Choosen Ones/choosen.component';
import Team from '../../components/UI/Team/team.component';
import './homepage.styles.scss';

const Homepage = () => {
  return (
    <div className='homepage'>
      <Navbar />
      <Hero />
      <Overview />
      <Gallery />
      <Play />
      <ChoosenOnes />
      <Roadmap />
      <Team />
      <FAQ />
    </div>
  );
};

export default Homepage;
