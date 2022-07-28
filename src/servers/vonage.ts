import { receiveMessageV } from 'providers'

const main = async () => {
  const serverFunctions = await receiveMessageV()

  serverFunctions.start()
}

main()
