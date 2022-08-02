# SMS providers

[![Tests](https://github.com/AnthonyLzq/test-sms-providers/actions/workflows/test.yml/badge.svg)](https://github.com/AnthonyLzq/test-sms-providers/actions/workflows/test.yml)
[![Lint](https://github.com/AnthonyLzq/test-sms-providers/actions/workflows/lint.yml/badge.svg)](https://github.com/AnthonyLzq/test-sms-providers/actions/workflows/lint.yml)

Testing different providers sms for sending/receiving sms. In case I can't send any sms to my own phone, I won't even try to receive an sms.

## Requirements

In order to test the providers listed above, you need to create a file called `setEnvVars.ts` under the test folder. That file must contain the following (you could also check the [example file](test/setEnvVars.example.ts)):

```javascript
process.env.PHONE_RECIPIENT = '123456789'

// Envs for MessageBird
process.env.MESSAGE_BIRD_API_KEY = 'MESSAGE_BIRD_API_KEY'

// Envs for ClickSend
process.env.CLICK_SEND_USER_NAME = 'CLICK_SEND_USER_NAME'
process.env.CLICK_SEND_API_KEY = 'CLICK_SEND_API_KEY'

// Envs for Vonage
process.env.VONAGE_API_KEY = 'VONAGE_API_KEY'
process.env.VONAGE_API_SECRET = 'VONAGE_API_SECRET'

// Envs for Telnyx
process.env.TELNYX_API_KEY = 'TELNYX_API_KEY'
process.env.TELNYX_PHONE_NUMBER = 'TELNYX_PHONE_NUMBER'

// Envs for Telnyx
process.env.SMS77_API_KEY = 'SMS77_API_KEY'

// Envs for Infobip
process.env.INFOBIP_API_KEY = 'INFOBIP_API_KEY'

// Envs for Sinch
process.env.SINCH_PLAN_ID = 'SINCH_PLAN_ID'
process.env.SINCH_PHONE_NUMBER = 'SINCH_PHONE_NUMBER'
process.env.SINCH_API_KEY = 'SINCH_API_KEY'
```

Then run the following in your terminal: `yarn test:local`, that will run the unit test for every sms provider.

You could also want to test only a certain site, if that is the case you should only add its corresponding env vars.

## [MessageBird](https://www.messagebird.com/en/sms/)

I couldn't send/receive any messages because MessageBird requires a phone number to be confirmed, as I have a peruvian phone I didn't receive anything so I couldn't test their API.

To test MessageBird API locally you need to follow these steps:

1. Register in their site
2. Get your API key
3. Run the following in your terminal: `yarn test:messageBird`

## [ClickSend](https://www.clicksend.com/us/)

I couldn't send/receive any messages because ClickSend API respond with a 500 error.

To test MessageBird API locally you need to follow these steps:

1. Register in their site
2. Get your username and your API key
3. Run the following in your terminal: `yarn test:clickSend`


## [Vonage](https://www.vonage.com/communications-apis/)

I can send messages using its API.

To test Vonage API locally you need to follow these steps:

1. Register in their site
2. Get your your API key and your API secret
3. Run the following in your terminal: `yarn test:vonage`

## [Telnyx](https://telnyx.com/)

I can send messages using its API.

To test Telnyx API locally you need to follow these steps:

1. Register in their site
2. Get your your API key
3. Run the following in your terminal: `yarn test:telnyx`

## [sms77](https://www.sms77.io)

I couldn't send/receive any messages using its API.

To test sms77 API locally you need to follow these steps:

1. Register in their site
2. Get your your API key
3. Run the following in your terminal: `yarn test:sms77`

## [Infobip](https://www.infobip.com/)

I can send messages using its API.

To test Infobip API locally you need to follow these steps:

1. Register in their site
2. Get your your API key
3. Run the following in your terminal: `yarn test:infobip`

## [Sinch](https://www.infobip.com/)

I can send messages using its API.

To test Infobip API locally you need to follow these steps:

1. Register in their site
2. Get your your API key, your plan id and your phone number
3. Run the following in your terminal: `yarn test:sinch`
