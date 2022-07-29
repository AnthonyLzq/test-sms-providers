import axios, { AxiosError } from 'axios'

const sendMessageCS = async () => {
  try {
    const BASE_URL = 'https://rest.clicksend.com/v3/sms/send'
    const basic = `Basic ${Buffer.from(
      `${process.env.CLICK_SEND_USER_NAME}:${process.env.CLICK_SEND_API_KEY}`
    ).toString('base64')}`
    const headers = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: basic
      }
    }
    const body = JSON.stringify({
      messages: [
        {
          source: 'Node.js',
          to: process.env.PHONE_RECIPIENT,
          body: 'Testing ClickSend'
        }
      ]
    })

    console.log('Sending message with ClickSend')

    const res = await axios.post(BASE_URL, body, headers)

    console.log('Message sent with ClickSend')
    console.log(res, 'res')

    return 'Success'
  } catch (error) {
    console.log('There was an error while sending a message with ClickSend')

    if (error instanceof AxiosError) console.error(error.response?.data)
    else console.error(error)

    return 'Error'
  }
}

export { sendMessageCS }
