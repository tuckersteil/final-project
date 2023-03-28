import { useEffect, useState, createContext, useContext } from "react";
import { Link, redirect, useNavigate, useLocation} from "react-router-dom";

function TrainerList(){
const [trainers, setTrainers] = useState([])
const [errors, setErrors] = useState([]);
const location = useLocation();
console.log(search)
const navigate = useNavigate();
const search = useContext(SearchContext)

useEffect(()=> {
    fetch(`/trainers/${location.state.activity}/${location.state.location}`)
        .then((r)=> {
            if (r.ok){
                r.json().then((trainers)=> setTrainers(trainers))
            }
            else {
                r.json().then((err) => setErrors([...errors, err]));
            }
        })   
}, [])

function handleClick(trainer){
console.log(trainer)
navigate(`/trainers/${trainer.id}`, {state: {trainer, location}})
}


    return (
        <div >
            
          {errors.map((err) => (
                    <div key={err} className="div2 error">{`${err.error} for "${location.state.activity}" in "${location.state.location}"`}</div>
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
                        <p>Specializes in: {location.state.activity}</p>
                    </div>
                    <button onClick={()=> {handleClick(trainer)}}>View Profile</button>
                </div>
            )}
            </div>
        </div>
    )
}
export default TrainerList;