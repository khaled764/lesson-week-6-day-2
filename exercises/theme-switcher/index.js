// click event for gray button
$("#grayButton").on("click",switchGray);
// click event for white button
$("#whiteButton").on("click",switchWhite);
// function to change color to gray
function switchGray() {
    // change background to gray
     // change font to white
      let body = $("body");
      body.css({
        "background":"gray",
        "color":"white"
      });
}
// function to change color to white
 function switchWhite() {
     // change background to white
     // change font to black
     let body = $("body");
     body.css({
       "background":"white",
       "color":"black"
     });
}
//function switchWhite() {
//let body = $("body");
//body.css("background,white");
//body.css("background,black");
//}
