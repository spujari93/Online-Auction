import { Component, OnInit } from '@angular/core';
declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
'./login/sidebar.component.css'
]
})
export class AppComponent implements OnInit{
  title = 'app';
  ngOnInit(){
    jQuery("#backtotop").click(function () {
      jQuery("body,html").animate({
          scrollTop: 0
      }, 600);
  });
  jQuery(window).scroll(function () {
      if (jQuery(window).scrollTop() > 150) {
          jQuery("#backtotop").addClass("visible");
      } else {
          jQuery("#backtotop").removeClass("visible");
      }
  });
// fix header
var stickyOffset = $('.sticky').offset().top;

$(window).scroll(function(){
  var sticky = $('.sticky'),
      scroll = $(window).scrollTop();

  if (scroll > stickyOffset) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

//sidebar
$(document).ready(function() {
    
      var active1 = false;
      var active2 = false;
      var active3 = false;
      var active4 = false;
    
        $('.parent2').on('mousedown touchstart', function() {
        
        if (!active1) $(this).find('.test1').css({'background-color': 'gray', 'transform': 'translate(0px,125px)'});
        else $(this).find('.test1').css({'background-color': 'dimGray', 'transform': 'none'}); 
         if (!active2) $(this).find('.test2').css({'background-color': 'gray', 'transform': 'translate(60px,105px)'});
        else $(this).find('.test2').css({'background-color': 'darkGray', 'transform': 'none'});
          if (!active3) $(this).find('.test3').css({'background-color': 'gray', 'transform': 'translate(105px,60px)'});
        else $(this).find('.test3').css({'background-color': 'silver', 'transform': 'none'});
          if (!active4) $(this).find('.test4').css({'background-color': 'gray', 'transform': 'translate(125px,0px)'});
        else $(this).find('.test4').css({'background-color': 'silver', 'transform': 'none'});
        active1 = !active1;
        active2 = !active2;
        active3 = !active3;
        active4 = !active4;
          
        });
    });

    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();   
    });
  }

  // email;
  // loginFlag = false;
  // isLoggedIn(value){
  //     console.log("here...");
  //   if(value.loginFlag = true){
  //       this.loginFlag = true;
  //       console.log("---->")
  //     console.log("app component ma pugecha")      
  //       this.email = value.email;
  //   }
  // }


  
}
