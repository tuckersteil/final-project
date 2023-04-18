
import React, { useEffect, useState, useContext } from "react";
import { SearchContext } from "./App";

function TrainerList({addTrainer}){
const [trainers, setTrainers] = useState([])
const [errors, setErrors] = useState([]);
const search = useContext(SearchContext)

console.log(search)

useEffect(()=> {
    fetch(`/trainers/${search.activity}/${search.location}`)
        .then((r)=> {
            if (r.ok){
                r.json().then((trainers)=> setTrainers(trainers))
            }
            else {
                r.json().then((err) => setErrors([...errors, err]));
            }
        })   
}, [])

    console.log(trainers)
    function handleClick(trainer){
    console.log(trainer)
    addTrainer(trainer)
   
    }


    return (
        <div >
           
          {errors.map((err) => (
                    <div key={err} className="div2 error">{`${err.error} for "${search.activity}" in "${search.location}"`}</div>
                ))}
            <div className="div2">
            {trainers.map((trainer)=>
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
            )}
            </div>
            
        </div>
    )
}
export default TrainerList;