import { sendMessageCS } from '../src/providers'

describe('Testing providers', () => {
  describe('ClickSend sms', () => {
    test('Send a sms', async () => {
      const result = await sendMessageCS()

      expect(result).toBe('Success')
    })
  })
})
