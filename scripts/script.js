let allowChange = false;
let section = 1;
let direction = "";
let $mainCont = $('.wrapper');
let $navigation = $('#navigation');
let $left = $('.section-left');
let animationEnd = (function(el) {
        let animations = {
            "animation": "animationend",
            "OAnimation": "oAnimationEnd",
            "MozAnimation": "mozAnimationEnd",
           "WebkitAnimation": "webkitAnimationEnd"
        }
        for(let t in animations) {
            if(el.style[t] !== undefined) {
                return animations[t];
            }
        }
})(document.createElement("fakeelement"));
console.log(animationEnd);
let $svgMap = $('#map-svg');
let $svgHead = $('#head-svg');
let svgHead = new Vivus('head-svg', {duration: 100, type: "delayed", start: "manual"});
let svgMap = new Vivus('map-svg', {duration: 150,type: "oneByOne", start: "manual"});
//
// INNER SERVICES CONTENT
//
let innerServices = {
  services1: {headline:"concept development", text:"Let us help you establish the essentials for a top tier event or festival. From artwork and trailers, to tone of voice and market positioning, we work alongside our preferred partners to produce concepts and story lines that sell tickets, open new revenue streams, and turn mere events into spectacles of sight and sound." },
  services2: {headline:"show creation", text:"It starts by putting pen to paper, writing a script, directing voice actors, overseeing the creation of soundscapes, and collaborating with talented lighting designers. All this culminating in a beautifully synchronised moment used to carry the narration of the event, even before we call in for pyrotechnics and lasers." },
  services3: {headline:"sponsorship &#38; brand activation", text:"We all face it at one point or another: that moment when the ambition of the project extends beyond the constraints of the budget. No matter what the reason, we can develop unique packages that show your sponsors the ROI they want, while showing your attendees the experience they demand." },
  services4: {headline:"marketing & promotions", text:"From coordinating street campaigns filled with flyers and posters, to establishing brand ambassadors that span a nation, promoting live events requires more than just buying ads on social media. We have years of experience in creating dedicated fan bases that will sell out your events and even make your merchandise team smile with glee." },
  services5: {headline:"stage & environment design", text:"Industry technology is accelerating daily, and the possibilities to create never before seen environments are constantly expanding. By integrating technology, theatrics and scenic design, we strive to breakdown the existing silos in the production process. Enabling you to always impress your audiences in new ways." }
};

function firstToSecond() {
  $left.addClass('animated fadeOutUp').one(animationEnd, function() {
    $left.find('h1, h2, button').css('visibility', 'hidden');
  });
  // $('#hair-img').fadeOut();
  svgHead.play(-1, function () {
    $svgMap.addClass('map-svg-second-slide');
    setTimeout(function() {
      renderAboutSlide();
    }, 500);
  });
};

function secondToFirst() {
  $svgHead.removeClass('hidden');
  svgHead.reset();
  $svgMap.removeClass('map-svg-second-slide');
  $left.find('h1, h2, button').css('visibility', 'visible');
  $('#about-wrap').addClass('animated fadeOutDown').one(animationEnd, function() {
    if (section == 1) {
      resetAboutSlide();
      $left.removeClass('fadeOutUp').addClass('fadeInDown');
      // $('#hair-img').fadeIn(2000);
      svgHead.play(1, function() {
        allowChange = true;
        console.log(allowChange);
        $('body').removeClass('disable-click');
      });
    }
  });
};

function secondToThird() {
  $svgMap.find('#map-path1').addClass('animated fadeOut');
  $svgMap.removeClass('map-svg-second-slide').addClass('map-svg-third-slide');
  $('#about-wrap').addClass('animated fadeOutUp').one(animationEnd, function() {
    if (section == 3) {
      resetAboutSlide();
      renderServicesSlide();
    }
  });
};

function thirdToSecond() {
  $('#services-wrap').addClass('animated fadeOutDown').one(animationEnd, function() {
    if (section == 2) {
      resetServicesSlide();
      setTimeout(function() {
        renderAboutSlide();
      }, 1000);
    }
  });
  $svgMap.find('#map-path1').removeClass('animated fadeOut').addClass('animated fadeIn');
  setTimeout(function() {

    $svgMap.removeClass('map-svg-third-slide').addClass('map-svg-second-slide');
  }, 1000);
};

function thirdToFourth() {
  $svgMap.addClass('animated fadeOutUp');
  $('#services-wrap').addClass('animated fadeOutUp').one(animationEnd, function() {
    if (section == 4) {
      resetServicesSlide();
      renderContactSlide(); //change this to renderPortfolioSlide(); when putting back portfolio
    }
  });
};

function fourthToThird() {
  // when putting back portfolio change selector from $('#contact-wrap') to $('#portfolio-wrap')
  $('#contact-wrap').addClass('animated fadeOutDown').one(animationEnd, function() {
    if (section == 3) {
      resetContactSlide(); //change this to resetPortfolioSlide(); when putting back portfolio
      $svgMap.removeClass('fadeOutUp map-svg-third-slide').addClass('fadeInDown map-svg-third-slide');
      $svgMap.find('#map-path1').addClass('animated fadeOut');
      renderServicesSlide();
    }
  });
};

// uncomment this whole block when putting back portfolio
// function fourthToFifth() {
//   $('#portfolio-wrap').addClass('animated fadeOutUp').one(animationEnd, function() {
//     if (section == 5) {
//       // resetPortfolioSlide();
//       renderContactSlide();
//     }
//   });
// };
//
// function fifthToFourth () {
//   $('#contact-wrap').addClass('animated fadeOutDown').one(animationEnd, function() {
//     if (section == 4) {
//       resetContactSlide();
//       // renderPortfolioSlide();
//       $('#portfolio-wrap').removeClass('fadeOutUp').addClass('fadeInDown').one(animationEnd, function() {
//         allowChange = true;
//         console.log(allowChange);
//         $('body').removeClass('disable-click');
//       });
//     }
//   });
// };

