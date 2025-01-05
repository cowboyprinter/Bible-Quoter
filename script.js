document.addEventListener("DOMContentLoaded", function() {
    var bible = 'https://labs.bible.org/api/?passage=random&type=json';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', bible, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            if (response && response.length > 0) {
                var text = response[0].text;
                var quoteDiv = document.getElementById("bibleQuote");
                quoteDiv.textContent = text;
            }
        } else if (xhr.readyState == 4) {
            console.error("Failed to fetch quote");
        }
    };
    xhr.send();
});
function reloadPage() {
    location.reload();
}
