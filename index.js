const ApifyClient = require('apify-client')
const apifyClient = new ApifyClient({
  userId: process.env.APIFY_USER_ID,
  token: process.env.APIFY_TOKEN
})
const lib = require('./lib')

let masaajid = [
  './lib/adams-center',
  './lib/aie-huntley',
  './lib/al-hira-community-center-wooddale',
  './lib/al-minhaal-academy-new-jersey',
  './lib/amco-lake-in-the-hills',
  './lib/aqsa-community-center-plainfield',
  './lib/at-takaful-islamic-society-chicago',
  './lib/baitul-mukarram-arlington',
  './lib/batavia-islamic-center',
  './lib/bilal-islamic-center-everett',
  // './lib/chicago-islamic-center',
  './lib/chicago-mosque',
  './lib/cimic',
  './lib/dar-al-hijrah-va',
  './lib/dar-al-taqwa-ellicot-city',
  './lib/darul-huda-springfield',
  './lib/darul-quran-chicago',
  './lib/dar-us-salaam-college-park',
  './lib/dar-us-sunnah-evanston',
  './lib/dma-seattle',
  './lib/downtown-islamic-center-chicago',
  './lib/east-plano-islamic-center',
  './lib/emas-seattle',
  './lib/farooq-masjid-mountlake-terrace',
  './lib/fox-valley-muslim-community-center',
  './lib/iacc-plano',
  './lib/icc-des-plaines',
  './lib/icci-chicago',
  './lib/ick-kent',
  './lib/icob-bothell',
  './lib/icoe-bellevue',
  './lib/ifn-libertyville',
  './lib/iscj-new-jersey',
  './lib/islamic-center-of-contra-costa',
  './lib/islamic-center-of-frisco',
  './lib/islamic-center-of-naperville',
  './lib/islamic-center-of-northern-virginia',
  './lib/islamic-center-of-oakbrook-terrace',
  './lib/islamic-center-of-romeoville',
  './lib/islamic-center-of-western-suburbs',
  './lib/islamic-center-of-wheaton',
  './lib/islamic-foundation-of-southwest-suburbs',
  './lib/islamic-foundation-of-villa-park',
  './lib/islamic-society-of-baltimore',
  './lib/islamic-society-of-delaware',
  './lib/isns-rolling-meadows',
  './lib/light-of-islam-harvey',
  './lib/madani-masjid-westmont',
  './lib/makki-masjid-chicago',
  './lib/maps-redmond',
  './lib/masjid-al-huda-schaumburg',
  './lib/masjid-al-mustafa-westmont',
  './lib/masjid-al-nur-olympia',
  './lib/masjid-darussalam',
  './lib/masjid-haqq-lombard',
  './lib/masjid-tawheed-chicago',
  './lib/masjid-ul-islam-elgin',
  './lib/masjid-uthman-lombard',
  './lib/mca-bay-area',
  './lib/mcc-chicago',
  './lib/mcc-east-bay-pleasanton',
  './lib/mcc-silver-springs',
  './lib/mclean-islamic-center-va',
  './lib/mcmc-new-jersey',
  './lib/mecca-center',
  './lib/mosque-foundation-bridgeview',
  './lib/muslim-association-of-bolingbrook',
  './lib/muslim-society-inc-bloomingdale',
  './lib/mustafa-center-va',
  './lib/new-brunswick-islamic-center-new-jersey',
  './lib/pgma-lanham',
  './lib/prayer-center-of-orland-park',
  './lib/sammamish-mosque',
  './lib/san-ramon-valley-islamic-center',
  './lib/shariaboard-chicago',
  './lib/snoqualmie-mosque'
]

const main = async () => {
  // setup crawler template

  const crawlerId = 'praytime-autogenerated'
  const crawlerSettings = { customId: crawlerId }

  try {
  /* const crawler = */ await apifyClient.crawlers.createCrawler({ settings: crawlerSettings })
  } catch (err) {
    if (err.message !== 'Custom ID must be unique') {
      throw err
    }
    // crawler already exists
  }

  for (const masjid of masaajid) {
    try {
      console.error('starting %s', masjid)

      const masjidLib = require(masjid)

      let results = {}
      if (masjidLib.apifySettings) {
        // run an apify crawler
        results = await lib.getPagefunctionResults(apifyClient, crawlerId, masjidLib.apifySettings)
      } else if (masjidLib.run) {
        // generic run function
        results = await masjidLib.run()
      } else if (masjidLib.results) {
        // static results, nothing to execute
        results = masjidLib.results
      }

      results.forEach((r) => {
        console.log('%j', r)
      })
    } catch (err) {
      console.error('caught error processing ' + masjid + ':' + err)
      console.trace()
    }
  }
}

const argv = process.argv.slice(2)

if (argv.length > 0) {
  masaajid = argv
}

main()
