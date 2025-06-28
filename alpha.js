function generatePassword() {
    var length = document.getElementById("length").value;
    var charset = "";
    var password = "";

    if (document.getElementById("lowercase").checked) {
        charset += "abcdefghijklmnopqrstuvwxyz";
    }

    if (document.getElementById("uppercase").checked) {
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (document.getElementById("numbers").checked) {
        charset += "0123456789";
    }

    if (document.getElementById("specialChars").checked) {
        charset += "!@#$%^&*()-_+=<>?/";
    }

    if (charset === "") {
        alert("Please select at least one character set.");
        return;
    }

    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById("password").value = password;
}

function updateLength(value) {
    document.getElementById("length-display").innerText = value;
}
