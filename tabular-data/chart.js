const xlabels = []
const ytemps = []

nasaTempChart()
async function nasaTempChart() {
  await globalTempChangeFromMean()
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
