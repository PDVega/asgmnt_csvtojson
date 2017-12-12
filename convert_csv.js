const csvFile = './customer-data.csv'
const csv = require('csvtojson')
csv()
.fromFile(csvFile)
.on('json', jsonObj => {
  console.log(jsonObj)
})
.on('done', err => {
  console.log('end')
})