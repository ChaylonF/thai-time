export default function thaiHoursPhonetic(hour: number) {
    switch (hour) {
        case 1: return 'dtii nùeng';
        case 2: return 'dtii săwng';
        case 3: return 'dtii săam';
        case 4: return 'dtii sìi';
        case 5: return 'dtii hâa';
        case 6: return 'hòk moong (cháao)';
        case 7: return 'jèt moong cháao';
        case 8: return 'bpàed moong cháao';
        case 9: return 'gâao moong cháao';
        case 10: return 'sìp moong cháao';
        case 11: return 'sìp èt moong cháao';
        case 12: return 'tîang';
        case 13: return 'bàai moong';
        case 14: return 'bàai săwng moong';
        case 15: return 'bàai săam moong';
        case 16: return 'sìi moong (yen)';
        case 17: return 'hâa moong (yen)';
        case 18: return 'hòk moong (yen)';
        case 19: return 'nùeng tûm';
        case 20: return 'săwng tûm';
        case 21: return 'săam tûm';
        case 22: return 'sìi tûm';
        case 23: return 'hâa tûm';
        case 0: return 'tîang kuen';
        default: return '';
}
}