function renderAboutSlide() {
  $('#about-wrap').show();
    setTimeout(function() {
      $('#second-slide-dashed-line').show();
      $('#second-slide-content').find('h1').removeClass('hidden').addClass('animated fadeInUp').one(animationEnd, function() {
        // $(this).removeClass('animated fadeInUp');
      });
      setTimeout(function(){
        $('#second-slide-content').find('p').removeClass('hidden').addClass('animated fadeInUp').one(animationEnd, function() {
          $(this).removeClass('animated fadeInUp');
        });
      }, 500);
      setTimeout(function(){
        $('#second-slide-content').find('button').removeClass('hidden').addClass('animated fadeInUp').one(animationEnd, function() {
          $(this).removeClass('animated fadeInUp');
          allowChange = true;
          console.log(allowChange);
          $('body').removeClass('disable-click');
          // pathAnimation('1');
        });
      }, 1000);
    }, 500);
};

function resetAboutSlide() {
  $('#about-wrap').hide().removeClass('animated fadeOutUp fadeOutDown');
  $('#second-slide-content').find('h1').removeClass('animated fadeInUp').addClass('hidden');
  $('#second-slide-content').find('p').addClass('hidden');
  $('#second-slide-content').find('button').addClass('hidden');
  $('#second-slide-dashed-line').hide();
};

function renderServicesSlide() {
  $('#services-wrap').show();
  $('#third-slide-content').removeClass('hidden');
  setTimeout(function() {
    $('#line-1').show();
    $('#services-1').find('h3').removeClass('hidden').addClass('animated flash').one(animationEnd, function() {
      $(this).removeClass('animated flash');
    });
    $('#services-1').find('p').removeClass('hidden').addClass('animated fadeInUp').one(animationEnd, function() {
      $(this).removeClass('animated fadeInUp');
    });
    setTimeout(function() {
      $('#line-2').show();
      $('#services-2').find('h3').removeClass('hidden').addClass('animated flash').one(animationEnd, function() {
        $(this).removeClass('animated flash');
      });
      $('#services-2').find('p').removeClass('hidden').addClass('animated fadeInUp').one(animationEnd, function() {
        $(this).removeClass('animated fadeInUp');
      });
      setTimeout(function() {
        $('#line-3').show();
        $('#services-3').find('h3').removeClass('hidden').addClass('animated flash').one(animationEnd, function() {
          $(this).removeClass('animated flash');
        });
        $('#services-3').find('p').removeClass('hidden').addClass('animated fadeInUp').one(animationEnd, function() {
          $(this).removeClass('animated fadeInUp');
        });
        setTimeout(function() {
          $('#line-4').show();
          $('#services-4').find('h3').removeClass('hidden').addClass('animated flash').one(animationEnd, function() {
            $(this).removeClass('animated flash');
          });
          $('#services-4').find('p').removeClass('hidden').addClass('animated fadeInUp').one(animationEnd, function() {
            $(this).removeClass('animated fadeInUp');
          });
          setTimeout(function() {
            $('#line-5').show();
            $('#services-5').find('h3').removeClass('hidden').addClass('animated flash').one(animationEnd, function() {
              $(this).removeClass('animated flash');
            });
            $('#services-5').find('p').removeClass('hidden').addClass('animated fadeInUp').one(animationEnd, function() {
              $(this).removeClass('animated fadeInUp');
            });
            allowChange = true;
            console.log(allowChange);
            $('body').removeClass('disable-click');
          }, 200);
        }, 200);
      }, 200);
    }, 200);
  }, 1000);
};

function resetServicesSlide() {
  $('#services-wrap').hide().removeClass('animated fadeOutUp fadeOutDown');
  $('.third-slide-dashed-line').hide();
  $('#third-slide-content').addClass('animated fadeIn hidden').removeClass('fadeOut');
  $('.services-box').show();
  $('.services-box').find('h3').addClass('hidden');
  $('.services-box').find('p').addClass('hidden').removeClass('color-red');
};

function renderPortfolioSlide() {
  $('#portfolio-wrap').show();
    $('#portfolio-wrap').find('.slider').removeClass('hidden').addClass('animated fadeInUp').one(animationEnd, function() {
      $('#portfolio-wrap').find('#slider-navigation').removeClass('hidden').addClass('animated fadeInUp').one(animationEnd, function() {
        allowChange = true;
        console.log(allowChange);
        $('body').removeClass('disable-click');
      });
    });
};

function resetPortfolioSlide() {
  $('#portfolio-wrap').hide().removeClass('animated fadeOutUp fadeOutDown');
  $('#portfolio-wrap').find('.slider').removeClass('animated fadeInUp').addClass('hidden');
  $('#portfolio-wrap').find('#slider-navigation').removeClass('animated fadeInUp').addClass('hidden');
};

function renderContactSlide() {
  $('#contact-wrap').show();
  $('#contact-left-content').find('h1').removeClass('hidden').addClass('animated fadeInUp').one(animationEnd, function() {
    // $(this).removeClass('animated fadeInUp');
  });
  setTimeout(function() {
    $('#contact-left-content').find('ul').removeClass('hidden').addClass('animated fadeInUp').one(animationEnd, function() {
      $(this).removeClass('animated fadeInUp');
    });
  }, 500);
  $('#contact-right-content').find('.contact-input').removeClass('hidden').addClass('animated fadeInUp').one(animationEnd, function() {
    $(this).removeClass('animated fadeInUp');
  });
  setTimeout(function() {
    $('#contact-right-content').find('#contact-message').removeClass('hidden').addClass('animated fadeInUp').one(animationEnd, function() {
      $(this).removeClass('animated fadeInUp');
    });
    setTimeout(function() {
      $('#contact-right-content').find('#contact-submit').removeClass('hidden').addClass('animated fadeInUp').one(animationEnd, function() {
        $(this).removeClass('animated fadeInUp');
      });
      allowChange = true;
      console.log(allowChange);
      $('body').removeClass('disable-click');
    }, 500);
  }, 500);
};

function resetContactSlide() {
  $('#contact-wrap').hide().removeClass('animated fadeOutDown');
  $('#contact-left-content').find('h1').removeClass('animated fadeInUp').addClass('hidden');
  $('#contact-left-content').find('ul').addClass('hidden');
  $('#contact-right-content').find('.contact-input').addClass('hidden');
  $('#contact-right-content').find('#contact-message').addClass('hidden');
  $('#contact-right-content').find('#contact-submit').addClass('hidden');
};

