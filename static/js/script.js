
        $(document).ready(function(){
             $(".model").hover(function(e){
                $(this).parent().find(".big").hide();
               $(this).parent().find(".shows").show();
               

              },
                  function(e){
                    $(this).parent().find(".shows").hide();
                   $(this).parent().find(".big").show();


            });

            $(".small img").click(function(){
              var bigImage=$(this).closest(".top_show").find(".show img");
              var smallSrc =$(this).attr("src").split("ledcross_");
              bigImage.attr("src", smallSrc[0].split("60x35")[0]+"265x290/" +"ledcross_0"+ smallSrc[1].substr(1,smallSrc[1].length-1));
            });
      });



        

        