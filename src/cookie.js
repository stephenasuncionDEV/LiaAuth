// Cookies handler
// https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie#example_3_do_something_only_once
// https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie#example_4_reset_the_previous_cookie

export function cookieExists(key) {
    return document.cookie.split('; ').find(row => row.startsWith(key)) ? true : false;
}

export function getCookie(key) {
    return document.cookie.split('; ').find(row => row.startsWith(`${key}=`)).split('=')[1].replace(/%20/g, " ");
}

export function destroyCookie(key) {
    document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT;';
}