function renderSectionUI(section, direction) {
    console.log('section in render function:', section);
    if (section == 1 && direction == "up") {
      secondToFirst();
    } else if (section == 2 && direction == "down") {
      firstToSecond();
    } else if (section == 2 && direction == "up") {
      thirdToSecond();
    } else if (section == 3 && direction == "down") {
      secondToThird();
    } else if (section == 4 && direction == "down") {
      thirdToFourth();
    } else if (section == 3 && direction == "up") {
      fourthToThird();
    }
    //uncomment this when putting back portfolio
    //else if (section == 4 && direction == "up") {
    //   fifthToFourth();
    // } else if (section == 5 && direction == "down") {
    //   fourthToFifth();
    // }
};

function renderNavigationUI(section) {
  let $navItem = $('#navigation').find('[li-data="' + section + '"]');
  $navItem.addClass('active');
  $navItem.siblings().removeClass('active');
};

function toggleMenu() {
  $('#menu-button').toggleClass('open');
  $('#header').toggleClass('background-transparent');
  if ($('#section-mobile:visible').length > 0) {
    $('#logo-mobile').toggle();
  }
  $('#menu').slideToggle(function() {
    rendMenuUI();
  });
};

function mobileNavigation(item) {
    if ($('#guide-mobile:visible').length == 1) {
      $('#close-button-mobile-guide').fadeOut(function() {
        $('#menu-button').fadeIn();
      });
      $('#guide-mobile').fadeOut(function() {
        $('#home-mobile, #about-mobile, #services-mobile, #portfolio-mobile, #contact-mobile').fadeIn(function() {
          let offset = 50;
          toSection = $(item).data('mid');
          $('html, body').animate({
              scrollTop: $('#' + toSection).offset().top - offset
          }, 500);
        });
      });
    } else {
      let offset = 50;
      toSection = $(item).data('mid');
      $('html, body').animate({
          scrollTop: $('#' + toSection).offset().top - offset
      }, 500);
    }
};

function rendMenuUI() {
  $('menu-button').toggleClass('open');
  $('#menu-left-content').find('h2').toggleClass('hidden animated fadeInDown');
  $('#menu-right-content ul li:eq(0)').toggleClass('menu-li-1');
  setTimeout(function() {
    $('#menu-left-content').find('p').toggleClass('hidden animated fadeInDown');
    $('#menu-right-content ul li:eq(1)').toggleClass('menu-li-2');
    $('#menu-right-content ul li:eq(0)').find('span').fadeToggle();
    setTimeout(function() {
      $('#menu-left-content').find('button').toggleClass('hidden animated fadeInDown');
      $('#menu-right-content ul li:eq(2)').toggleClass('menu-li-3');
      $('#menu-right-content ul li:eq(1)').find('span').fadeToggle();
      setTimeout(function() {
        $('#menu-right-content ul li:eq(3)').toggleClass('menu-li-4');
        $('#menu-right-content ul li:eq(2)').find('span').fadeToggle();
        setTimeout(function() {
          $('#menu-right-content ul li:eq(4)').toggleClass('menu-li-5');
          $('#menu-right-content ul li:eq(3)').find('span').fadeToggle();
          setTimeout(function() {
            $('#menu-right-content ul li:eq(4)').find('span').fadeToggle();
          }, 100);
        }, 100);
      }, 100);
    }, 100);
  }, 100);
};

function resetUI() {
  resetHomeSlide();
  resetAboutSlide();
  resetServicesSlide();
  resetInnerServices();
  //uncomment these two lines when putting back portfolio
  // resetPortfolioSlide();
  // resetInnerPortfolio();
  resetContactSlide();
  resetHeaderButtons();
  resetGuide();
  resetNavigation();
};

function resetHeaderButtons() {
  $('.close-button').fadeOut(function() {
    $('#menu-button').fadeIn();
  });
};

function resetInnerServices() {
  $('#inner-services-content').fadeOut(function() {
    $(this).remove();
  });
  $('.inner-services-dashed-line').fadeOut(function() {
    $(this).remove();
  });
};

// function resetInnerPortfolio() {
//
// };

function resetHomeSlide() {
  $('.section-left').removeClass('animated fadeOutUp');
  $('.section').find('h1.home').css('visibility', 'hidden');
  $('.section').find('h2.home').css('visibility', 'hidden');
  $('.section').find('button.home').css('visibility', 'hidden');
  // $('#hair-img').hide();
};

function resetMap() {
  $svgMap.removeClass('map-svg-third-slide map-svg-second-slide map-svg-inner-services animated fadeOutUp fadeOutDown');
  // $('#map-path1').removeClass('animated fadeOut');
  $svgMap.find('path').removeClass('animated fadeOut opacity-0 stroke-white stroke-red stroke-width-3');
};

function resetNavigation() {
  $navigation.fadeIn();
};

function renderHomeSlide() {
  $('#header').fadeIn();
  $('#footer').fadeIn();
  $('#navigation').fadeIn();
  setTimeout(function(){
    $('.section').find('h1.home').css('visibility', 'visible');
    $('.section').find('h1.home').addClass('animated fadeInUp').one(animationEnd, function() {
      $(this).removeClass('animated fadeInUp');
    });
  }, 1000);
  setTimeout(function(){
    $('.section').find('h2.home').css('visibility', 'visible');
    $('.section').find('h2.home').addClass('animated fadeInUp').one(animationEnd, function() {
      $(this).removeClass('animated fadeInUp');
    });
  }, 2000);
  setTimeout(function(){
    $('.section').find('button.home').css('visibility', 'visible');
    $('.section').find('button.home').addClass('animated fadeInUp').one(animationEnd, function() {
      $(this).removeClass('animated fadeInUp');
    });
  }, 3000);
  setTimeout(function(){
    $('.section').find('#head-svg').css('visibility', 'visible');
    $svgHead.removeClass('hidden');
    svgHead.play();
    // $('#hair-img').fadeIn(2000);
  }, 1000);
  setTimeout(function(){
    $('.section').find('#map-svg').css('visibility', 'visible');
    svgMap.play(function() {
      if (window.innerWidth > 1024) {
        allowChange = true;
        console.log(allowChange);
        $('body').removeClass('disable-click');
      }
    });
  }, 1000);
};

