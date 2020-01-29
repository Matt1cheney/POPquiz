

 //start quiz
let startBtn = false;
console.log(startBtn);
let clickit = $("#start").on("click",function(e){
  startBtn=true;
  console.log(startBtn);
});
function currentQuestion(questionList) {
  for (j = 0; j < questionList.length; j++) {
    let thisQuestion= questionList[j];
    $("#question").text(thisQuestion.question);
    for (i = 0; i < 4; i++) {
      //$("#choices").empty();
      $(choices).append(
        $("<ul>")
          .addClass("btn btn-success")
          .text(JSON.stringify(thisQuestion.choices[i]))
      );
    }

    //if (question) {
      //questionStart++;
      //console.log(questionStart);
     // $(question).filter();
    
    while (thisQuestion.answered != true) {
      $(".btn-success").on("click", function(e) {
        $("#choices").empty();
        console.log("got in");
        thisQuestion.answered = true;
      });
      
    }
  }
}

  
  

    var counter = 100;
    let countDown = setInterval(function () {
      console.log(counter);
     counter--
     if (counter === 0) {
      console.log("you lose!");
        clearInterval(countDown);
      }
   }, 1000);
//   console.log('im here')
    //   //for (j = 0; j < questionList.length; j++) {
    //     let thisQuestion= questionList[j];
    //     $("#question").text(thisQuestion.question);
    //   //}
    // }

    // let optionGroup= questionList.options;
    // function currentQuestion(questionList) {
    //   $("#question").text(questionList.question);
    //   for (i=0; i<4; i++){
    //     //thisQuest= optionGroup[i];
    //     console.log(options);
    //   $(choices).append("<ul>").text(JSON.stringify(thisQuest.optionGroup));



    //   }


    // }
    // function showQuestion(shownQuestion){
    //   shownQuestion = questionList.options;
    //   $("#question").text(question);
    //   $(choices).append(
    //     $("<ul>")
    //       .addClass("btn btn-success")
    //       .text(JSON.stringify(questionList.options[1]))
    //   );

    // }

    // function nextquestion(thisQuestion){
    //   thisQuestion = questionList.question;
    // }
    // console.log(questionList[2])
    // function currentQuestion(questionList) {
    //   $(questions).text(questionList.question);
    //   for (i = 0; i < 4; i++) {
        
    //     $(choices).append(
    //       $("<ul>")
    //         .addClass("btn btn-success")
    //         .text(JSON.stringify(questionList.options[i]))
    //         );

            
    //           $(".btn-success").on("click", function(e) {
    //         $("#choices").replaceWith(questionList[1]);
    //         answered= true;
    //         console.log(questionList);
    //           });
              
          
            
    //   }
    // }
    