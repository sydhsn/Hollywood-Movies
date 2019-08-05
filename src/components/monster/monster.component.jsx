import React from 'react';
import "./monster.style.css";
export const Monster = props => (
        <div className="card-container">
           <img alt={props.movies.title} src={`https://image.tmdb.org/t/p/original`+props.movies.posterURL}/>
           <h2>{props.movies.title}</h2> 
           <p>{props.movies.email}</p>
       </div>
);