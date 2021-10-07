import React from "react";
import ItemListContainer from '../Items/ItemListContainer';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Catalogo =()=>{
    return(
        <div>
            <Header />
               
            <ItemListContainer />

            <Footer />
        </div>
    )
}

export default Catalogo;