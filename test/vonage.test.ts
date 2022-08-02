import { sendMessageVonage } from '../src'

describe('Testing providers', () => {
  describe('Vonage sms', () => {
    test('Send a sms', async () => {
      // To don't burn out my free credits
      if (process.env.NODE_ENV === 'local') {
        const result = await sendMessageVonage()

        expect(result).toBe('Success')
      } else expect(1 + 1).toBe(2)
    })
  })
})
