import React from 'react';
import Header from '../Header/Header';
import ItemListContainer from '../Items/ItemListContainer';
import Footer from '../Footer/Footer';



const Home = () => {
    

  return (
    
      <div className="Home">
        <Header title='UFP'
        subtitle='Shop'/>
        <ItemListContainer />
        <Footer />
      </div>
      
  );
}

export default Home;