function home() {
  allowChange = false;
  if ($('#menu:visible').length == 1) {
    toggleMenu();
  }
  if (section == 1 && $('.guide-wrapper:visible').length == 0) {
    return;
  }
  if ($('#inner-services-content').length) {
    // TODO: ovo sredeiti, ponavlja se
    $(document).on('mouseleave', '.services-box', function() {
      console.log("mouse leave");
      let index = $(this).attr('data-mid');
      // $svgMap.addClass('map-svg-second-slide');
      $('.map-svg-third-slide #map-path' + index + '').siblings('path').removeClass('stroke-white');
      $('.map-svg-third-slide #map-path' + index + '').removeClass('stroke-red');
      $(this).find('p').removeClass('color-red');
    });
    ////////
  }
  if (section == 4 || section == 5) {
    svgMap.reset();
    setTimeout(function(){
      section = 1;
      resetUI();
      resetMap();
      renderHomeSlide();
      $('#navigation').find('li:eq(0)').addClass('active');
      $('#navigation').find('li:eq(0)').siblings('li').removeClass('active');
    }, 500);
  } else {
  section = 1;
  resetUI();
  resetMap();
  renderHomeSlide();
  $('#navigation').find('li:eq(0)').addClass('active');
  $('#navigation').find('li:eq(0)').siblings('li').removeClass('active');
}
};

function showAbout() {
  if ($('#menu:visible').length == 1) {
    toggleMenu();
  }
  if (section == 2) {
    return;
  } else {
    section = 2;
    resetUI();
    $left.addClass('animated fadeOutUp');
    $svgHead.addClass('hidden');
    svgHead.reset();
    $svgMap.find('#map-path1').removeClass('animated fadeOut');
    $svgMap.removeClass('map-svg-third-slide animated fadeOutUp').addClass('map-svg-second-slide');
    renderAboutSlide();
    svgMap.finish();
    $('#navigation').find('li:eq(1)').addClass('active');
    $('#navigation').find('li:eq(1)').siblings('li').removeClass('active');
  }
};

function showServices() {
  if ($('#menu:visible').length == 1) {
    toggleMenu();
  }
  if (section == 3) {
    return;
  } else {
    section = 3;
    resetUI();
    $left.addClass('animated fadeOutUp');
    $svgHead.addClass('hidden');
    svgHead.reset();
    $svgMap.find('#map-path1').addClass('animated fadeOut');
    $svgMap.removeClass('map-svg-second-slide animated fadeOutUp').addClass('map-svg-third-slide');
    renderServicesSlide();
    svgMap.finish();
    $('#navigation').find('li:eq(2)').addClass('active');
    $('#navigation').find('li:eq(2)').siblings('li').removeClass('active');
  }
};

function showPortfolio() {
  if ($('#menu:visible').length == 1) {
    toggleMenu();
  }
  if (section == 4) {
    return;
  } else {
    section = 4;
    resetUI();
    $left.addClass('animated fadeOutUp');
    svgHead.play(-3, function() {
      $svgHead.addClass('hidden');
      svgHead.reset();
    });
    svgMap.play(-5, function() {
      setTimeout(function() {
        renderPortfolioSlide();
        $svgMap.addClass('map-svg-third-slide animated fadeOutUp').one(animationEnd, function() {
          svgMap.finish();
        });
      }, 1000);
    });
    $('#navigation').find('li:eq(3)').addClass('active');
    $('#navigation').find('li:eq(3)').siblings('li').removeClass('active');
  }
};

function showContact(cont) {
  if ($('#menu:visible').length == 1) {
    toggleMenu();
  }
  //when putting back portfolio change condition to section = 5
  if (section == 4) {
    return;
  } else {
    //when putting back portfolio change this to section = 5
    section = 4;
    resetUI();
    $left.addClass('animated fadeOutUp');
    svgHead.play(-3, function() {
      $svgHead.addClass('hidden');
      svgHead.reset();
    });
    svgMap.play(-5, function() {
      setTimeout(function() {
        renderContactSlide();
        //when putting back portfolio uncomment this block below
        // $('#portfolio-wrap').show().addClass('animated fadeOutUp').one(animationEnd, function () {
        //   $('#portfolio-wrap').find('.slider').removeClass('hidden');
        //   $('#portfolio-wrap').find('#slider-navigation').removeClass('hidden');
        // });
        $svgMap.addClass('map-svg-third-slide animated fadeOutUp').one(animationEnd, function() {
          svgMap.finish();
        });
      }, 1000);
    });
    //when putting back portfolio chage both of these li:eq(3) to li:eq(4)
    $('#navigation').find('li:eq(3)').addClass('active');
    $('#navigation').find('li:eq(3)').siblings('li').removeClass('active');
  }
};

function disableScrollAndClick() {
  allowChange = false;
  console.log('allow change:', allowChange);
  $('body').addClass('disable-click');
};

