$(function () {
    $('#container').highcharts({
        chart: {
            type: 'pie'
        },
        
        plotOptions: {
            pie: {
                borderColor: '#000000'
            }
        },
        
        series: [{
            data: [
                ['Firefox',   44.2],
                ['IE7',       26.6],
                ['IE6',       20],
                ['Chrome',    3.1],
                ['Other',    5.4]
            ]
        }]
    });
});