
import './App.css';
import Menu from './menu.js';
import List from './list.js';




import React from 'react';

class App extends React.Component {
 constructor(props){
   super(props);

   this.state = {
     games:[
       {id:0, rating:3, titulo:'assassins creed ', image: '2.jpg'},
       {id:1, rating:4, titulo:'assassins creed 2', image: '3.jpg'},
       {id:2, rating:4, titulo:'assassins creed 3', image: '1.jpg'},
       {id:3, rating:4, titulo:'assassins creed 4', image: '4.jpg'},
       {id:4, rating:5, titulo:'assassins creed unity', image: '5.jpg'}
     ],
     Games:[]
   }
 }
 componentDidMount(){
   this.initGames();
 }
 initGames=()=>{
   this.setState((state,props)=>({
     Games:[... state.games]
   }));
 }
 onAdd =(item)=>{
   let temp =[... this.state.games];
   const id = temp[temp.length-1].id ++;
   item['id'] = id;
   temp.push(item);
   this.setState({games:[... temp]})
   this.initGames();
 }
 onSearch =(query)=>{
   if(query === ''){
     this.initGames();
   }else{
     const temp =[... this.state.games];
     let res = [];
     temp.forEach(item =>{
       if(item.titulo.toLowerCase().indexOf(query)> -1){
         res.push(item);
       }
     });
     this.setState({Games:[... res]});
   }
 }
Delete=(id)=>{
  var temp = [...this.state.games];
  const res = temp.filter(item => item.id !== id);
  this.setState({games: [...res]});
  this.initGames();
 }
  render(){
    return (

    <div className="app">
      <Menu title="OverGames" onadd={this.onAdd} onsearch={this.onSearch}/>
      <List items={this.state.Games} ondelete={this.Delete}/>
    </div>

    );
 }
}

export default App;
