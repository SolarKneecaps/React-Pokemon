import React from 'react';
import {v4 as uuidv4 } from 'uuid';
import trainer from './imgs/trainerFrontImg.png'


function ViewPokemon (props){
    return(
        <div className = 'view--container'>
            <img className = 'view--container__trainer' src = {trainer} alt = 'trainer'/>
            <div className = 'view--container__wrapper' >
                {props.team.map(poke=><img className = 'view--container__wrapper__img'src = {poke.img} alt = 'pokemon' key = {uuidv4()}></img>)}
            </div>
            {props.isDone?
            <button className = 'view--container__btn' onClick = {()=>props.handleReset()}>PLAY AGAIN?</button>
            :<button className = 'view--container__btn' onClick = {()=>props.handleView()}>RETURN TO CATCHING</button>}
        </div>
    )
}

export default ViewPokemon;