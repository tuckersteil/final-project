import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link, redirect, useNavigate, useLocation} from "react-router-dom";
import 'react-calendar/dist/Calendar.css';
import { SearchContext } from "./App";
function TrainerPage({addBooking}){
    const search = useContext(SearchContext)
    const [activities, setActivities] = useState([])
    const [trainer, setTrainer] = useState([])
    const [details, setDetails] = useState([])
    let { id } = useParams();
    // const location = useLocation();
    const [date, setDate] = useState(new Date());
    let today = date.toLocaleString().split(",")[0] 
    const [tucker, setTucker] = useState([])
    const navigate = useNavigate();
    // let trainer = location.state.trainer
console.log(search)

    useEffect(()=> {
        fetch(`/trainers/${id}`)
            .then((r)=> r.json())
            .then((activities) => {setActivities(activities.activities); setTrainer(activities)});
    }, [])

    useEffect(()=> {
        fetch(`/trainer_activities/${id}`)
            .then((r)=> r.json())
            .then((activities)=> setDetails(activities));
    }, [])

console.log(activities, details, trainer)


function handleBooking(detail, activity){
    console.log(detail, activity, id)
    addBooking(detail, activity)
    // navigate(`/confirm/${detail.id}`, {state: {detail, activity, trainer}})
}


// console.log(tucker)

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
        {activities.map((activity)=>( activity.category === search.activity?
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
        <h1>{trainer.name} also offers lessons for:</h1>
        {activities.map((activity)=>( activity.category !== search.activity?
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
                        <button onClick={()=> {handleBooking(detail, activity)}}>Schedule Session</button>
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