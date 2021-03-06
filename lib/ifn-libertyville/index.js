const axios = require('axios')
const cheerio = require('cheerio')

const results = [
  {
    uuid4: '8f8e0e7c-31d9-485a-ad3d-fc5f341f31de',
    name: 'Islamic Foundation North',
    url: 'http://www.ifnonline.com/',
    address: "1751 O'Plaine Rd, Libertyville, IL 60048, USA",
    timeZoneId: 'America/Chicago',
    placeId: 'ChIJFy2RzbeTD4gREXbuIspB0qU',
    geo: {
      latitude: 42.32792,
      longitude: -87.913179
    }
  }
]

exports.run = async () => {
  const date = new Date()
  const response = await axios.get('http://www.ifnonline.com/')
  const $ = cheerio.load(response.data)

  results[0].crawlTime = date
  results[0].fajrIqama = $('div.salah-times > div:nth-child(2) > p:nth-child(1)').text().trim()
  results[0].zuhrIqama = 'check website' // $('div.salah-times > div:nth-child(2) > p:nth-child(2)').text().trim()
  results[0].asrIqama = $('div.salah-times > div:nth-child(2) > p:nth-child(4)').text().trim()
  results[0].maghribIqama = $('div.salah-times > div:nth-child(2) > p:nth-child(5)').text().trim()
  results[0].ishaIqama = $('div.salah-times > div:nth-child(2) > p:nth-child(6)').text().trim()
  results[0].juma1 = $('div.salah-times > div:nth-child(5) > p:nth-child(1)').text().trim()
  results[0].juma2 = $('div.salah-times > div:nth-child(5) > p:nth-child(5)').text().trim()

  return results
}