function pathAnimation(param) {
  let curve = $('#map-path' + param);
  if (param == '1') {
    let path1 = curve.attr('d');
    console.log(path1);
    let path2 = "M134.9,87.9c-2,7.4,7.8,14.2,13.2,21.9c11.9,16.9,10.6,47.3-0.2,61.5c-12.9,17-35.8,24.4-56.8,28.4c-24.8,4.7-53.4,4.3-70.5,22.8C8.5,235.4,5.7,254,3.5,271.4c-1.7,13.3-3.2,27.4,2.4,39.5c4.8,10.4,14.1,17.9,24,23.8c36.5,21.6,83.9,21.4,122,2.6c23.5-11.6,43.1-28.2,67.2-38.3c17.3-7.3,36.2-9.8,54-15.8c24.1-8.2,42.1-25,54.6-47.2c12.4-22.2,17.6-50.3,2.6-70.9c-11.4-15.7-30.4-25.1-40-42c-11.6-20.2-9.2-47-21.9-66.6c-8.6-13.2-21.5-20.7-35.8-27.1c-18.1-8.1-36.4-15.4-55.1-22.1c-13.4-4.8-28.6-7.8-40,0.7c-10,7.4-12.6,23.5-10,35.1c3.9,17.8,18.6,27.5,14.1,36.9C139.5,84,136,83.8,134.9,87.9z";
    let path3 = "M134.9,87.9c-2,7.4,7.8,14.2,13.2,21.9c11.9,16.9,10.4,47.1-0.4,61.3c-12.9,17-35.6,24.6-56.6,28.6c-24.8,4.7-53.4,4.3-70.5,22.8C8.5,235.4,5.7,254,3.5,271.4c-1.7,13.3-3.2,27.4,2.4,39.5c4.8,10.4,14.1,17.9,24,23.8c36.5,21.6,83.9,21.6,122,2.8c23.5-11.6,43.1-28.4,67.2-38.5c17.3-7.3,36.2-9.8,54-15.8c24.1-8.2,42.4-24.9,54.9-47.1c12.4-22.2,17.3-50.4,2.3-71c-11.4-15.7-30.4-25.1-40-42c-11.6-20.2-9-47-21.7-66.6c-8.6-13.2-21.7-20.7-36-27.1c-18.1-8.1-36.4-15.4-55.1-22.1c-13.4-4.8-28.7-7.9-40.1,0.6c-10,7.4-12.5,23.6-9.9,35.2c3.9,17.8,18.6,27.5,14.1,36.9C139.5,84,136,83.8,134.9,87.9z";
    let path4 = "M134.9,87.9c-2,7.4,7.8,14.2,13.2,21.9c11.9,16.9,10.3,47-0.5,61.2c-12.9,17-35.5,24.7-56.5,28.7c-24.8,4.7-53.4,4.3-70.5,22.8C8.5,235.4,5.7,254,3.5,271.4c-1.7,13.3-3.2,27.4,2.4,39.5c4.8,10.4,14.1,17.9,24,23.8c36.5,21.6,83.9,21.7,122,2.9c23.5-11.6,43.1-28.5,67.2-38.6c17.3-7.3,36.2-9.8,54-15.8c24.1-8.2,42.7-24.8,55.2-47c12.4-22.2,17-50.5,2-71.1c-11.4-15.7-30.4-25.1-40-42c-11.6-20.2-8.9-47-21.6-66.6c-8.6-13.2-21.8-20.7-36.1-27.1c-18.1-8.1-36.4-15.4-55.1-22.1c-13.4-4.8-28.8-8-40.2,0.5c-10,7.4-12.4,23.7-9.8,35.3c3.9,17.8,18.6,27.5,14.1,36.9C139.5,84,136,83.8,134.9,87.9z";
    let path5 = "M134.9,87.9c-2,7.4,7.8,14.2,13.2,21.9c11.9,16.9,10.1,46.8-0.7,61c-12.9,17-35.3,24.9-56.3,28.9c-24.8,4.7-53.4,4.3-70.5,22.8C8.5,235.4,5.7,254,3.5,271.4c-1.7,13.3-3.2,27.4,2.4,39.5c4.8,10.4,14.1,17.9,24,23.8c36.5,21.6,83.9,21.9,122,3.1c23.5-11.6,43.1-28.7,67.2-38.8c17.3-7.3,36.2-9.8,54-15.8c24.1-8.2,43.1-24.7,55.6-46.9c12.4-22.2,16.6-50.6,1.6-71.2c-11.4-15.7-30.4-25.1-40-42c-11.6-20.2-8.7-47-21.4-66.6c-8.6-13.2-22-20.7-36.3-27.1c-18.1-8.1-36.4-15.4-55.1-22.1c-13.4-4.8-28.8-8-40.2,0.5c-10,7.4-12.4,23.7-9.8,35.3c3.9,17.8,18.6,27.5,14.1,36.9C139.5,84,136,83.8,134.9,87.9z";
    let path6 = "M134.9,87.9c-2,7.4,7.8,14.2,13.2,21.9c11.9,16.9,10,46.7-0.8,60.9c-12.9,17-35.2,25-56.2,29c-24.8,4.7-53.4,4.3-70.5,22.8C8.5,235.4,5.7,254,3.5,271.4c-1.7,13.3-3.2,27.4,2.4,39.5c4.8,10.4,14.1,17.9,24,23.8c36.5,21.6,83.9,22,122,3.2c23.5-11.6,43.1-28.8,67.2-38.9c17.3-7.3,36.2-9.8,54-15.8c24.1-8.2,43.4-24.6,55.9-46.8c12.4-22.2,16.3-50.7,1.3-71.3c-11.4-15.7-30.4-25.1-40-42c-11.6-20.2-8.6-47-21.3-66.6c-8.6-13.2-22.1-20.7-36.4-27.1c-18.1-8.1-36.4-15.4-55.1-22.1c-13.4-4.8-28.9-8.1-40.3,0.4c-10,7.4-12.3,23.8-9.7,35.4c3.9,17.8,18.6,27.5,14.1,36.9C139.5,84,136,83.8,134.9,87.9z";
    let path7 = "M134.9,87.9c-2,7.4,7.8,14.2,13.2,21.9c11.9,16.9,10,46.7-0.8,60.9c-12.9,17-35.2,25-56.2,29c-24.8,4.7-53.4,4.3-70.5,22.8C8.5,235.4,5.7,254,3.5,271.4c-1.7,13.3-3.2,27.4,2.4,39.5c4.8,10.4,14.1,17.9,24,23.8c36.5,21.6,83.9,22,122,3.2c23.5-11.6,43.1-28.8,67.2-38.9c17.3-7.3,36.2-9.8,54-15.8c24.1-8.2,43.4-24.6,55.9-46.8c12.4-22.2,16.3-50.7,1.3-71.3c-11.4-15.7-30.4-25.1-40-42c-11.6-20.2-8.6-47-21.3-66.6c-8.6-13.2-22.1-20.7-36.4-27.1c-18.1-8.1-36.4-15.4-55.1-22.1c-13.4-4.8-28.9-8.1-40.3,0.4c-10,7.4-12.3,23.8-9.7,35.4c3.9,17.8,18.6,27.5,14.1,36.9C139.5,84,136,83.8,134.9,87.9z";
    let path8 = "M134.9,87.9c-2,7.4,7.8,14.2,13.2,21.9c11.9,16.9,9.8,46.5-1,60.7c-12.9,17-35,25.2-56,29.2c-24.8,4.7-53.4,4.3-70.5,22.8C8.5,235.4,5.7,254,3.5,271.4c-1.7,13.3-3.2,27.4,2.4,39.5c4.8,10.4,14.1,17.9,24,23.8c36.5,21.6,83.9,22.2,122,3.4c23.5-11.6,43.1-29,67.2-39.1c17.3-7.3,36.2-9.8,54-15.8c24.1-8.2,43.8-24.5,56.3-46.7c12.4-22.2,15.9-50.8,0.9-71.4c-11.4-15.7-30.4-25.1-40-42c-11.6-20.2-8.4-47-21.1-66.6c-8.6-13.2-22.3-20.7-36.6-27.1c-18.1-8.1-36.4-15.4-55.1-22.1c-13.4-4.8-29-8.2-40.4,0.3c-10,7.4-12.2,23.9-9.6,35.5c3.9,17.8,18.6,27.5,14.1,36.9C139.5,84,136,83.8,134.9,87.9z";
    let path9 = "M134.9,87.9c-2,7.4,7.8,14.2,13.2,21.9c11.9,16.9,9.7,46.4-1.1,60.6c-12.9,17-34.9,25.3-55.9,29.3c-24.8,4.7-53.4,4.3-70.5,22.8C8.5,235.4,5.7,254,3.5,271.4c-1.7,13.3-3.2,27.4,2.4,39.5c4.8,10.4,14.1,17.9,24,23.8c36.5,21.6,83.9,22.3,122,3.5c23.5-11.6,43.1-29.1,67.2-39.2c17.3-7.3,36.2-9.8,54-15.8c24.1-8.2,44.1-24.4,56.6-46.6c12.4-22.2,15.6-50.9,0.6-71.5c-11.4-15.7-30.4-25.1-40-42c-11.6-20.2-8.3-47-21-66.6c-8.6-13.2-22.4-20.7-36.7-27.1c-18.1-8.1-36.4-15.4-55.1-22.1C164.1,2.5,148.4-1,137,7.5c-10,7.4-12.1,24-9.5,35.6c3.9,17.8,18.6,27.5,14.1,36.9C139.5,84,136,83.8,134.9,87.9z";
    let path10 = "M134.9,86.9c-2,7.4,7.8,14.2,13.2,21.9c11.9,16.9,9.5,46.2-1.3,60.4c-12.9,17-34.7,25.5-55.7,29.5c-24.8,4.7-53.4,4.3-70.5,22.8C8.5,234.4,5.7,253,3.5,270.4c-1.7,13.3-3.2,27.4,2.4,39.5c4.8,10.4,14.1,17.9,24,23.8c36.5,21.6,83.9,22.5,122,3.7c23.5-11.6,43.1-29.3,67.2-39.4c17.3-7.3,36.2-9.8,54-15.8c24.1-8.2,44.5-24.2,57-46.4c12.4-22.2,15.2-51.1,0.2-71.7c-11.4-15.7-30.4-25.1-40-42c-11.6-20.2-8.1-47-20.8-66.6c-8.6-13.2-22.6-20.7-36.9-27.1c-18.1-8.1-36.4-15.4-55.1-22.1C164.1,1.5,148.4-2,137,6.5c-10,7.4-12.1,24-9.5,35.6c3.9,17.8,18.6,27.5,14.1,36.9C139.5,83,136,82.8,134.9,86.9z";
    let path11 = "M134.9,87.9c-2,7.4,7.8,14.2,13.2,21.9c11.9,16.9,9.4,46.1-1.4,60.3c-12.9,17-34.6,25.6-55.6,29.6c-24.8,4.7-53.4,4.3-70.5,22.8C8.5,235.4,5.7,254,3.5,271.4c-1.7,13.3-3.2,27.4,2.4,39.5c4.8,10.4,14.1,17.9,24,23.8c36.5,21.6,83.9,22.6,122,3.8c23.5-11.6,43.1-29.4,67.2-39.5c17.3-7.3,36.2-9.8,54-15.8c24.1-8.2,44.8-24.1,57.3-46.3c12.4-22.2,14.9-51.2-0.1-71.8c-11.4-15.7-30.4-25.1-40-42c-11.6-20.2-8-47-20.7-66.6c-8.6-13.2-22.7-20.7-37-27.1c-18.1-8.1-36.4-15.4-55.1-22.1c-13.4-4.8-29.2-8.4-40.6,0.1c-10,7.4-12,24.1-9.4,35.7c3.9,17.8,18.6,27.5,14.1,36.9C139.5,84,136,83.8,134.9,87.9z";
    let path12 = "M134.9,87.9c-2,7.4,7.8,14.2,13.2,21.9c11.9,16.9,9.2,45.9-1.6,60.1c-12.9,17-34.4,25.8-55.4,29.8c-24.8,4.7-53.4,4.3-70.5,22.8C8.5,235.4,5.7,254,3.5,271.4c-1.7,13.3-3.2,27.4,2.4,39.5c4.8,10.4,14.1,17.9,24,23.8c36.5,21.6,83.9,22.8,122,4c23.5-11.6,43.1-29.6,67.2-39.7c17.3-7.3,36.2-9.8,54-15.8c24.1-8.2,45.1-24,57.6-46.2c12.4-22.2,14.6-51.3-0.4-71.9c-11.4-15.7-30.4-25.1-40-42c-11.6-20.2-7.8-47-20.5-66.6c-8.6-13.2-22.9-20.7-37.2-27.1c-18.1-8.1-36.4-15.4-55.1-22.1c-13.4-4.8-29.3-8.5-40.7,0c-10,7.4-11.9,24.2-9.3,35.8c3.9,17.8,18.6,27.5,14.1,36.9C139.5,84,136,83.8,134.9,87.9z";
    let path13 = "M134.9,87.9c-2,7.4,7.8,14.2,13.2,21.9c11.9,16.9,9.1,45.8-1.7,60c-12.9,17-34.3,25.9-55.3,29.9c-24.8,4.7-53.4,4.3-70.5,22.8C8.5,235.4,5.7,254,3.5,271.4c-1.7,13.3-3.2,27.4,2.4,39.5c4.8,10.4,14.1,17.9,24,23.8c36.5,21.6,83.9,22.9,122,4.1c23.5-11.6,43.1-29.7,67.2-39.8c17.3-7.3,36.2-9.8,54-15.8c24.1-8.2,45.5-23.9,58-46.1c12.4-22.2,14.2-51.4-0.8-72c-11.4-15.7-30.4-25.1-40-42c-11.6-20.2-7.7-47-20.4-66.6c-8.6-13.2-23-20.7-37.3-27.1c-18.1-8.1-36.4-15.4-55.1-22.1c-13.4-4.8-29.4-8.6-40.8-0.1c-10,7.4-11.8,24.3-9.2,35.9c3.9,17.8,18.6,27.5,14.1,36.9C139.5,84,136,83.8,134.9,87.9z";
    let path14 = "M134.9,87.9c-2,7.4,7.8,14.2,13.2,21.9c11.9,16.9,8.8,45.5-2,59.7c-12.9,17-34,26.2-55,30.2c-24.8,4.7-53.4,4.3-70.5,22.8C8.5,235.4,5.7,254,3.5,271.4c-1.7,13.3-3.2,27.4,2.4,39.5c4.8,10.4,14.1,17.9,24,23.8c36.5,21.6,83.9,23.2,122,4.4c23.5-11.6,43.1-30,67.2-40.1c17.3-7.3,36.2-9.8,54-15.8c24.1-8.2,46.2-23.7,58.7-45.9c12.4-22.2,13.5-51.6-1.5-72.2c-11.4-15.7-30.4-25.1-40-42c-11.6-20.2-7.4-47-20.1-66.6c-8.6-13.2-23.3-20.7-37.6-27.1c-18.1-8.1-36.4-15.4-55.1-22.1c-13.4-4.8-29.5-8.7-40.9-0.2c-10,7.4-11.7,24.4-9.1,36c3.9,17.8,18.6,27.5,14.1,36.9C139.5,84,136,83.8,134.9,87.9z";
    let path15 = "M134.9,87.9c-2,7.4,7.8,14.2,13.2,21.9c11.9,16.9,8.6,45.3-2.2,59.5c-12.9,17-33.8,26.4-54.8,30.4c-24.8,4.7-53.4,4.3-70.5,22.8C8.5,235.4,5.7,254,3.5,271.4c-1.7,13.3-3.2,27.4,2.4,39.5c4.8,10.4,14.1,17.9,24,23.8c36.5,21.6,83.9,23.4,122,4.6c23.5-11.6,43.1-30.2,67.2-40.3c17.3-7.3,36.2-9.8,54-15.8c24.1-8.2,46.5-23.6,59-45.8c12.4-22.2,13.2-51.7-1.8-72.3c-11.4-15.7-30.4-25.1-40-42c-11.6-20.2-7.2-47-19.9-66.6c-8.6-13.2-23.5-20.7-37.8-27.1c-18.1-8.1-36.4-15.4-55.1-22.1c-13.4-4.8-29.6-8.8-41-0.3c-10,7.4-11.6,24.5-9,36.1c3.9,17.8,18.6,27.5,14.1,36.9C139.5,84,136,83.8,134.9,87.9z";
  }

  let arrayPaths = [path1, path2, path3, path4, path5, path6, path7, path8, path9, path10, path11, path12, path13, path14, path15];

  let curPathIndex = -1;

  let intervalPath = setInterval(function() {
    ++curPathIndex;
    if (curPathIndex >= arrayPaths.length) {
        curPathIndex = 0;
    }
    curve.attr('d', arrayPaths[curPathIndex]);
  }, 70);

};

