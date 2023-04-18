import video from './hp_hero_video_v3.mp4'
import React, { useState} from "react";
import { useNavigate } from "react-router-dom";

function Home({addValue}){
    
    const [submitSearch, setSubmitSearch] = useState({
        activity: '',
        location: ''
      })
     
    

    function handleChange(event){
        event.preventDefault()
        setSubmitSearch({
          ...submitSearch, 
          [event.target.name]: event.target.value.toLowerCase()
        })
       
    }

    function handleSubmit(event){
        event.preventDefault()
        const lowercase = {
            activity: submitSearch.activity,
            location: submitSearch.location
        }
        // navigate("/trainers", {state: lowercase})
       addValue(lowercase)
    }

   console.log(submitSearch)

    return (
        <>
        
        <div className='div1'>
            <video  src={video} autoPlay loop muted />
            <h1 className='welcome' >Welcome To All-Things-Active</h1>
            
                <form className='welcome' onSubmit={handleSubmit}>
                        <input 
                        placeholder='Enter Activity'
                        className='form'
                        type="text"
                        name='activity'
                        value={submitSearch.activity}
                        onChange={handleChange}
                        >
                        </input>
                        <input
                        placeholder='Enter Location'
                        className='form'
                        type="text"
                        name='location'
                        value={submitSearch.location}
                        onChange={handleChange}
                        >
                        </input>
                        
                        
                        <button className='form'  type='submit'>Find Your Trainer
                        </button>
                    </form>
                <div className='header1'>
                     @2023 All-Things-Active, Inc. Privacy Policy Terms of Service
                </div>
               
        </div>
        </>
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