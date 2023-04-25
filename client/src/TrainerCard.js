import React, { useState, useContext} from "react";
import { SearchContext } from "./App";
import TrainerPage from "./TrainerPage";
import { useNavigate } from "react-router-dom";
function TrainerCard({trainer, handleClick}){
    const search = useContext(SearchContext)
    // const navigate = useNavigate();

    // function handleClick(trainer){
    //     console.log(trainer)
    //     navigate(`/trainers/${trainer.id}`)
    // }

    return (
    <div className="course" key={trainer.id}>
        <picture className="thumbnail">
            <img src={trainer.image}/>
        </picture>

        <div className="trainer">
            <h2>{trainer.name}</h2>
            <p>{trainer.location}</p>
            <p>Age: {trainer.age}</p>
            <br></br>
            <p>Specializes in: {search.activity}</p>
        </div>

        <button onClick={()=> {handleClick(trainer)}}>View Profile</button>
    </div>

    )
}
export default TrainerCard;