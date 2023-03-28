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
    return (
    <>

<div className="div444">
        {bookings.map((booking)=> 
        <section className="actSection" key={booking.id}>
            <h1>Training Session with:</h1>
            <h1 className="tucker">{booking.trainer}</h1><br></br>
            <br></br>
            <h3 className="tuckery">Details:</h3><br></br>
            <br></br>
            <p className="tucker"> Location:</p><p className="tuckery"> {booking.location}</p><br></br>
            <p className="tucker"> Sport:</p><p className="tuckery"> {booking.activity}</p><br></br>
            <p className="tucker"> Cost:</p><p className="tuckery"> ${booking.cost}</p><br></br>
            <p className="tucker"> Date:</p><p className="tuckery"> {booking.date}</p><br></br>
            <p className="tucker"> Time:</p> <p className="tuckery">{booking.time}</p><br></br>
            <br></br>
            <br></br>
        </section>
        )}
    </div>
    </>

    )
}
export default MyBookings;