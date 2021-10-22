const apiData = [
  {
    id: '1',
    name: 'Home'
  },
  {
    id: '2',
    name: 'Alerts',
    children: [
      {
        id: '3',
        name: 'Usage and Examples'
      },
      {
        id: '4',
        name: 'Alert'
      },
      {
        id: '5',
        name: 'Warning Alert'
      },
    ]
  },
  {
    id: '6',
    name: 'Buttons',
    children: [
      {
        id: '7',
        name: 'Usage and Examples'
      },
      {
        id: '8',
        name: 'Button'
      },
      {
        id: '9',
        name: 'Button Group'
      },
    ]
  },
  {
    id: '10',
    name: 'Forms',
    children: [
      {
        id: '11',
        name: 'Usage and Examples'
      },
      {
        id: '12',
        name: 'Inputs',
        children: [
          {
            id: '13',
            name: 'Credit Card Input'
          },
          {
            id: '14',
            name: 'Number Input'
          },
        ]
      },
      {
        id: '15',
        name: 'Selectors',
        children: [
          {
            id: '16',
            name: 'Checkbox'
          },
          {
            id: '17',
            name: 'Date Picker'
          },
          {
            id: '18',
            name: 'Radio'
          },
        ]
      },
    ]
  },
]

export function fetchData() {
  return new Promise(resolve => {
    setTimeout(resolve, 100, apiData);
  });
}
