// Cookies handler

export function cookieExists(key) {
    return document.cookie.split('; ').find(row => row.startsWith(key)) ? true : false;
}

export function getCookie(key) {
    return document.cookie.split('; ').find(row => row.startsWith(`${key}=`)).split('=')[1].replace(/%20/g, " ");
}

export function destroyCookie(key) {
    document.cookie = key + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
}