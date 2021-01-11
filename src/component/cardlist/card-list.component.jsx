import React from 'react';
import { Card } from '../Card/card.component'
import './card-list.styles.css';

export const Cardlist = props => {
    return(
    <div className='card-list'>
        { 
        props.services.map(svc=>(
            <Card key={svc.id} svc={svc}/>
        ))
        }     
    </div>
    )
};