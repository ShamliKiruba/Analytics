import { getMixpanelData } from './analytics/Mixpanel';
import { getSegmentData } from './analytics/Segment';
import { logEvents } from './logger';

const log = (label) => {
    let asd = [getMixpanelData(label),
        getSegmentData(label)
    ];
    console.log('asd', asd);
    logEvents(asd);
};

export const changeRoute = (route, label) => {
    window.location.href = `#/${route}`
    log(label);
};
