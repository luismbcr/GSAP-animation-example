var $ = require('jquery');
require('./vendors/bootstrap');

$(document).ready(function(){
    startTween();  
})

function startTween(){
    // params : ELEMENT, TIME in SECONDS, Literal Object with custom animation
    TweenLite.to($('#toolBox'),1,{delay:1,x:290, y:230, scale:1.5, onComplete:returnToNormal});
    TweenLite.to($('.asapReg'),1, {color: "#ff0000", fontSize: "+=75"})
}

function returnToNormal(){
    TweenLite.to($('#toolBox'),1,{x:0, y:0, scale:1});
}