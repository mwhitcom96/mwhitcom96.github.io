function revealMessage() {
   document.getElementById('hiddenMessage').style.display = 'block';
}

var count =(function () {
   var counter = 0;
   return function () {return counter +=1;}
})

function displaycount() {
   document.getElementById("carrier").innerHTML = count();
}
