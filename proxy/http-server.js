const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.get('/resource', (req, res) => {
  console.log('HTTP Method - ',req.method)
  console.log('Headers - ',req.headers)
  res.send('Hello System Desinger(s)!\n\n')
})

app.post('/resource', (req, res) => {
  console.log('HTTP Method - ',req.method)
  console.log('Headers - ',req.headers)
  console.log('Request body - ',req.body)
  res.send('Hello System Desinger(s)!\n\n')
})

app.listen(port, () => {
  console.log(`Express HTTP server is listening at http://localhost:${port}/resource`)
})