var $ = require('jquery');
require('./vendors/bootstrap');

$(document).ready(function(){
    init();  
})

function init(){
    //Pass params to timeline
    var toolTimeline = new TimelineLite({paused: true});
    var duration = 0.5;
    toolTimeline.add( TweenLite.to($('#toolBox'), duration,{y: -100, ease: Linear.easeInOut}));
    toolTimeline.add( TweenLite.to($('#weightLifter'), duration,{y: -100, ease: Bounce.easeInOut}));
    toolTimeline.add( TweenLite.to($('#crazy'), duration,{y: -100, ease: Elastic.easeInOut}));
    toolTimeline.add( TweenLite.to($('#leaf'), duration,{y: -100, ease: Back.easeInOut}));

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