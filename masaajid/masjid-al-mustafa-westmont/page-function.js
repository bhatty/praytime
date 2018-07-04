function pageFunction(context) {
    var date = new Date();
    // var $ = context.jQuery;
    var result = { 
        results: [
            {
                crawlTime: date,
                name: "Masjid Al-Mustafa",
                url: "https://masjidalmustafa.weebly.com",
                address: "300 East 55th Street, Westmont, IL 60559",
                geo: {
                    latitude: 41.7886227,
                    longitude: -87.969663
                },
                fajrIqama: document.evaluate('/html/body/div[1]/div[3]/div/div/div/div[1]/div/div/div/div[1]/text()[1]', document, null, XPathResult.STRING_TYPE, null).stringValue,
                zuhrIqama:document.evaluate('/html/body/div[1]/div[3]/div/div/div/div[1]/div/div/div/div[1]/text()[2]', document, null, XPathResult.STRING_TYPE, null).stringValue,
                asrIqama: document.evaluate('/html/body/div[1]/div[3]/div/div/div/div[1]/div/div/div/div[1]/text()[3]', document, null, XPathResult.STRING_TYPE, null).stringValue,
                maghribIqama: document.evaluate('/html/body/div[1]/div[3]/div/div/div/div[1]/div/div/div/div[1]/text()[4]', document, null, XPathResult.STRING_TYPE, null).stringValue,
                ishaIqama: document.evaluate('/html/body/div[1]/div[3]/div/div/div/div[1]/div/div/div/div[1]/text()[5]', document, null, XPathResult.STRING_TYPE, null).stringValue,
                juma1: document.evaluate('/html/body/div[1]/div[3]/div/div/div/div[1]/div/div/div/div[1]/text()[6]', document, null, XPathResult.STRING_TYPE, null).stringValue
            }
        ]
    };
    return result;
}
