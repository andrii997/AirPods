$(function(){

var today = new Date();
var my_year = today.getFullYear();
var my_month = today.getMonth();
var my_date = today.getDate()+1;

	
	var note = $('#note'),
		//ts = new Date(2012, 0, 1),
		ts = new Date(my_year, my_month, my_date),
		newYear = true;
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 10*24*60*60*1000;
		newYear = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " Р”РЅРµР№" + ( days==1 ? '':'' ) + ", ";
			message += hours + " Р§Р°СЃРѕРІ" + ( hours==1 ? '':'' ) + ", ";
			message += minutes + " РњРёРЅСѓС‚" + ( minutes==1 ? '':'' ) + " and ";
			message += seconds + " РЎРµРєСѓРЅРґ" + ( seconds==1 ? '':'' ) + " <br />";
			
			if(newYear){
				message += ""; // РґРѕ РєРѕРЅС†Р° Р°РєС†РёРё РѕСЃС‚Р°Р»РѕСЃСЊ
			}
			else {
				message += ""; // РѕСЃС‚Р°Р»РѕСЃСЊ 10 РґРЅРµР№ РґРѕ РєРѕРЅС†Р°
			}
			
			//note.html(message);
		}
	});
	
});

$(function(){

var today = new Date();
var my_year = today.getFullYear();
var my_month = today.getMonth();
var my_date = today.getDate()+1;

	
	var note = $('#note'),
		//ts = new Date(2012, 0, 1),
		ts = new Date(my_year, my_month, my_date),
		newYear = true;
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 10*24*60*60*1000;
		newYear = false;
	}
		
	$('#countdown2').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " Р”РЅРµР№" + ( days==1 ? '':'' ) + ", ";
			message += hours + " Р§Р°СЃРѕРІ" + ( hours==1 ? '':'' ) + ", ";
			message += minutes + " РњРёРЅСѓС‚" + ( minutes==1 ? '':'' ) + " and ";
			message += seconds + " РЎРµРєСѓРЅРґ" + ( seconds==1 ? '':'' ) + " <br />";
			
			if(newYear){
				message += ""; // РґРѕ РєРѕРЅС†Р° Р°РєС†РёРё РѕСЃС‚Р°Р»РѕСЃСЊ
			}
			else {
				message += ""; // РѕСЃС‚Р°Р»РѕСЃСЊ 10 РґРЅРµР№ РґРѕ РєРѕРЅС†Р°
			}
			
			//note.html(message);
		}
	});
	
});

$(document).ready(function() {

	$('.reviews-slider').slick({
	  dots: true,
	  infinite: true,
	  speed: 500,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  adaptiveHeight: true,
	  prevArrow: $('.slider-arrow-item--prev.a-prev'),
	  nextArrow: $('.slider-arrow-item--next.a-next')
	});

});
