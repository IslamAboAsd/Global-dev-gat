
$('.bg_load').height($(window).height());
    $('.bg_load dev').css('margin-top', ($(window).height() - ($(this).height))/2);

jQuery(window).load(function(){
    $(".bg_load").fadeOut("slow");
       

});

/*** Document Ready Functions ***/
jQuery(document).ready(function(){

	"use strict";


 
	
 var allservice = $('.cause-tabber li');
	$('.cause-tabber li').click(function() {
		$(allservice).removeClass("active");
	});
	
	$(window).scroll(function() {
            if ($(this).scrollTop() >= 165) { // if scroll is greater/equal then 100 and hasBeenTrigged is set to false.

                $('.sidebar ').addClass('fix-left');

            } else if ($(this).scrollTop() <= 165) {

                $('.sidebar').removeClass('fix-left');
            }

        });


 
// /*** MESSAGE BOX TOGGLE FUNCTION ***/
//$(".message-box-title").click(function(){
//	$(".message-box-title").toggleClass("opened");
//	$(".message-box-title > i").toggleClass("icon-angle-down");
//	$(".message-form").slideToggle();
//});	
	


$('.full-section').parent().parent().parent().addClass('expand');

$(".product a").click(function(){
	$(this).parent().parent().slideUp();
});	



// Responsive Header //
$(".menu-btn").on("click", function () {
    $(".responsive-menu").toggleClass("slidein");
    return false;
});
$(".close-btn").on("click", function () {
    $(".responsive-menu").removeClass("slidein");
    return false;
});
$(".responsive-menu li.has-dropdown > a").on("click", function () {
    $(this).parent().siblings().children("ul").slideUp();
    $(this).parent().siblings().removeClass("active");
    $(this).parent().children("ul").slideToggle();
    $(this).parent().toggleClass("active");
    return false;
});

// Scroll Bar //
$('.responsive-menu, .scroll-sec').perfectScrollbar();

// Responsive info Toggle //
$(".responsive-topbar-info > ul > li:first-child").addClass("active");
$(".responsive-topbar-info > ul > li").on("click", function() {
    $(this).parent().find("li").removeClass("active");
    $(this).addClass("active");
});
	

/*** ACCORDIONS ***/
$('.accordion_content').not('.open').hide();

$('.accordion_toggle a').click(function(e){
	if($(this).parent().hasClass('current')) {
		$(this).parent()
			.removeClass('current')
			.next('.accordion_content').slideUp();
	} else {
		$(document).find('.current')
			.removeClass('current')
			.next('.accordion_content').slideUp();
		$(this).parent()
			.addClass('current')
			.next('.accordion_content').slideDown();
	}
	e.preventDefault();
});




/*** ACCORDIONS ***/
$('.accordion_content').not('.open').hide();

$('.accordion_toggle input').click(function(e){
	if($(this).parent().hasClass('current')) {
		$(this).parent()
			.removeClass('current')
			.next('.accordion_content').slideUp();
	} else {
		$(document).find('.current')
			.removeClass('current')
			.next('.accordion_content').slideUp();
		$(this).parent()
			.addClass('current')
			.next('.accordion_content').slideDown();
	}
	e.preventDefault();
});



$(".donate-drop-btn").click( function(){
	$(".donate-drop-down").slideToggle();
	$(this).toggleClass('down');
});		


var amount = $('.amount-btns > a');
$(".amount-btns > a").click( function(){
	amount.removeClass("selected");
	$(this).addClass("selected");
});		



/*** STICKY MENU ***/
var nav = $('.sticky');
$(window).scroll(function () {
	if ($(this).scrollTop() > 50) {
			nav.addClass("stick");
	}
	else {
			nav.removeClass("stick");
	}
});



/*** TOGGLE HEADER ***/
$(".show-header").click(function(){
	$(".toggle-header").slideToggle();
	$(".top-bar-toggle").slideToggle();
	$(this).toggleClass("move-down");
});	


/*** CHECKOUT PAGE FORM TOGGLE ICON ***/
$(".form-toggle.accordion_toggle a").click(function(){
	$(this).toggleClass("pointed");
});	



/*** Side Panel Functions ***/
$(".panel-icon").click(function(){
	$(".side-panel").toggleClass("show");
});	


$(".boxed-style").click( function(){
	$(".theme-layout").addClass("boxed");
	$("body").addClass('bg-body1');
});
$(".full-style").click( function(){
	$(".theme-layout").removeClass("boxed");
	$("body").removeClass('bg-body1');
	$("body").removeClass('bg-body2');
	$("body").removeClass('bg-body3');
	$("body").removeClass('bg-body4');
});
$(".pat1").click( function(){
	$("body").addClass('bg-body1');
	$("body").removeClass('bg-body2');
	$("body").removeClass('bg-body3');
	$("body").removeClass('bg-body4');
});
$(".pat2").click( function(){
	$("body").removeClass('bg-body1');
	$("body").addClass('bg-body2');
	$("body").removeClass('bg-body3');
	$("body").removeClass('bg-body4');
});
$(".pat3").click( function(){
	$("body").removeClass('bg-body1');
	$("body").removeClass('bg-body2');
	$("body").addClass('bg-body3');
	$("body").removeClass('bg-body4');
});
$(".pat4").click( function(){
	$("body").removeClass('bg-body1');
	$("body").removeClass('bg-body2');
	$("body").removeClass('bg-body3');
	$("body").addClass('bg-body4');
});

//    $("#sticker").sticky({topSpacing:0});

$(window).scroll(function() {
            if ($(this).scrollTop() >= 365) { // if scroll is greater/equal then 100 and hasBeenTrigged is set to false.

                $('.sidebar').addClass('fix-left');

            } else if ($(this).scrollTop() <= 365) {

                $('.sidebar').removeClass('fix-left');
            }

        });


$(window).scroll(function() {
        if ($(this).scrollTop() >=48) { // if scroll is greater/equal then 100 and hasBeenTrigged is set to false.

            $('header').addClass('fix-nav');
            $('.responsive-header').addClass('fix-nav');


        } else if ($(this).scrollTop() <= 48) {

            $('header').removeClass('fix-nav');
            $('.responsive-header').removeClass('fix-nav');
        }

    });


$(function () {
        $(".donate-btn").on("click", function () {
            $("#myVidoe").attr({
                "src": $(this).attr("movieurl"),
                "poster": "",
                "autoplay": "autoplay",
            });
            
        }); 
     }); 




 
 $('.event-1 .countdown').downCount({
    date: '01/01/2018 18:00:00',
    offset: -5

});

$('.event-2 .countdown').downCount({
    date: '12/31/2017 12:00:00',
    offset: -5

});


// random video

var videos = [
'17zTmmYs9Kk',
'DhHI2retwao',
'pszCC9F8sk0',
'uiAGTwiG1ec',
'aAhcIhAeC2c'
];

var index=Math.floor(Math.random() * videos.length);
var ifram='<div class="sidebar-title margin-0"><h4>فيديو <span>مقترح</span></h4></div><div class="aside-vidoe"><iframe class="img-responsive" src="http://www.youtube.com/embed/' + videos[index] + '?autoplay="0"frameborder="1" allowfullscreen></iframe></div>';
$( ".sidebar-widget" ).append(ifram);

    
    
    $("body").append("<div class='loading'></div>");

});		

