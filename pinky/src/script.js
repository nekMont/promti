import { config } from "dotenv"
config()

import { Configuration, OpenAIApi } from "openai"
import express from "express"

const app = express()
const port = 3001

const openai = new OpenAIApi(new Configuration({apiKey: process.env.API_KEY}))

app.get('/api/gpt3-response/:input', async (req, res) => {
  const { input } = req.params

  const response = await openai.createChatCompletion({
    model: "text-davinci-002",
    prompt: input,
    maxTokens: 5,
  })

  res.json({ response: response.choices[0].text })
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
