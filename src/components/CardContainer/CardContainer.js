import React, {useState, useEffect} from 'react'
import './CardContainer.css';
import CardComponents from '../CardComponents/CardComponents.js';

const CardContainer = () => {
    const[products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://petapius.royalcanin.com/api/Pets/Cat/Products')
            .then(response => response.json())
            .then(json => setProducts(json));
    }, []);

    return (
        <div className="CardContainer">
            {products.map((product) => {
                return <CardComponents key={products.id} data={product}/>;
            })}
        </div>
    )
}

export default CardContainer
