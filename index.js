function enviarEmail() {
  var info = document.getElementById("message").value;
  var nombre = document.getElementById("name").value;
  var correo = document.getElementById("email").value;
  var numero = document.getElementById("surname").value;
  var DatosEnvio=info + "<br>Datos contacto: <br> Nombre:"+ nombre +"<br>Correo: "+correo+ "<br> Número telefónico: "+numero
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "jaci994@hotmail.com",
    Password : "C3AD796D85AC757638901354E9F84D0E05EE",
    To : 'jaciel.ipn@gmail.com',
    From : "jaci994@hotmail.com",
    Subject : "Cotizacion",
    Body : DatosEnvio
}).then(
  message => alert(message)
);
  }
  

