import React from 'react'
import { Button } from 'semantic-ui-react'

const ItemCount = ({stock}) => {
    const [stockItems, setStockItems] = React.useState(10);

    const handleIncrement=(stock)=>{
       if(stockItems<stock) {
           setStockItems(stockItems +1);
       }
    };
    const handleDecrement=()=>{
        if (stockItems>0){
        setStockItems(stockItems -1);
        }
    };

    
    return (
        <div>
            <div>
                <Button primary onClick={handleIncrement}>+</Button>
                <p>{stockItems}</p>
                <Button secondary onClick={handleDecrement}>-</Button>
            </div>
        </div>
    );
};

export default ItemCount;
