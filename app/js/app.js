var $ = require('jquery');
require('./vendors/bootstrap');

$(document).ready(function(){
    init();  
})

function init(){
    var toolTimeline = new TimelineLite();
    var duration = 1;
    toolTimeline.add( TweenLite.to($('#toolBox'), duration,{y: -100}));
    toolTimeline.add( TweenLite.to($('#weightLifter'), duration,{y: -100}));
    toolTimeline.add( TweenLite.to($('#crazy'), duration,{y: -100}));
    toolTimeline.add( TweenLite.to($('#leaf'), duration,{y: -100}));

    //Events
    //Jquery elements
    var $startBtn = $('#start'),
        $pauseBtn = $('#pause'),
        $reverseBtn = $('#reverse'),
        $stopBtn = $('#stop');


    $startBtn.on('click',function(){
        toolTimeline.play();
    });

    $pauseBtn.on('click',function(){
        toolTimeline.pause();
    });

    $stopBtn.on('click',function(){
        toolTimeline.stop();
    });

    $reverseBtn.on('click',function(){
        toolTimeline.reverse();
    });


}