
import { randomNumber } from './utils';

var MESSAGES = [
    'Первое бесполезное сообщение',
    'Второе бесползеное сообщение',
    'Третье бесполезное сообщение',
    'Еще одна строка'
];

var getRandomMessage = function() {
    var randNumber = randomNumber(0, MESSAGES.length-1);
    return MESSAGES[randNumber];
}

export { MESSAGES, getRandomMessage };



