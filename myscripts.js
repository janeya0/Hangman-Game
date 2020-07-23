var randomnumber = Math.floor(15*Math.random());
var words = new Array(15);
words[0]= "cougar"
words[1]= "poutine"
words[2]= "keyboard"
words[3]= "penguin"
words[4]= "monkey"
words[5]= "curtain"
words[6]= "education"
words[7]= "computers"
words[8]= "thursday"
words[9]= "festival"
words[10]= "zebra"
words[11]= "poland"
words[12]= "closure"
words[13]= "document"
words[14]= "certify"
var word = words[randomnumber]

var final = "";
var space = " ";
var Charactercode;
var i = -1;
var sum=10;

var correctSum=0;
var wrongSum=0;
var percent;


function otherFunction(){
while (i < word.length) {
       i++;
       Charactercode = word.charCodeAt(i);
       if (Charactercode >= 97 && Charactercode <= 122) {
         final = final + "-"
         }
       else {
         final = final + space
         }

       }
       document.getElementById("FINAL").innerHTML = final
       document.getElementById("word").innerHTML = word
}

      function myFunction() {
       for(x=1;x<=26;x++){
           var btn = document.createElement("button");
           var myP = document.createElement("br");

           var letter = String.fromCharCode(x+96);
           var t = document.createTextNode(letter);

           btn.appendChild(t);
           btn.id = letter;
           btn.addEventListener("click", checkLetter);
           document.body.appendChild(btn);
           if (x%13==0) {
             document.body.appendChild(myP);
         }
           }
       }

      function nameIntro(){
        var name= document.getElementById("name").value;
        document.getElementById("namePlace").innerHTML="Hello "+ name+ "! Welcome to this interactive Hangman game!<br>Click 'Start guessing' to begin the game, and 'Go to Home' will take you back to the home page.<br>While you're here, feel free to browse our website using the menu, and discover more!<br>Leave a comment and give us feedback on our 'Other' page for any questions or concerns.<br> So what are you waiting for "+name+"? Scroll down and start playing!";
      }

       function checkLetter(){
         var newword = "";
         document.getElementById("p1").innerHTML += this.id;
         var finalword = document.getElementById("word").innerHTML;
         var dashes = document.getElementById("FINAL").innerHTML;
         var guess=this.id;

         var i = " ";
         var index = finalword.indexOf(guess);

         if(finalword.includes(this.id)){

         for (i=0; i<finalword.length; i++) {

           if(finalword.charAt(i) == this.id) {
             newword += finalword.charAt(i);
             correctSum = correctSum +1;

             //alert(correctSum);
           }
            else {
             newword += dashes.charAt(i);
           }
           }
           dashes = newword;
           document.getElementById("FINAL").innerHTML = dashes;
         }
         else {
           alert("Nice try, guess again!");
           sum = sum -1;
           heart(sum);
           document.getElementById("sumId").innerHTML=sum;
           wrongSum = wrongSum +1;
           //alert(wrongSum);
         }
         if (sum==0) {
           percent = "You got "+Math.round((correctSum/(correctSum+wrongSum))*100) + "% of your guesses correct";
           document.getElementById("percent").innerHTML=percent;
           document.getElementById("gameOver").innerHTML="GAME OVER";
           document.getElementById("realWord").innerHTML = " The word was " + "'"+word+"'";
           document.getElementById("restart").innerHTML="Click to Restart";

         }
         if (dashes==word) {
          document.getElementById("win").innerHTML="You won!";
          percent = "You got "+Math.round((correctSum/(correctSum+wrongSum))*100) + "% of your guesses correct.";
          document.getElementById("percent").innerHTML=percent;
         }
    }

    var image=" "
    var l9 = "heart2.png"
    var l8 = "heart3.png"
    var l7 = "heart4.png"
    var l6 = "heart5.png"
    var l5 = "heart6.png"
    var l4 = "heart7.png"
    var l3 = "heart8.png"
    var l2 = "heart9.png"
    var l1 = "heartx.png"
    var dead = "heart.png"

    function heart(sum){
        if (sum==9){
          image=l9
          document.getElementById("image").src=image;
        }
        else if(sum==8){
          image=l8
          document.getElementById("image").src=image;
        }
        else if(sum==7){
          image=l7
          document.getElementById("image").src=image;
        }
        else if(sum==6){
          image=l6
          document.getElementById("image").src=image;
        }
        else if(sum==5){
          image=l5
          document.getElementById("image").src=image;
        }
        else if(sum==4){
          image=l4
          document.getElementById("image").src=image;
        }
        else if(sum==3){
          image=l3
          document.getElementById("image").src=image;
        }
        else if(sum==2){
          image=l2
          document.getElementById("image").src=image;
        }
        else if(sum==1){
          image=l1
          document.getElementById("image").src=image;
        }
        else if(sum==0){
          image=dead
          document.getElementById("image").src=image;
        }

}
