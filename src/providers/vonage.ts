import Vonage from '@vonage/server-sdk'

const vonage = new Vonage({
  apiKey: process.env.VONAGE_API_KEY as string,
  apiSecret: process.env.VONAGE_API_SECRET as string
})

const from = 'Node.js'
const to = (process.env.PHONE_RECIPIENT as string).replace('+', '')
const text = 'A text message sent using te Vonage SMS API'

const sendMessageV = () => {
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

export { sendMessageV }
