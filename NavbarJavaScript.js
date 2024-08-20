$('#nav-item-1').addClass("active");

/* Smooth scrolling */
$("#nav-item-1").click(function() {
    $('html, body').animate({
        scrollTop:        $("#welcomeSection").offset().top-112
    }, 1000);
    return false;
});

$("#nav-item-2").click(function() {
    $('html, body') .animate({
        scrollTop:        $("#aboutMeSection").offset().top-112
    }, 1000);
    return false;
});

$("#nav-item-3").click(function() {
    $(' html,body') .animate({
        scrollTop:        $("#mySkillsSection").offset().top-112
    }, 1000);
    return false;
});

$("#nav-item-4").click(function() {
    $(this).addClass("active");
    $('html,body ') .animate({
        scrollTop:        $("#universityProjectsSection").offset().top-112
    }, 1000);
    return false;
});

$("#nav-item-5").click(function() {
    $(this).addClass("active");
    $('html,body ') .animate({
        scrollTop:        $("#sideProjectsSection").offset().top-112
    }, 1000);
    return false;
});

$("#nav-item-6").click(function() {
    $(this).addClass("active");
    $('html,body ') .animate({
        scrollTop:        $("#contactSection").offset().top-112
    }, 1000);
    return false;
});

$('#aboutMeSection').waypoint(function() {

    $(".container ul li").children().removeClass("active");
    $("#nav-item-2").addClass("active");

}, { offset: 101 });


$('#mySkillsSection').waypoint(function() {
    $(".container ul li").children().removeClass("active");
    $("#nav-item-3").addClass("active");
}, { offset: 101 });

$('#universityProjectsSection').waypoint(function() {
    $(".container ul li").children().removeClass("active");
    $("#nav-item-4").addClass("active");
}, { offset: 101 });

$('#sideProjectsSection').waypoint(function() {
    $(".container ul li").children().removeClass("active");
    $("#nav-item-5").addClass("active");
}, { offset: 0 });

$('#contactSection').waypoint(function() {
    $(".container ul li").children().removeClass("active");
    $("#nav-item-6").addClass("active");
}, { offset: 0 });

$('#welcomeSection').waypoint(function() {
    $(".container ul li").children().removeClass("active");
    $("#nav-item-1").addClass("active");
}, { offset: 0 });