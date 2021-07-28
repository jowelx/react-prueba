import React from 'react';
import Item from './items.js';
function List(n){
    return(

 <div className="list">
{
    n.items.map(item =>
        <Item
        key={item.id}
        id={item.id}
        title={item.titulo}
        image={item.image}
        rating={item.rating}
        ondelete={n.ondelete}
        />
    )
}
 </div>
    );
}
export default List;