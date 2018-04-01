import express from 'express'
import cors from 'cors'

const PORT = process.env.PORT || 3000

const app = express();
app.use('/', (req, res) => {
  res.send(`Server says ${(new Date).toString()}`)
})

app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}/`)
})