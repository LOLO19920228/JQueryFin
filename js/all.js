$(document).ready(function () {
    $("a").click(function (e) {
        e.preventDefault();
    });
    $(".dropdownBtn").click(function (e) { 
        e.preventDefault();
        $(this).find(".dropdown").slideToggle();
        $(this).siblings().find('.dropdown').slideUp();
    });
    $(".goTop a").click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 'slow');
        // $(".goTopText").toggleClass('active');
    });
    $(".goTop").hover(function () {
            $(".goTopText").toggleClass("active")
        }, function () {
            $(".goTopText").toggleClass("active")
        }
    );
});