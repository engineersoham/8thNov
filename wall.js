var wall = (k,width,height) => {
    Area = width * height;
   if(k >= Area)
   {
       var p = parseInt(k/Area);
   return ("The number of completed wall" +p);
   } 
   else
   {
    return ("You need buy more") ; 
   }  
}
var k = 30;
console.log(wallpaint(k,2,3));