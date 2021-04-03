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
