  // gloabl variables 
  var win = 0; 
  var loss = 0; 
 //  var finalTotal = ""; 
 //  var counter = 0; 
  var num1=0;
  var num2=0;
  var num3=0;
  var num4=0;
  var random = 0;
  var totalScore = 0; 
  
  
  
 
  // Speudo coding
   // random # at start of the game should be between 19 - 120. 
    // game with 4 crystals and random result 
    // each crystal needs to have random # 1-12 
    //  new  # should be gerated every time use win or loss  to those 4 crystals 
    //  when any crysal is clicked , it should be adding with previous result until toal score is met  until its = total score
    // if greater than random reasult we decrement a lost counter 
    // if it is not equal , then start over, if equal we increment  a win counter 
  $(document).ready(function() {
 
    
    var random = Math.floor(Math.random() * 101 + 19); 
         
    
    $("#randomNumber").text(random);   
     var num1 =  Math.floor(Math.random() *11+1);
     var num2 =  Math.floor(Math.random() *11+1);
     var num3 =  Math.floor(Math.random() *11+1);
     var num4 =  Math.floor(Math.random() *11+1);
  
      $("#numWin").text(win);
      
      $("#numLoss").text(loss);
 
      function reset() {
        var random = Math.floor(Math.random() * 101 + 19); 
        console.log(random); 
 
        $("#randomNumber").text(random);   
     var num1 =  Math.floor(Math.random() *11+1);
     var num2 =  Math.floor(Math.random() *11+1);
     var num3 =  Math.floor(Math.random() *11+1);
     var num4 =  Math.floor(Math.random() *11+1);
      
     totalScore=0; 
     $("#urTotalScore").text(totalScore); 
     }
 
     function userWins() {
       alert("You Win");
       // win ++ is same as win=+1 
       win++; 
       $("#numWin").text (win); 
       reset(); 
 
      }
 
     function userLose() {
       alert("You Lost");
       // win ++ is same as win=+1 
       loss++; 
       $("#numLoss").text (loss); 
       reset(); 
     }
     //============== 1ST crystal click ====// 
     
      $("#crystalOne").on ("click", function() {
       totalScore=totalScore + num1; 
       console.log("New userTotal="+ totalScore); 
       $("#urFinalScore").text(totalScore); 
 
       if (totalScore == random) {
         userWins();
       }
       else if (totalScore > random) {
         userLose();
 
       }
 
      })
 //============== 2nd crystal click ====// 
      $("#crystalTwo").on ("click", function() {
       totalScore=totalScore + num2; 
       console.log("New userTotal="+ totalScore); 
       $("#urFinalScore").text(totalScore); 
 
       if (totalScore == random) {
         userWins();
       }
       else if (totalScore > random) {
         userLose();
         
       }
 
      })
 
      //============== 3nd crystal click ====// 
      $("#crystalTree").on ("click", function() {
       totalScore=totalScore + num3; 
       console.log("New userTotal="+ totalScore); 
       $("#urFinalScore").text(totalScore); 
 
       if (totalScore == random) {
         userWins();
       }
       else if (totalScore > random) {
         userLose();
         
       }
 
      })
 
      //============== 4th crystal click ====// 
      $("#crystalFor").on ("click", function() {
       totalScore=totalScore + num4; 
       console.log("New userTotal="+ totalScore); 
       $("#urFinalScore").text(totalScore); 
 
       if (totalScore == random) {
         userWins();
       }
       else if (totalScore > random) {
         userLose();
         
       }
 
      })
   
      
     }); 