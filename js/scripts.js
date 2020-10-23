// My Own Scripts

// Navbar Default Display
$(document).ready(function(){
$(".navbar, .collapse").css("background-color", "white");
$(".active").css("border-bottom-style", "solid");
$(".active").css("border-bottom-width", "2px");
$(".active").css("border-bottom-color", "black");
$("#navlink-color").css("color", "#2C2C2C");
$("#navlink-color1").css("color", "#2C2C2C");
$("#navlink-color2").css("color", "#2C2C2C");
$("#navlink-color3").css("color", "#2C2C2C");
$("#navlink-color4").css("color", "#2C2C2C");
$("#navlink-color5").css("color", "#2C2C2C");
$("#navlink-color6").css("color", "#2C2C2C");

// navbar Display on Scroll
$(window).scroll(function() {
    if ($(document).scrollTop() > 10) {
    $("#navcolor").css("top", "0px");
    $("#navcolor").css("background-color", "#B80800");   
    $(".navbar, .collapse").css("background-color", "#B80800");
    $(".active").css("border-bottom-style", "solid");
    $(".active").css("border-bottom-width", "2px");
    $(".active").css("border-bottom-color", "white");
    $("#navlink-color").css("color", "white");
    $("#navlink-color1").css("color", "white");
    $("#navlink-color2").css("color", "white");
    $("#navlink-color3").css("color", "white");
    $("#navlink-color4").css("color", "white");
    $("#navlink-color5").css("color", "white");
    $("#navlink-color6").css("color", "white");
    } else { // Navbar Display when scroll back
        $("#navcolor").css("top", "38px");
        $("#navcolor").css("background-color", "white"); 
        $(".navbar, .collapse").css("background-color", "white");  
        $(".active").css("border-bottom-style", "solid");
        $(".active").css("border-bottom-width", "2px");
        $(".active").css("border-bottom-color", "black");
        $("#navlink-color").css("color", "#2C2C2C");
        $("#navlink-color1").css("color", "#2C2C2C");
        $("#navlink-color2").css("color", "#2C2C2C");
        $("#navlink-color3").css("color", "#2C2C2C");
        $("#navlink-color4").css("color", "#2C2C2C");
        $("#navlink-color5").css("color", "#2C2C2C");
        $("#navlink-color6").css("color", "#2C2C2C");
    }
});
});




// Chat/Message Bot Hide and Show
$(document).ready(function(){
    $("#closebutton").on('click', function() {
    $("#myDIV").hide();
    $("#closebutton").hide();
    });

    $("#chatcard").hide();
    $("#closechat").hide();
    $(".chatbtn").on('click', function() {
    $("#chatcard").slideDown();
    $("#closechat").show();
    $("#closebutton").hide();
    $("#myDIV").hide();
    $("#chatbtn").hide();
    $(".chatbtn").hide();
    });

    $("#chatbtn").on('click', function() {
    $("#chatcard").slideDown();
    $("#closechat").hide();
    $("#closechat2").show();
    $("#closebutton").hide();
    $("#myDIV").hide();
    });

    $("#closechat").on('click', function() {
    $("#closechat").hide();
    $("#chatcard").slideUp();
    $("#closebutton").hide();
    $("#myDIV").hide();
    $(".chatbtn").slideDown();
    });
    
    $("#closechat2").hide();
    $("#closechat2").on('click', function() {
    $("#closechat2").hide();
    $("#chatcard").slideUp();
    $("#closebutton").hide();
    $("#myDIV").hide();
    $(".chatbtn").hide();
    });
});



// News Video
$(document).ready(function(){
    $("#morevideos").hide();
    $("#hidevideo").hide();
    $("#showvideo").on('click', function() {
        $("#morevideos").slideDown();
        $("#hidevideo").slideDown();
        $("#showvideo").hide();
    });
    $("#hidevideo").on('click', function() {
        $("#morevideos").slideUp();
        $("#showvideo").show();
        $("#hidevideo").hide();
    });
});

// News Read More
$(document).ready(function(){
    $("#readmore-1-hide").hide();
    $("#readmore-2-hide").hide();
    $("#readmore-1").on('click', function() {
        $("#readmore-1-hide").slideDown();
    });
    $("#readmore-2").on('click', function() {
        $("#readmore-2-hide").slideDown();
    });
});

// News Load more News
$(document).ready(function(){
    $("#news-load-more").hide();
    $("#news-load-more-btn2").hide();
    $("#news-load-more-btn").on('click', function() {
        $("#news-load-more").slideDown();
        $("#news-load-more-btn2").slideDown();
        $("#news-load-more-btn").hide();
    });
});




// Event Load more News
$(document).ready(function(){
    $("#event-load-more1").hide();
    $("#event-load-more2").hide();
    $("#event-load-more-btn2").hide();
    $("#event-load-more-btn3").hide();
    $("#event-load-more-btn1").on('click', function() {
        $("#event-load-more1").slideDown();
        $("#event-load-more-btn1").hide();
        $("#event-load-more-btn2").show();
    });
    $("#event-load-more-btn2").on('click', function() {
        $("#event-load-more2").slideDown();
        $("#event-load-more-btn1").hide();
        $("#event-load-more-btn2").hide();
        $("#event-load-more-btn3").show();
    });
});



// Lipa Gallery
$(function() {
    var selectedClass = "";
    $(".filter").click(function(){
    selectedClass = $(this).attr("data-rel");
    $("#gallery").fadeTo(100, 0.1);
    $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
    setTimeout(function() {
    $("."+selectedClass).fadeIn().addClass('animation');
    $("#gallery").fadeTo(300, 1);
    }, 300);
    });
    });