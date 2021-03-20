// Cookies handler Server

function cookieExists(cookie, key) {
    return cookie.split('; ').find(row => row.startsWith(key)) ? true : false;
}

function getCookie(cookie, key) {
    return cookie.split('; ').find(row => row.startsWith(`${key}=`)).split('=')[1].replace(/%20/g, " ");
}

function destroyCookie(cookie, key) {
    cookie = key + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
}

module.exports.cookieExists = cookieExists;
module.exports.getCookie = getCookie;
module.exports.destroyCookie = destroyCookie;