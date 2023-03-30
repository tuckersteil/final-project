import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link, redirect, useNavigate, useLocation} from "react-router-dom";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import DayTimePicker from '@mooncake-dev/react-day-time-picker';
import { SearchContext } from "./App";

function Confirmation(){
    const [trainer, setTrainer] = useState([])
    const [activities, setActivities] = useState([])
    const [details, setDetails] = useState([])
    const navigate = useNavigate();
    const [date, setDate] = useState(new Date());
    let today = date.toLocaleString().split(",")[0] 
    let { id } = useParams();
    const location = useLocation();
    // console.log(location.state.trainer.id)
    const [tucker, setTucker] = useState([])
    const search = useContext(SearchContext)

    useEffect(()=> {
        fetch(`/confirm/${id}`)
            .then((r)=> r.json())
            .then((order)=> {setDetails(order); setTrainer(order.trainer); setActivities(order.activity)});
    }, [])
console.log(details, trainer, activities)
    // useEffect(()=> {
    //     fetch(`/confirmy/${location.state.activity.id}`)
    //         .then((r)=> r.json())
    //         .then((order)=>setActivities(order));
    // }, [])

     

     


      function handleScheduled(dateTime ){
        
        const date = dateTime.toLocaleString().split(",")[0] 
        const time = dateTime.toLocaleString().split(",")[1] 
        console.log(date, time )
        handleBooking(details, date, time)
        
         
      }

      function timeSlotValidator(slotTime) {
    
        const eveningTime = new Date(
          slotTime.getFullYear(),
          slotTime.getMonth(),
          slotTime.getDate(),
          8,
          0,
          0,
          
        ) 
        const morning = new Date(
            slotTime.getFullYear(),
            slotTime.getMonth(),
            slotTime.getDate(),
            19,
            0,
            0,
            
          ) 
        const isValid = slotTime.getTime() > eveningTime.getTime() && slotTime.getTime() < morning.getTime();
        return isValid;
      }


    function handleBooking(detail, date, time){
    //console.log(activity, detail)
    const booking = {
        trainer_activity_id: parseInt(detail.id),
        date: date,
        time: time, 

    }
    console.log(booking)
    fetch('/bookings', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(booking)
    })
    .then((r)=> r.json())  
    .then((data)=>  navigate("/mybookings"));
    
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

        <div className="div44">
            <section className="actSection" >
                <h1>You Selected:</h1><br></br>
                <h1 className="tucker">{activities.category}</h1><br></br>
                <br></br>
                <p className="tucker">Lesson Type:</p> <p className="tuckery">{activities.lesson_type}</p><br></br>
                <p className="tucker">Class Size:</p> <p className="tuckery">{activities.size}</p><br></br>
                <p className="tucker"> Cost:</p><p className="tuckery"> ${details.cost}</p><br></br>
                <p className="tucker"> Length:</p><p className="tuckery"> {details.time}</p><br></br>
                <br></br>
                <p className="tucker"> Details:</p> <p className="tuckery">{details.specifics}</p><br></br>
                <br></br>
                <br></br>
            </section>

        </div>

        <div className="cal">
            <h1>Select a Time & Date:</h1>
            <br></br>
           
           <DayTimePicker timeSlotSizeMinutes={60} onConfirm={handleScheduled } timeSlotValidator={timeSlotValidator} />
        </div> 
        </>
    )
}
export default Confirmation;

 {/* <Calendar onChange={onChange} value={date} key={location.state.trainer.id}/> */}