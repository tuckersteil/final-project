import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import 'react-calendar/dist/Calendar.css';
import DayTimePicker from '@mooncake-dev/react-day-time-picker';
import { SearchContext } from "./App";
import TrainerActivityCard from "./TrainerActivityCard";


function Confirmation({trainer, booking, newBooking}){
    let { id } = useParams();
    const search = useContext(SearchContext)
    const [takenTimes, setTakenTimes] = useState(trainer.taken_times)
    const clicked = true

     console.log(trainer, booking, takenTimes)

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

    function handleScheduled(dateTime){
        const full_date = moment(dateTime).format('MMMM Do YYYY, h:mm a')
        fetch(`/trainers/${trainer.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(full_date)
        })
        .then((r)=> r.json())  
        .then((data)=>  setTakenTimes(data))
        handleBooking(full_date)  
      }

    function handleBooking(full_date){
        console.log(takenTimes)
    const booking = {
        trainer_activity_id: parseInt(id),
        date_time: full_date
    }
    
    fetch('/bookings', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(booking)
    })
    .then((r)=> r.json())  
    .then((data)=>  newBooking(data));
    
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
            <TrainerActivityCard activity={booking} clicked={clicked}/>
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

 