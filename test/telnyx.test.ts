import { sendMessageTelnyx } from '../src/providers'

describe('Testing providers', () => {
  describe('Telnyx sms', () => {
    test('Send a sms', async () => {
      // To don't burn out my free credits
      if (process.env.NODE_ENV === 'local') {
        const result = await sendMessageTelnyx()

        expect(result).toBe('Success')
      } else expect(1 + 1).toBe(2)
    })
  })
})
