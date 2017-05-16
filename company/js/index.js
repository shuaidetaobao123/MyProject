(function($){
	$(function(){
		
      	
      /*首页右侧客服*/	
			$(".kf li").mouseover(function(){
				$(this).children(".on").show();
				$(this).children(".other").show();})
				.mouseout(function(){
					$(this).children(".on").hide();
					$(this).children(".other").hide();
				});
			/*返回顶部*/	
			$(".up_top").click(function(){
				$('body,html').animate({scrollTop:0},600);
			});
			
			/*banner里左侧导航*/
			$(".box_ul li").mouseenter(function(){
				$(this).find(".content_open").show();
				$(this).addClass('jingyi_hover');
				$
			});
			$(".box_ul li").mouseleave(function(){
				$(".content_open").hide();
				$(this).removeClass('jingyi_hover');
			});
			
			/*首页右侧锚定位*/
			var lift={
				pos:{},
				get_pos:function(){
					$("body").find(".floor").each(function(index){
						lift.pos[index]=$(this).offset().top;
					});
				},
				style:function(index){
					var $this=$("#lift ul").find("li").eq(index);
					$this.addClass("on").siblings("li").each(function(){
						$(this).removeClass("on");
					});
				},
				go:function(){
					$("#lift ul").find("li").on("click",function(){
						$(window).off("scroll",lift.scroll);
						var index=$(this).index();
						$("html,body").animate({scrollTop:lift.pos[index]-200},500,
							function(){
								lift.style(index);
								$(window).on("scroll",lift.scroll);
							});
					});
				},
				scroll:function(){
					var s_top=$(window).scrollTop();
					console.log(s_top);
					console.log(lift.pos[0]);
					if(s_top>lift.pos[0]-100){
						$("#lift").fadeIn(200);
						var n=$("#lift ul").find("li").length;
						for(i=0;i<n;i++){
							if($("body").find(".floor").eq(i).offset().top-200<=s_top){
								lift.style(i);
							};
						};
					}else{
						$("#lift").fadeOut(200);
						}
				},
				init:function(){
					lift.get_pos();
					lift.go();
					$(window).on("scroll",lift.scroll);
				}
			};
			lift.init();						
			
			$(".information").find(".in-menu span").each(function(i){
				$(this).mouseenter(function(){
					$(".in-menu span").removeClass("in-selected");
					$(this).addClass("in-selected");
					$(".in-content .in-list").hide();
					$(".in-content .in-list").eq(i).show();	
				});
			});
			
			$.fn.setTab = function () {
    		var getTab=$(this),//this指向调用函数的ID
      	panels = getTab.children("div.tab_div").children("div"),
      	tabs = getTab.find(".tab_nav").children("li");
  
		    return this.each(function(){
		      $(tabs).click(function(e) {
		        var index = $.inArray(this, $(this).parent().find("li"));//this指向li
		        if (panels.eq(index)[0]) {
		          $(tabs).removeClass("selected");
		          $(this).addClass("selected");
		          panels.css("display", "none").eq(index).css("display", "block");
		        }
		      });
		        
		    });
 			};
		
		
	});
})(jQuery);
	$(document).ready(function() {		  
    $("#mk_l").setTab();
		$("#mk_r").setTab();
		$("#trading").setTab();
		$("#market_center").setTab();
	});

 			