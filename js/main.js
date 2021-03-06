'use strict';

function typing (element, sentence) {
    [...sentence].forEach((character, index) => {
      setTimeout(() => {
        document.querySelector(element).innerText += character;
      }, 80 * ++index);
    });
  }

	if(window.innerWidth < 768) {
		//スマホ版表示
    typing('#title', 'Kyota\ntakiyama\n\nPortfolio\nSite.');
	} else {
		//pc
    typing('#title', 'Kyota takiyama\nPortfolio Site.');
	}

  
  setTimeout(() => {
    const mask = document.getElementById('mask');
    mask.classList.add('fadeout');
  }, 2500);
  
  setTimeout(() => {
    const mask = document.getElementById('mask');
    mask.classList.add('hidden');
  }, 4500);

  setTimeout(() => {
    const head_img = document.getElementById('head_img');
    const left = document.getElementById('left');
    const right = document.getElementById('right');
 
  }, 3700);

// scroll
$(function () {
    $('a[href^="#"]').click(function () {
        var speed = 1000;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});
// scroll

// top
jQuery(window).on("scroll", function ($) {
    if (jQuery(this).scrollTop() > 100) {
        jQuery('.floating').show();
    } else {
        jQuery('.floating').hide();
    }
});

jQuery('.floating').click(function () {
    jQuery('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});
// top

// parallax
function showElementAnimation() {

    var element = document.getElementsByClassName('js-animation');
    if (!element) return;

    var showTiming = window.innerHeight > 768 ? 200 : 60;
    var scrollY = window.pageYOffset;
    var windowH = window.innerHeight;

    for (var i = 0; i < element.length; i++) {
        var elemClientRect = element[i].getBoundingClientRect(); var elemY = scrollY + elemClientRect.top; if (scrollY + windowH - showTiming > elemY) {
            element[i].classList.add('is-show');
        } else if (scrollY + windowH < elemY) {
        }
    }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);
// parallax