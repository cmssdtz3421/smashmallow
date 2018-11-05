$("nav div ul").hide();
$("nav div").each(function(){
	$(this).mouseover(function(){
		var span = $(this).find("span");
		var h5 = $(this).find("h5");
		span.stop(true);
		h5.stop(true);
		if ( $(this).attr("id") != "SNACKAPADE" ){
			span.animate({top:'-5px'},120);
			h5.animate({
				backgroundColor:'rgb(191,234,249)',
			},120);
		};
		if ( $(this).attr("id") == "SNACKAPADE" ){
			span.animate({top:'-5px'},120);
			h5.animate({
				backgroundColor:'rgb(191,234,249)',
			},120,function(){
				var ul = $("#SNACKAPADE").find("ul");
				ul.stop();
				ul.slideDown(120);
			});
		}
	});
	$(this).mouseleave(function(){
		var span = $(this).find("span");
		var h5 = $(this).find("h5");
		span.stop(true);
		h5.stop(true);
		if ( $(this).attr("id") != "SNACKAPADE" ){
			span.animate({top:'15px'},120);
			h5.animate({
				backgroundColor:'transparent',
			},120);
		};
		if ( $(this).attr("id") == "SNACKAPADE" ){
			var ul = $("#SNACKAPADE").find("ul");
			ul.stop();
			ul.slideUp(120,function(){
				$("#SNACKAPADE").find("span").animate({top:'15px'},120);
				$("#SNACKAPADE").find("h5").animate({
					backgroundColor:'transparent',
				},120);
			});
			
		}
	});
});

function balloonPrepared(){
	var balloons = document.getElementsByClassName("balloon");
	for (var i = 0; i < balloons.length; i++) {
		if(!balloons[i].getAttribute("id")) return false;
		var balloon_id = balloons[i].getAttribute("id");
		var balloon_ypos_initial = parseInt(balloons[i].style.top);
		if( i == 0){
		var balloon_ypos_final = balloon_ypos_initial - 40;
		movePrepared1(balloon_id,balloon_ypos_initial,balloon_ypos_final);
		}
		if( i != 0){
		var balloon_ypos_final = balloon_ypos_initial + 40;
		movePrepared2(balloon_id,balloon_ypos_initial,balloon_ypos_final);	
		}
	};
}

function movePrepared1(id,initial,final){
	moveback(id,initial);
	var repeat1 = "moveBalloon('"+id+"',"+final+")";
	var repeat2 = "movePrepared1('"+id+"',"+initial+","+final+")";
	var movement1 = setTimeout(repeat1,2100);
	var movement2 = setTimeout(repeat2,4200);
}

function movePrepared2(id,initial,final){
	moveBalloon(id,initial);
	var repeat1 = "moveback('"+id+"',"+final+")";
	var repeat2 = "movePrepared2('"+id+"',"+initial+","+final+")";
	var movement = setTimeout(repeat1,2100);
	var movement = setTimeout(repeat2,4200);
}

function moveBalloon(target,ypos_initial){
		var balloon = document.getElementById(target);
		var ypos = parseInt(balloon.style.top);
		var dist = 0;
		var final_y = ypos_initial+40;			
		if (ypos == final_y) return true;
		if (ypos < final_y) {
			dist = Math.ceil((final_y-ypos)/100);
			ypos = ypos + dist;			
		}
		if (ypos > final_y) {
		dist = Math.ceil((ypos-final_y)/100);
		ypos = ypos - dist;
		}
		balloon.style.top = ypos + "px";
		var repeat = "moveBalloon('"+target+"',"+ypos_initial+")";
		balloon.movement = setTimeout(repeat,50);
}

function moveback(target,ypos_initial){
		var balloon = document.getElementById(target);
		var ypos = parseInt(balloon.style.top);
		var dist = 0;
		var final_y = ypos_initial-40;
		if (ypos == final_y) return true;
		if (ypos < final_y) {
			dist = Math.ceil((final_y-ypos)/100);
			ypos = ypos + dist;			
		}
		if (ypos > final_y) {
		dist = Math.ceil((ypos-final_y)/100);
		ypos = ypos - dist;
		}
		balloon.style.top = ypos + "px";
		var repeat = "moveback('"+target+"',"+ypos_initial+")";
		balloon.movement = setTimeout(repeat,50);	
}

$(".button").each(function(){
	$(this).prepend("<div></div>");
	var box = $(this).find("div");
	var width = $(this).innerWidth();
	var height = $(this).innerHeight();
	var color = $(this).css("color");
	box.css({
		"width":width+"px",
		"height":height+"px",
		"background-color":"rgb(82,45,29)",
		"position":"absolute",
		"top":"0px",
		"left":-width+"px",
		"z-index":"0",
		"margin-left":"0",
	});
	$(this).mouseover(function(){
		var box = $(this).find("div");
		var span = $(this).find("span");
		box.stop();
		span.stop();
		box.animate({ left: "0px" },200);
		span.animate({ color: "white"},200)
	});
	$(this).mouseleave(function(){
		var box = $(this).find("div");
		var span = $(this).find("span");
		var dist = $(this).innerWidth();
		box.stop();
		span.stop();
		box.animate({ left: dist+"px" },200,function(){
			var width = box.innerWidth();
			box.css({
				"left":-width+"px",			
			});			
		});
		span.animate({ color: color},200)
	});

});

$("#pickup_imgBox button").each(function(){
	$(this).mouseover(function(){
		$(this).animate({backgroundColor: "rgb(80,164,181)"},200);
	});
	$(this).mouseleave(function(){
		$(this).animate({backgroundColor: "rgb(82,45,29)"},200);
	});
});

$("#email_contact a").mouseover(function(){
	$(this).animate({color:"rgb(80,45,29)"},100);
}).mouseleave(function(){
	$(this).animate({color:"rgb(80,149,95)"},100);
});

$(".social_text").each(function(){
	$(this).css({"opacity":"0",});
});

$("#social_img_box a").mouseenter(function(){
	var img = $(this).find("img");
	var wValue = 1.1 * img.width();
	var hValue = 1.1 * img.height();
	$(this).find(".social_text").animate({opacity:"1"},200);
	img.addClass("img_gray");
	img.stop().animate({
		width: wValue,
		height: hValue,
		left: ("-"+(0.1*img.width())/2),
		top: ("-"+(0.1*img.height())/2),
	},200);
}).mouseleave(function(){
	$(this).find(".social_text").animate({opacity:"0"},200);
	$(this).find("img").removeClass("img_gray");
	$(this).find("img").stop().animate({
		width: "100%",
		height: "100%",
		left: "0px",
		top: "0px"
	},200);
});

function ad_close(){
	var ad = document.getElementById("ad_fixed");
	var btn = document.getElementById("close_btn");
	var foot = document.getElementById("footer");
	btn.onclick = function(){
		ad.style.display = "none";
		foot.style.height = "286px";
		return false;
	};
};

$(".footer_row a").mouseover(function(){
	$(this).stop().animate({color:"rgb(194,113,162)"},100);
}).mouseleave(function(){
	$(this).stop().animate({color:"rgb(249,248,239)"},100);
});

addLoadEvent(balloonPrepared);
addLoadEvent(ad_close);