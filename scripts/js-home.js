setTimeout(function() { //ТАЙМАУТ НАЧАЛО
    //ЗАГРУЗКА
    jQuery('#wrapper').hide();
    jQuery("body").append('<div class="loading" id="load"><div class="loading-text"><span class="loading-text-words">В</span><span class="loading-text-words">З</span><span class="loading-text-words">Г</span><span class="loading-text-words">Л</span><span class="loading-text-words">Я</span><span class="loading-text-words">Д</span><span class="loading-text-words"></div>');

setTimeout(function() {
    jQuery(".loading").fadeOut(5000); //скорость пропадания первого слова
    jQuery('#wrapper').show();
}, 3000); //скорость загрузки первого слова

let line = document.createElement('div');
line.className = 'line';
document.getElementById('load').appendChild(line);

//НОВАЯ СИЛА
    let everyChildren = jQuery('span.every').children();
    let skinChildren = jQuery('span.skin').children();

    let countEveryChildren = jQuery("span.every span").length;
    let countSkinChildren = jQuery("span.skin span").length;

  // НОВАЯ
      setTimeout(function() {
        for (let i = 0; i < countEveryChildren; i++) {
          jQuery(everyChildren.eq(i)).text(function(index) {
            return every[i];
          });
          let Every = jQuery(everyChildren.eq(i));
          let fromEvery = { left: '-6.5vw', autoAlpha: 0, filter: 'blur(100px)' }
          let toEvery = { left: '0' + (i * 1.5) + 'vw', autoAlpha: 1, filter: 'blur(0px)' }
          TweenMax.to(jQuery('span.every'), 1.8, { left: '5.65vw' });
          TweenMax.fromTo(Every, 1 * 2.5, fromEvery, toEvery);
        }
      }, 3000);

  // СИЛА
      setTimeout(function() {
        for (let i = 0; i < countSkinChildren; i++) {
          jQuery(skinChildren.eq(i)).text(function(index) {
            return skin[i];
          });
          let Skin = jQuery(skinChildren.eq(i));
          let fromSkin = { left: '1vw', autoAlpha: 0, filter: 'blur(100px)' }
          let toSkin = { left: '0' + (i * 1.5) + 'vw', autoAlpha: 1, filter: 'blur(0px)' }
          TweenMax.to(jQuery('span.skin'), 1.8, { left: '14.65vw' });
          TweenMax.fromTo(Skin, 1 * 2.5, fromSkin, toSkin);
        }
      }, 3500);

//ЭТО МЫ
    let hasChildren = jQuery('span.has').children();
    let anChildren = jQuery('span.an').children();
    let countHasChildren = jQuery("span.has span").length;
    let countAnChildren = jQuery("span.an span").length;

   // ЭТО
     setTimeout(function() {
         for (let i = 0; i < countHasChildren; i++) {
           jQuery(hasChildren.eq(i)).text(function(index) {
            return has[i];
           });
           let Has = jQuery(hasChildren.eq(i));
           let fromHas = { left: '-11vw', autoAlpha: 0, filter: 'blur(5px)' }
           let toHas = { left: '0' + (i * 1.5) + 'vw', autoAlpha: 1, filter: 'blur(0px)' }
           TweenMax.to(jQuery('span.has'), 1.8, { left: '50.5vw' });
           TweenMax.fromTo(Has, 1 * 2, fromHas, toHas);
    }

          let tl = new TimelineLite();

          //ВЕРХНИЙ КРУГ
          tl.add(TweenLite.to(jQuery('.co1'), 2, { autoAlpha: 0.21, top: '10.2vw' }), "-=0.8");
          //НИЖНИЙ КРУГ
          tl.add(TweenLite.to(jQuery('.co2'), 2, { autoAlpha: 0.25, top: '21.5vw' }), "-=0.8");
          //ТЫ
          tl.add(TweenLite.to(jQuery('.hhl2'), 2.3, { autoAlpha: 1, left: '57.8vw', filter: 'blur(0px)' }), "-=1.8");
          //УВИДИШЬ
          tl.add(TweenLite.to(jQuery('.hhl3'), 2.3, { autoAlpha: 1, top: '41.5vw', filter: 'blur(0px)' }), "-=1.7");
          //ЛОГО ВЕРХНИЙ ЛЕВЫЙ УГОЛ
          tl.add(TweenLite.to(jQuery('#branding'), 1.2, { autoAlpha: 1, padding: '2.5vw 5vw 0 5vw', filter: 'blur(0px)' }), "-=1.6");
          //МЕНЮ СПРАВА
          tl.add(TweenLite.to(jQuery('ul#menu-glavni-hr'), 1.2, { display: 'flex', autoAlpha: 1, filter: 'blur(0px)', marginRight: '4.8vw' }), "-=1");
          //СКРОЛЛ
          tl.add(TweenLite.to(jQuery('body'), 0.5, { position: 'initial' }), "-=1.4");
          tl.add(TweenLite.to(jQuery('canvas'), 0.5, { display: 'block' }), "-=1.4");

   }, 3750);

//картинка и текст середина
    let feedChildren = jQuery('span.feed').children();
    let countFeedChildren = jQuery("span.feed span").length;

jQuery('.ps1')
        .scrolledIntoView()
        .one('scrolledin', function() {
            for (let i = 0; i < countFeedChildren; i++) {
            }

//ПОЯВЛЕНИЕ ТЕКСТА В СЕРЕДИНЕ ПЕРЕД КАРТИНКОЙ
        tl.add(TweenMax.to(jQuery('.pfl1'), 4, { autoAlpha: 1, width: '75vw', transformOrigin: "left" }), "+=1");
        tl.add(TweenMax.to(jQuery('.three-words'), 5, { autoAlpha: 1, filter: 'blur(0px)' }), "-=3.5");
        })
    let tl = new TimelineLite();

jQuery('.ps3')
        .scrolledIntoView()
        .one('scrolledin', function() {
          setTimeout(function() {
            for (let i = 0; i < countForChildren; i++) {
             let For = jQuery(forChildren.eq(i));
             let fromFor = { left: '-2vw', autoAlpha: 0, filter: 'blur(5px)' };
             let toFor = { left: '0' + (i * 2.6) + 'vw', autoAlpha: 1, filter: 'blur(0px)' };
             let tl = new TimelineLite();
             tl.add(TweenMax.to(jQuery('span.for'), 1.5, { left: '0vw' }));
             tl.add(TweenMax.fromTo(For, 1 * 2, fromFor, toFor), "-=1.5");
             }
          }, 800);

//КАРТИНКА СКОРОСТЬ ПОЯВЛЕНИЯ
            let tl = new TimelineLite();
//картинка
            tl.add(TweenMax.to(jQuery('.leaf-image img'), 3, { autoAlpha: 1 }), "-=1.3");
            tl.add(TweenMax.to(jQuery('.leaf-image img'), 10, { filter: 'grayscale(0%)', width: '23vw' }), "-=2.5");
        })

jQuery('.bs4')
        .scrolledIntoView()
        .one('scrolledin', function() {
            setTimeout(function() {
                let tl = new TimelineLite();
                tl.add(TweenMax.to(jQuery('.bs4'), 1.5, { autoAlpha: 1, filter: 'blur(0px)' }));
                tl.add(TweenMax.to(jQuery('.homepage-products .products-slash'), 1.5, { autoAlpha: 1, marginTop: '0vw' }), "-=1");
            }, 1000);
        })

    sr.reveal('.homepage-products .skinfinity-sign img, .menu-product1, #footer .footer_second_row img', param);
    sr.reveal('.products-shorttext, .menu-product2, #footer .footer_fourth_row .left', param2);
    sr.reveal('.products-readmore, .menu-product3, #footer .footer_fourth_row .center', param3);
    sr.reveal('.line-wrapper, #footer .footer_fourth_row .right, .product-image img', param4);
    sr.reveal('.product-name', right);
    sr.reveal('.product-description', right);
    sr.reveal('.pii1 a', right);
    sr.reveal('#footer li.menu-item, #menu-footer-social li', { duration: 2000, viewFactor: 0.5 }, 150);
jQuery('#footer .footer_third_row .footer_full')
        .scrolledIntoView()
        .one('scrolledin', function() {
            setTimeout(function() {
                TweenMax.to(jQuery('#footer .footer_third_row .footer_full'), 1.5, { autoAlpha: 1, filter: 'blur(0px)' });
            }, 10000);
        })

jQuery('.menu-product1').on('click', function(e) {
        e.preventDefault();

        let fromProperties = { autoAlpha: 0, x: '80', y: '-30', filter: 'blur(5px)' };
        let toProperties = { autoAlpha: 1, x: '0', y: '0', filter: 'blur(0px)' };
        let fromLinkProperties = { autoAlpha: 0, y: '-30', filter: 'blur(5px)' };
        let toLinkProperties = { autoAlpha: 1, y: '0', filter: 'blur(0px)' };
        let slide1 = jQuery('.pi1 img');
        let slide12 = jQuery('.pii1 .product-name');
        let slide13 = jQuery('.pii1 .product-description');
        let slide14 = jQuery('.pii1 .product-shopnow a');
        let slide15 = jQuery('.pii1 svg');
        TweenMax.set(slide1, { clearProps: "all" });
        TweenMax.set(slide12, { clearProps: "all" });
        TweenMax.set(slide13, { clearProps: "all" });
        TweenMax.set(slide14, { clearProps: "all" });
        TweenMax.set(slide15, { clearProps: "all" });
        TweenLite.fromTo(slide1, 0.8, fromProperties, toProperties);
        TweenLite.fromTo(slide12, 1, fromProperties, toProperties);
        TweenLite.fromTo(slide13, 1.2, fromProperties, toProperties);
        TweenLite.fromTo(slide14, 1.4, fromLinkProperties, toLinkProperties);
        TweenLite.fromTo(slide15, 1.6, fromLinkProperties, toLinkProperties);
    });

jQuery('.menu-product2').on('click', function(e) {
        e.preventDefault();

        let fromProperties = { autoAlpha: 0, x: '80', y: '-30', filter: 'blur(5px)' };
        let toProperties = { autoAlpha: 1, x: '0', y: '0', filter: 'blur(0px)' };
        let fromLinkProperties = { autoAlpha: 0, y: '-30', filter: 'blur(5px)' };
        let toLinkProperties = { autoAlpha: 1, y: '0', filter: 'blur(0px)' };
        let slide1 = jQuery('.pi2 img');
        let slide12 = jQuery('.pii2 .product-name');
        let slide13 = jQuery('.pii2 .product-description');
        let slide14 = jQuery('.pii2 .product-shopnow a');
        let slide15 = jQuery('.pii2 svg');
        TweenMax.set(slide1, { clearProps: "all" });
        TweenMax.set(slide12, { clearProps: "all" });
        TweenMax.set(slide13, { clearProps: "all" });
        TweenMax.set(slide14, { clearProps: "all" });
        TweenMax.set(slide15, { clearProps: "all" });
        TweenLite.fromTo(slide1, 0.8, fromProperties, toProperties);
        TweenLite.fromTo(slide12, 1, fromProperties, toProperties);
        TweenLite.fromTo(slide13, 1.2, fromProperties, toProperties);
        TweenLite.fromTo(slide14, 1.4, fromLinkProperties, toLinkProperties);
        TweenLite.fromTo(slide15, 1.6, fromLinkProperties, toLinkProperties);
    });

jQuery('.menu-product3').on('click', function(e) {
        e.preventDefault();

        let fromProperties = { autoAlpha: 0, x: '80', y: '-30', filter: 'blur(5px)' };
        let toProperties = { autoAlpha: 1, x: '0', y: '0', filter: 'blur(0px)' };
        let fromLinkProperties = { autoAlpha: 0, y: '-30', filter: 'blur(5px)' };
        let toLinkProperties = { autoAlpha: 1, y: '0', filter: 'blur(0px)' };
        let slide1 = jQuery('.pi3 img');
        let slide12 = jQuery('.pii3 .product-name');
        let slide13 = jQuery('.pii3 .product-description');
        let slide14 = jQuery('.pii3 .product-shopnow a');
        let slide15 = jQuery('.pii3 svg');
        TweenMax.set(slide1, { clearProps: "all" });
        TweenMax.set(slide12, { clearProps: "all" });
        TweenMax.set(slide13, { clearProps: "all" });
        TweenMax.set(slide14, { clearProps: "all" });
        TweenMax.set(slide15, { clearProps: "all" });
        TweenLite.fromTo(slide1, 0.8, fromProperties, toProperties);
        TweenLite.fromTo(slide12, 1, fromProperties, toProperties);
        TweenLite.fromTo(slide13, 1.2, fromProperties, toProperties);
        TweenLite.fromTo(slide14, 1.4, fromLinkProperties, toLinkProperties);
        TweenLite.fromTo(slide15, 1.6, fromLinkProperties, toLinkProperties);
    });


}, 100); //ТАЙМАУТ


