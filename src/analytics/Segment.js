export const getSegmentData = (label) => {
    const platform = {
        headers: {
            'Accept': 'text/plain',
            'Content-Type': 'application/json',
            'Authorization': 'Basic NQVAvJBVrPHQkvftQpF31GRWI14Kiflr'
        },
        url: "https://api.segment.io/v1/track"
    };
    const data = {
        'event': `Routed to ${label}`,
        'properties': {
          'token': '95c8fbd3f23ce83d9c7b2549f91fbfae'
        }
    };
    return {
        platform, 
        events: [JSON.stringify(data)]
    };
};