$(function(){
	//给右侧导航栏根据索引添加背景图
	$('#nav .all li dt span').each(function(index, element) {
        $(element).css('background','url(img/all'+index+'.png) no-repeat left center')
    });
	
	//给侧边栏左侧的DIV添加背景颜色
	var colArr=['#FF5555','#66CC33','#FF44AA','#8833EE','#CC6644','#FFAA33','#11CCAA'];
		$('[class =borderL]').each(function(index, element) {
            $(element).css('backgroundColor',colArr[index]);
        });
	//给楼梯导航添加背景颜色
	var sArr =['#00A4ED','#0077DD','#FF5555','#12CBAB','#67CC32','#FE44A9','#8834EE','#CD6645','#FFAA33','#787878']
	//给各位商品楼层右侧轮播图添加上边框颜色！
	var bArr =['#FF5555','#12CBAB','#67CC32','#FE44A9','#8834EE','#CD6645','#FFAA33','#787878']
	
	$('#stair li').each(function(index, element) {
        $(element).css('background',sArr[index]);
   	});
	$(' .mom_right').each(function(index, element) {
        $(element).css('borderColor',bArr[index]);
		 $(element).css('borderRight','1px solid #Ccc');
		  $(element).css('borderBottom','1px solid #Ccc');
   	});
	$('#main h1').each(function(index, element) {
        $(this).css('color',sArr[index]);
    });
	
	//轮播图JS代码
	var bgArr =['#FF6155','#FF91B6','#B1DE4F','#FF4A69','#4CEBB5']
			//大轮播图
			var i=0;
			var j =0;
			var n =0;
			var clone=$('.pic li').first().clone();
			$('.pic').append(clone);
			var size1=$('.pic li').size();
			$('.num li').first().addClass('active').siblings().removeClass('active');
			//----------------------------------------------
			//小轮播图
			//
			//#mom_baby .mom_right
				var clone =$('#mom_baby  .mom_right .list li').first().clone();
				$('#mom_baby  .mom_right .list').append(clone);
				var size2=$('#mom_baby  .mom_right .list li').size();
				$('#mom_baby .mom_right .list_num li').first().addClass('on').siblings().removeClass('on');
			//----------------------------------------------
			
			
			
			$('.btn_l').click(function() {
				moveR();
			});
			$('.btn_r').click(function(){
				moveL();
			})
			function moveL(){
				i++;
				n++;
				j++;
				if(i==size1){
					$('.pic').css({'left':'0px'})
					
					i=1;
				}
				if(i==size1-1){
					
					j=0;
				}
				if(n == size2){
					$('#mom_baby .mom_right .list').css({'left':'0px'})
					n=1;
				}
				$('#banner').removeClass('.banner').css("backgroundColor",bgArr[j])
				$('.pic').stop().animate({left:-770*i})
				$('#mom_baby .mom_right .list').stop().animate({left:-230*n})
				if(i==size1 -1){
					$('.num li').eq(0).addClass('active').siblings().removeClass('active');
					
				}else{
					$('.num li').eq(i).addClass('active').siblings().removeClass('active');
					
				}
				if(n==size2-1){
					$('#mom_baby .mom_right .list_num li').eq(0).addClass('on').siblings().removeClass('on');
				}else{
					$('#mom_baby .mom_right .list_num li').eq(n).addClass('on').siblings().removeClass('on');
				}
			}
			function moveR(){
				i--;
				j--
				if(i==-1){
					$('.pic').css({'left':-(size-1)*770});
					i=size-2;
				}
				$('.pic').stop().animate({left:-770*i})
				$('.num li').eq(i).addClass('active').siblings().removeClass('active');
			}	
			$('.num li').hover(function(){
				j++;
				i=$(this).index();
				$('.pic').stop().animate({left:-770*i},500);
				$(this).addClass('active').siblings().removeClass('active');
				$('#banner').removeClass('.banner').css("backgroundColor",bgArr[j])
			})
			$('#mom_baby .list_num li').hover(function(){
				n=$(this).index();
				$('#mom_baby .mom_right .list').stop().animate({left:-230*n},500);
				$(this).addClass('on').siblings().removeClass('on');
			})
			var t=setInterval(function(){
				moveL();
			},2000)
			$('#lunbo,.mom_right').hover(function(){
				clearInterval(t);
			},function(){
				t=setInterval(function(){
					moveL();
				},2000)
			})
	//-------------------------------------------------------------------
	//给导航栏添加二级菜单
	$('[class = area]').hover(function(){
		$(this).css('background','url(img/jiantou1.png) right center no-repeat')
		$(this).children('ul').show();
	},function(){
		$(this).css('background','url(img/jiantou.png) right center no-repeat')
		$(this).children('ul').hide();
	})

	//侧边栏二级菜单
	$('#nav .all li').hover(function(){
		$(this).addClass('bgColor')
		$(this).children('.borderL').show();
		$(this).children('.child').show();
	},function(){
		$(this).children('.borderL').hide();
		$(this).children('.child').hide();
		$(this).removeClass('bgColor')
		
	})
	$('#shop ul li:not(:last)').hover(function(){
		$(this).animate({'padding-top':'8px'},100);
	
	},function(){
		$(this).animate({'padding-top':'10px'},100);
		$(this).last().animate({'padding-top':'0px'},100);
	})
	//给shop传入json数据
	$.get('js/shop.json',function(res){
		console.log(res);
		for(var i =0;i <res.length;i++){
			$('#shop  li img').eq(i).attr('src',''+res[i].url+'');
			$('#shop  .name a').eq(i).text(''+res[i].name+'')
			$('#shop  .price em').eq(i).text(''+res[i].price+'');
			$('#shop  .price i').eq(i).text(''+res[i].doller+'');
			$('#shop  .seller span').eq(i).text(''+res[i].seller+'')
			$('#shop  .seller span').eq(i).css('background','url(img/'+res[i].img+') ')
		}
	})
	//给good加鼠标移入抖动事件
	$('.sell dd .goods').hover(function(){
		$(this).animate({'margin-top':"-2px"},100);
		
	},function(){
		$(this).animate({'margin-top':"5px"},100);
	})
	$('.list li dd img').hover(function(){
		$(this).animate({'padding-top':"18px"},100);
		
	},function(){
		$(this).animate({'padding-top':"20px"},100);
		
		
	})

	$(function(){

				var isClick = false;
				$(window).scroll(function(){
					/*if(isClick){
						return;
					}*/
					var scrollTop = $(this).scrollTop();
					if(scrollTop > 800){
						$('#stair').fadeIn();
						$('#search').fadeIn();
					}else{
						$('#stair').fadeOut();
						$('#search').fadeOut();
					}
					$('.alike').each(function(index,louti){
						if((scrollTop>=$(this).offset().top-$(this).outerHeight()/2)){
						console.log(scrollTop,$(this).offset().top-$(this).outerHeight()/2)
						$('#stair li').not('.last').removeClass().eq(index).addClass('color');
						}
					})
					
				});
				$('#stair  li:last').click(function(){
					$('body,html').animate({scrollTop:0},1000);  
				
				})

				$('#stair  li').on('click',function(){
					$(this).addClass('color').siblings().removeClass('color');
					isClick = true;
	
					if($(this).hasClass('last')){
						$('html,body').animate({scrollTop:0},function(){
							isClick = false;
						});
						return;
					}
					var index = $(this).index();
					var currentLouti = $('.alike').eq(index);
					var currentScrollTop = currentLouti.offset().top - ($(window).height() - currentLouti.outerHeight())/2;
					if(currentScrollTop < 0){
						currentScrollTop = 0;
					}

					$('html,body').animate({scrollTop:currentScrollTop},function(){
						isClick = false;
					});
				})
			})
	
	
})