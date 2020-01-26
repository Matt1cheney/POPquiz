

 //start quiz
let startBtn = false;
console.log(startBtn);
let clickit = $("#start").on("click",function(e){
  startBtn=true;
  console.log(startBtn);
});


  
  

    var counter = 100;
    let countDown = setInterval(function () {
      console.log(counter);
     counter--
     if (counter === 0) {
      console.log("you lose!");
        clearInterval(countDown);
      }
   }, 1000);
