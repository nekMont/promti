import { useState } from 'react';
import './App.css';

const App = () => {
  const [value, setValue] = useState('')
  const [message, setMessage] = useState('')

  const getMessages = async () => {
    const options = { 
      method: "POST",
      body : JSON.stringify({ 
        message: value
      }),
      headers: {
        "content-type": "application/json" 
      }
    }

    try { 
      const response = await fetch('http://localhost:8000/completions', options)
      const data = await response.json() 
      console.log(data.choices[0].message)
      setMessage(data.choices[0].message); // set the message state to the response from the server
    } catch (error) { 
      console.error(error)
    }
  }

  return (

    
    <div className='backDiv'> 
    <div className='prompti-logo'> 
    Promti
    </div>
    <div className='button'> 
      <div className='input-container'>
        <input className='input-box' value={value} onChange={(e) => setValue(e.target.value)}/> 
        <button className='submit-button' id="submit" onClick={getMessages}>
          submit
        </button>
      </div>
      {message && (
    <div>
      <p className='mesResponse'> {message.content}</p>
    </div>
)}
    </div>
    
    </div>
  );
}

export default App;
