
import './App.css';

const App = () => {
  const getMessages = async () => {
    const options = { 
      method: "POST",
      body : JSON.stringify({ 
        message: "how are you ?"
      }),
      headers: {
        "content-type": "application/json" 
      }
    }
    try { 

      const response = await fetch('http://localhost:8000/completions', options)
      const data = await response.json() 
      console.log(data)
    } catch (error) { 
      console.error(error)
    }
  }
  return (
    <button id="submit" onClick={getMessages}>
      submit
    </button>
  );
}

export default App;
