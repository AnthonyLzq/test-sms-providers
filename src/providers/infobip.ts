import axios, { AxiosError } from 'axios'

const sendMessageI = async () => {
  try {
    const BASE_URL = 'https://89nlre.api.infobip.com/sms/2/text/advanced'
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `App ${process.env.INFOBIP_API_KEY}`,
        Accept: 'application/json'
      }
    }
    const body = JSON.stringify({
      messages: [
        {
          destinations: [
            {
              to: process.env.PHONE_RECIPIENT
            }
          ],
          from: 'Node.js',
          text: 'Testing Infobip'
        }
      ]
    })

    console.log('Sending message with Infobip')

    const res = await axios.post(BASE_URL, body, config)

    console.log('Message sent with Infobip')
    console.log('res', res.data)

    return 'Success'
  } catch (error) {
    console.log('There was an error while sending a message with Infobip')

    if (error instanceof AxiosError) console.error(error.response?.data)
    else console.error(error)

    return 'Error'
  }
}

export { sendMessageI }
