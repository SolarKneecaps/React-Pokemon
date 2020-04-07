import React from 'react';
import {v4 as uuidv4 } from 'uuid';
import trainer from './imgs/trainerBackImg.png';


class Foundpokemon extends React.Component{
    
    componentDidMount(){
        this.props.handleFindPokemon()
    }

    render(){
        return(
            <div className = 'catching--container'>
                <div className = 'catching--container__wrapper'>
                        <h4 className = 'catching--container__wrapper__name'>{this.props.name}</h4>
                        <img className = 'catching--container__wrapper__img' src = {this.props.img} alt = 'pokemon'/>
                </div>
                <img className = 'catching--container__trainer' src = {trainer} alt = 'trainer'/>
                <div class = 'catching--container__btn--wrapper'>
                    <button className = 'catching--container__btn--wrapper__btns' onClick = {()=>this.props.handleFindPokemon()}>FIND POKEMON</button>
                    <button className = 'catching--container__btn--wrapper__btns' onClick = {()=> this.props.isLoadingPoke?null:this.props.handleCatchPokemon()}>CATCH POKEMON</button>
                    <button className = 'catching--container__btn--wrapper__btns' onClick = {()=> this.props.handleView()}>VIEW TEAM</button>
                </div>
                <div className = 'catching--container__team--wrapper'>
                    {this.props.team.map(poke=><img className = 'catching--container__team--wrapper__imgs' src = {poke.img} alt = 'pokemon' key = {uuidv4()}></img>)}
                </div>
            </div>
        )
    }
}

export default Foundpokemon;