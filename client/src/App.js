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
import Test from './Test';



export const SearchContext = React.createContext();
function App() {
  
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  if (!user) return <Login onLogin={setUser} />;
  

  function addValue(details){
    setSearch(details)
    navigate("/trainers")
  }

  function addTrainer(trainer){
    setSearch({...search, trainer})
    navigate(`/trainers/${trainer.id}`)
  }

  function addBooking(detail, activity){
    const booking = {detail, activity}
    console.log(booking)
    setSearch({...search, booking})
    navigate(`/confirm/${detail.id}`)
  }
console.log(search)
  return (
    < >
    <SearchContext.Provider value={search}>
    <NavBar setUser={setUser}/>
        <Routes>
          <Route path="/" element={<Home addValue={addValue}/>}/>
          <Route path="/trainers" element={<TrainerList addTrainer={addTrainer}/>}/>
          <Route path="/trainers/:id" element={<TrainerPage addBooking={addBooking}/>}/>
          <Route path="/confirm/:id" element={<Confirmation />} />
          <Route path="/mybookings" element={<MyBookings />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </SearchContext.Provider>
    </>
  );
}

export default App;
