const stateWithEntries = {
  addEntry: {
    panelIsOpen: false
  },
  entries: [
    {
      id: "885d9f50-2816-11ea-a30f-effe9dfc23cd",
      entryType: "type-counter",
      startsOn: {
        formatValue: "2019-12-26",
        rawValue: "Thu Dec 26 2019 14:33:01 GMT-0500 (Eastern Standard Time)"
      },
      countsDownTo: {
        formatValue: "2019-12-26",
        rawValue: "Thu Dec 26 2019 14:33:01 GMT-0500 (Eastern Standard Time)"
      },
      description: "",
      createdOn: "Thu Dec 26 2019 14:33:03 GMT-0500 (Eastern Standard Time)",
      new: true
    },
    {
      id: "0f016550-2817-11ea-bb40-230cca6aa208",
      entryType: "type-countdown",
      startsOn: {
        formatValue: "2020-02-22",
        rawValue: "Sat Feb 22 2020 00:00:00 GMT-0500 (Eastern Standard Time)"
      },
      countsDownTo: {
        formatValue: "2020-02-22",
        rawValue: "Sat Feb 22 2020 00:00:00 GMT-0500 (Eastern Standard Time)"
      },
      description: "Mía will be born! 😍",
      createdOn: "Thu Dec 26 2019 14:36:48 GMT-0500 (Eastern Standard Time)",
      new: true
    },
    {
      id: "dabd8ec0-281d-11ea-81ef-e7627c5dc60a",
      entryType: "type-countdown",
      startsOn: {
        formatValue: "2019-12-31",
        rawValue: "Tue Dec 31 2019 00:00:00 GMT-0500 (Eastern Standard Time)"
      },
      countsDownTo: {
        formatValue: "2019-12-31",
        rawValue: "Tue Dec 31 2019 00:00:00 GMT-0500 (Eastern Standard Time)"
      },
      description: "NYE Celebrations! 🎉",
      createdOn: "Thu Dec 26 2019 15:25:27 GMT-0500 (Eastern Standard Time)",
      new: true
    }
  ]
};

const initialState = {
  addEntry: {
    panelIsOpen: true,
    checked: `type-counter`,
    description: null
  },
  entries: []
};

export default stateWithEntries;
