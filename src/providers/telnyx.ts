import axios, { AxiosError } from 'axios'

const sendMessageT = async () => {
  try {
    const BASE_URL = 'https://api.telnyx.com/v2/messages'
    const headers = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.TELNYX_API_KEY}`
      }
    }
    const body = {
      from: process.env.TELNYX_PHONE_NUMBER,
      to: process.env.PHONE_RECIPIENT,
      text: 'Testing Telnyx'
    }

    console.log('Sending message with Telnyx')

    const res = await axios.post(BASE_URL, body, headers)

    console.log('Message sent with Telnyx')
    console.log('res', res)

    return 'Success'
  } catch (error) {
    console.log('There was an error while sending a message with Telnyx')

    if (error instanceof AxiosError) console.error(error.response?.data)
    else console.error(error)

    return 'Error'
  }
}

export { sendMessageT }
