
$(function () {
    /*顶部的鼠标移入颜色变化*/
    //1，发生的目标元素
    //2，什么事件  mouseover,mouseout
    //3,改变链接颜色
    $('.top a').mousemove(function () {
        $(this).css({color: '#fff'});
    }).mouseout(function () {
        $(this).css({color: '#a4b094'});
    });
    $('.shopCar').mousemove(function () {
        $(this).css({color: '#ff6700', background: '#fff'});
        $('.goods').stop(true, false).slideDown();
    }).mouseout(function () {
        $(this).css({color: '#a4b094', background: '#424242'});
        $('.goods').stop(true, false).slideUp();
    });
    /*输入框的效果*/
    var flag = true;
    $('.ser1').mousemove(function () {
        if (flag) {
            $('.ser1 input').css({'border': '1px solid #000'});
            $('.ser2').css({border: '1px solid #000', borderLeft: 'none'});
        }
    }).mouseout(function () {
        if (flag) {
            $('.ser1 input').css({'border': '1px solid #ccc'});
            $('.ser2').css({border: '1px solid #ccc', borderLeft: 'none'});
        }
    });
    /*热门搜素的移入效果*/
    $('.hot a ').mouseover(function () {
        $(this).css({color: '#fff', 'background': 'orange'}
        ).mouseout(function () {
            $(this).css({'color': '#757575', 'background': '#eee'})
        })
    });
    /*按钮接入后的效果*/
    $('.ser2').mouseover(function () {
        if (flag) {
            $(this).css({'background': 'orange', 'color': '#fff', border: 'none'});
            $('.ser1 input').css({'border': '1px solid #000', 'border-right': 'none'})
        }
    }).mouseout(function () {
        if (flag) {
            $(this).css({'background': '#fff', color: '#000', border: '1px solid #ccc', borderLeft: 'none'});
            $('.ser1 input').css({'border': '1px solid #ccc'})
        }
    });
    /*表单获取焦点的时候*/
    $('.ser1 input').focus(function () {
        flag = false;
        $(this).css('border-color', 'orange');
        $('.ser2').css('border-color', 'orange');
        $('.keywordsList').show().css('border-color', 'orange');
        $('.hot').hide();
    }).blur(function () {
        flag = true;
        $(this).css('border-color', '#ccc');
        $('.ser2').css('border-color', '#ccc');
        $('.keywordsList').hide().css('border-color', '#ccc');
        $('.hot').show();
    });

    /*隐藏导航开始*/

    $('.nav li').mouseover(function () {
        $(this).children('a').css('color', '#FF6700');
        if ($(this).index() < 7) {
            $('.select').removeClass('hide');
            $('.select').slideDown().finish();
            $('.select').find('ul').addClass('hide');
            $('.select').find('ul').eq($(this).index()).removeClass('hide');
        }
    }).mouseout(function () {
        $(this).children('a').css('color', '#000');
    });

    $('.nav').mouseout(function () {
        $('.select').slideUp().finish();
    });
    $('.select').find('ul').mouseover(function () {
        $('.select').slideDown().finish();
    }).mouseout(function () {
        $('.select').slideUp();
    });

    /*轮播图的效果*/
     var num = 0;
     var timer ;
     timer = setInterval(autoplay,1000);
     $('.round li').mouseover(function () {
         clearInterval(timer);
          num = $(this).index();
         displayImg();
     });
     $('.banner').mouseover(function(){
           clearInterval(timer);
     }).mouseout(function() {
          timer = setInterval(autoplay, 1000)
     });
     $('.direcl').click(function () {
     //上一张
         clearInterval(timer);
        num = num - 1;
        num < 0 ? 4 : num;
     displayImg()
     });
     $('.direcr').click(function () {
     //下一张
         clearInterval(timer);
         num = num + 1;
          num > 4 ? 0 :num;
          displayImg();
     });
    function displayImg(){
        $('.round li').eq(num).css('background','orange').siblings().css({'background':"#000", 'opacity':'0.5'});
        $('.banner > img').eq(num).removeClass('hide').siblings('img').addClass('hide');
    }
    function autoplay (){
        num ++;
        if(num > 4){
            num = 0;
        }
        displayImg();
    }
    /*隐藏的导航*/
    $('.navL li').mouseover(function(){
        $(this).css('background','#ff6700');
        $('.navHide').removeClass('hide').find('.ulHide').addClass('hide').eq($(this).index()).removeClass('hide');
    }).mouseout(function(){
        $(this).css('background','transparent');
    }).parents().mouseout(function(){   /*鼠标移出二级导航的范围后，让它消失*/
        $('.navHide').addClass('hide');
    }).next().find('.ulHide').mouseover(function(){   /*用户移入三级导航的时候，也要让它显示*/
        $('.navHide').removeClass('hide');
        $('.navL li').eq($(this).index()).css('background','#ff6700');
    }).mouseout(function(){
        $('.navHide').addClass('hide');
        $('.navL li').eq($(this).index()).css('background','transparent');
    });
    /*start的效果*/
    // 左按钮
    $('.span-right .prev').mouseover(function(){
        if($('.star-main .show').css('left')!='0px'){
            $(this).css({color:'#ff6700',cursor:'pointer'});}
    }).click(function(){
        if($('.star-main .show').css('left')!='0px'){
            $('.star-main .show').css('left','0px');
            $(this).css({color:'black',cursor:'default'}).siblings().css('color','#b0b4bc');}
    }).mouseout(function(){
        $('.star-main .show').css('left')!='0px' ?  $(this).css('color','#b0b4bc') : $(this).css('color','black');
    });
    //向右翻页
    $('.span-right .next').mouseover(function(){
        if($('.star-main .show').css('left')=='0px'){
            $(this).css({color:'#ff6700',cursor:'pointer'});}
    }).click(function(){
        if($('.star-main .show').css('left')=='0px'){
            $('.star-main .show').css('left','-100%');
            $(this).css({color:'black',cursor:'default'}).siblings().css('color','#b0b4bc');}
    }).mouseout(function(){
        $('.star-main .show').css('left')!='0px' ?  $(this).css('color','#b0b4bc') : $(this).css('color','black');
    });
    var zidong;
    zidong = setInterval(auto,5000);
    $('.star').mouseover(function () {
        clearInterval(zidong);
    }).mouseout(function () {
        zidong = setInterval(auto,5000);
    });
    function auto() {
        var  c= $('.star-main .show').css('left');
        if(c!='0px'){
            $('.star-main .show').css('left','0px');
            $('.span-right .next').css('color','black').siblings().css('color','#b0b4bc');
        }else if(c=='0px'){
            $('.star-main .show').css('left','-100%');
            $('.span-right .prev').css('color','black').siblings().css('color','#b0b4bc');
        }
    }
      /*搭配与周边的公共*/
      function  boxShadow(allLi) {
          allLi.mouseover(function () {
              if ($(this).index()!=7){
                  allLi.css({transform: 'scale(1)', boxShadow: 'none'}).find('section').stop(true, false).slideUp('fast');
                  $(this).css({transform: 'scale(1.03)', boxShadow: '5px 5px 10px black'}).find('section').stop(true,false).slideDown('fast');
              }
          }).mouseout(function () {
              $(this).css({transform: 'scale(1)', boxShadow: 'none'}).find('section').stop(true,false).slideUp('fast');
          });
          return;}
        boxShadow($('.match-chan ul li')); /*搭配*/
        boxShadow($('.zhoubian-chan ul li'));/*周边*/
    function displayPro(obj1,aa,obj2) {
        obj1.find(aa).mouseover(function () {
            var num = $(this).index();
            obj1.find(aa).css({'color':'black', 'border':'none'});
            $(this).css({'color':'orange', 'border-bottom':'2px solid orange', 'cursor':'pointer'});
            obj2.addClass('hide').eq(num).removeClass('hide');
        });return;}
    displayPro($('.diyi'),'span',$('.dapei>ul'));   /*搭配导航切换*/
    displayPro($('.dier'),'span',$('.zhoubian-chan>ul')); /*周边导航切换*/

    function trsnsform(obj) {
        obj.mouseover(function () {
            obj.css({transform:'scale(1)', boxShadow:'none'});
            $(this).css({transform:'scale(1.03)', boxShadow:'5px 5px 10px black'})
    }).mouseout(function () {
            $(this).css({transform:'scale(1)', boxShadow:'none'})
        });return;}
        trsnsform($('.capacity-main ul>li')); /*智能js鼠标hover事件*/
        trsnsform($('.recommend-show li')); /*为你推荐鼠标hover事件*/
        trsnsform($('.buzz-main li'));     /*热评鼠标hover事件*/
       /*为你推荐点击事见*/
       var  a=0;
        $('.recommend-ext').click(function () {
            a= parseInt($('.recommend-show').css('left'));
            a!= -3678 ?   $('.recommend-show').css('left',( a - 1226 +'px')) :  $(this).css({color:'#b0b4bc',cursor:'default'}).siblings().css('color','orange');
        }).mouseover(function () {
            a!= -3678 ?  $(this).css('color','orange') : $(this).css({color:'#b0b4bc',cursor:'default'}).siblings().css('color','orange');
        }).mouseout(function () {
            a!= -3678 ?  $(this).css('color','black') : $(this).css({color:'#b0b4bc',cursor:'default'}).siblings().css('color','black');
        }).siblings().click(function () {
            var  a= parseInt($('.recommend-show').css('left'));
            a!=0 ?  $('.recommend-show').css('left',( a +1226+'px')) :  $(this).css({color:'#b0b4bc',cursor:'default'}).siblings().css('color','orange');
        }).mouseover(function () {
            a!= 0 ?  $(this).css('color','orange') : $(this).css({color:'#b0b4bc',cursor:'default'}).siblings().css('color','orange');
        }).mouseout(function () {
            a!= -3678 ?  $(this).css('color','black') : $(this).css({color:'#b0b4bc',cursor:'default'}).siblings().css('color','black');
        });
    /*五个小轮播图*/
    $('.cont-main li').mouseover(function () {
        $(this).find('.p2').css('opacity','1')
    }).mouseout(function () {
       $(this).find('.p2').css('opacity','0')
    });

    $('.cont-main .round2 p').mouseover(function () {
        $(this).css('background', '#ff6700');
    }).mouseout(function () {
        $(this).css('background', '#b0b0b0');
    });
    function displayp(p,li) {
        p.click(function () {
            num = $(this).index();
            p.css({'background':"#000", 'opacity':'0.5'});
           $(this).css({border:'2px solid orange',background:'white'}).siblings('p').css({'background':"#b0b0b0", border:'2px solid #fff'});
            li.parents('ul').css('left', (-295 * num) + 'px');
        });return;
    }
    displayp($('.cont-main-sec1 p'),$('.contBox1 li'));
    displayp($('.cont-main-sec2 p'),$('.contBox2 li'));
    displayp($('.cont-main-sec3 p'),$('.contBox3 li'));
    displayp($('.cont-main-sec4 p'),$('.contBox4 li'));
    var i =0;
    $('.cont-main .r2').click(function () {
        i++;
        if(i > 3) {i = 3}
        $(this).parent().find('ul').css('left', (-296 * i) + 'px');
        $(this).parent().children('.round2').children('p').eq(i).css({border:'2px solid orange',backgroundColor:'white'}).siblings('p').css({'background':"#b0b0b0", border:'2px solid #fff'})
    });
    $('.cont-main .p21').click(function () {
        i--;
        if(i < 0) {i = 0;}
        $(this).parent().find('ul').css('left', (-296 * i) + 'px');
        $(this).parent().children('.round2').children('p').eq(i).css({border:'2px solid orange',backgroundColor:'white'}).siblings('p').css({
            'background':"#b0b0b0", border:'2px solid #fff'})
    })
    /*视屏*/
    $('.videoList li img').mouseover(function () {
                $(this).next('.icon-bofang').css('color','#ff6700')
    }).mouseout(function () {
        $(this).next('.icon-bofang').css('color','#fff')
    });
    $('h2 a').mouseover(function(){
        $(this).css('color','#ff6700');
    }).mouseout(function(){
        $(this).css('color','#212121');
    });

});



