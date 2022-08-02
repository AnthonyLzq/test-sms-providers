import { sendMessageSms77 } from '../src'

describe('Testing providers', () => {
  describe('sms77 sms', () => {
    test('Send a sms', async () => {
      // To don't burn out my free credits
      if (process.env.NODE_ENV === 'local') {
        const result = await sendMessageSms77()

        expect(result).toBe('Success')
      } else expect(1 + 1).toBe(2)
    })
  })
})
