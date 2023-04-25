import React, { useState, useContext} from "react";


function TrainerActivityCard({activity, handleBooking, clicked}){

console.log(activity)
    return (
        <section className="actSection">
            <h1 className="tucker">{activity.activity.category}</h1><br></br>
            <br></br>
            <p className="tucker">Lesson Type:</p> <p className="tuckery">{activity.activity.lesson_type}</p><br></br>
            <p className="tucker">Class Size:</p> <p className="tuckery">{activity.activity.size}</p><br></br>
            <p className="tucker"> Cost:</p><p className="tuckery"> ${activity.cost}</p><br></br>
            <p className="tucker"> Length:</p><p className="tuckery"> {activity.time}</p><br></br>
            <br></br>
            <p className="tucker"> Details:</p> <p className="tuckery">{activity.specifics}</p><br></br>
            <br></br>
            {clicked? 
            (<div></div>)
            :
            (<button onClick={()=> {handleBooking(activity)}}>Schedule Now</button>)}
        </section>
    )
}
export default TrainerActivityCard;