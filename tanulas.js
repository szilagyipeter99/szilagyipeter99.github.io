var delay = 300;
$(".progress-bar").each(function(i) {
  $(this).delay(delay * i).animate({
    width: $(this).attr('aria-valuenow') + '%'
  }, delay);

  $(this).prop('Counter', 0).animate({
    Counter: $(this).text()
  }, {
    duration: delay,
    easing: 'swing',
    step: function(now) {
      $(this).text('');
    }
  });
});

var pipalva1 = 0;
var pipalva2 = 0;
var pipalva3 = 0;
var pipalva4 = 0;

function pipalt(x, y) {
  if (x == 1) {
    if ($("#pipa" + x + "" + y).is(':checked')) {
      pipalva1 += 1;
    } else {
      pipalva1 -= 1;
    }
    $("#szazalek1").html(Math.round(pipalva1 / 3 * 100) + "%");
    $("#progressbar1").width(Math.round(pipalva1 / 3 * 100) + "%");
    $("#progressbar1").css("background-color", function() {
      var percentage = Math.round(pipalva1 / 3 * 100);
      console.log(percentage);
      if (percentage > 0 && percentage < 25) {
        return '#d9534f';
      } else if (percentage > 24 && percentage < 50) {
        return '#e5804f';
      } else if (percentage > 49 && percentage < 75) {
        return '#f0ad4e';
      } else if (percentage > 74 && percentage < 90) {
        return '#a0b356';
      } else if (percentage > 89 && percentage <= 100) {
        return '#5cb85c';
      }
    });



  }


}



$('#progressbar1').css('background-color', function() {
  var percentage = Math.round(pipalva1 / 3 * 100);
  console.log(percentage);
  if (percentage > 0 && percentage < 25) {
    return '#a41818 !important'
  } else if (percentage > 24 && percentage < 50) {
    return '#87581c !important';
  } else if (percentage > 49 && percentage < 75) {
    return '#997815 !important';
  } else if (percentage > 74 && percentage < 90) {
    return '#7ba01c !important';
  } else if (percentage > 89 && percentage <= 100) {
    return '#3a8d24 !important';
  }
});
