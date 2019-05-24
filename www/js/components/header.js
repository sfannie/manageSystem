define(['jquery', 'vue', 'C'], function($, Vue, C){

    var component = {
      props: {
        current: {}
      },
      data: function(){
        return {
          
        }
      },
      created: function(){

      },
      methods: {
          toggleNavbar: function(){
              this.$emit('toggle')
          }
      }
    };

    return function (resolve, reject) {
        C.getTemplate("/components/header.html", function (template) {
            component.template = template;
            resolve(component);
        });
    }
});