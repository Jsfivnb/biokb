window.BioKB = window.BioKB || {};

(function(App) {
  App.charts = {
    init: function() {
      Chart.defaults.color = '#8899aa';
      Chart.defaults.borderColor = 'rgba(255,255,255,0.04)';
      Chart.defaults.font.family = "'Inter', sans-serif";
      Chart.defaults.font.size = 11;

      var cd = App.chartData;
      var ctx1, ctx2, g1, g2;

      ctx1 = document.createElement('canvas').getContext('2d');
      g1 = ctx1.createLinearGradient(0, 0, 0, 400);
      g1.addColorStop(0, 'rgba(0, 255, 136, 0.3)');
      g1.addColorStop(1, 'rgba(0, 255, 136, 0.0)');

      ctx2 = document.createElement('canvas').getContext('2d');
      g2 = ctx2.createLinearGradient(0, 0, 0, 400);
      g2.addColorStop(0, 'rgba(0, 212, 255, 0.25)');
      g2.addColorStop(1, 'rgba(0, 212, 255, 0.0)');

      App.state.chartTrend = new Chart(document.getElementById('chartTrend'), {
        type: 'line',
        data: {
          labels: cd.labels,
          datasets: [{
            label: '\u7814\u7A76\u6D3B\u52A8',
            data: cd.researchActivity,
            borderColor: '#00ff88',
            backgroundColor: g1,
            borderWidth: 2.5,
            fill: true,
            tension: 0.4,
            pointRadius: 3,
            pointHoverRadius: 7,
            pointBackgroundColor: '#00ff88',
            pointBorderColor: '#060b14',
            pointBorderWidth: 2,
            pointHoverBackgroundColor: '#fff',
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { intersect: false, mode: 'index' },
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(12,20,40,0.95)',
              titleColor: '#e2e8f0',
              bodyColor: '#00ff88',
              borderColor: 'rgba(0,255,136,0.3)',
              borderWidth: 1,
              padding: 12,
              cornerRadius: 8,
              displayColors: false,
            }
          },
          scales: {
            x: { grid: { display: false }, ticks: { color: '#5a6a7a' } },
            y: {
              grid: { color: 'rgba(255,255,255,0.03)' },
              ticks: { color: '#5a6a7a', callback: function(v) { return v >= 1000 ? (v/1000).toFixed(1)+'k' : v; } }
            }
          }
        }
      });

      App.state.chartExpression = new Chart(document.getElementById('chartExpression'), {
        type: 'line',
        data: {
          labels: cd.labels,
          datasets: [
            {
              label: 'BRCA1',
              data: cd.geneExpressionTPM,
              borderColor: '#00d4ff',
              backgroundColor: g2,
              borderWidth: 2.5,
              fill: true,
              tension: 0.4,
              pointRadius: 3,
              pointHoverRadius: 7,
              pointBackgroundColor: '#00d4ff',
              pointBorderColor: '#060b14',
              pointBorderWidth: 2,
              pointHoverBackgroundColor: '#fff',
            },
            {
              label: 'TP53',
              data: cd.geneExpressionTPM2,
              borderColor: '#a855f7',
              borderWidth: 2.5,
              fill: false,
              tension: 0.4,
              pointRadius: 3,
              pointHoverRadius: 7,
              pointBackgroundColor: '#a855f7',
              pointBorderColor: '#060b14',
              pointBorderWidth: 2,
              pointHoverBackgroundColor: '#fff',
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { intersect: false, mode: 'index' },
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(12,20,40,0.95)',
              titleColor: '#e2e8f0',
              borderColor: 'rgba(0,212,255,0.3)',
              borderWidth: 1,
              padding: 12,
              cornerRadius: 8,
              displayColors: true,
              boxPadding: 3,
            }
          },
          scales: {
            x: { grid: { display: false }, ticks: { color: '#5a6a7a' } },
            y: {
              grid: { color: 'rgba(255,255,255,0.03)' },
              ticks: { color: '#5a6a7a', callback: function(v) { return v + ' TPM'; } }
            }
          }
        }
      });
    },
  };
})(window.BioKB);
