$(document).ready(function() {
    $('#nav-item-1').addClass("active");

    $("#nav-item-1").click(function() {
        $(".container ul li").children().removeClass("active");
        $(this).addClass("active");
        $('html, body').animate({
            scrollTop:        $("#welcomeSection").offset().top-160
        });
        return false;
    });

    $("#nav-item-2").click(function() {
        $(".container ul li").children().removeClass("active");
        $(this).addClass("active");
        $('html, body') .animate({
            scrollTop:        $("#aboutMeSection").offset().top-160
        });
        return false;
    });

    $("#nav-item-3").click(function() {
        $(".container ul li").children().removeClass("active");
        $(this).addClass("active");
        $(' html,body') .animate({
            scrollTop:        $("#mySkillsSection").offset().top-160
        });
        return false;
    });

    $("#nav-item-4").click(function() {
        $(".container ul li").children().removeClass("active");
        $(this).addClass("active");
        $('html,body ') .animate({
            scrollTop:        $("#universityProjectsSection").offset().top-160
        });
        return false;
    });

    $("#nav-item-5").click(function() {
        $(".container ul li").children().removeClass("active");
        $(this).addClass("active");
        $('html,body ') .animate({
            scrollTop:        $("#sideProjectsSection").offset().top-160
        });

        console.log("Here");
        return false;
    });

    $("#nav-item-6").click(function() {
        $(".container ul li").children().removeClass("active");
        $(this).addClass("active");
        $('html,body ') .animate({
            scrollTop:        $("#contactSection").offset().top-160
        });
        return false;
    });

    $('#aboutMeSection').waypoint(function() {
        $(".container ul li").children().removeClass("active");
        $("#nav-item-2").addClass("active");
    }, { offset: "50%" });

    $('#mySkillsSection').waypoint(function() {
        $(".container ul li").children().removeClass("active");
        $("#nav-item-3").addClass("active");
    }, { offset: "25%" });

    $('#universityProjectsSection').waypoint(function() {
        $(".container ul li").children().removeClass("active");
        $("#nav-item-4").addClass("active");
    }, { offset: "50%" });

    $('#sideProjectsSection').waypoint(function() {
        $(".container ul li").children().removeClass("active");
        $("#nav-item-5").addClass("active");
    }, { offset: "50%" });

    $('#contactSection').waypoint(function() {
        $(".container ul li").children().removeClass("active");
        $("#nav-item-6").addClass("active");
    }, { offset: "100%" });

    $('#welcomeSection').waypoint(function() {
        $(".container ul li").children().removeClass("active");
        $("#nav-item-1").addClass("active");
    }, { offset: -50 });
});