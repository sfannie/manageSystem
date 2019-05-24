define(['jquery', 'vue', 'C', 'peity', 'libs/bootstrap.min', 'libs/icheck.min'], function($, Vue, C, peity, bootstrap, icheck){

    var app = new Vue({
      el: '#wrapperIn',
      data: function(){

      },
      created: function(){

      },
      mounted: function(){
          // Collapse ibox function
          $('.collapse-link').on('click', function () {
              var ibox = $(this).closest('div.ibox');
              var button = $(this).find('i');
              var content = ibox.children('.ibox-content');
              content.slideToggle(200);
              button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
              ibox.toggleClass('').toggleClass('border-bottom');
              setTimeout(function () {
                  ibox.resize();
                  ibox.find('[id^=map-]').resize();
              }, 50);
          });

          // Close ibox function
          $('.close-link').on('click', function () {
              var content = $(this).closest('div.ibox');
              content.remove();
          });

          $("span.pie").peity("pie", {
              fill: ['#1ab394', '#d7d7d7', '#ffffff']
          })

          $(".line").peity("line",{
              fill: '#1ab394',
              stroke:'#169c81',
          })

          $(".bar").peity("bar", {
              fill: ["#1ab394", "#d7d7d7"]
          })

          $(".bar_dashboard").peity("bar", {
              fill: ["#1ab394", "#d7d7d7"],
              width:100
          })

          var updatingChart = $(".updating-chart").peity("line", { fill: '#1ab394',stroke:'#169c81', width: 64 })

          setInterval(function() {
              var random = Math.round(Math.random() * 10)
              var values = updatingChart.text().split(",")
              values.shift()
              values.push(random)

              updatingChart
                  .text(values.join(","))
                  .change()
          }, 1000);
      },
      methods: {

      }
    });

});