export const generatePassword = (pswdLength, variant) => {
    const charsetAll = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^*()_+-=/?';
    const charsetRead = 'abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789!@#$%^*()_+-=/?';
    const charsetSay = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    let charset = ''

    switch(variant) {
        case 'easyToSay':
            charset = charsetSay;
            break;
        case 'easyToRead':
            charset = charsetRead;
            break;
        case 'allCharacters':
            charset = charsetAll;
            break;
        default:
            charset = '';
    }

    for(let i=0, n = charset.length; i<pswdLength; i++){
        result += charset.charAt(Math.floor(Math.random() * n));
    }
    return result;

}