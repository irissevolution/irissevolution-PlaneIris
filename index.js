function enviarSlack() {
  var info = document.getElementById("message").value;
  var nombre = document.getElementById("name").value;
  var correo = document.getElementById("email").value;
  var numero = document.getElementById("surname").value;
  var DatosEnvio="Nombre: "+ nombre +"\n Correo: "+correo+ "\n Número telefónico: " + numero + '\n\n Mensaje: ' +  info  

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
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

  }

function decodeBase64(base64Str) {
  var decodedStr = atob(base64Str);
  var originalStr = decodeURIComponent(escape(decodedStr));
  return originalStr;
}
