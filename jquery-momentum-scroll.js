/**
 * jQuery Momentum Scroll
 * This will transform the native scroll of the browser into a very smooth scroll with momentum effect
 * https://github.com/iahnn/jQuery-Momentum-Scroll
 * licensed under MIT
 * version 1.0
 */
jQuery(function($) {

    "use strict";

    var win = $(window)
            , target = $('body')
            , wrapper = target.find('> div')
            , easing = "ease-out" //css easing
            , duration = "1.2s" //duration ms(millisecond) or s(second)
            , top = 0
            , jmScroll = {
                _init: function() {
                    if( wrapper.length == 1 ) {

                        jmScroll._resize();

                        wrapper.css({
                            transition: 'transform ' + duration + ' ' + easing,
                            position: 'fixed',
                            top: '0',
                            left: '0',
                            width: '100%',
                            padding: '0',
                            zIndex: '2',
                            display: 'block',
                            backfaceVisibility: 'hidden'
                        });

                        jmScroll._scroll();
                    }
                },
                _scroll: function() {
                    top = win.scrollTop();
                    wrapper.css('transform', 'translateY(-' + top + 'px)');
                },
                _resize: function() {
                    target.height(wrapper.outerHeight());
                }
            };

    if (typeof window.ontouchstart == 'undefined') {
        win.on({
            scroll: function () {
                jmScroll._scroll();
            }
            , resize: function() {
                jmScroll._resize();
            }
            , load: function() {
                jmScroll._init();
            }
        });
    }
});
