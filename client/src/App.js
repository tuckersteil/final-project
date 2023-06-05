import Home from './Home';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React, { createContext, useEffect, useState, useContext } from "react";
import TrainerList from './TrainerList';
import { useNavigate } from 'react-router-dom';
import TrainerPage from './TrainerPage';
import Login from './Login';
import Confirmation from './Confirmation';
import MyBookings from './MyBookings';
import Update from './Update';



export const SearchContext = React.createContext();
function App() {
  
  const [trainer, setTrainer] = useState(null)
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState(null);
  const [booking, setBooking] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user.bookings));
      }
    });
  }, []);
  if (!user) return <Login onLogin={setUser} />;
  
  console.log(user)


  function addValue(details){
    setSearch(details)
    navigate("/trainers")
  }

  function addTrainer(trainer){
    setTrainer(trainer)
    navigate(`/trainers/${trainer.id}`)
  }

  function addBooking(activity){
    setBooking(activity)
    navigate(`/confirm/${activity.id}`)
  }

  function newBooking(book){
    const new_booking = {
      id: book.id,
      activity: booking.activity.category,
      cost: booking.cost,
      date: book.date_time,
      location: trainer.location,
      train_active: book.trainer_activity_id,
      trainer: trainer.name,
      trainer_id: trainer.id
    }
    console.log(new_booking)
    
   setUser([...user, new_booking])
   navigate("/mybookings")
  }

  function updateBooking(){
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user.bookings));
      }
    });
    setTimeout(()=> {
      navigate("/mybookings")
    }, 500);
    
  }
  console.log(user)
console.log(search)

  return (
    < >
    <SearchContext.Provider value={search}>
    <NavBar setUser={setUser}/>
        <Routes>
          <Route path="/" element={<Home addValue={addValue}/>}/>
          <Route path="/trainers" element={<TrainerList addTrainer={addTrainer}/>}/>
          <Route path="/trainers/:id" element={<TrainerPage addBooking={addBooking} trainer={trainer}/>}/>
          <Route path="/confirm/:id" element={<Confirmation trainer={trainer} booking={booking} newBooking={newBooking}/>} />
          <Route path="/update/:id" element={<Update updateBooking={updateBooking}/>} />
          <Route path="/mybookings" element={<MyBookings user={user} updateBooking={updateBooking}/>} />
        </Routes>
      </SearchContext.Provider>
    </>
  );
}

export default App;
