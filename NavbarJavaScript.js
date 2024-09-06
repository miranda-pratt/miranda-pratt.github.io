$(document).ready(function() {
    $('#nav-item-1').addClass("activeNavbar");

    $("#nav-item-1").click(function() {
        $(".container ul li").children().removeClass("activeNavbar");
        $(this).addClass("activeNavbar");
        $('html, body').animate({
            scrollTop:        $("#welcomeSection").offset().top-160
        });
        return false;
    });

    $("#nav-item-2").click(function() {
        $(".container ul li").children().removeClass("activeNavbar");
        $(this).addClass("activeNavbar");
        $('html, body') .animate({
            scrollTop:        $("#aboutMeSection").offset().top-160
        });
        return false;
    });

    $("#nav-item-3").click(function() {
        $(".container ul li").children().removeClass("activeNavbar");
        $(this).addClass("activeNavbar");
        $(' html,body') .animate({
            scrollTop:        $("#mySkillsSection").offset().top-160
        });
        return false;
    });

    $("#nav-item-4").click(function() {
        $(".container ul li").children().removeClass("activeNavbar");
        $(this).addClass("activeNavbar");
        $('html,body ') .animate({
            scrollTop:        $("#universityProjectsSection").offset().top-160
        });
        return false;
    });

    $("#nav-item-5").click(function() {
        $(".container ul li").children().removeClass("activeNavbar");
        $(this).addClass("activeNavbar");
        $('html,body ') .animate({
            scrollTop:        $("#sideProjectsSection").offset().top-160
        });
        return false;
    });

    $("#nav-item-6").click(function() {
        $(".container ul li").children().removeClass("activeNavbar");
        $(this).addClass("activeNavbar");
        $('html,body ') .animate({
            scrollTop:        $("#contactSection").offset().top-160
        });
        return false;
    });

    $('#aboutMeSection').waypoint(function() {
        $(".container ul li").children().removeClass("activeNavbar");
        $("#nav-item-2").addClass("activeNavbar");
    }, { offset: "50%" });

    $('#mySkillsSection').waypoint(function() {
        $(".container ul li").children().removeClass("activeNavbar");
        $("#nav-item-3").addClass("activeNavbar");
    }, { offset: "50%" });

    $('#universityProjectsSection').waypoint(function() {
        $(".container ul li").children().removeClass("activeNavbar");
        $("#nav-item-4").addClass("activeNavbar");
    }, { offset: "50%" });

    $('#sideProjectsSection').waypoint(function() {
        $(".container ul li").children().removeClass("activeNavbar");
        $("#nav-item-5").addClass("activeNavbar");
    }, { offset: "50%" });

    $('#contactSection').waypoint(function() {
        $(".container ul li").children().removeClass("activeNavbar");
        $("#nav-item-6").addClass("activeNavbar");
    }, { offset: "100%" });

    $('#welcomeSection').waypoint(function() {
        $(".container ul li").children().removeClass("activeNavbar");
        $("#nav-item-1").addClass("activeNavbar");
    }, { offset: "50%" });
});