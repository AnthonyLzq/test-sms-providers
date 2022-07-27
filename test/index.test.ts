import { sendMessageCS, sendMessageMB } from '../src/providers'

const SUCCESS = 'Success'

describe('Testing providers', () => {
  describe('MessageBird sms', () => {
    test('Send a sms', async () => {
      const result = await sendMessageMB()

      expect(result).toBe(SUCCESS)
    })
  })

  describe('ClickSend sms', () => {
    test('Send a sms', async () => {
      const result = await sendMessageCS()

      expect(result).toBe(SUCCESS)
    })
  })
})
