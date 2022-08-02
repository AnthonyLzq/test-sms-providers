import express from 'express'

import { receiveMessageVonage, receiveMessageTelnyx } from 'providers'

const main = async () => {
  const app = express()
  const PORT = process.env.PORT || '3000'

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  receiveMessageVonage(app)
  receiveMessageTelnyx(app)

  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running at port ${PORT}`)
  })
}

main()
