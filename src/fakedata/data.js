const CURRENT_USER = {
  id: 1,
  name: 'Shrek Onion',
  email: 'greenboi@swamp.com',
  uuid: '123JUANSAIDSO',
};

const CURRENT_USER_SESSIONS = [
  {
    id: '1',
    userId: 1,
    createdAt: new Date('2021-10-10').toLocaleDateString(),
    lastStarted: null,
    elapsedTime: 120,
    inSession: false,
    comment: '1st session',
    activities: [
      {
        id: '1',
        activityType: 'BILLABLE',
        engName: 'DEVCH asasdfasdfa',
        chargeCode: 'Flow sadfasfasdfasd',
        clientName: 'non-sasdfasd asdfasdf asdfa sdfasdfasdf asdfasdf',
        clientNumber: '999999000',
        comment: 'flow button feature',
      },
      {
        id: '2',
        activityType: 'BILLABLE',
        engName: 'DEVTECH dfg asdfasd',
        chargeCode: 'Flow asdfasdasdf',
        clientName: 'anllable asdfasdfasdf ',
        clientNumber: '999999000',
        comment: 'utton feature',
      },
      {
        id: '3',
        activityType: 'BILLABLE',
        engName: 'DEVTECH dsdafdas',
        chargeCode: 'Flow asdfasdfasdf',
        clientName: 'non-billable asdfsad ',
        clientNumber: '999999000',
        comment: 'flow buttofghjfg fgjfg jgh fghjfghjfgh fghjfgh fghjfghjfghj n feature',
      },
    ],
  },
  {
    id: ' 1',
    userId: 1,
    createdAt: new Date('2021-10-10').toLocaleDateString(),
    lastStarted: null,
    elapsedTime: 200,
    inSession: false,
    comment: '2nd session',
    activities: [
      {
        id: '1',
        activityType: 'PERSONAL',
        engName: null,
        chargeCode: null,
        clientName:
          'cleaned asdfasd asdf asdf asd fas dfas df asdf asdfgsdfgsfd sdfgsd fas df asf as df asd fmy desk',
        clientNumber: null,
        comment: 'it was pretty dusty',
      },
    ],
  },
];

export { CURRENT_USER, CURRENT_USER_SESSIONS };
