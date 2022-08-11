function txtEncriptar(){
    var inputVal = document.getElementById("msg-ingresado").value;
    var regex = /([^a-z\s\ñ\0-9\.,&])/g;
    if((regex.test(inputVal) == false) && (inputVal != ''))
    {
        let txtencr = inputVal
        .replaceAll(/e/g, "enter")
        .replaceAll(/i/g, "imes")
        .replaceAll(/a/g, "ai")
        .replaceAll(/o/g, "ober")
        .replaceAll(/u/g, "ufat")
        mostrarOcultar();
        document.getElementById("msg-ingresado").value = "";
        document.getElementById("msg-final").textContent = txtencr;
    }
}

function txtDesencrip(){
    var inputVal = document.getElementById("msg-ingresado").value;
    var regex = /([^a-z\s\ñ\0-9\.,&])/g;
    if((regex.test(inputVal) == false) && (inputVal != ''))
    {
      let txtdes = inputVal
      .replaceAll(/enter/g, "e")
      .replaceAll(/imes/g, "i")
      .replaceAll(/ai/g, "a")
      .replaceAll(/ober/g, "o")
      .replaceAll(/ufat/g, "u")
      mostrarOcultar()
      document.getElementById("msg-ingresado").value = "";
      document.getElementById("msg-final").textContent = txtdes;
    }
}

function mostrarOcultar(){
    document.getElementById("message").style.display = "block";
    document.getElementById("no-message").style.display = "none";
}

function copyTxt(){
    var copyText = document.getElementById("msg-final");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}
