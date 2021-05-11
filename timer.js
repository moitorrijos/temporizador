// Set the date we're counting down to
var countDownDate = new Date("May 13, 2021 19:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  console.log(distance < 0 ? "yes" : "no" );
  
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if ( days < 10 ) days = "0" + days;
  if ( hours < 10 ) hours = "0" + hours;
  if ( minutes < 10 ) minutes = "0" + minutes;
  if ( seconds < 10 ) seconds = "0" + seconds;

  var ddays = document.getElementById("days");
  var dhours = document.getElementById("hours");
  var dminutes = document.getElementById("minutes");
  var dseconds = document.getElementById("seconds");

  ddays.innerHTML = days;
  dhours.innerHTML = hours;
  dminutes.innerHTML = minutes;
  dseconds.innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Empezaremos muy pronto!";
  }
}, 1000);
