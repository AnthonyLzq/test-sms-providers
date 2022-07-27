import { sendMessageMB } from '../src/providers'

describe('Testing providers', () => {
  describe('MessageBird sms', () => {
    test('Send a sms', async () => {
      const result = await sendMessageMB()

      expect(result).toBe('Success')
    })
  })
})
