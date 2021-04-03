alert("hello world");

function revealMessage() {
   document.getElementById('hiddenMessage').style.display = 'block';
}

function countDown() {
   var currentVal = document.getElementById("countDownButton").innerHTML;
   var newVal = currentVal - 1;
   document.getElementById("countDownButton").innerHTML = newVal;
}

function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}

document.getElementById("demo").innerHTML = 
"The full URL of this page is:<br>" + window.location.href;

function goBack() {
  window.history.back()
}
$( function() {
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 280, height: 185 } };
      }
 
      // Run the effect
      $( "#effect" ).show( selectedEffect, options, 500, callback );
    };
 
    //callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#effect:visible" ).removeAttr( "style" ).fadeOut();
      }, 1000 );
    };
 
    // Set effect from select menu value
    $( "#button" ).on( "click", function() {
      runEffect();
    });
 
    $( "#effect" ).hide();
  } );