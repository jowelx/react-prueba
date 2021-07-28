import React from 'react';
import './item.css';

class Item extends React.Component{
   
   constructor(props){
       super(props);

       this.state = {
            title:'',
            image:'',
            rating: 1,  
            stars:[]
       };
   }
   componentDidMount(){
     this.setState({
        stars: Array(parseInt(this.props.rating)).fill(0)
    });
   }
   onChangeRating=(e)=>{
       const rating = parseInt(e.target.value);
       this.setState({
           rating: parseInt(e.target.value),
           stars: Array(parseInt(e.target.value)).fill(0)
       })
   }
   ondelete =(e)=>{
    this.props.ondelete(this.props.id)
   }
    render(){
    return(
<div className="item">
    <div className="image">
        <img src={'image/' + this.props.image} />
        </div>

    <div className="title">
        {this.props.title}
        </div>

    <div className="rating">
        <p>
        {
        this.state.stars.map(x =>
            <img src="image/star.png" width="32"/>
        )
        }
        </p>
        <div className="calificacion">
        Calificación:
        <select value = {this.state.rating} onChange={this.onChangeRating}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        </div>
    </div>
    <div className="actions">
        <button onClick={this.ondelete}>Eliminar</button>
    </div>
</div>
    );
}
}
export default Item;