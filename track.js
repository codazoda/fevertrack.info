google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Timestamp', 'Temperature', 'High Fever', 'Low Fever'],
          ['2004',  98,   103, 101],
          ['2005',  98.7, 103, 101],
          ['2006',  99.1, 103, 101],
          ['2007',  98.7, 103, 101]
        ]);

        var options = {
          title: 'Temperature',
          legend: 'none'
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }