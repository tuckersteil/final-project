import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import 'react-calendar/dist/Calendar.css';
import { SearchContext } from "./App";
import TrainerActivityCard
 from "./TrainerActivityCard";
function TrainerPage({addBooking, trainer}){
    const search = useContext(SearchContext)
    const [activities, setActivities] = useState(trainer.trainer_activities)
    const clicked = false
    //let { id } = useParams();
   

function handleBooking(activity){
     addBooking(activity)
}

    return (
        <>
        <div className="div3">
            <picture className="thumbnail1">
                <img src={trainer.image}/>
            </picture>
            <div className="trainer">
                <h2>{trainer.name}</h2>
                <p>{trainer.location}</p>
                <p>Age: {trainer.age}</p>
                <br></br>
                <p><strong>Specializes in: {search.activity}</strong></p>
            </div>
        </div>
        
        <div className="div4">
            {activities.map((activity)=> (activity.activity.category === search.activity? 
                (<TrainerActivityCard key={activity.id} activity={activity} handleBooking={handleBooking} clicked={clicked}/>)
                :
                (<div key={activity.id}></div>
            )))}
            {activities.map((activity)=> (activity.activity.category !== search.activity? 
                (<TrainerActivityCard key={activity.id} activity={activity} handleBooking={handleBooking} clicked={clicked}/>)
                :
                (<div key={activity.id}></div>
            )))}
        </div>
        </>
    )
}
export default TrainerPage;


