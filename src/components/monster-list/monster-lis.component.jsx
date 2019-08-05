import React from 'react';
import { Monster } from "../monster/monster.component";
import "./monster-list.style.css";
const MonsterList = props => {
    return (<div className="card-list">
        {props.movies.map((movies, key) => (<Monster key={movies._id} movies={movies} />))}
    </div>);
};

export default MonsterList;