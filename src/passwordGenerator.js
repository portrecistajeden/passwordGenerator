export const generatePassword = (pswdLength, variant, lowercase, uppercase, symbols, numbers) => {
    const symbolsCharset = '!@#$%^*()_+-=/?';
    const numbersCharset = '0123456789';
    const numbersEasyCharset = '23456789';
    const uppercaseCharset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const uppercaseEasyCharset = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
    const lowercaseCharset = 'abcdefghijklmnopqrstuvwxyz';
    const lowercaseEasyCharset = 'abcdefghijkmnpqrstuvwxyz';

    let result = '';
    let charset = ''
    
    if(variant ==='onlyLetters'){            
        charset += lowercase ? lowercaseCharset : '';
        charset += uppercase ? uppercaseCharset : '';
    }
    else if (variant === 'allCharacters') {
        charset += lowercase ? lowercaseCharset : '';
        charset += uppercase ? uppercaseCharset : '';
        charset += symbols ? symbolsCharset : '';
        charset += numbers ? numbersCharset : '';
    }
    else{
        charset += lowercase ? lowercaseEasyCharset : '';
        charset += uppercase ? uppercaseEasyCharset : '';
        charset += symbols ? symbolsCharset : '';
        charset += numbers ? numbersEasyCharset : '';
    }
    
    for(let i=0, n = charset.length; i<pswdLength; i++){
        result += charset.charAt(Math.floor(Math.random() * n));
    }
    return result;

}