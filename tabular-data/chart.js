const xlabels = []
const ytemps = []
const yNtemps = []
const yStemps = []

nasaTempChart()
async function nasaTempChart() {
  await globalTempChangeFromMean()
  await hemisphereMeans('NH.csv')
  await hemisphereMeans('SH.csv')
  const ctx = document.getElementById('chart').getContext('2d');
  const myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: xlabels,
          datasets: [{
              label: 'Combined Land-Surface Air and Sea-Surface Water Temperature in C°',
              data: ytemps,
              backgroundColor:
                  'rgba(255, 206, 86, 0.2)',
              borderColor:
                  'rgba(53, 60, 227, 1)',
              borderWidth: 1,
              fill: false
          },
          {
              label: 'Northern Hemisphere Combined Land-Surface Air and Sea-Surface Water Temperature in C°',
              data: yNtemps,
              backgroundColor:
                  'rgba(255, 206, 86, 0.2)',
              borderColor:
                  'rgba(53, 217, 227, 1)',
              borderWidth: 1,
              fill: false
          },
          {
              label: 'Southern Hemisphere Combined Land-Surface Air and Sea-Surface Water Temperature in C°',
              data: yStemps,
              backgroundColor:
                  'rgba(255, 206, 86, 0.2)',
              borderColor:
                  'rgba(223, 53, 227, 1)',
              borderWidth: 1,
              fill: false
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: false,
                      callback: function(value, index, values) {
                        return value + '°'
                      }
                  }
              }]
          }
      }
  });
}
