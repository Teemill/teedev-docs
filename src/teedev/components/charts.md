# Charts

Charts are used to display data.

<teedev-charts-TChart
  id="swag"
  :labels="[
    '12am-3am', '3am-6am', '6am-9am', '9am-12pm',
    '12pm-3pm', '3pm-6pm', '6pm-9pm', '9pm-12am'
  ]"
  title="Data"
  :datasets="[
    {
        name: 'Some Data', chartType: 'line',
        values: [25, 40, 30, 35, 8, 52, 17, 4]
    },
    {
        name: 'Another Set', chartType: 'line',
        values: [25, 50, 10, 15, 18, 32, 27, 14]
    },
    {
        name: 'Final Set', chartType: 'line',
        values: [14, 33, 10, 8, 23, 31, 27, 2]
    },
  ]"
/>