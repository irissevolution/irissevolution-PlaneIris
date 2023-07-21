function enviarSlack() {

  // var nombre = document.getElementById("name").value;
  // var numero = document.getElementById("phone").value;
  var correo = document.getElementById("email").value;
  var info = document.getElementById("message").value;

  // var DatosEnvio = "Nombre: " + nombre + "\n Correo: " + correo + "\n Número telefónico: " + numero + '\n\n Mensaje: ' + info

  var DatosEnvio = "Correo: " + correo + '\n\n Mensaje: ' + info

  var send_slack = localStorage.getItem('send_slack') || false;

  if (send_slack === false) {
    Send_Request(DatosEnvio);
    localStorage.setItem('send_slack', true);

    // document.getElementById("name").value = "";
    // numero = document.getElementById("phone").value = "";

    document.getElementById("email").value = "";
    document.getElementById("message").value = "";


    // Pop-up
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


}

function decodeBase64(base64Str) {
  var decodedStr = atob(base64Str);
  var originalStr = decodeURIComponent(escape(decodedStr));
  return originalStr;
}

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function Send_Request(DatosEnvio) {
  var myHeaders = new Headers();
  myHeaders.append("Content-type", "application/json");
  myHeaders.append("Access-Control-Allow-Origin", "*");

  var raw = JSON.stringify({
    "text": DatosEnvio
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
    mode: 'no-cors'
  };

  var url_base64 = "aHR0cHM6Ly9ob29rcy5zbGFjay5jb20vc2VydmljZXMvVDA1OEgwU1VMRjgvQjA1QUVEUkpKNFMvNVhNWFJQc3BlSDJQNGpyNXRSQlJKMzFk"
  var url = decodeBase64(url_base64)
  fetch(url, requestOptions)
    .then(response => response.text())
    .then(result => console.log("result"))
    .catch(error => console.log('error', error));

}
