const URLSearchParams = require('url').Url;

export const getMixpanelData = (label) => {
    const platform = {
        headers: {
            'Accept': 'text/plain',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        url: "https://api.mixpanel.com/track#live-event"
    };
    
    // const encodedParams = new URLSearchParams();
    // encodedParams.set('data', JSON.stringify({
    //     'event': `Routed to ${label}`,
    //     'properties': {
    //       'token': '95c8fbd3f23ce83d9c7b2549f91fbfae'
    //     }
    // }));
    return {
        platform, 
        events: [{
            "data": "{\n  \"event\": \"aaa\",\n  \"properties\": {\n    \"token\": \"YOUR_PROJECT_TOKEN\"\n  }\n}\n"
          }]
    };
};