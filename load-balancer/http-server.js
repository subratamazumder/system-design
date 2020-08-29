const express = require('express')
const app = express()
const port = process.env.PORT
var request_count = 0;
app.use(express.json());
app.get('/resource', (req, res) => {
  request_count++;
  console.log('HTTP Method - ',req.method,' request_count-',request_count)
  console.log('Headers - ',req.headers)
  res.send('Hello System Desinger(s)!\n\n')
})

app.listen(port, () => {
  console.log(`Express HTTP server is listening at http://localhost:${port}/resource`)
})