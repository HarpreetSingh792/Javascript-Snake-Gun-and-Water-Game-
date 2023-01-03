alert("******Welcome to the Snake 🐍, Gun🔫 and Water💧Game******");
let botScore=0,userScore=0, lives=3,chances=6;
getRnd=(min,max)=>{
  return Math.floor(Math.random()*(max-min+1))+min;
};
alert("S - Snake, G - Gun and W - Water");
while(chances!=0)
{
  let ans=prompt("Enter any of them     S,W,G to play the game");
  ans.toUpperCase();{
  switch(getRnd(1,3))
      {
        case 1:{
            if (ans =="S")
            {
              console.log("You are out");
              alert("Try Again 🙃, Bot chose Gun 🔫");
               lives--;
               botScore++;
              if(userScore==0)
              {
                userScore=0;
              }
              else{
                userScore--;
              }
            
            }
          else if(ans=="W")
          {
            console.log("You Win");
            alert("Congractulations!!!, Bot chose Gun 🔫");
            userScore++;
             if(botScore==0)
              {
                botScore=0;
              }
              else{
                botScore--;
              }
          }
          else{
            console.log("Itz Tie");
            alert("Itz Tie, Bot chose Gun");
            botScore++;
            userScore++;
            
          }
           chances--;
            break;
        }
        case 2:{
              if (ans =="G")
            {
              console.log("You are out");
              alert("Try Again 🙃, Bot chose Water💧");
               lives--;
               botScore++;
              if(userScore==0)
              {
                userScore=0;
              }
              else{
                userScore--;
              }
            
            }
          else if(ans=="S")
          {
            console.log("You Win");
            alert("Congractulations!!!, Bot chose Water💧");
            userScore++;
             if(botScore==0)
              {
                botScore=0;
              }
              else{
                botScore--;
              }
          }
          else{
            console.log("Itz Tie");
            alert("Itz Tie, Bot chose Water💧");
            botScore++;
            userScore++;
            
          }
           chances--;
            break;
        }
        case 3:
          {
            if (ans =="W")
            {
              console.log("You are out");
              alert("Try Again 🙃, Bot chose Snake 🐍");
               lives--;
               botScore++;
              if(userScore==0)
              {
                userScore=0;
              }
              else{
                userScore--;
              }
            
            }
          else if(ans=="G")
          {
            console.log("You Win");
            alert("Congractulations!!!, Bot chose Snake 🐍");
            userScore++;
             if(botScore==0)
              {
                botScore=0;
              }
              else{
                botScore--;
              }
          }
          else{
            console.log("Itz Tie");
            alert("Itz Tie, Bot chose Snake 🐍");
            botScore++;
            userScore++;
            
          }
             chances--;
            break;
          }
    }
  }
}
console.log("******Bot Score******");
console.log(botScore);
console.log("******User Score******");
console.log(userScore);
console.log("******Lives******")
console.log(lives);

