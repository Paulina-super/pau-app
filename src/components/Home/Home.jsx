import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';



const Home = ({title, subtitle}) => {
    

  return (
    
      <div className="Home">
        <Header title='UFP'
        subtitle='Shop'/>
        
        <Footer />
      </div>
      
  );
}

export default Home;