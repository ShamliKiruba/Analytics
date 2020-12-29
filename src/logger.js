
// const fetch = require("node-fetch");

const makeAPI = ({url, headers, data}) => {
    return fetch(url, {
        method: 'POST',
        headers: headers,
        body: data
    });

    // return fetch("https://api.mixpanel.com/track#live-event", {
    //     "method": "POST",
    //     "headers": {
    //         "Accept": "text/plain",
    //         "Content-Type": "application/x-www-form-urlencoded"
    //     },
    //     "body": {
    //         "data": "{\n  \"event\": \"Route changed\",\n  \"properties\": {\n    \"token\": \"95c8fbd3f23ce83d9c7b2549f91fbfae\"\n  }\n}\n"
    //     }
    // });
};

export const logEvents = (payload) => {
    let promises = [];
    for(let j=0; j < payload.length;j++) {
        let temp = payload[j];
        for(let i=0; i < temp.events.length;i++) {
            let event = temp.events[i];
            promises.push(new Promise((resolve, reject) => {
                makeAPI({
                    url: temp.platform.url,
                    headers: temp.platform.headers,
                    data: event
                }).then(result => {
                    resolve(result);
                })
                .catch(error => {
                    reject(error);
                });;
            }));
        }
    }
    return Promise.all(promises);
};