// Sample return
// {
//     "status": "success",
//     "data": {
//         "date": "2018-07-18",
//         "hijri": "4-Dhul-Qadah-1439",
//         "salah": {
//             "fajr": "3:32 AM",
//             "sunrise": "5:34 AM",
//             "zuhr": "12:59 PM",
//             "asr": "6:09 PM",
//             "maghrib": "8:23 PM",
//             "sunset": "8:23 PM",
//             "isha": "10:01 PM"
//         },
//         "iqama": {
//             "fajr": "5:00 AM",
//             "zuhr": "1:30 PM",
//             "asr": "6:45 PM",
//             "maghrib": "8:26 PM",
//             "isha": "10:10 PM",
//             "jummah1": "1:30 PM",
//             "jummah2": "-"
//         }
//     },
//     "message": null
// }

const axios = require('axios')

exports.run = async () => {
    const date = new Date()
    const results = [
        {
            uuid4: "7d5464b4-d759-4306-a865-f7dbe6744146",
            crawlTime: date,
            name: "Islamic Foundation of Southwest Suburbs",
            url: "http://ifsws.org/",
            address: "23616 W Main St, Plainfield, IL 60544",
            geo: {
                latitude: 41.618267,
                longitude: -88.193512
            }
        }
    ]
    const response = await axios.get('https://masjidal.com/api/v1/time?masjid_id=3wdqjKbN')
    const data = response.data
    if (data.status == 'success') {
        results[0].fajrIqama =    data.data.iqama.fajr
        results[0].zuhrIqama =    data.data.iqama.zuhr
        results[0].asrIqama =     data.data.iqama.asr
        results[0].maghribIqama = data.data.iqama.maghrib
        results[0].ishaIqama =    data.data.iqama.isha
        results[0].juma1 =        data.data.iqama.jummah1
    }

    return results
}