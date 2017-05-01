var $ = require('jquery');
require('./vendors/bootstrap');


$(window).on('load', function(){
    init();  
});
function init(){
    //Pass params to timeline
    var toolTimeline = new TimelineMax();
    var duration = 0.5;
    toolTimeline.from($('.mainTitle'), duration,{opacity:0, scale: 25, ease: Linear.easeInOut});
    
    toolTimeline.from($('.title'), duration,{opacity:0, scale: 25, ease: Linear.easeInOut},.2);
    
    toolTimeline.to($('.superman img'), duration,{left:0, ease: Back.easeOut});

    toolTimeline.from($('.superman img'), duration,{skewX:'20deg', ease: Back.easeOut}, .9);

    toolTimeline.to($('.mainTitle'), duration,{right:-50, ease: Back.easeInOut},.7);
    //Put on the stage, last two params are time between elements of img array and last time within animation.
    toolTimeline.staggerTo($('.tools img'), duration,{top:150, ease: Back.easeInOut},.2, .7);
}

/*
Tool to visualize animations
https://greensock.com/ease-visualizer
*/