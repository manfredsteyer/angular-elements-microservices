/*
 *  Straight forward meta routing, just to show the idea
*/

function setDisplay(tagName, value) {
    document.getElementsByTagName(tagName)[0].style['display'] = value;
}

function go(url) {

    location.hash = url;

    // This prevents flickering
    setTimeout(function() { 
        if (url.indexOf('/client-a/') == 0) {
            setDisplay('client-a', 'block');
            setDisplay('client-b', 'none');
        }
        else if (url.indexOf('/client-b/') == 0) {
            setDisplay('client-a', 'none');
            setDisplay('client-b', 'block');
        }
    }, 0);
}

function init(defaultUrl) {
    let url = location.hash.substr(1);
    if (!url || url == "/") url = defaultUrl;
    go(url);
}
