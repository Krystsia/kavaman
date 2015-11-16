$(document).ready(function(){
    
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
    
   //$('input[type="checkbox"]').styler()
    
    
    //пропорциональная резина
    
   
    var widthImg = parseInt($('.sqr').width());
    $('.sqr').height(widthImg);
    $('.sqr1').height($('.sqr').height());
    $(window).resize(function(){
        var widthImg = parseInt($('.sqr').width());
        $('.sqr').height(widthImg);
        $('.sqr1').height($('.sqr').height());
        
    });
   
    
    
   
    
    
    
});

$(document).ready(function(){
     //для всех  a создаем обертку в стилях
   //нужно для нее прописать overflow: hidden
    $('.footera').wrap('<div class="wrapper"></div>')
    
    //получаем массив всех созданных оберток
    var divAr = $('.wrapper').get();
    //получаем массив всех   a
    var aAr = $('.footera').get();
    //подгоняем размер обертки к длине a
    for(var i = 0; i< divAr.length-1;i++){
        var l = $(aAr[i]).width();
        $(divAr[i]).width(l);
    };
    //добавляем svg-подчеркивание
    $('.wrapper').append('<svg class="svg" width="1000" height="3"><path class="pat" d ="M0 0 L1000 0"/></svg>');
})






