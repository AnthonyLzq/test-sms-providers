const sendMessageV = async () => {
  const { default: Vonage } = await import('@vonage/server-sdk')
  const vonage = new Vonage({
    apiKey: process.env.VONAGE_API_KEY as string,
    apiSecret: process.env.VONAGE_API_SECRET as string
  })
  const from = 'Node.js'
  const to = (process.env.PHONE_RECIPIENT as string).replace('+', '')
  const text = 'A text message sent using te Vonage SMS API'

  console.log('Sending message with Vonage')

  return new Promise<string>(resolve => {
    vonage.message.sendSms(from, to, text, {}, (err, responseData) => {
      if (err) {
        console.log('There was an error while sending a message with Vonage')

        return resolve('Error')
      }

      if (responseData.messages[0].status === '0') {
        console.log('Message sent with Vonage')

        return resolve('Success')
      }

      console.log('There was an error while sending a message with Vonage')
      console.log(
        `Message failed with error: ${responseData.messages[0]['error-text']}`
      )

      return 'Error'
    })
  })
}

const receiveMessageV = async () => {
  const { default: express } = await import('express')
  const app = express()

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  const handleInboundSms = (
    request: import('express').Request,
    response: import('express').Response
  ) => {
    const params = Object.assign(request.query, request.body)

    console.log(params)
    response.status(204).send()
  }

  app
    .route('/webhooks/inbound-sms')
    .get(handleInboundSms)
    .post(handleInboundSms)

  const PORT = process.env.PORT || '3000'
  let server: import('http').Server

  return {
    start: () => {
      server = app.listen(process.env.PORT || 3000, () => {
        console.log(`Server running at port ${PORT}`)
      })
    },
    stop: () => {
      server?.close()
    }
  }
}

export { sendMessageV, receiveMessageV }
