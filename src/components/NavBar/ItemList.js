import React, {useState, useEffect} from 'react'
import Item from '../NavBar/Item.js';

const ItemList = () => {
    const[products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost/magento2/index.php/rest/V1/categories/24/products')
            .then(response => response.json())
            .then(json => setProducts(json));
    }, []);

    return (
        <div className="ItemList">
            {products.map((product) => {
                return <Item key={products.id} data={product}/>;
            })}
        </div>
    );
};

export default ItemList;