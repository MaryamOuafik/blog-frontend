import axios from 'axios';
import {useState } from "react";



function BloggerRegistration() 
{
    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");



    async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8080/user",
        {
        "firstName": firstName,
        "secondName" : secondName,
        "email" : email,
        "password" : password,
        });
          alert("Employee Registation Successfully");
          setId("");
          setFirstName("");
          setSecondName("");
          setEmail("");
          setPassword("");
          setRole("");
        
        
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }

    return (
        <div class="container">
        <form>
  <div class="mb-3">
    <label for="first_name" class="form-label">First Name</label>
    <input type="text" class="form-control" id="" aria-describedby="emailHelp" value={firstName} 
     onChange={(event) =>
               {
                setFirstName(event.target.value);      
               }}/>
  </div>
  <div class="mb-3">
    <label for="second_name" class="form-label">Second Name</label>
    <input type="text" class="form-control" id="" aria-describedby="emailHelp" value={secondName} 
     onChange={(event) =>
               {
                setSecondName(event.target.value);      
               }}/>
  </div>
  <div class="mb-3">
    <label for="dateOfBirth" class="form-label">Date of Birth</label>
    <input type="date" class="form-control" id="" aria-describedby="emailHelp" value={dateOfBirth} 
     onChange={(event) =>
               {
                setDateOfBirth(event.target.value);      
               }}/>
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="" aria-describedby="emailHelp" value={email} 
     onChange={(event) =>
               {
                setEmail(event.target.value);      
               }}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" value={password} 
     onChange={(event) =>
               {
                setPassword(event.target.value);      
               }}/>
  </div>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="blogger"  onChange={(event) =>
               {
                setRole(event.target.value);      
               }} />
  <label class="form-check-label" for="flexRadioDefault1">
    Blogger
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="reader"  onChange={(event) =>
               {
                setRole(event.target.value);      
               }} />
  <label class="form-check-label" for="flexRadioDefault2">
    Reader
  </label>
</div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary" onClick={save}>Submit</button>
</form>
</div>
    );
    }
    export default BloggerRegistration