function checkWindowWidthOnResize() {
  if (window.innerWidth < 1024) {
    if (allowChange) {
      allowChange = false;
      console.log(allowChange);
      $('body').removeClass('disable-click');
    }
  } else {
    if (!allowChange) {
      allowChange = true;
      console.log(allowChange);
    }
  }
};

function svgHeadHover() {
  $svgHead.find('path').hover(
    function() {
      $(this).css('opacity', '0.4');
    },
    function() {
      $(this).css('opacity', '1');
    }
  );
};

function checkWindowWidthOnLoad() {
  if (window.innerWidth < 1024) {
      allowChange = false;
      console.log(allowChange,'mobile view');
      $('body').removeClass('disable-click');
  }
};

//mobile header ui
function mobileHeaderUI() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('#header').css('background', '#151515');
    } else {
      $('#header').css('background', 'transparent');
    }
  });
};

//mobile expand
function mobileExpandInit(param) {
    let child_id = $(param).attr('parent-id');
    // let child = $('#child-' + child_id);
    let item = $(param);
    $(param).toggleClass('active');
    $(param).siblings('#child-' + child_id).slideToggle();
    $(param).siblings('.expand').removeClass('active');
    $(param).siblings('#child-' + child_id).siblings('.sub-expand').slideUp();
    setTimeout(function() {
      $('html, body').animate({
        scrollTop: item.offset().top - 100
      }, 1000);
    },500);
};

