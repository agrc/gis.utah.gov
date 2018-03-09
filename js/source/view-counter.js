(function () {
    var request = new XMLHttpRequest();
    var span = document.getElementById('view-counter');
    if (!span) {
        return; // abort if no view-counter element is found
    }

    var onLoad = function () {
        if (request.status !== 200) {
            return; // don't do anything on request error
        }

        var count = JSON.parse(request.responseText).count;

        span.innerHTML = 'This page has been viewed ' + count.toLocaleString() + ' times';
    };

    request.addEventListener('load', onLoad);
    request.open('GET', 'https://us-central1-utahkoopserver.cloudfunctions.net/viewcounter');
    request.send();
}());
