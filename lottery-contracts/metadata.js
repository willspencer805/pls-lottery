const fs = require('fs')

metadata = `{
  "name": "PLS Lottery Ticket",
  "description": "This ticket represents an entry to the PLS Lottery. Good luck!",
  "image": "ipfs://QmXCtUzq5YKGewU3QuXN4h3e2TEWwaoEKVdyvHB8X8Aiyq",
  "external_url": "plslottery.vercel.app",
}
`

for (i = 0; i < 200; i++) {
  fs.writeFile(`./metadata/${i}`, metadata, function (err) {
    console.log(err)
  })
}
