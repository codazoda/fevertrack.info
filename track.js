google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

var data = {
    'default': [
        ['Timestamp', 'Temperature', 'High Fever', 'Low Fever'],
    ]
};

function drawChart() {
    var chartData = google.visualization.arrayToDataTable(
        data.default
    );

    var options = {
        title: 'Temperature',
        legend: 'none'
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart'));

    chart.draw(chartData, options);
}

function addTemp(temp) {
    timeInSeconds = Math.floor(Date.now() / 1000);
    data.default.push([monthDay(), temp, 103, 99.5]);
}

function monthDay() {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    newdate = month + "/" + day;
    return newdate;
}

/* TODO: Only for testing */
function randomByte() {
    var buf = new Uint8Array(1);
    window.crypto.getRandomValues(buf);
    return buf[0];
}

function addClick() {
    var temperature = document.getElementById('temperature');
    if (parseFloat(temperature.value) > 0) {
        addTemp(parseFloat(temperature.value));
        drawChart();
    } else {
        alert("You must enter a temperature value.");
    }
    temperature.value = '';
    saveToLocalStorage();
}

function saveToLocalStorage() {
    localStorage.setItem("data", JSON.stringify(data));
}

function loadFromLocalStorage() {
    loaded = localStorage.getItem("data");
    if (loaded !== null) {
        data = JSON.parse(loaded);
    }
}

var addButton = document.getElementById('add');
addButton.addEventListener('click', function() {
    addClick();
}, false);

loadFromLocalStorage();
