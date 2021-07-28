import React from 'react';
import './menu.css'
import Search from './search.js';
import PanelAdd from './panelAdd.js';
class Menu extends React.Component{

   constructor(props){
       super(props);
       this.state = {newItemPanel: false};
       this.add = this.add.bind(this);
       this.onCancel = this.onCancel.bind(this);
   }
   
    add (){
        this.setState( {newItemPanel: true});
   }
   onCancel(e){
     //  e.preventDefault();
       this.setState({newItemPanel: false})
   }
   render(){
    return(

 <div className="container">
     <div className="sub-container">
      <div className="title items">
      {this.props.title}
     </div>
     <div className="search items">
     <Search onsearch={this.props.onsearch}/>
         </div>
         <div className="actions items">
     <button onClick={this.add} className="btn">subir juego</button>
         </div>
     </div>
     {
         (this.state.newItemPanel)? 
         <PanelAdd onCancel={this.onCancel} onadd={this.props.onadd} />
         :''
     }
     
 </div>
    );
}
}
export default Menu;