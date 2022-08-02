const sendMessageVonage = async () => {
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
        console.log('res', responseData.messages)

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

const receiveMessageVonage = (
  app: import('express').Express,
  prefix = '/webhooks'
) => {
  const handleInboundSms = (
    request: import('express').Request,
    response: import('express').Response
  ) => {
    const params = Object.assign(request.query, request.body)

    console.log('Vonage:', params)
    response.status(204).send()
  }

  app.route(`${prefix}/vonage`).get(handleInboundSms).post(handleInboundSms)
}

export { sendMessageVonage, receiveMessageVonage }
