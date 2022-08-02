import axios, { AxiosError } from 'axios'

const sendMessageS = async () => {
  try {
    const BASE_URL = 'http://gateway.sms77.io/api/sms'
    const config = {
      params: {
        p: process.env.SMS77_API_KEY,
        from: 'sms77',
        text: 'Testing sms77',
        json: 1,
        to: process.env.PHONE_RECIPIENT
      }
    }

    console.log('Sending message with sms77')

    const res = await axios.post(`${BASE_URL}`, {}, config)

    console.log('Message sent with sms77')
    console.log('res', res.data)

    return 'Success'
  } catch (error) {
    console.log('There was an error while sending a message with sms77')

    if (error instanceof AxiosError) console.error(error.response?.data)
    else console.error(error)

    return 'Error'
  }
}

export { sendMessageS }
