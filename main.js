const express = require('express')
const app = express()
const port = 3000

app.get('/open-redirect', (req, res) => {
  res.redirect(req.query.location)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
