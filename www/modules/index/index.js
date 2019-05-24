define(['jquery', 'vue', 'C', 'libs/bootstrap.min', 'js/components/sideMenu','js/components/header'], function($, Vue, C, bootstrap, SideMenu, Header){
    var app = new Vue({
      el: '#wrapper',
      data: function(){
        return {
          toggledStatus: true,
          open: true,
          current: {
            parent: {
              name: '主页'
            },
            child: {
              name: 'example 1',
              url: 'https://m.stock.pingan.com'
            }
          },
          windowHeight: $(window).height(),
          iframeHeight: $(window).height() - 155
        }
      },
      components: {
        'component-side-menu': SideMenu,
        'component-header': Header
      },
      created: function(){
          console.log(this.windowHeight);
      },
      methods: {
        toggleMenu: function(opts){
            this.current = opts;
        },
        toggleNavbar: function(){
          $("body").toggleClass("mini-navbar");
          this.smoothlyMenu();
        },
        smoothlyMenu: function() {
            if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
                $('#side-menu').hide();
                setTimeout(
                    function () {
                        $('#side-menu').fadeIn(400);
                }, 200);
            } else if ($('body').hasClass('fixed-sidebar')) {
                $('#side-menu').hide();
                setTimeout(
                    function () {
                        $('#side-menu').fadeIn(400);
                }, 100);
            } else {
                $('#side-menu').removeAttr('style');
            }  
        }
      }
    });
});