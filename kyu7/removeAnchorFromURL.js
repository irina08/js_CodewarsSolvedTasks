/* returns 'www.codewars.com'
removeUrlAnchor('www.codewars.com#about')

returns 'www.codewars.com?page=1'
removeUrlAnchor('www.codewars.com?page=1')
 */

function removeUrlAnchor(url){
    let array = url.split('#');
    return array[0];
}