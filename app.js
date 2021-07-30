var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");

btnTranslate.addEventListener("click", clickHandler);

    function clickHandler() {
            console.log("Clicked!");
            console.log(txtInput.value);
    }

