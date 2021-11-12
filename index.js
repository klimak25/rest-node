const express = require('express')
const path = require('path')
const app = express()
const todoRoutes = require('./routes/todo')
const sequelize = require('./utilus/database')
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'publick')))
app.use(express.json())
app.use('/api/todo', todoRoutes)

app.use((req, res, next) => {
    res.sendFile('/index.html')
})

async function start() {
  try {
      await sequelize.sync()
      app.listen(PORT, () => {
        console.log(`server of Port ${PORT}...`)
      })
  } catch (e) {
      console.log(e)
      
  }
}


start()