$( document ).ready(function() {  //$(function(){ < shorthand version

    var standalone = window.navigator.standalone,
    userAgent = window.navigator.userAgent.toLowerCase(),
    safari = /safari/.test( userAgent ),
    iOS = /iphone|ipod|ipad/.test( userAgent );

if( iOS ) {
    
    if ( !standalone && safari ) {
        
        $("#btn-container").click(function(e){
            window.open('ddc://?scene=SLOTMACHINE.rgs.siberianStorm.cid-8835','_blank');
        });

        console.log('browser');
        
    } else if ( standalone && !safari ) {
        
        $("#btn-container").click(function(e){
            window.open('ddc://?scene=SLOTMACHINE.rgs.siberianStorm.cid-8835','_blank');
        });

        console.log('standalone');
        
    } else if ( !standalone && !safari ) {
        
        $("#btn-container").click(function(e){
            window.open('ddc://?scene=SLOTMACHINE.rgs.siberianStorm.cid-8835','_blank');
        });

        console.log('uiwebview');
        
    };
    
} else {
    
    $("#btn-container").click(function(e){
        window.open('http://m.doubledowncasino.com/?link=SLOTMACHINE.rgs.siberianStorm.cid-8835&game=rgs.slots&variant=rgs.siberianStorm&lineCost=200&cid=8835','_blank');
    });

    console.log('not iOS')
    
};

});