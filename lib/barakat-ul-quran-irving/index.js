const axios = require('axios')
const cheerio = require('cheerio')

const results = [
  {
    uuid4: '09bfc7ba-3bc4-47df-aacf-9b4f55dc987e',
    name: 'Barakaat Ul Quran Center',
    url: 'https://www.barkaatulquran.org/',
    timeZoneId: 'America/Chicago',
    address: '555 W Airport Fwy #170, Irving, TX 75062, USA',
    geo: {
      latitude: 32.839181,
      longitude: -96.95225
    },
    placeId: 'ChIJWxSOxgKDToYR_NAzFqEPFd4'
  }
]

exports.run = async () => {
  const date = new Date()
  const response = await axios.get('https://www.barkaatulquran.org/')
  const $ = cheerio.load(response.data)

  results[0].crawlTime = date

  const m = $('marquee').text().match(/(\d{1,2}:\d{1,2})/g)

  results[0].fajrIqama = m[0]
  results[0].zuhrIqama = m[1]
  results[0].asrIqama = m[2]
  results[0].maghribIqama = 'sunset'
  results[0].ishaIqama = m[3]
  results[0].juma1 = m[4]
  results[0].juma2 = m[5]

  return results
}
