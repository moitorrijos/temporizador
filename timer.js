// Set the date we're counting down to
var countDownDate = new Date("Dec 14, 2020 19:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  console.log(distance < 0 ? "yes" : "no" );
  
  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if ( hours < 10 ) hourse = "0" + hours;
  if ( minutes < 10 ) minutese = "0" + minutes;
  if ( seconds < 10 ) seconds = "0" + seconds;

  // Display the result in the element with id="timer"
  document.getElementById("timer").innerHTML = hours + ":"
  + minutes + ":" + seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Empezaremos muy pronto!";
  }
}, 1000);