//home mobile
function homeMobile() {
  $('#inner-guide-mobile').fadeOut(function() {
    $('#home-mobile, #about-mobile, #services-mobile, #portfolio-mobile, #contact-mobile').fadeIn();
  });
  $('#guide-mobile').fadeOut(function() {
    $('#home-mobile, #about-mobile, #services-mobile, #portfolio-mobile, #contact-mobile').fadeIn();
  });
  $('#inner-portfolio-mobile').fadeOut(function() {
    $('#home-mobile, #about-mobile, #services-mobile, #portfolio-mobile, #contact-mobile').fadeIn();
  });
  $('html, body').animate({
    scrollTop: 0
  }, 1000);
};


$(document).ready(function() {

});

$(window).on('load', function() {

    $('.loader').fadeOut();
    disableScrollAndClick();
    renderHomeSlide();
    checkWindowWidthOnLoad();
    mobileHeaderUI();
    // svgHeadHover();
    window.onresize = function() {
      checkWindowWidthOnResize();
    };

    //hover and click events on services options - slide 3
    $(document).on('mouseenter', '.services-box', function() {
      console.log("mouse enter");
      let index = $(this).attr('data-mid');
      console.log(index);
      $svgMap.removeClass('map-svg-second-slide');
      $('.map-svg-third-slide #map-path' + index + '').siblings('path').not('#map-path1').addClass('stroke-white');
      $('.map-svg-third-slide #map-path' + index + '').addClass('stroke-red');
      $(this).find('p').addClass('color-red');
    });
    $(document).on('mouseleave', '.services-box', function() {
      console.log("mouse leave");
      let index = $(this).attr('data-mid');
      // $svgMap.addClass('map-svg-second-slide');
      $('.map-svg-third-slide #map-path' + index + '').siblings('path').removeClass('stroke-white');
      $('.map-svg-third-slide #map-path' + index + '').removeClass('stroke-red');
      $(this).find('p').removeClass('color-red');
    });
    $(document).on('click', '.services-box', function() {
      allowChange = false;
      console.log(allowChange);
      let index = $(this).attr('data-mid');
      console.log("mouse click");
      $(document).off('mouseleave', '.services-box');
      $navigation.fadeOut();
      $('#third-slide-content').addClass('animated fadeOut');
      $('.map-svg-third-slide #map-path' + index + '').siblings('path').addClass('opacity-0');
      $('.map-svg-third-slide #map-path' + index + '').addClass('stroke-width-3');
      $('.services-box').fadeOut();
      $('.third-slide-dashed-line').fadeOut();
      $mainCont.append('<div id="inner-services-content" class="animated fadeIn"><h1></h1><p></p><button onclick="showContact();" type="button">contact us</button></div>');
      switch (index) {
        case '2':
          $('#inner-services-content').find('h1').html(innerServices.services1.headline);
          $('#inner-services-content').find('p').html(innerServices.services1.text);
          setTimeout(function() {
            $svgMap.addClass('map-svg-inner-services');
          }, 1000);
          setTimeout(function() {
            $mainCont.append('<span class="inner-services-dashed-line" id="inner-services-dashed-line-1"></span>');
          }, 1500);
          break;
        case '3':
          $('#inner-services-content').find('h1').html(innerServices.services2.headline);
          $('#inner-services-content').find('p').html(innerServices.services2.text);
          setTimeout(function() {
            $svgMap.addClass('map-svg-inner-services');
          }, 1000);
          setTimeout(function() {
            $mainCont.append('<span class="inner-services-dashed-line" id="inner-services-dashed-line-2"></span>');
          }, 1500);
          break;
        case '4':
          $('#inner-services-content').find('h1').html(innerServices.services3.headline);
          $('#inner-services-content').find('p').html(innerServices.services3.text);
          setTimeout(function() {
            $svgMap.addClass('map-svg-inner-services');
          }, 1000);
          setTimeout(function() {
            $mainCont.append('<span class="inner-services-dashed-line" id="inner-services-dashed-line-3"></span>');
          }, 1500);
          break;
        case '5':
          $('#inner-services-content').find('h1').html(innerServices.services4.headline);
          $('#inner-services-content').find('p').html(innerServices.services4.text);
          setTimeout(function() {
            $svgMap.addClass('map-svg-inner-services');
          }, 1000);
          setTimeout(function() {
            $mainCont.append('<span class="inner-services-dashed-line" id="inner-services-dashed-line-4"></span>');
          }, 1500);
          break;
        case '6':
          $('#inner-services-content').find('h1').html(innerServices.services5.headline);
          $('#inner-services-content').find('p').html(innerServices.services5.text);
          setTimeout(function() {
            $svgMap.addClass('map-svg-inner-services');
          }, 1000);
          setTimeout(function() {
            $mainCont.append('<span class="inner-services-dashed-line" id="inner-services-dashed-line-5"></span>');
          }, 1500);
      }
      setTimeout(function() {
        $('#inner-services-content').find('h1').css('visibility', 'visible');
        $('#inner-services-content').find('h1').addClass('animated fadeInUp');
        setTimeout(function(){
          $('#inner-services-content').find('p').css('visibility', 'visible');
          $('#inner-services-content').find('p').addClass('animated fadeInUp');
        }, 500);
        setTimeout(function(){
          $('#inner-services-content').find('button').css('visibility', 'visible');
          $('#inner-services-content').find('button').addClass('animated fadeInUp');
        }, 1000);
      }, 2000);
      $('#menu-button').fadeOut(function() {
        $('#close-button').fadeIn();
      });
      $('#close-button').click(function() {
        $(this).fadeOut(function() {
          $('#menu-button').fadeIn();
        });
        $('#inner-services-content').addClass('animated fadeOut').one(animationEnd, function() {
          $(this).remove();
        });
        $('.inner-services-dashed-line').fadeOut(400, function() {
          $('.inner-services-dashed-line').remove();
        });
        setTimeout(function() {
          $svgMap.removeClass('map-svg-inner-services');
          setTimeout(function() {
            // TODO: ovo sredeiti, ponavlja se
            $(document).on('mouseleave', '.services-box', function() {
              console.log("mouse leave");
              let index = $(this).attr('data-mid');
              // $svgMap.addClass('map-svg-second-slide');
              $('.map-svg-third-slide #map-path' + index + '').siblings('path').removeClass('stroke-white');
              $('.map-svg-third-slide #map-path' + index + '').removeClass('stroke-red');
              $(this).find('p').removeClass('color-red');
            });
            ////////
            // $svgMap.addClass('map-svg-second-slide');
            $('.map-svg-third-slide #map-path' + index + '').siblings('path').removeClass('opacity-0 stroke-white');
            $('.map-svg-third-slide #map-path' + index + '').removeClass('stroke-width-3 stroke-red');
            $('.services-box h3').removeClass('animated flash');
            $('.services-box p').removeClass('color-red');
            $('.services-box').fadeIn();
            $('.third-slide-dashed-line').fadeIn();
            $('#third-slide-content').removeClass('fadeInUp fadeOut');
            $('#third-slide-content').addClass('fadeIn');
            $navigation.fadeIn(function() {
              allowChange = true;
              console.log(allowChange);
              $('body').removeClass('disable-click');
            });
          }, 1000)
        }, 1000);
      });
    });


    //scroll mouse wheel
    $(window).bind('mousewheel DOMMouseScroll', function(event){
      if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
        // scroll up
        if (!allowChange) {
          return;
        } else {
          direction = "up";
          if (section > 1) {
            section--;
            renderSectionUI(section, direction);
            renderNavigationUI(section);
            console.log('scroll up');
            allowChange = false;
            console.log(allowChange);
            $('body').addClass('disable-click');
            console.log(section);
          }
        }
        // setTimeout(function(){allowChange = true}, 1500);
      }
      else {
        // scroll down
        if (!allowChange) {
          return;
        } else {
          direction = "down";
          //when putting back portfolio cahnge this condition to section < 5
          if (section < 4) {
            section++;
            renderSectionUI(section, direction);
            renderNavigationUI(section);
            console.log('scroll down');
            console.log(section);
            allowChange = false;
            console.log(allowChange);
            $('body').addClass('disable-click');
            // setTimeout(function(){allowChange = true}, 2000);
          }
        }
      }
    });

});
