function main() {
      // Set the date we're counting down to
      var countDownDate = new Date("Aug 8, 2018 08:00:00").getTime();

      // Update the count down every 1 second
      var x = setInterval(function() {
            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now an the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in an element with id="counter"
            document.getElementById("counter").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;

            // If the count down is over, write some text
            if (distance < 0) {
                  clearInterval(x);
                  document.getElementById("counter").innerHTML = "KABOOM";
            }

      }, 1000); /* END var x = setInterval */

      // Dismantling bomb
      document.getElementById('dismantle').onclick = function() {
            dismantling();
      }

      function dismantling() {
            clearInterval(x);
            document.getElementById("counter").style.color = "green";
            document.getElementById("counter").style.textShadow = "0 0 1vw green";
      }

      // Exploding bomb
      document.getElementById('kaboom1').onclick = function() {
            exploding();
      }
      document.getElementById('kaboom2').onclick = function() {
            exploding();
      }
      document.getElementById('kaboom3').onclick = function() {
            exploding();
      }

      function exploding() {
            clearInterval(x);
            document.getElementById("counter").innerHTML = "KABOOM";
      }


} /* END Function main */

window.onload = function() {
       main();
}
