import React,{useState} from "react";
import axios from "axios";

function CreateUser(){

    const [username, setUsername] = useState({
        username:""
      });

    
    function onChangeUsername(event) {
        const { name, value } = event.target;
    
        setUsername(prevValue => {
          return {
            ...prevValue,
            [name]: value
          };
        });   
      }

      function handleSubmit(event) {
    
        event.preventDefault();
    
        const user={
            username: username.username,
          
        }
       
        console.log(user);
        axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));
        
        //window.location = '/';
    
    
     }


    return (
        <div>
          <h3>Create New User</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group"> 
              <label>Username: </label>
              <input  type="text"
                  name="username"
                  required
                  className="form-control"
                  value={username.username}
                  onChange={onChangeUsername}
                  />
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
      )
    

}

export default CreateUser;