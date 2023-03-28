import video from './hp_hero_video_v3.mp4'
import React, { useEffect, useState, createContext } from "react";
import TrainerList from './TrainerList';
import { Link, redirect, useNavigate } from "react-router-dom";


function Home(){
   const SearchContext = createContext()
    const [submitSeach, setSubmitSearch] = useState({
        activity: '',
        location: ''
      })
      const navigate = useNavigate();

    function handleChange(event){
        event.preventDefault()
        setSubmitSearch({
          ...submitSeach, 
          [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        const lowercase = {
            activity: submitSeach.activity.toLowerCase(),
            location: submitSeach.location.toLowerCase()
        }
        navigate("/trainers", {state: lowercase})
    }

   console.log(submitSeach)

    return (
        <div className='div1'>
            <video  src={video} autoPlay loop muted />
            <h1 className='welcome' >Welcome To All-Things-Active</h1>
            <SearchContext.Provider value={submitSeach}>
                <form className='welcome' onSubmit={handleSubmit}>
                        <input 
                        placeholder='Enter Activity'
                        className='form'
                        type="text"
                        name='activity'
                        value={submitSeach.activity}
                        onChange={handleChange}
                        >
                        </input>
                        <input
                        placeholder='Enter Location'
                        className='form'
                        type="text"
                        name='location'
                        value={submitSeach.location}
                        onChange={handleChange}
                        >
                        </input>
                        
                        
                        <button className='form'  type='submit'>Find Your Trainer
                        </button>
                    </form>
                </SearchContext.Provider>
                <div className='header1'>
                     @2023 All-Things-Active, Inc. Privacy Policy Terms of Service
                </div>
        </div>
        
    )
}

export default Home;

// {/* <video className="size" src={video} autoPlay loop muted/> */}
// <div className="home">
//             <video  src={video} autoPlay loop muted/>
            // <div className='content'>
            //     <h1 >Welcome To All-Things-Active</h1>
                // <form className='form'>
                //     <input 
                //     placeholder='Enter Activity'
                //     className='form'
                //     >
                //     </input>
                //     <input
                //     placeholder='Enter Location'
                //     className='form'
                //     >
                //     </input>
                //     <button  className='form'>Find Your Trainer</button>
                // </form>
            // </div>
//         </div>