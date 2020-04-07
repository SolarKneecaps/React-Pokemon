import React from 'react';
import './App.css';
import Axios from 'axios';
import Foundpokemon from './Foundpokemon';
import Startofgame from './Startofgame';
import ViewPokemon from './ViewPokemon';

class App extends React.Component {
  state = {
    foundPokemon :{
      name: '',
      img : ''
    },
    currentTeam : [],
    isLoadingPoke: true,
    isStart: true,
    isCatching: false,
    isViewing: false,
    isDone: false
  }

  handleFindPokemon = () =>{
    this.setState({isLoadingPoke: true})
    let randomNum;
    randomNum = (Math.floor(Math.random() * Math.floor(151)))+1;
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
    .then(res=>res.data)
    .then(data => {
      let newPokemon;
      newPokemon = {
        name : data.species.name,
        img : data.sprites.front_default
      };
      this.setState({
        foundPokemon : newPokemon,
        isLoadingPoke : false
      });
    })
    .catch(err=> console.log(err));
  }

  handleCatchPokemon = () =>{
    this.handleFindPokemon();
    this.setState(prevState =>{
      let currentPoke = prevState.foundPokemon;
      if(prevState.currentTeam.length >= 5) {
        return{
          currentTeam : [...prevState.currentTeam, currentPoke],
          isLoadingPoke : true,
          isViewing : true,
          isCatching : false,
          isDone : true
        }
      }
      else{
        return{
          currentTeam : [...prevState.currentTeam, currentPoke],
          isLoadingPoke : true
        }
      }
    });
  }
  

  handleStart = () =>{
    this.setState({isStart : false, isCatching : true})
  }

  handleView = ()=>{
    this.setState(prevState=> {
      return{
        isCatching : !prevState.isCatching, 
        isViewing : !prevState.isViewing
      }
    })
  }

  handleReset = ()=>{
    this.setState({
      foundPokemon :{
        name: '',
        img : ''
      },
      currentTeam : [],
      isLoadingPoke: true,
      isStart: true,
      isCatching: false,
      isViewing: false,
      isDone: false
    })
  }


  render(){
    return (
      <div className = 'main--container'>
      {this.state.isStart?<Startofgame handleStart = {this.handleStart}/>:null}

      {this.state.isCatching?
        <Foundpokemon 
          name = {this.state.foundPokemon.name} 
          img = {this.state.foundPokemon.img}
          isLoadingPoke = {this.state.isLoadingPoke}
          handleFindPokemon = {this.handleFindPokemon}
          handleView = {this.handleView}
          handleCatchPokemon = {this.handleCatchPokemon}
          team = {this.state.currentTeam}
        />
        :null}

      {this.state.isViewing?
        <ViewPokemon
          team = {this.state.currentTeam}
          handleView = {this.handleView}
          handleReset = {this.handleReset}
          isDone = {this.state.isDone}
        />
        :null}
        
      </div>
    );
  }
}

export default App;
