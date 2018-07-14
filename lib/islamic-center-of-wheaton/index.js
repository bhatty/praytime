const settings = {
    _id: "bBG5kmupgKJPssdeh",
    startUrls: [ { "value": "https://www.icwonline.org/" } ],
    pageFunction: function pageFunction(context) {
        var date = new Date();
        var $ = context.jQuery;
        var result = { 
            results: [
                {
                    crawlTime: date,
                    name: "Islamic Center of Wheaton",
                    url: "https://www.icwonline.org/",
                    address: "900 E Geneva Rd, Wheaton, IL 60187",
                    geo: {
                        latitude: 41.887693,  
                        longitude:-88.093184
                    },
                    fajrIqama: document.evaluate('//*[@id="text-7"]/div[2]/p[2]/text()[1]', document, null, XPathResult.STRING_TYPE, null).stringValue.trim().replace(/^[\w\s]+:\s+/, ''),
                    zuhrIqama: document.evaluate('//*[@id="text-7"]/div[2]/p[2]/text()[2]', document, null, XPathResult.STRING_TYPE, null).stringValue.trim().replace(/^[\w\s]+:\s+/, ''),
                    asrIqama:  document.evaluate('//*[@id="text-7"]/div[2]/p[2]/text()[3]', document, null, XPathResult.STRING_TYPE, null).stringValue.trim().replace(/^[\w\s]+:\s+/, ''),
                    maghribIqama: document.evaluate('//*[@id="text-7"]/div[2]/p[2]/text()[4]', document, null, XPathResult.STRING_TYPE, null).stringValue.trim().replace(/^[\w\s]+:\s+/, ''),
                    ishaIqama: document.evaluate('//*[@id="text-7"]/div[2]/p[2]/text()[5]', document, null, XPathResult.STRING_TYPE, null).stringValue.trim().replace(/^[\w\s]+:\s+/, ''),
                    juma1: document.evaluate('//*[@id="text-7"]/div[2]/p[2]/text()[6]', document, null, XPathResult.STRING_TYPE, null).stringValue.trim().replace(/^[\w\s]+:\s+/, ''),
                }
            ]
        };
        return result; 
    }.toString()
}

exports.settings = settings

if (require.main === module) {
    const ApifyClient = require('apify-client')
    const apifyClient = new ApifyClient({ 
        userId: process.env.APIFY_USER_ID,
        token: process.env.APIFY_TOKEN
    })

    const lib = require('../')

    lib.getPagefunctionResults(apifyClient, settings, (r) => {
        console.log("%j", r)
    })
}
