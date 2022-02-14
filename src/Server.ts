import http from 'http'
import config from 'config'
import { main } from './App'
import fs from 'fs'

const htmlApp = fs.readFileSync('./public/index.html')

const { port, hostName } = config.get('host');

(function app () {
  setTimeout(() => {
    main().catch((e) => e)
    app()
  }, 3000)
})()

const server = http.createServer((req, res) => {
  res.writeHead(200)
  res.end(htmlApp)
})

server.listen(port, hostName, () => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  console.log(`Server running at http://${hostName}:${port}/`)
})
