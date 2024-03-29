import { useEffect, useState} from "react";
import { useNavigate} from "react-router-dom";


function MyBookings({user, updateBooking}){
    const [bookings, setBookings] = useState(user)
    const navigate = useNavigate();
    
    function editBooking(booking){
        navigate(`/update/${booking.train_active}`, {state: booking})
    }

    function deleteBooking(booking){
        fetch(`/bookings/${booking.id}`, {
            method: "DELETE",
          })
        .then((r)=> r.json())  
        .then((data)=>  setBookings(data));


        fetch(`/removey/${booking.trainer_id}/${booking.date}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(booking)
            })
        .then((r)=> r.json())  
        .then((data)=>  updateBooking(data))

    }

    return (
    <>

    <div className="div2">
        {bookings.map((booking)=> 

        <section className="coursey" key={booking.id}>
            <h1>Training Session with:</h1><br></br>
            <h3 className="tucker">{booking.trainer}</h3><br></br>
            
            <h3 className="tuckery">Details:</h3>
           
            <p className="tuckery"> Location: <p className="tucker">{booking.location}</p></p><br></br>
            <p className="tuckery"> Sport: <p className="tucker">{booking.activity}</p></p><br></br>
            <p className="tuckery"> Cost: <p className="tucker">${booking.cost}</p></p><br></br>
            <p className="tuckery"> Date: <p className="tucker">{booking.date}</p></p> <br></br>
            <button onClick={()=> {editBooking(booking)}}>Edit Time/Date</button>
            <br></br>
            <button onClick={()=> {deleteBooking(booking)}}>Cancel Session</button>
        </section>
        )}
    </div>
    </>

    )
}
export default MyBookings;