import React, {useState} from "react";
import axios from 'axios';


function CreateExercise(){

    const [exercises, setExercise] = useState({
        username:"",
        description:"",
        duration:"",
        date:""
      });


      function handleChange(event) {
        const { name, value } = event.target;
    
        setExercise(prevValue => {
          return {
            ...prevValue,
            [name]: value
          };
        });
        
      }

 function handleSubmit(event) {
    
    event.preventDefault();

    const exercise={
      username:exercises.username,
      description:exercises.description,
      duration:exercises.duration,
      date:exercises.date
    }
   
    console.log(exercise);
    
    axios.post('http://localhost:5000/exercises/add', exercise)
      .then(res => console.log(res.data));

    //window.location = '/';


 }


    return (
        <div>
          <h3>Create New Exercise Log</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group"> 
              <label>Username: </label>
              <input
                  name="username"
                  className="form-control"
                  onChange={handleChange}
                  value={exercises.username}                  
                  />
            </div>
            <div className="form-group"> 
              <label>Description: </label>
              <input  type="text"
                  required
                  name="description"
                  className="form-control"
                  onChange={handleChange}
                  value={exercises.description}
                  />
            </div>
            <div className="form-group">
              <label>Duration (in minutes): </label>
              <input 
                  type="text" 
                  name="duration"
                  className="form-control"
                  onChange={handleChange}
                  value={exercises.duration}
                  />
            </div>
            <div className="form-group">
              <label>Date: </label>
              <div>
              <input 

                  type="date"
                  name="date" 
                  className="form-control"
                  onChange={handleChange}
                  value={exercises.date}
                  />
              </div>
            </div>
    
            <div className="form-group">
            
              <input type="submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
        )
        

}

export default CreateExercise;