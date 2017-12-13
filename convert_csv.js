const csvFile = './customer-data.csv'
const fs = require('fs')
const csv = require('csvtojson')

let arr = []

csv()
  .fromFile(csvFile)
  .on('json', jsonObj => {
    arr.push(jsonObj)
  })
  .on('done', err => {
    if(err) return process.exit(1)
    console.log(arr)
    fs.writeFile('customer-convert.json', JSON.stringify(arr, null, 2), err => {
      if(err) return process.exit(1)
      console.log('done')
      process.exit(0)
    })
  })