import React from 'react';
import './card.styles.css';

export const Card = (props) => {
    return(
    <div className='card-container'>
        <img alt='mns' src={`https://robohash.org/${props.svc.id}?set=set2&size=180x180`}/>
        <h2>{props.svc.name}</h2>  
        <a href='{props.svc.email}'>{props.svc.email}</a>  
    </div>
    )
};