import axios, { AxiosError } from 'axios'

const sendMessageSinch = async () => {
  try {
    const BASE_URL = `https://sms.api.sinch.com/xms/v1/${process.env.SINCH_PLAN_ID}/batches`
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.SINCH_API_KEY}`
      }
    }
    const body = {
      from: process.env.SINCH_PHONE_NUMBER,
      to: [process.env.PHONE_RECIPIENT],
      body: 'Testing Sinch'
    }

    console.log('Sending message with Sinch')

    const res = await axios.post(BASE_URL, body, config)

    console.log('Message sent with Sinch')
    console.log('res', res.data)

    return 'Success'
  } catch (error) {
    console.log('There was an error while sending a message with Sinch')

    if (error instanceof AxiosError) console.error(error.response?.data)
    else console.error(error)

    return 'Error'
  }
}

export { sendMessageSinch }
