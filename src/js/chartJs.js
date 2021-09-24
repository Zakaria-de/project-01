 

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
        '#ff8d00',
        '#0057fff7',
        '#f9ff1bf7',
        '#51a9c5f7'
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