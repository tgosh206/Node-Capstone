// this is mock data, but when we create our API
// we'll have it return data that looks like this
var MOCK_GIF_INFO = {
	"gifInfo": [
        {
            "id": "1111111",
            "title": "Titanic",
            "year": "1997",
            "gifurl": "fakelink.com/notreal"
        },
        {
            "id": "2222222",
            "title": "Titanic2",
            "year": "1998",
            "gifurl": "fakelink.com/notreal"
        },
        {
            "id": "3333333",
            "title": "Titanic3",
            "year": "1999",
            "gifurl": "fakelink.com/notreal"
        },
        {
            "id": "4444444",
            "title": "Titanic4",
            "year": "2000",
            "gifurl": "fakelink.com/notreal"
        }
    ]
};

// this function's name and argument can stay the
// same after we have a live API, but its internal
// implementation will change. Instead of using a
// timeout function that returns mock data, it will
// use jQuery's AJAX functionality to make a call
// to the server and then run the callbackFn
function getRecentGifInfo(callbackFn) {
    // we use a `setTimeout` to make this asynchronous
    // as it would be with a real AJAX call.
	setTimeout(function(){ callbackFn(MOCK_GIF_INFO)}, 1);
}

// this function stays the same when we connect
// to real API later
function displayGifInfo(data) {
    for (index in data.gifInfo) {
	   $('body').append(
        '<p>' + data.gifInfo[index].text + '</p>');
    }
}

// this function can stay the same even when we
// are connecting to real API
function getAndDisplayGifInfo() {
	getRecentGifInfo(displayGifInfo);
}

//  on page load do this
$(function() {
	getAndDisplayGifInfo();
})