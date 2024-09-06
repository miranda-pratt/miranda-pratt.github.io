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

    function updateNavbar(itemToUpdate) {
        $(".container ul li").children().removeClass("activeNavbar");
        $(itemToUpdate).addClass("activeNavbar");
    }

    $('#aboutMeSection').waypoint(function(direction) {
        if (direction === 'down') {
            updateNavbar("#nav-item-2");
        }
    }, {
        offset: '50%'
    });

    $('#aboutMeSection').waypoint(function(direction) {
        if (direction === 'up') {
            updateNavbar("#nav-item-2");
        }
    }, {
        offset: '20%'
    });

    $('#mySkillsSection').waypoint(function(direction) {
        if (direction === 'down') {
            updateNavbar("#nav-item-3");
        }
    }, {
        offset: '50%'
    });

    $('#mySkillsSection').waypoint(function(direction) {
        if (direction === 'up') {
            updateNavbar("#nav-item-3");
        }
    }, {
        offset: 'bottom-in-view'
    });

    $('#universityProjectsSection').waypoint(function(direction) {
        if (direction === 'down') {
            updateNavbar("#nav-item-4");
        }
    }, {
        offset: '50%'
    });

    $('#universityProjectsSection').waypoint(function(direction) {
        if (direction === 'up') {
            updateNavbar("#nav-item-4");
        }
    }, {
        offset: 'bottom-in-view'
    });

    $('#sideProjectsSection').waypoint(function(direction) {
        if (direction === 'down') {
            updateNavbar("#nav-item-5");
        }
    }, {
        offset: '50%'
    });

    $('#sideProjectsSection').waypoint(function(direction) {
        if (direction === 'up') {
            updateNavbar("#nav-item-5");
        }
    }, {
        offset: 'bottom-in-view'
    });

    $('#contactSection').waypoint(function(direction) {
        if (direction === 'down') {
            updateNavbar("#nav-item-6");
        }
    }, {
        offset: '50%'
    });

    $('#contactSection').waypoint(function(direction) {
        if (direction === 'up') {
            updateNavbar("#nav-item-6");
        }
    }, {
        offset: 'bottom-in-view'
    });

    $('#welcomeSection').waypoint(function(direction) {
        if (direction === 'down') {
            updateNavbar("#nav-item-1");
        }
    }, {
        offset: '50%'
    });

    $('#welcomeSection').waypoint(function(direction) {
        if (direction === 'up') {
            updateNavbar("#nav-item-1");
        }
    }, {
        offset: -100
    });
});