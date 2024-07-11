import { TextField } from '@mui/material'
import React, { useState } from 'react'

const TextInput = () => {

    var [inputs,setInput]=useState({nameField:'',age:'',place:'',mail:''})

    const inputHandler = (e) => {
        console.log(inputs);
        setInput({...inputs,[e.target.name] :e.target.value}); // ... is spreader function in javascript
    }
    
  return (
    <div>
      <TextField required 
      variant='outlined' 
      label='Name' 
      name='nameField' 
      value={inputs.nameField}
      onChange={inputHandler}/>


      <br></br><br></br>


      <TextField 
      variant='outlined' 
      label='Age' 
      name='age' 
      value={inputs.age} 
      onChange={inputHandler}/>


      <br></br><br></br>


      <TextField 
      variant='outlined' 
      label='Place' 
      name='place' 
      value={inputs.place} 
      onChange={inputHandler}/>


      <br></br><br></br>

      <TextField 
      variant='outlined'
      label='email'
      onChange={inputHandler}
      name='mail'
      value={inputs.mail}
    //   helperText='enter your email id'  helper text used to give text under textbox to provide user with some info
      />

      <br></br><br></br>


      <button variant='contained'  >Submit</button>
    </div>
  )
}

export default TextInput
