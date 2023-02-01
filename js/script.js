let message = document.querySelector("#message_textarea");
let result = document.querySelector("#result_textarea");
let encryptButton = document.querySelector("#encrypt_button");
let decryptButton = document.querySelector("#decrypt_button");
let copyButton = document.querySelector("#copy_button");
let clearButton = document.querySelector("#clear_button")

function encrypt(){
    let text = message.value;
    let encryptedText = text.replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
    result.value = encryptedText;
    showResult();
}

function decrypt(){
    let text = message.value;
    let decryptedText = text.replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
    result.value = decryptedText;
    showResult();
}

function copy(){
    if(result.value){
        // window.alert("copied")
        window.navigator.clipboard.writeText(result.value);
    }
    
    message.focus();
}

function clear(){
    result.value = "";
    message.focus();

}

function showResult(){
    let noMessageDiv = document.querySelector("#no_message");
    let resultDiv = document.querySelector("#result");
    
    if(!noMessageDiv.classList.contains("hidden")){
        noMessageDiv.classList.toggle("hidden");
        resultDiv.classList.toggle("hidden");
    }
}

encryptButton.onclick = encrypt;
decryptButton.onclick = decrypt;
copyButton.onclick = copy;
clearButton.onclick = clear;