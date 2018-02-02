'use strict';

(function() {   

    var inst = $('[data-remodal-id=modal]').remodal();   

    $('.page-content__promo_btn').on('click', function() { 
        $('.remodal__text').text(window.messages.getRandomMessage());        
        inst.open();    
    });

    $(document).on('open', '.remodal', function () {
       console.log('open');
    });

    $(document).on('opened', '.remodal', function () {
        console.log('opened');
    });

    $(document).on('close', '.remodal', function () {
        console.log('close');
    });

    $(document).on('closed', '.remodal', function () {
        console.log('closed');
    });

    $(document).on('confirm', '.remodal', function () {
        console.log('confirm');
    });

    $(document).on('cancel', '.remodal', function () {
        console.log('cancel');
    }); 
    
})();