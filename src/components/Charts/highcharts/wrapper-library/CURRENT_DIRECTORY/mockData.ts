import { formatISO } from 'date-fns';

let fetchedData = {
    values: [],
    count: 0,
}

const startDate = new Date(2021, 0, 0, 0, 0);
let currDate  = startDate;
const endDate = new Date(startDate);
endDate.setMonth(startDate.getMonth() + 6);
const endTime = endDate.getTime();
export const createValue = () => {
    let success = Math.floor(Math.random()*100);
    let blocked = Math.floor(Math.random()*100);
    let failed = Math.floor(Math.random()*100);
    let other = Math.floor(Math.random()*100);
    let total = success + blocked + failed + other;
    let bandwidth = Math.floor(Math.random()*6)*1000 + 8000;
    currDate.setTime(currDate.getTime() + (60*60*1000)); // 1h interval
    let timestamp = formatISO(currDate, { format: "extended", representation: "complete" });
    let index = timestamp.indexOf("+");
    timestamp = timestamp.substr(0, index) + "Z";
    let apiTimeMin = Math.floor(Math.random()*200)+Math.floor(Math.random()*50+15);
    let apiTimeMax = Math.floor(Math.random()*2000)+255;
    let apiTimeAvg = Math.floor(apiTimeMin + (apiTimeMax - apiTimeMin)/2);
    return {
        "timestamp": timestamp,
        "interval": "PT15M",
        "callCountSuccess": success,
        "callCountBlocked": blocked,
        "callCountFailed": failed,
        "callCountOther": other,
        "callCountTotal": total,
        "bandwidth": bandwidth,
        "cacheHitCount": 0,
        "cacheMissCount": 0,
        "valueCacheHitCount": 24,
        "valueCacheMissCount": 1,
        "apiTimeAvg": apiTimeAvg,
        "apiTimeMin": apiTimeMin,
        "apiTimeMax": apiTimeMax,
        "serviceTimeAvg": 1097.8274125,
        "serviceTimeMin": 6.6614,
        "serviceTimeMax": 2576.3307
    };
}

while (currDate.getTime() < endTime ) {
    fetchedData.values.push(createValue());
}
fetchedData.count = fetchedData.values.length;

export const mockFetchData = () => {
    return fetchedData;
}