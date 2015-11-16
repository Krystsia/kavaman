$(document).ready(function(){
    
    //form styler+
    
    $('#sort').styler({
        onSelectOpened: function(){
        $('#sort+.jq-selectbox__select').css({
            background: 'transparent'
        })
    },
        onSelectClosed: function(){
            $('#sort+.jq-selectbox__select').css({
            background: 'url(../svg/chckbx.svg) no-repeat 160px center'
        })
        }
    })
    $('#where').styler({
        onSelectOpened: function(){
        $('#where+.jq-selectbox__select').css({
            background: 'transparent'
        })
    },
        onSelectClosed: function(){
            $('#where+.jq-selectbox__select').css({
            background: 'url(../svg/chckbx.svg) no-repeat 160px center'
        })
        }
    })
    
   $('.checkbox').styler()
    
    
    //пропорциональная резина
    
   
    var widthImg = parseInt($('.sqr').width());
    $('.sqr').height(widthImg);
    $('.sqr1').height($('.sqr').height());
    $(window).resize(function(){
        var widthImg = parseInt($('.sqr').width());
        $('.sqr').height(widthImg);
        $('.sqr1').height($('.sqr').height());
       
    });
   
    
    //svg animation
    
    
    function svgline(){
    $('a.drowline').wrap('<div class="wrappers"></div>')
    var divAr = $('.wrappers').toArray();
    var aAr = $('a.drowline').toArray();
    for(var i = 0; i< aAr.length;i++){
        var len = $(aAr[i]).width();
        $(divAr[i]).width(len);
    };
    $('.wrappers').append('<svg class="svg" width="250" height="3"><path class="pat" d ="M0 0 L250 0"/></svg>');
    }
    svgline()
    
    
    //headers search
    
    
    
    $('.headersearch').hide()
    $('.cross').click(function(){
        $('.rail').animate({
        'right': '-100%',
        
    },1000,'easeOutBounce');
        $('.loop').animate({
            'margin-left':'-21px'
        },1000);
        $('.search input[type="submit"]').css('display','none');
        $('.search input[type="text"]').hide(500)
    });
     $('.loop').click(function(){
         $('.rail').animate({
        'right': '0%'
    },1000,'easeOutBounce');
         $('.loop').animate({
            'margin-left':'0'
        },1000);
         $('input[type="submit"]').css('display','inline');
         
         $('input[type="text"]').show(500);
    });
    $('input[type="text"]').focus(function(){
        $(this).prop('placeholder', '')
    });
    $('input[type="text"]').blur(function(){
        $(this).prop('placeholder', 'пошук')
    });
    
  
    //search for RWD
    
    
    $('.cross2').click(function(){
        $('.loophov').show();
        $('#firstitem').animate({'top':'-2px'},500);
        $('.search2').animate({
            'top': '-60px'
        },500,function(){
                $('.main').animate({
                    'left': '0'
                },1000);
                });
       });
        
     $('.loophov').click(function(){
         $(this).hide();
        $('.main').animate({
            'left': '-80%'
        },1000,function(){
                $('#firstitem').animate({'top':'60px'},500);
                $('.search2').animate({
                    'top': '-0px'
                },500);
            });
     })
     $('.loophov').hover(function(){
         $('.loop2').addClass('loophover')},function(){
         $('.loop2').removeClass('loophover')
     });
     $('.loop2').click(function(){
         $('form.sortable2 .sd').click();
     });
     $('form.sortable2 .sd').click(function(){
     })
    
    
    
    //hover submit
    
    
    $('.searcher input[type="submit"],.sd').hover(function(){
        $('.loop,.loop2').addClass('loophover');
    },function(){
         $('.loop,.loop2').removeClass('loophover');
    })
    
 
    //choose city
    
    
    function changeChoose(){
    var r = $('#where-styler .jq-selectbox__select-text').html();
        
        switch(r){
            case 'Мiнск':
                var g = [];
                for(var i = 0; i<r.length; i++){
                    g.push(r[i]);
                };
                g.splice(-1, 1,'к', 'у');
                g.splice(0, 0, 'У',' ');
                g = g.join('');
                $('#where-styler .jq-selectbox__select-text').html(g);
            break;
            case 'Гомель':
                var g = [];
                for(var i = 0; i<r.length; i++){
                    g.push(r[i]);
                };
                g.splice(-1, 1,'i');
                g.splice(0, 0, 'У',' ');
                g = g.join('');
                $('#where-styler .jq-selectbox__select-text').html(g);
            break;
            case 'Магiлеу':
                var g = [];
                for(var i = 0; i<r.length; i++){
                    g.push(r[i]);
                };
                g.splice(-1, 1,'в','е');
                g.splice(0, 0, 'У',' ');
                g = g.join('');
                $('#where-styler .jq-selectbox__select-text').html(g);
            break;
        }
    };
    changeChoose();
    $('.jq-selectbox li').click(function(){changeChoose()}); 
});


     