(function($){
    $('.rule').on('click',function(){
        $('.ruleMask').removeClass('toHide');
    });
    $('.ruleMask').on('click',function(){
        $(this).addClass('toHide');
    });
    $('.add').on('click',function(){
        console.log('发布新美食');
    }); 
})(jQuery)