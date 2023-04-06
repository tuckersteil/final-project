import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, redirect, useNavigate, useLocation} from "react-router-dom";

function MyBookings(){
    const [bookings, setBookings] = useState([])
    useEffect(()=> {
        fetch('/booksesh')
            .then((r)=> r.json())
            .then((order)=>setBookings(order));
    }, [])
    
    console.log(bookings)

    function editBooking(booking){
        console.log(booking)
    }

    function deleteBooking(booking){
        console.log(booking)
    }

    return (
    <>

    <div className="div2">
        {bookings.map((booking)=> 
        <section className="coursey">
            <h1>Training Session with:</h1><br></br>
            <h3 className="tucker">{booking.trainer}</h3><br></br>
            
            <h3 className="tuckery">Details:</h3>
           
            <p className="tuckery"> Location: <p className="tucker">{booking.location}</p></p><br></br>
            <p className="tuckery"> Sport: <p className="tucker">{booking.activity}</p></p><br></br>
            <p className="tuckery"> Cost: <p className="tucker">${booking.cost}</p></p><br></br>
            <p className="tuckery"> Date: <p className="tucker">{booking.date}</p></p><br></br>
            <p className="tuckery"> Time: <p className="tucker">{booking.time}</p></p> <br></br>
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