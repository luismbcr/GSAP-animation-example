var $ = require('jquery');
require('./vendors/bootstrap');

$(document).ready(function(){
    startTween();  
})

function startTween(){
    // params : ELEMENT, TIME in SECONDS, Literal Object with custom animation
    TweenLite.to($('#toolBox'),1,{x:290, y:230});
}