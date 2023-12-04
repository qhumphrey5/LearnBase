import express from 'express'
import cors from 'cors'
import knex from './knex.js'
const app = express()
const port = 5001
app.use(cors())

app.get('/schools/:aun', async (req, res) => {
  const resp = await knex.from("School").select("*").where({ AUN: req.params.aun })
  res.json(resp[0])
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

//const express = require('express');
//const cors = require('cors');
