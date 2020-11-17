 $(document).ready(function(){
                 <!---page_loader-------------->
                     $(window).load(function(){
                        $('#loader').fadeOut('slow'); 
                     });
            <!--sticky header----------------------------------->
                $(document).on('scroll',function(){
                    if($(this).scrollTop() > 1){
                        $('header').addClass('sticky');
                    }
                    else
                        {
                            $('header').removeClass('sticky');
                        }
                });
            <!--------scroll to top button--------->
                $(document).on('click','#scrolltotop',function(){
                   $('html,body').animate({scrollTop:0},500);
                        return false;
                });
            <!--button control--->
                $(document).scroll(function(){
                   var scrollpos=$(this).scrollTop();
                   if(scrollpos < 100)
                       {
                       $('#scrolltotop').addClass('hide');    
                       }
                    else
                        {
                            $('#scrolltotop').removeClass('hide');
                        }
                });
             });
        