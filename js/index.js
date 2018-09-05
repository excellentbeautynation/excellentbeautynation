$("#header").load("header.html");
$("#footer").load("footer.html");
$("#side-nav").load("sidenav.html");
$("#intro").load("intro.html");
$("#contact-us").load("contactus.html");
$("#ibmn-missions").load("ibmn-missions.html");
$("#ebn-fellowships").load("ebn-fellowships.html");
$("#prophecy").load("prophecy.html");
$("#publisher").load("publisher.html");
$("#one-on-one-with-prophet-isaac").load("one-on-one-with-prophet-isaac.html");

// SIDE NAVIGATION
function openNav() {
    document.getElementById("mySidenav").style.width = "60%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//END OF SIDE NAVIGATION

function intro(){
    $("#intro").css("display", "block");
    $("#contact-us").css("display", "none");
    $("#ibmn-missions").css("display", "none");
    $("#ebn-fellowships").css("display", "none");
    $("#prophecy").css("display", "none");
    $("#publisher").css("display", "none");
    $("#one-on-one-with-prophet-isaac").css("display", "none");
    document.getElementById("mySidenav").style.width = "0";
    
}


function contactPage(){
    $("#intro").css("display", "none");
    $("#contact-us").css("display", "block");
    $("#ibmn-missions").css("display", "none");
    $("#ebn-fellowships").css("display", "none");
    $("#prophecy").css("display", "none");
    $("#publisher").css("display", "none");
    $("#one-on-one-with-prophet-isaac").css("display", "none");
    document.getElementById("mySidenav").style.width = "0";
}

function ibmnMissions(){
    $("#intro").css("display", "none");
    $("#contact-us").css("display", "none");
    $("#ibmn-missions").css("display", "block");
    $("#ebn-fellowships").css("display", "none");
    $("#prophecy").css("display", "none");
    $("#publisher").css("display", "none");
    $("#one-on-one-with-prophet-isaac").css("display", "none");
    document.getElementById("mySidenav").style.width = "0";
}

function ebnFellowships(){
    $("#intro").css("display", "none");
    $("#contact-us").css("display", "none");
    $("#ibmn-missions").css("display", "none");
    $("#ebn-fellowships").css("display", "block");
    $("#prophecy").css("display", "none");
    $("#publisher").css("display", "none");
    $("#one-on-one-with-prophet-isaac").css("display", "none");
    document.getElementById("mySidenav").style.width = "0";
}

function prophecy(){
    $("#intro").css("display", "none");
    $("#contact-us").css("display", "none");
    $("#ibmn-missions").css("display", "none");
    $("#ebn-fellowships").css("display", "none");
    $("#prophecy").css("display", "block");
    $("#publisher").css("display", "none");
    $("#one-on-one-with-prophet-isaac").css("display", "none");
    document.getElementById("mySidenav").style.width = "0";
}

function publisher(){
    $("#intro").css("display", "none");
    $("#contact-us").css("display", "none");
    $("#ibmn-missions").css("display", "none");
    $("#ebn-fellowships").css("display", "none");
    $("#prophecy").css("display", "none");
    $("#publisher").css("display", "block");
    $("#one-on-one-with-prophet-isaac").css("display", "none");
    document.getElementById("mySidenav").style.width = "0";
}

function oneOnOne(){
    $("#intro").css("display", "none");
    $("#contact-us").css("display", "none");
    $("#ibmn-missions").css("display", "none");
    $("#ebn-fellowships").css("display", "none");
    $("#prophecy").css("display", "none");
    $("#publisher").css("display", "none");
    $("#one-on-one-with-prophet-isaac").css("display", "block");
    document.getElementById("mySidenav").style.width = "0";
}




// SWIPE EFFECT
let body = document.getElementById("swipe");
body.addEventListener("touchstart", startTouch, false);
body.addEventListener("touchmove", moveTouch, false);
 
// Swipe Up / Down / Left / Right
var initialX = null;
var initialY = null;
 
function startTouch(e) {
    initialX = e.touches[0].clientX;
    initialY = e.touches[0].clientY;
  };
  function moveTouch(e) {
    if (initialX === null) {
      return;
    }
      
    var currentX = e.touches[0].clientX;
    var currentY = e.touches[0].clientY;
   
    var diffX = initialX - currentX;
    var diffY = initialY - currentY;
   console.log(diffX);
    if (Math.abs(diffX)) {
      // sliding horizontally
      if (diffX > 0) {
        // swiped left
        console.log("swiped left");
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("swipe").style.width = "15%";

    } else {
        // swiped right
        document.getElementById("mySidenav").style.width = "60%";
        document.getElementById("swipe").style.width = "100%";
        console.log("swiped right");
      }  
    }
   
    initialX = null;
    initialY = null;
     
    // e.preventDefault();
  };  
// END OF SWIPE EFFECT