function enviarSlack() {
  var info = document.getElementById("message").value;
  var nombre = document.getElementById("name").value;
  var correo = document.getElementById("email").value;
  var numero = document.getElementById("surname").value;
  var DatosEnvio=info + "Datos contacto:  Nombre:"+ nombre +"Correo: "+correo+ " Número telefónico: "+numero
  var settings = {
    "url": "https://hooks.slack.com/services/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",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-type": "application/json"
    },
    "data": JSON.stringify({
      "text": "Hello, World!"
    }),
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

}
