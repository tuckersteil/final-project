import Home from './Home';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React, { useEffect, useState } from "react";
import TrainerList from './TrainerList';
import { useNavigate } from 'react-router-dom';
import TrainerPage from './TrainerPage';
import Login from './Login';
import Confirmation from './Confirmation';
import MyBookings from './MyBookings';
import Test from './Test';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  if (!user) return <Login onLogin={setUser} />;

  return (
    < >
      <NavBar setUser={setUser}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainers" element={<TrainerList />}/>
        <Route path="/trainers/:id" element={<TrainerPage />}/>
        <Route path="/confirm/:id" element={<Confirmation />} />
        <Route path="/mybookings" element={<MyBookings />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
