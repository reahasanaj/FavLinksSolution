import { useState } from 'react'
import './table.css'


const Form = (props) => {
  const {appendData} = props

  const [formDetails, setFormDetails] = useState({
       name : "",
       URL:""
  });

  const handleChange = (event) => {
    /*
            TODO - Logic for changing state based on form changes
        */
      const name = event.target.name;
      const value = event.target.value;

      setFormDetails({...formDetails, [name]:value})
      
      
  }

  const onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()

    /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
    appendData(formDetails)
    setFormDetails({name: "", URL :""})    
    
  }

  return (
    <form>
      <label>Name</label>
      <br></br> 
      <input type="text" id = "name"  name = "name" onChange={handleChange} value={formDetails.name}/>
      <br></br>
      <label>URL</label>
      <br></br>
      <input type="text" id = "url" name = "URL" onChange={handleChange} value={formDetails.URL}/>
      <br></br>
      <button type='submit' onClick={onFormSubmit}>Submit</button>
    </form>
  )
}

export default Form
