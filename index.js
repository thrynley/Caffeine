// Write a method that takes in the day as a string and returns the minimum amount of caffeine drinks you'll need to buy.
  
function drinks(day){
  let week = {
    m: 800,
    t: 600,
    w: 400,
    r: 400,
    f: 900 
  };
  let drinks = 150;
  console.log(Math.ceil(week[day]/drinks))
}
drinks('m') 
drinks('r') 

/* Every weekday you drink caffeine to get ready for the morning. 

Monday (m), you need 800mg to wake up from the weekend. 
Tuesday (t), you only need 600mg. 
Wednesday (w) and Thursday (r) you only need 400mg. But on 
Fridays (f) you drink 900mg because you know you'll be staying up late and going out with friends. 
You prefer buying small energy drinks that contain 
150mg of caffeine each.
*/
