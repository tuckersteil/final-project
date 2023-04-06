import 'react-calendar/dist/Calendar.css';
import DayTimePicker from '@mooncake-dev/react-day-time-picker';
import React, { createContext, useEffect, useState, useContext } from "react";
import { Link, redirect, useNavigate, useLocation} from "react-router-dom";

function Calendar({trainer, details}){
    const [calendar, setCalendar] = useState([])
    //const [takenTimes, setTakenTimes] = useState([])
    const navigate = useNavigate();

// console.log(trainer.id, details)
    // useEffect(()=> {
    //     fetch(`/timey/${trainer.id}`)
    //         .then((r)=> r.json())
    //         .then((times)=> setTakenTimes(...takenTimes, times));
    // }, [])
    
// console.log(takenTimes, calendar)


    function handleScheduled( dateTime ){
        console.log(dateTime)

        fetch(`/trainers/${trainer.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({time: dateTime})
        })
        .then((r)=> r.json())  
        .then((data)=>  setCalendar(data))
        
        const date = dateTime.toLocaleString().split(",")[0] 
        const time = dateTime.toLocaleString().split(",")[1] 
        // handleBooking( date, time)
      }

      function timeSlotValidator(slotTime) {
            //    console.log(JSON.stringify(slotTime))
            //    console.log(slotTime)
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
        const isValid = slotTime.getTime() > eveningTime.getTime() && slotTime.getTime() < morning.getTime()  //&& !takenTimes.include(slotTime)
        return isValid;
      }


    // function handleBooking( date, time){
    //console.log(activity, detail)
    // const booking = {
    //     trainer_activity_id: parseInt(trainerId),
    //     date: date,
    //     time: time, 

    // }
    // console.log(booking)
    // fetch('/bookings', {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(booking)
    // })
    // .then((r)=> r.json())  
    //  .then((data)=>  navigate("/mybookings"));
    
// }



    return (
        <div className="cal">
            <h1>Select a Time & Date:</h1>
            <br></br>
           
           <DayTimePicker calId={trainer.id} timeSlotSizeMinutes={60} onConfirm={handleScheduled } timeSlotValidator={timeSlotValidator} />
        </div> 
    )
}
export default Calendar;

// sc-bdVaja jQMQWL = entire cal 
// sc-eNQAEJ dlXWNb = invalid time 
// sc-eNQAEJ hvtuvo = valid time
// const indCal = document.getElementsByClassName("sc-jKJlTe fukbtW")

