import video from './hp_hero_video_v3.mp4'
import React, { useState} from "react";


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

