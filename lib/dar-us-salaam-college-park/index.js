const axios = require('axios')
const cheerio = require('cheerio')

const results = [
  {
    uuid4: '67c64bec-d370-48ec-8c01-78f3d7cc2494',
    name: 'Dar-us-Salaam',
    url: 'http://www.alhuda.org',
    address: '5301 Edgewood Rd, College Park, MD 20740, USA',
    placeId: 'ChIJZXrLS_PDt4kRFnzV6QTr4rQ',
    timeZoneId: 'America/New_York',
    geo: {
      latitude: 39.015049,
      longitude: -76.911195
    }
  },
  {
    uuid4: '40b30d95-f3b7-4a36-bc71-5bc57329120f',
    name: 'Dar-us-Salaam - Off Site Juma',
    url: 'http://www.alhuda.org',
    address: '9450 Cherry Hill Rd, College Park, MD 20740, USA',
    placeId: 'ChIJBZgZgmrEt4kRPtq--ArcS5s',
    timeZoneId: 'America/New_York',
    geo: {
      latitude: 39.020607,
      longitude: -76.94011
    }
  }
]

exports.run = async () => {
  const date = new Date()
  const response = await axios.get('http://www.alhuda.org')
  const $ = cheerio.load(response.data)

  results[0].crawlTime = date
  results[1].crawlTime = date

  results[0].fajrIqama = $('#s5_main_r_inner > div:nth-child(2) > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(3)').text().trim()
  results[0].zuhrIqama = $('#s5_main_r_inner > div:nth-child(2) > div > div > div > table > tbody > tr:nth-child(3) > td:nth-child(3)').text().trim()
  results[0].asrIqama = $('#s5_main_r_inner > div:nth-child(2) > div > div > div > table > tbody > tr:nth-child(4) > td:nth-child(3)').text().trim()
  results[0].maghribIqama = $('#s5_main_r_inner > div:nth-child(2) > div > div > div > table > tbody > tr:nth-child(5) > td:nth-child(3)').text().trim()
  results[0].ishaIqama = $('#s5_main_r_inner > div:nth-child(2) > div > div > div > table > tbody > tr:nth-child(6) > td:nth-child(3)').text().trim()

  results[0].juma1 = 'check website'

  results[1].juma1 = $('#s5_main_r_inner > div:nth-child(2) > div > div > div > br:nth-child(19)').get(0).nextSibling.nodeValue.match(/\d{1,2}:\d{2}/)[0]

  return results
}
