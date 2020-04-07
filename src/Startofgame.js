import React from 'react';

function Startofgame (props){
    return(
    <div className = 'start--container'>
        <div className = 'start--container__wrapper'>
            <h1 className = 'start--container__wrapper__heading'>POKEMON SAFARI ZONE</h1>
            <p className = 'start--container__wrapper__text'>Welcome, Trainer to a generation one safari zone! Here you can catch a team up to six memebers!
                Make sure to view your team throughout so you can grab a screan capture to show your friends!
                Have fun!
            </p>
        </div>
        <button className = 'start--container__btn' onClick = {()=> props.handleStart()}>START</button>
    </div>        
    )
}

export default Startofgame