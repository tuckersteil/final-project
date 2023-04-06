import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link, redirect, useNavigate, useLocation} from "react-router-dom";

import 'react-calendar/dist/Calendar.css';
import DayTimePicker from '@mooncake-dev/react-day-time-picker';
import { SearchContext } from "./App";
import Calendar from "./Calendar";

function Confirmation(){
    // const [trainer, setTrainer] = useState([])
    // const [activities, setActivities] = useState([])
    // const [details, setDetails] = useState([])
    const navigate = useNavigate();
    // const [date, setDate] = useState(new Date());
    // let today = date.toLocaleString().split(",")[0] 
    let { id } = useParams();
    // const location = useLocation();
    // console.log(location.state.trainer.id)
    // const [tucker, setTucker] = useState([])
    const search = useContext(SearchContext)
    const [takenTimes, setTakenTimes] = useState([])
    const [calendar, setCalendar] = useState([])
    console.log(id)
    console.log(search)

    useEffect(()=> {
        fetch(`/timey/${search.trainer.id}`)
            .then((r)=> r.json())
            .then((times)=> setTakenTimes(times.taken_times));
    }, [])
   
    console.log(takenTimes)

    function handleScheduled(dateTime){
        fetch(`/trainers/${search.trainer.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({time: dateTime})
        })
        .then((r)=> r.json())  
        .then((data)=>  setCalendar(data))
        console.log(dateTime)
        const date = dateTime.toLocaleString().split(",")[0] 
        const time = dateTime.toLocaleString().split(",")[1] 
        console.log(date, time)
        handleBooking(date, time)  
      }

    function timeSlotValidator(slotTime) {
       const tucker = takenTimes.filter((time)=> {
            if (JSON.stringify(time) == JSON.stringify(slotTime))
                return true
            else 
                return false
        })
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
        
        // const isValid = slotTime.getTime() > eveningTime.getTime() && slotTime.getTime() < morning.getTime() ;
        return tucker >= 0;
      }


    function handleBooking(date, time){
    console.log(date, time)
    const booking = {
        trainer_activity_id: parseInt(id),
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
                <img src={search.trainer.image}/>
            </picture>
            <div className="trainer">
                <h2>{search.trainer.name}</h2>
                <p>{search.trainer.location}</p>
                <p>Age: {search.trainer.age}</p>
                <br></br>
                <p><strong>Specializes in: {search.activity}</strong></p>
            </div>
        </div>

        <div className="div44">
            <section className="actSection" >
                <h1>You Selected:</h1><br></br>
                <h1 className="tucker">{search.booking.activity.category}</h1><br></br>
                <br></br>
                <p className="tucker">Lesson Type:</p> <p className="tuckery">{search.booking.activity.lesson_type}</p><br></br>
                <p className="tucker">Class Size:</p> <p className="tuckery">{search.booking.activity.size}</p><br></br>
                <p className="tucker"> Cost:</p><p className="tuckery"> ${search.booking.detail.cost}</p><br></br>
                <p className="tucker"> Length:</p><p className="tuckery"> {search.booking.detail.time}</p><br></br>
                <br></br>
                <p className="tucker"> Details:</p> <p className="tuckery">{search.booking.detail.specifics}</p><br></br>
                <br></br>
                <br></br>
            </section>
            
        </div>
        <div className="cal">
            <h1>Select a Time & Date:</h1>
            <br></br>
           
           <DayTimePicker  timeSlotSizeMinutes={60} onConfirm={handleScheduled } timeSlotValidator={timeSlotValidator} />
        </div> 

        
        </>
    )
}
export default Confirmation;

 {/* <Calendar onChange={onChange} value={date} key={location.state.trainer.id}/> */}
//  <div className="cal">
//             <h1>Select a Time & Date:</h1>
//             <br></br>
           
//            <DayTimePicker timeSlotSizeMinutes={60} onConfirm={handleScheduled } timeSlotValidator={timeSlotValidator} />
//         </div> 


 // useEffect(()=> {
    //     fetch(`/confirm/${id}`)
    //         .then((r)=> r.json())
    //         .then((order)=> {setDetails(order); setTrainer(...trainer, order.trainer); setActivities(order.activity)});
    // }, [])

    //console.log(details, trainer, activities, details.trainer_id, takenTimes)
    // useEffect(()=> {
    //     fetch(`/confirmy/${location.state.activity.id}`)
    //         .then((r)=> r.json())
    //         .then((order)=>setActivities(order));
    // }, [])