async function calculateROAS() {
    const revenue = document.getElementById('revenue').value;
    const adSpend = document.getElementById('ad-spend').value;

    const roas = (revenue / adSpend) * 100;
    const roasText = roas.toFixed(2) + "%";

    document.getElementById('roas').innerText = roasText;

    const data = [
      {
        x: ['Revenue', 'Ad Spend'],
        y: [revenue, adSpend],
        type: 'bar',
        marker: {
          color: ['rgb(33, 75, 99)', 'rgb(210, 37, 37)']
        }
      }
    ];

    const layout = {
      title: 'Revenue vs Ad Spend',
      xaxis: { title: 'Metrics' },
      yaxis: { title: 'Amount' }
    };

    Plotly.newPlot('plot', data, layout);
  }

  // Add event listeners to update the graph in real-time
  const revenueInput = document.getElementById('revenue');
  const adSpendInput = document.getElementById('ad-spend');

  revenueInput.addEventListener('input', calculateROAS);
  adSpendInput.addEventListener('input', calculateROAS);