let x = 0;
let t1 = new TimelineMax();
let t2 = new TimelineMax();
let t3 = new TimelineMax();

function headerFirst() {
    t1.add(TweenLite.to(jQuery('.homeheader-girl img'), 1.6, { autoAlpha: 1 }), "+=0.8");
    t1.add(TweenMax.to(jQuery('.hh-vertical-line'), 1.8, { autoAlpha: 1, height: '52vw', transformOrigin: "top" }), "-=1");
    t1.add(TweenLite.to(jQuery('.co1'), 1.5, { autoAlpha: 0.21, top: '10.2vw' }), "-=0.8");
    t1.add(TweenLite.to(jQuery('.co2'), 1.5, { autoAlpha: 0.25, top: '21.5vw' }), "-=0.8");
}

function headerSecond() {
    t2.add(TweenLite.to(jQuery('.hhl1'), 2.3, { autoAlpha: 1, left: '34.8vw', filter: 'blur(0px)' }));
    t2.add(TweenLite.to(jQuery('.hhl2'), 2.3, { autoAlpha: 1, left: '57.8vw', filter: 'blur(0px)' }), "-=1.8");
    t2.add(TweenLite.to(jQuery('.hhl3'), 2.3, { autoAlpha: 1, top: '41.5vw', filter: 'blur(0px)' }), "-=1.7");
}

function headerThird() {
    t3.add(TweenLite.to(jQuery('#branding'), 1.2, { autoAlpha: 1, padding: '2.5vw 5vw 0 5vw', filter: 'blur(0px)' }));
    t3.add(TweenLite.to(jQuery('ul#menu-glavni-hr'), 1.2, { display: 'flex', autoAlpha: 1, filter: 'blur(0px)', marginRight: '4.8vw' }), "-=1");
    t3.add(TweenLite.to(jQuery('.hh-slash1'), 1.4, { autoAlpha: 1 }), "-=0.8");
    t3.add(TweenLite.to(jQuery('body'), 0.5, { position: 'initial' }), "-=1.4");
}
setTimeout(function() {
  let navigate = function(e) {

    if (e.deltaY < 0) {

      if (x > 0) {
        x = x - 1;
          }
        }

      if (e.deltaY > 0) {
            x = x + 1;
        }

      if (x == 1) {
            headerFirst()
        }

      if (x == 2) {
            headerSecond();
        }

      if (x == 3) {
            headerThird();
        }
      return x;
    }

    let throttled = _.throttle(navigate, 1300, { trailing: false });

    window.addEventListener('wheel', throttled);

}, 3500);
