$( document ).ready(function() { 

    //checks to see where the user came to the wheel week site from (e.g. PAID, EMAIL, FB WALL)
    if(document.referrer.indexOf("www") > 0){
        //console.log( "Url Media CID" );
        var cid = "8647";
        var pid = "LHHXXR";
 
        } else if(document.referrer.indexOf("facebook" || "bit.ly") > 0){
        //console.log( "Url Facebook CID" );
        var cid = "8646";
        var pid = "DFZFNF";
         
        }else{
        //console.log( "Url Email CID" );
        var cid = "8645";
        var pid = "PPRWRR";
    }

    var gameDate = new Date();
    var playGame = gameDate.getDate();

    //slot game urls
    var urlBegin = "http://m.doubledowncasino.com/?link=SLOTMACHINE.rgs.";
    var urlMid = "&game=rgs.slots&variant=rgs.";

    //game URL variables to create final destination URL
    //Day 1
    var u5a = "wheelOfFortuneUltra5reels.cid-";
    var u5b ="wheelOfFortuneUltra5reels&lineCost=200&cid=";
    //Day 2
    var esa = "wheelOfFortuneExtraSpin.cid-";
    var esb = "wheelOfFortuneExtraSpin&lineCost=250&cid=";
    //Day 3
    var dda = "wheelOfFortuneDoubleDiamond.cid-";
    var ddb = "wheelOfFortuneDoubleDiamond&lineCost=4000&cid=";
    //Day 4
    var a345 = "wheelOfFortuneDouble3x4x5xTimesPay.cid-";
    var b345 = "wheelOfFortuneDouble3x4x5xTimesPay&lineCost=1000&cid=";
    //Day 5
    var tda = "wheelOfFortuneTripleDiamond.cid-";
    var tdb = "wheelOfFortuneTripleDiamond&lineCost=2000&cid=";

    var day1Game = urlBegin + u5a + cid + urlMid + u5b + cid;
    var day2Game = urlBegin + esa + cid + urlMid + esb + cid;
    var day3Game = urlBegin + dda + cid + urlMid + ddb + cid;
    var day4Game = urlBegin + a345 + cid + urlMid + b345 + cid;
    var day5Game = urlBegin + tda + cid + urlMid + tdb + cid;
    var day6Game = "http://m.doubledowncasino.com/?link=SLOTSLOBBY.pid-" + pid + ".cid-" + cid +"&lobby=slots&pid=" + pid + "&cid=" + cid;

    //console.log(day6Game);
    //console.log(pid);

    //BUTTONS
    $(".sBtn").click(function(e){
        //alert('btn working');
        window.WHEELOFFORTUNE.spin();
    });

    $(".closeBtn").click(function(e){
        //alert('X btn working');
        $('#pu-wrapper').transition({ opacity: 0, visibility: 'hidden' });
    });

    //play now button
    $(".pBtn").click(function(e){
        //alert('btn working');
        if (playGame == 00){
            window.open(day1Game,'_blank');    
        }else if (playGame == 00){
            window.open(day2Game,'_blank');
        }else if (playGame == 00){
            window.open(day3Game,'_blank');
        }else if (playGame == 00){
            window.open(day4Game,'_blank');
        }else if (gameDate){
            window.open(day5Game,'_blank');
        }
    });

    //get chips button
    $(".chipsBtn").click(function(e){
        if (playGame == 00){
            //alert(day6Game);
            window.open(day6Game,'_blank');
            console.log(day6Game);                
        }else{
            window.open('https://www.doubledowncasino.com', '_blank');
        }
    });

    //game icon buttons
    $("#d1Icon").click(function(e){
    	 if(gameDate){
	    	//alert('day5 btn working');
	        window.open(day1Game,'_blank');
    	 }else{
    	 	//alert('not clickable');
    	 	e.preventDefault();
    	 }
    });

    $("#d2Icon").click(function(e){
    	 if(gameDate){
	    	//alert('day5 btn working');
	        window.open(day2Game,'_blank');
    	 }else{
    	 	//alert('not clickable');
    	 	e.preventDefault();
    	 }
    });
    
    $("#d3Icon").click(function(e){
    	 if(gameDate){
	    	//alert('day5 btn working');
	        window.open(day3Game,'_blank');
    	 }else{
    	 	//alert('not clickable');
    	 	e.preventDefault();
    	 }
    });

    $("#d4Icon").click(function(e){
    	 if(gameDate){
	    	//alert('day5 btn working');
	        window.open(day4Game,'_blank');
    	 }else{
    	 	//alert('not clickable');
    	 	e.preventDefault();
    	 }
    });

    $("#d5Icon").click(function(e){
    	 if(gameDate){
	    	//alert('day5 btn working');
	        window.open(day5Game,'_blank');
    	 }else{
    	 	//alert('not clickable');
    	 	e.preventDefault();
    	 }
    });

    $("#d6Icon").click(function(e){
    	 if(playGame >= 00){
	    	//alert('day5 btn working');
	        window.open(day6Game,'_blank');
    	 }else{
    	 	//alert('not clickable');
    	 	e.preventDefault();
    	 }
    });


        window.WHEELOFFORTUNE = {

            cache: {},

            init: function () {
                //console.log('controller init...');
                var _this = this;
                this.cache.wheel = $('.wheel');
                this.cache.wheelMarker = $('.marker');
                this.cache.wheelSpinBtn = $('.sBtn');
                this.cache.playBtn = $('.pBtn');
                this.cache.chipsBtn = $('.chipsBtn');
                this.cache.closeBtn = $('.closeBtn');
                this.cache.wedgeWin = $('.wedgeWin');
                this.cache.gameDisplay = $('.gameDisplay');
                this.cache.blue = $('#blue');
                this.cache.green = $('#green');
                this.cache.cyan = $('#cyan');
                this.cache.pink = $('#pink');
                this.cache.purple = $('#purple');
                this.cache.red = $('#red');
                this.cache.orange = $('#orange');
                this.cache.yellow = $('#yellow');
                this.cache.puwrapper = $('#pu-wrapper');
                this.cache.pu1 = $('#pu1');
                this.cache.pu2 = $('#pu2');
                this.cache.pu3 = $('#pu3');
                this.cache.pu4 = $('#pu4');
                this.cache.pu5 = $('#pu5');
                this.cache.pu6 = $('#pu6');
                this.cache.missedGameRect = $('#missedGameRect');
                this.cache.d1Icon = $('#d1Icon');
                this.cache.d2Icon = $('#d2Icon');
                this.cache.d3Icon = $('#d3Icon');
                this.cache.d4Icon = $('#d4Icon');
                this.cache.d5Icon = $('#d5Icon');
                this.cache.d6Icon = $('#d6Icon');
                this.cache.day1Color = $('.day1Color');
                this.cache.day2Color = $('.day2Color');
                this.cache.day3Color = $('.day3Color');
                this.cache.day4Color = $('.day4Color');
                this.cache.day5Color = $('.day5Color');
                this.cache.day6Color = $('.day6Color');
                this.cache.prevGame = $('.prevGame')
                //alert(this.cache.wheelSpinBtn)
                

                this.cache.wheelSpinBtn.on('click', function (e) {
                    e.preventDefault();
                    //alert('clicked');
                    if (!$(this).hasClass('disabled')) _this.spin();
                    //alert('disabled');
                });

                //reset wheel
                this.resetSpin();


            },

            spin: function () {
                //console.log('spinning wheel');
		//console.log('today = ' + today);
                var _this = this;
                var today = new Date();
                var gameDay = today.getDate();
                var duration = 7000; //optimal 6 secs
                var wedgeAngle = 45;
                
                
                // reset wheel
                this.resetSpin();

                //play wheel spin audio
                this.wheelSpinAudio();

                //disable spin button while in progress
                this.cache.wheelSpinBtn.addClass('disabled');

                if (gameDay == 00){ //gameday set to '00' to show Day 5 of promotion, normally this would be a real calendar date.
                    var deg = (360*8) + (wedgeAngle*2);
                    this.showPopUp();
                    this.cache.orange.transition({opacity:1});
                    this.cache.pu1.transition({opacity:1});
                    this.cache.prevGame.transition({visibility: 'hidden'});
                    console.log('orange');
                }else if (gameDay == 00){
                    var deg = (360*8) + (wedgeAngle*4);
                    this.showPopUp();
                    this.showMissedGames();
                    this.cache.red.transition({opacity:1});
                    this.cache.pu2.transition({opacity:1});
                    this.cache.d1Icon.transition({opacity:1});
                    this.cache.d2Icon.transition({opacity:1});
                    this.cache.day1Color.transition({opacity:1});
                    this.cache.day2Color.transition({opacity:1});
                    console.log('red');               
                }else if (gameDay == 00){
                    var deg = (360*8) + (wedgeAngle*5);
                    this.showPopUp();
                    this.showMissedGames();
                    this.cache.yellow.transition({opacity:1});
                    this.cache.pu3.transition({opacity:1});
                    this.cache.d1Icon.transition({opacity:1});
                    this.cache.d2Icon.transition({opacity:1});
                    this.cache.d3Icon.transition({opacity:1});
                    this.cache.day1Color.transition({opacity:1});
                    this.cache.day2Color.transition({opacity:1});
                    this.cache.day3Color.transition({opacity:1});
                    console.log('yellow');                
                }else if (gameDay == 00){
                    var deg = (360*8) + (wedgeAngle*7);
                    this.showPopUp();
                    this.showMissedGames();
                    this.cache.green.transition({opacity:1});
                    this.cache.pu4.transition({opacity:1});
                    this.cache.d1Icon.transition({opacity:1});
                    this.cache.d2Icon.transition({opacity:1});
                    this.cache.d3Icon.transition({opacity:1});
                    this.cache.d4Icon.transition({opacity:1});
                    this.cache.day1Color.transition({opacity:1});
                    this.cache.day2Color.transition({opacity:1});
                    this.cache.day3Color.transition({opacity:1});
                    this.cache.day4Color.transition({opacity:1});
                    console.log('green');                
                }else if (today){
                    var deg = (360*8);
                    this.showPopUp();
                    this.showMissedGames();
                    this.cache.blue.transition({opacity:1});
                    this.cache.pu5.transition({opacity:1});
                    this.cache.d1Icon.transition({opacity:1});
                    this.cache.d2Icon.transition({opacity:1});
                    this.cache.d3Icon.transition({opacity:1});
                    this.cache.d4Icon.transition({opacity:1});
                    this.cache.d5Icon.transition({opacity:1});
                    this.cache.day1Color.transition({opacity:1});
                    this.cache.day2Color.transition({opacity:1});
                    this.cache.day3Color.transition({opacity:1});
                    this.cache.day4Color.transition({opacity:1});
                    this.cache.day5Color.transition({opacity:1});  
                    console.log('blue');
                }else if (gameDay == 00){
                    var deg = (360*8) + wedgeAngle;
                    this.showPopUp();
                    this.showMissedGames();
                    this.cache.chipsBtn.transition({visibility: 'visible'});
                    this.cache.playBtn.transition({visibility: 'hidden'});
                    this.cache.prevGame.transition({visibility: 'hidden'});
                    this.cache.purple.transition({opacity:1});
                    this.cache.pu6.transition({opacity:1});
                    this.cache.d1Icon.transition({opacity:1});
                    this.cache.d2Icon.transition({opacity:1});
                    this.cache.d3Icon.transition({opacity:1});
                    this.cache.d4Icon.transition({opacity:1});
                    this.cache.d5Icon.transition({opacity:1});
                    this.cache.d6Icon.transition({opacity:1});
                    this.cache.day1Color.transition({opacity:1});
                    this.cache.day2Color.transition({opacity:1});
                    this.cache.day3Color.transition({opacity:1});
                    this.cache.day4Color.transition({opacity:1});
                    this.cache.day5Color.transition({opacity:1});
                    this.cache.day6Color.transition({opacity:1});
                    console.log('purple');
                    console.log(today);
                }else{
                    this.cache.wheelSpinBtn.addClass('disabled');
                }

                
                

                _this.cache.wheelPos = deg;
                console.log('wheelPos = ' + deg);

                //transition queuing
                //ff bug with easeOutBack
                this.cache.wheel.transition({
                    rotate: '0deg'
                }, 0)
                    .transition({
                    rotate: deg + 'deg'
                }, duration, 'easeOutCubic');

                this.cache.gameDisplay.transition({
                    rotate: '0deg'
                }, 0)
                    .transition({
                    rotate: deg + 'deg'
                }, duration, 'easeOutCubic');    

                //move marker
                _this.cache.wheelMarker.transition({
                    rotate: '-5deg'
                }, 0, 'snap');

                //just before wheel finish
                setTimeout(function () {
                    //reset marker
                    _this.cache.wheelMarker.transition({
                        rotate: '0deg'
                    }, 300, 'easeOutQuad');
                }, duration - 500);

                //wheel finish
                setTimeout(function () {
                    // did it win??!?!?!
                    var spin = _this.cache.wheelPos,
                        degrees = spin % 360,
                        percent = (degrees / 360) * 100;

                    //console.log('spin = ' + spin);
                    //console.log('degrees = ' + degrees);
                    //console.log('percent = ' + percent);
                    //console.log('segment = ' + segment);
                    //console.log('win = ' + win);

                    //display animated wedgeWin
                    _this.cache.wedgeWin.transition({opacity: 1});

                    //fade ? wheel
                    _this.cache.wheel.transition({opacity: 0});

                    //play 'win' audio
                    _this.winAudio();
                    
                    //re-enable wheel spin
                    _this.cache.wheelSpinBtn.removeClass('disabled');

                }, duration);

            },

            resetSpin: function () {
                this.cache.wheel.transition({
                    rotate: '0deg'
                }, 0);
                this.cache.wheelPos = 0;
                this.cache.wedgeWin.transition({opacity: 0}, 0.1, 'snap');
                this.cache.wheel.transition({opacity: 1}, 0.1, 'snap');
            },


            wheelSpinAudio: function () {
                var x = document.createElement("AUDIO");

                if (x.canPlayType("audio/mpeg")) {
                    x.setAttribute("src","audio/TSTSTOP1.mp3");
                } else {
                    x.setAttribute("src","TSTSTOP1.ogg");
                }

                x.setAttribute("autoplay", "autoplay");
                document.body.appendChild(x);
            },

            winAudio: function () {
                var y = document.createElement("AUDIO");

                if (y.canPlayType("audio/mpeg")) {
                    y.setAttribute("src","audio/anticipation.mp3");
                } else {
                    y.setAttribute("src","anticipation.ogg");
                }

                y.setAttribute("autoplay", "autoplay");
                document.body.appendChild(y);
            },

            showPopUp: function() {
                //show dialog
                this.cache.puwrapper.transition({visibility: 'visible'});
                this.cache.puwrapper.transition({opacity: 1, delay: 7500});
            },

            showMissedGames: function() {
                //show dialog
                this.cache.missedGameRect.transition({visibility: 'visible'});
                this.cache.missedGameRect.transition({opacity: 1, delay: 7500});
            },
                  
        }

        window.WHEELOFFORTUNE.init();

});
