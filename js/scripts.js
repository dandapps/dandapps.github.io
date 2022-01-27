function checkAndNavigate() {
    var url = location.pathname;

   var redirectLinkElem = document.getElementById('redirectLink');
    if(url.indexOf('mindfulbreathing') !== -1) {
        redirectLinkElem.click();
    }
}

checkAndNavigate();