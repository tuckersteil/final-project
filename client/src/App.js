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
  const [booking, setBookings] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
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
    console.log(activity, trainer)
    setBookings(activity)
    navigate(`/confirm/${activity.id}`)
  }
console.log(search)
  return (
    < >
    <SearchContext.Provider value={search}>
    <NavBar setUser={setUser}/>
        <Routes>
          <Route path="/" element={<Home addValue={addValue}/>}/>
          <Route path="/trainers" element={<TrainerList addTrainer={addTrainer}/>}/>
          <Route path="/trainers/:id" element={<TrainerPage addBooking={addBooking} trainer={trainer}/>}/>
          <Route path="/confirm/:id" element={<Confirmation trainer={trainer} booking={booking}/>} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/mybookings" element={<MyBookings />} />
        </Routes>
      </SearchContext.Provider>
    </>
  );
}

export default App;
