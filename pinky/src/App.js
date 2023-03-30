import { useState } from "react"

function App() {
  const [input, setInput] = useState("")
  const [response, setResponse] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch(`/api/gpt3-response/${input}`)
    const data = await res.json()

    setResponse(data.response)
  }

  return (
    <div>
      <h1>GPT-3 Chatbot</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <p>{response}</p>
    </div>
  )
}

export default App
