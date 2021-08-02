var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

//   var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
//  var serverURL = "https://api.funtranslations.com/translate/groot.json"
var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input) {
        return serverURL + "?" + "text = " + input;
}

function errorHandler(error) {
        console.log("error occured " + error);
        alert("something wrong with the server, try again after some time.")
}

function clickHandler() {
        var inputText = txtInput.value;
        fetch(getTranslationURL(inputText))
                .then(response => response.json())
                .then(json => {
                        var translatedText = json.contents.translated;
                        outputDiv.innerHTML = translatedText;
                })
                .catch(errorHandler);
};

btnTranslate.addEventListener("click", clickHandler);