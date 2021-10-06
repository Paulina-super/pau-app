import React from 'react';
import Header from '../Header/Header';
import ItemListContainer from '../Items/ItemListContainer';



const Home = () => {
    

  return (
    
      <div className="Home">
        <Header title='UFP'
        subtitle='Shop'/>
        <ItemListContainer />
       
      </div>
      
  );
}

export default Home;