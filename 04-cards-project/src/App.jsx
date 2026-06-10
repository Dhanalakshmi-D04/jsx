import React from "react";
import card from "./components/Card"; 
import { Bookmark } from "lucide-react";

const App = () => {
  return (
    <div className='parent'>
      <div className='card'>
        <div className = 'top'>
          <img src = 'data:image/png;base64,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 ' alt=" " />
          <button>Save <Bookmark /></button>
        </div>
        <div className = "center">
          <h3>Amazon <span>5 days ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div>
            <h4>Part time</h4>
            <h4>Senior Level</h4>
          </div>


        </div>
        <div className = "bottom">
          <div>
              <h3>$120/hr</h3>
              <p>Mumbai India</p>
            </div>
          
          <button>Apply Now</button>

        </div>

      </div>
    </div>


    

  )
}
export default App;