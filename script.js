var load = document.getElementById("load");
var div = document.getElementById("data");
var webpageCount = 1;

load.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + webpageCount + '.json');
    
    ourRequest.onload = function() {
        var data = JSON.parse(ourRequest.responseText);
        renderHTML(data);
    };
    ourRequest.send();
    webpageCount ++;
    if (webpageCount > 3) {
        load.classList.add("hide");
    }
});

function renderHTML(data) {
    output = '';

    for (i=0; i < data.length; i++) {
        output += "<p>" + data[i].name + "</p>"
    }

    div.insertAdjacentHTML("beforeend", output);
}
