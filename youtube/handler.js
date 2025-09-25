/**
 * Generate channelToTrack.json from https://github.com/TaiwanVtuberData/TaiwanVTuberTrackingDataJson/blob/master/api/v2/all/vtubers/all.json
 */
const fs = require('fs')
const list = require('./list.json')
const newList = []
list.VTubers.forEach(vtuber => {
    if (vtuber.YouTube) {
        newList.push({
            id: vtuber.YouTube?.id,
            key: vtuber.name,
            active: vtuber.activity === 'active' ? true : false
        })
    }
})

fs.writeFileSync('./channelToTrack.json', JSON.stringify(newList, null, 4))