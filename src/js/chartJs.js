
const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow',
      'PhotoShop'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100,80],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(229, 14, 236)'
      ],
      hoverOffset: 4
    }]
  };
  // </block:setup>
  
  // <block:config:0>
  const config = {
    type: 'pie',
    data: data,
  };
  // </block:config>
  
  module.exports = {
    actions: [],
    config: config,
  };

  var myChart = new Chart(
    document.getElementById('myChart'),
    config
  );