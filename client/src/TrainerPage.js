import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, redirect, useNavigate, useLocation} from "react-router-dom";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

function TrainerPage(){
    const [activities, setActivities] = useState([])
    const [details, setDetails] = useState([])
    let { id } = useParams();
    const location = useLocation();
    const [date, setDate] = useState(new Date());
    let today = date.toLocaleString().split(",")[0] 
    const [tucker, setTucker] = useState([])
    const navigate = useNavigate();
    let trainer = location.state.trainer
console.log(trainer)

    useEffect(()=> {
        fetch(`/trainers/${id}`)
            .then((r)=> r.json())
            .then((activities)=> setActivities(activities));
    }, [])

    useEffect(()=> {
        fetch(`/trainer_activities/${id}`)
            .then((r)=> r.json())
            .then((activities)=> setDetails(activities));
    }, [])

console.log(activities, details, today, )


function handleBooking(detail, activity){
    console.log(detail, activity, id)
    navigate(`/confirm/${detail.id}`, {state: {detail, activity, trainer}})
}


console.log(tucker)

    return (
        <>
        <div className="div3">
            <picture className="thumbnail1">
                <img src={location.state.trainer.image}/>
            </picture>
            <div className="trainer">
                <h2>{location.state.trainer.name}</h2>
                <p>{location.state.trainer.location}</p>
                <p>Age: {location.state.trainer.age}</p>
                <br></br>
                <p><strong>Specializes in: {location.state.location.state.activity}</strong></p>
            </div>
        </div>
        
       
        <div className="div4">
        {activities.map((activity)=>( activity.category === location.state.location.state.activity?
            (<div key={activity.id}>
                <section className="actSection" >
                    <h1 className="tucker">{activity.category}</h1><br></br>
                    <br></br>
                    <p className="tucker">Lesson Type:</p> <p className="tuckery">{activity.lesson_type}</p><br></br>
                    <p className="tucker">Class Size:</p> <p className="tuckery">{activity.size}</p><br></br>
                    {details.map((detail)=> ( activity.id === detail.activity_id?
                    (<div key={detail.id}>
                        <p className="tucker"> Cost:</p><p className="tuckery"> ${detail.cost}</p><br></br>
                        <p className="tucker"> Length:</p><p className="tuckery"> {detail.time}</p><br></br>
                        <br></br>
                        <p className="tucker"> Details:</p> <p className="tuckery">{detail.specifics}</p><br></br>
                        <br></br>
                    <button onClick={()=> {handleBooking(detail, activity)}}>Schedule Session</button>
                    </div>
                    )
                    :
                    (<div key={detail.id}>
                    </div>)
                       
                    ))}
                </section>
                <br></br>
            </div>)
            :(<div key={activity.id}></div>)
        ))}
        <h1>{location.state.trainer.name} also offers lessons for:</h1>
        {activities.map((activity)=>( activity.category !== location.state.location.state.activity?
            (<div key={activity.id}>
                <section className="actSection">
                <h1 className="tucker">{activity.category}</h1><br></br>
                    <br></br>
                    <p className="tucker">Lesson Type:</p> <p className="tuckery">{activity.lesson_type}</p><br></br>
                    <p className="tucker">Class Size:</p> <p className="tuckery">{activity.size}</p><br></br>
                    {details.map((detail)=> ( activity.id === detail.activity_id?
                    (<div key={detail.id}>
                        <p className="tucker"> Cost:</p><p className="tuckery"> ${detail.cost}</p><br></br>
                        <p className="tucker"> Length:</p><p className="tuckery"> {detail.time}</p><br></br>
                        <br></br>
                        <p className="tucker"> Details:</p> <p className="tuckery">{detail.specifics}</p><br></br>
                        <br></br>
                        <button onClick={()=> {handleBooking(detail, activity)}}>book it</button>
                    </div>)
                    :
                    (<div key={detail.id}>
                    </div>)
                       
                    ))}
                </section>
                <br></br>
            </div>)
            :(<div key={activity.id}></div>)
        ))}


        </div>
        </>
    )
}
export default TrainerPage;