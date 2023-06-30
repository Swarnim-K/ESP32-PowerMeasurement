$(document).ready(function(){
    
    setInterval(() => {
        $('#voltage').each(function(i, elem){
            drawVoltage(elem);
        });

        $('#current').each(function(i, elem){
          drawCurrent(elem);
        });

        $('#power').each(function(i, elem){
          drawPower(elem);
        });
    }, 1000);

    function drawVoltage(bar) {
        innerWidth = $(bar).parent().width();
        const voltage = $(bar).attr('data-percentage') - ((Math.random() * 5).toFixed(2));

        const voltageElement = document.getElementById('voltage');
        voltageElement.setAttribute('data-visible', voltage);


        const maxValue = $(bar).attr('data-max');
        var percentage = voltage * innerWidth / maxValue;
        $(bar).animate({'width': percentage}, 'fast');
    }

    function drawCurrent(bar) {
        innerWidth = $(bar).parent().width();
        const current = $(bar).attr('data-percentage');

        const currentElement = document.getElementById('current');
        currentElement.setAttribute('data-visible', current);

        const maxValue = $(bar).attr('data-max');
        var percentage = current * innerWidth / maxValue;
        $(bar).animate({'width': percentage}, 'fast');
    }

    function drawPower(bar) {
        innerWidth = $(bar).parent().width();
        const power = $(bar).attr('data-percentage') - ((Math.random() * 10).toFixed(2));

        const powerElement = document.getElementById('power');
        powerElement.setAttribute('data-visible', power);

        const maxValue = $(bar).attr('data-max');
        var percentage = power * innerWidth / maxValue;
        $(bar).animate({'width': percentage}, 'fast');
    }
    
});

