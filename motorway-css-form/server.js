'use strict'

const app = require('express')()

const images = require('./images.json')

app.get('/images', ({ query }, res) => {
  const i = query.limit ? images.slice(0, parseInt(query.limit)) : images

  res.set('Cache-control', 'public, max-age=31536000')

  return res.status(200).json(i)
})

app.listen(5005, () => {
  process.stdout.write('Server is available on http://localhost:5000/\n')
})
