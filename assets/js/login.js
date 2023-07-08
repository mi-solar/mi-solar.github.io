$(document).ready(function () {
  // verifica si la página actual es calculadoras.html
  if (window.location.pathname.endsWith('calculadora.html')) {
    // si la página es calculadoras.html, verifica si el usuario ha iniciado sesión
    if (!sessionStorage.getItem('isLoggedIn')) {
      // si no ha iniciado sesión, redirige a la página de inicio de sesión
      window.location.href = 'sesion.html';
    }
  }
  $('#login-form').submit(function (event) {
    event.preventDefault(); // previene el comportamiento predeterminado del formulario

    // obtiene los valores del formulario
    var username = $('#email').val();
    var password = $('#contrasena').val();
    // verifica si los datos son correctos
    if (username == 'jorgea.misolar@gmail.com' && password == 'Koke2001') {
      // establece la sesión como iniciada
      sessionStorage.setItem('isLoggedIn', true);
      // carga la página si los datos son correctos
      window.location.href = 'calculadora.html';
    } else {
      // muestra una alerta si los datos son incorrectos
      alert('Los datos ingresados son incorrectos. Por favor, inténtalo de nuevo.');
    }
  });
});