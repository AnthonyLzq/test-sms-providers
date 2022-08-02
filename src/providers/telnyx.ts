import axios, { AxiosError } from 'axios'

const sendMessageTelnyx = async () => {
  try {
    const BASE_URL = 'https://api.telnyx.com/v2/messages'
    const config = {
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

    const res = await axios.post(BASE_URL, body, config)

    console.log('Message sent with Telnyx')
    console.log('res', res.data)

    return 'Success'
  } catch (error) {
    console.log('There was an error while sending a message with Telnyx')

    if (error instanceof AxiosError) console.error(error.response?.data)
    else console.error(error)

    return 'Error'
  }
}

const receiveMessageTelnyx = (
  app: import('express').Express,
  prefix = '/webhooks'
) => {
  const handleInboundSms = (
    request: import('express').Request,
    response: import('express').Response
  ) => {
    const params = Object.assign(request.query, request.body)

    console.log('Telnyx:', params)
    response.status(204).send()
  }

  app.route(`${prefix}/telnyx`).get(handleInboundSms).post(handleInboundSms)
}

export { sendMessageTelnyx, receiveMessageTelnyx }
