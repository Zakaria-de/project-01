 

const data = {
    labels: [
      'Illustrator',
      'AdobePremium',
      'InDesign',
      'PhotoShop'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [200, 50, 100,180],
      backgroundColor: [
        'rgb(0, 0, 0)',
        'rgb(255, 0, 0)',
        'rgb(255, 255, 255)',
        'rgb(0, 0, 255)'
      ],
      hoverOffset: 4
    }]
  };
  // </block:setup>
  
  // <block:config:0>
  const config = {
    type: 'doughnut',
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