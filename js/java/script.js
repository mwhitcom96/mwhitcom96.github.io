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
    var spinner = $( "#spinner" ).spinner();
 
    $( "#disable" ).on( "click", function() {
      if ( spinner.spinner( "option", "disabled" ) ) {
        spinner.spinner( "enable" );
      } else {
        spinner.spinner( "disable" );
      }
    });
    $( "#destroy" ).on( "click", function() {
      if ( spinner.spinner( "instance" ) ) {
        spinner.spinner( "destroy" );
      } else {
        spinner.spinner();
      }
    });
    $( "#getvalue" ).on( "click", function() {
      alert( spinner.spinner( "value" ) );
    });
    $( "#setvalue" ).on( "click", function() {
      spinner.spinner( "value", 5 );
    });
 
    $( "button" ).button();
  } );
  $( function() {
    $( "#tabs" ).tabs();
  } );
  