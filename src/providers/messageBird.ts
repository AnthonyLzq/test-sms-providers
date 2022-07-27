import messagebird from 'messagebird'

const messageBird = messagebird(process.env.MESSAGE_BIRD_API_KEY as string)
const params = {
  originator: 'TestMessage',
  recipients: [process.env.PHONE_RECIPIENT as string],
  body: 'This is a test message'
}

const sendMessageMB = () => {
  console.log('Sending message with MessageBird...')

  return new Promise<string>((resolve, reject) => {
    messageBird.messages.create(params, (error, res) => {
      if (error) {
        console.log(
          'There was an error while sending a message with MessageBird'
        )

        return reject(error.message)
      }

      console.log('Message sent with MessageBird')
      console.log('res', res)

      return resolve('Success')
    })
  })
}

export { sendMessageMB }
