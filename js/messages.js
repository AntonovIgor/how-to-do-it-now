'use strict';

(function() {

    var MESSAGES = [
        'Первое бесполезное сообщение',
        'Второе бесползеное сообщение',
        'Третье бесполезное сообщение',
        'Еще одна строка'
    ];

    var getRandomMessage = function() {
        var randNumber = window.utils.randomNumber(0, MESSAGES.length-1);
        return MESSAGES[randNumber];
    }


    window.messages = {
        MESSAGES,
        getRandomMessage
    };

})();