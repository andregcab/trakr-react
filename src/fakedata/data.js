const CURRENT_USER = {
  id: 1,
  name: "Shrek Onion",
  email: "greenboi@swamp.com",
  uuid: "123JUANSAIDSO",
};

const CURRENT_USER_SESSIONS = [
  {
    id: 1,
    user_id: 1,
    activity_id: 1,
    created_at: new Date("2021-10-10T03:05:00").toLocaleString(),
    last_started: null,
    elapsed_time: null,
    in_session: false,
    comment: "1st session",
    activities: [
      {
        id: 1,
        activity_type: "BILLABLE",
        eng_name: "DEVTECH",
        charge_code: "FLOW",
        client_name: "button feature",
        client_number: "99999",
        comment: "flow button feature",
      },
    ],
  },
  {
    id: 1,
    user_id: 1,
    activity_id: 2,
    created_at: new Date("2021-10-10T03:10:00").toLocaleString(),
    last_started: null,
    elapsed_time: null,
    in_session: false,
    comment: "2nd session",
    activities: [
      {
        id: 1,
        activity_type: "PERSONAL",
        eng_name: null,
        charge_code: null,
        client_name: "poop time",
        client_number: null,
        comment: "dime company time",
      },
    ],
  },
];

export { CURRENT_USER, CURRENT_USER_SESSIONS };
