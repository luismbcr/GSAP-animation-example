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
    toolTimeline.from($('.title'), duration,{opacity:0, scale: 25, ease: Linear.easeInOut},2);
    // toolTimeline.to($('#crazy'), duration,{y: -100, ease: Elastic.easeInOut});
    // toolTimeline.to($('#leaf'), duration,{y: -100, ease: Back.easeInOut});

    
}