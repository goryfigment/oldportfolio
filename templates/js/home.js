require('./../css/general.css');
require('./../css/home.css');
require('./../library/fontawesome/fontawesome.js');
var $ = require('jquery');

$(document).ready(function() {
    $(document).on('click', '#top-button', function (e) {
        e.stopPropagation();
        $('html, body').animate({
            scrollTop: 0
        }, 1200);
    });

    $(document).on('click', '#work-button', function (e) {
        e.stopPropagation();
        var vheight = $(window).height();
        $('html, body').animate({
            scrollTop: (Math.floor($(window).scrollTop() / vheight)+1) * vheight
        }, 1200);
    });

    $(window).bind('scroll', function() {
        var $topButton = $('#top-button');
         if ($(window).scrollTop() > 500) {
             $topButton.show();
         }
         else {
             $topButton.hide();
         }
    });
});