import { useContext } from "react";
import { SearchContext } from "./App";


function Test(){
    const search = useContext(SearchContext)
console.log(search)
    return (
        <div className="whale">
           <div className="whaley">Trainer:</div>
           <div className="whaley">Location:{search.location}</div>
           <p className="whaley">Sport:{search.activity}</p>
           <p className="whaley">Cost:</p>
           <p className="whaley">Date:</p>
           <p className="whaley">Time:</p>
        </div>
    )
}

export default Test;