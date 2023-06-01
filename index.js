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

  var uri = "/services/T058H0SULF8/B05AEDRJJ4S/5XMXRPspeH2P4jr5tRBRJ31d"

  fetch("https://hooks.slack.com" + uri, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

  }
