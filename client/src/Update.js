import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link, redirect, useNavigate, useLocation} from "react-router-dom";
import moment from "moment";
import 'react-calendar/dist/Calendar.css';
import DayTimePicker from '@mooncake-dev/react-day-time-picker';
import { SearchContext } from "./App";

function Update(){
    const [takenTimes, setTakenTimes] = useState([])
    const [calendar, setCalendar] = useState([])
    const [details, setDetails] = useState([]) 
    const navigate = useNavigate();
    const location = useLocation();
    let { id } = useParams();

    
 //get taken times
    useEffect(()=> {
        fetch(`/timey/${location.state.trainer_id}`)
            .then((r)=> r.json())
            .then((times)=> setTakenTimes(times.taken_times));
    }, [])
    console.log(takenTimes)
    console.log(location.state)
    

    function handleScheduled(dateTime){
        const full_date = moment(dateTime).format('MMMM Do YYYY, h:mm a')
        console.log(full_date)
// replace old time with new time 
    fetch(`/trainers/${location.state.trainer_id}/${location.state.date}`, {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(full_date)
    })
    .then((r)=> r.json())  
    .then((data)=>  setCalendar(data))
       
        
// update boookkng time(is working)
        fetch(`/bookings/${location.state.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(full_date)
        })
        .then((r)=> r.json()) 
        .then((data)=>  nowNavigate(data));
    }

    function nowNavigate(data){
        console.log(data)
        navigate("/mybookings")
    }


      function timeSlotValidator(slotTime) {
        const full_date = moment(slotTime).format('MMMM Do YYYY, h:mm a')
       const tucker = takenTimes.filter((time)=> {
            if (time == full_date)
                return true
            else 
                return false
        })
        return tucker >= 0;
      }

    return (
        <>
    <div className="div2">
        <section className="coursey">
            <h1>Training Session with:</h1><br></br>
            <h3 className="tucker">{location.state.trainer}</h3><br></br>
            
            <h3 className="tuckery">Details:</h3>
           
            <p className="tuckery"> Location: <p className="tucker">{location.state.location}</p></p><br></br>
            <p className="tuckery"> Sport: <p className="tucker">{location.state.activity}</p></p><br></br>
            <p className="tuckery"> Cost: <p className="tucker">${location.state.cost}</p></p><br></br>
            <p className="tuckery"> Date: <p className="tucker">{location.state.date}</p></p> <br></br>
        </section>
        
    </div>
        <div className="cal">
            <h1>Select a Time & Date:</h1>
            <br></br>
           <DayTimePicker  timeSlotSizeMinutes={60} onConfirm={handleScheduled} timeSlotValidator={timeSlotValidator} />
        </div> 
        </>
    )
}
export default Update


// function handleScheduled(dateTime){
//     const full_date = moment(dateTime).format('MMMM Do YYYY, h:mm a')
//     console.log(full_date)
// // add taken time to trainer (is working)
//     fetch(`/trainers/${location.state.trainer_id}`, {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(full_date)
//     })
//     .then((r)=> r.json())  
//     .then((data)=>  setCalendar(data))

    
// // update boookkng time(is working)
//     fetch(`/bookings/${location.state.id}`, {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(full_date)
//     })
//     .then((r)=> r.json())  
//     .then((data)=>  nowRemove(data));
// }

// function nowRemove(data){
// const booking = location.state
//     fetch(`/trainers/${location.state.trainer_id}/${location.state.date}`, {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(booking)
//     })
//     .then((r)=> r.json())  
//     .then((data)=>  nowNavigate(data))
// }

// function nowNavigate(data){
// console.log(data)
// navigate("/mybookings")
// }