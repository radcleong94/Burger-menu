//first create a controller ~~
var controller = new ScrollMagic.Controller();

//second add a scene for all object to fade~~
var scene = new ScrollMagic.Scene({
  triggerElement: ".about", //trigger the about class function
})
  .setClassToggle(".about", "fade-in") //add class to about
  .addTo(controller);

var scene2 = new ScrollMagic.Scene({
  triggerElement: "#menu", //trigger the menu class function
})
  .setClassToggle("#menu", "fade-out") //add class to menu
  .addTo(controller);

var scene3 = new ScrollMagic.Scene({
  triggerElement: "#contact", //trigger the contact class function
  offset: 0,
})
  .setClassToggle("#contact", "fade-up") //add class to contact
  .addTo(controller);

var scene4 = new ScrollMagic.Scene({
  triggerElement: ".footer-background", //trigger the contact class function

  triggerHook: 1, //put the trigger starting point at end of page vp
})
  .setClassToggle(".footer-rotate", "fade-up-down") //add class to contact
  .addTo(controller);
