import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import 'react-calendar/dist/Calendar.css';
import { SearchContext } from "./App";
import TrainerActivityCard
 from "./TrainerActivityCard";
function TrainerPage({addBooking, trainer}){
    const search = useContext(SearchContext)
    const [activities, setActivities] = useState(trainer.trainer_activities)
    // const [trainer, setTrainer] = useState([])
     const [details, setDetails] = useState([])
    //  const [clicked, setClicked]= useState(false)
    const clicked = false
    let { id } = useParams();
   
    console.log(trainer)
    console.log(search)
    console.log(activities)

function handleBooking( activity){
    console.log(activity, trainer)
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
        
       
        {/* <div className="div4">
        {trainer.trainer_activities.map((trainer)=>( trainer.activity.category === search.activity?
            (<div key={trainer.id}>
                <section className="actSection" >
                    <h1 className="tucker">{trainer.activity.category}</h1><br></br>
                    <br></br>
                    <p className="tucker">Lesson Type:</p> <p className="tuckery">{trainer.activity.lesson_type}</p><br></br>
                    <p className="tucker">Class Size:</p> <p className="tuckery">{trainer.activity.size}</p><br></br>
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


        </div> */}
        </>
    )
}
export default TrainerPage;


// useEffect(()=> {
    //     fetch(`/trainers/${id}`)
    //         .then((r)=> r.json())
    //         .then((activities) => {setActivities(activities.activities); setTrainer(activities)});
    // }, [])

    // useEffect(()=> {
    //     fetch(`/trainer_activities/${id}`)
    //         .then((r)=> r.json())
    //         .then((activities)=> setDetails(activities));
    // }, [])