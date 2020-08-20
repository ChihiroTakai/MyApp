
// 入力値取得
var inputInfo = addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
        var mon = document.getElementById('mon').value;
        var tue = document.getElementById('tue').value;
        var wed = document.getElementById('wed').value;
        var thu = document.getElementById('thu').value;
        var fri = document.getElementById('fri').value;
        var sat = document.getElementById('sat').value;
        var sun = document.getElementById('sun').value;
        
        updatechart(mon, tue, wed, thu, fri, sat, sun);
    }, false);
}, false);



//
// chart.js
//
function updatechart(mon, tue, wed, thu, fri, sat, sun) {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['月', '火', '水', '木', '金', '土', '日'],
            datasets: [{
                label: '運動時間',
                data: [mon, tue, wed, thu, fri, sat, sun],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    
};
