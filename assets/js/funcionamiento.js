$(document).ready(function () {
	const date = new Date();
	const year = date.getFullYear();
	$('#year').append(`© Mi Solar ${year}`);
	setTimeout(function () {
		$('#logo-carga').fadeOut(500, function () {
			$(this).remove();
			$('body').removeClass('no-scroll');
		});
	}, 1000);
	var btn = $('.btn-nav');
	if (localStorage.getItem('isLoggedIn') == 'true' && btn.length == 4) {
		$('.navbar-nav').append(
			'<li class="nav-item"><a id="cerrar" class="btn-nav btn rounded-pill text-tema" href="cerrar.html">Cerrar Sesion</a></li>'
		);
	}
	btn.click(function (event) {
		if ($(this) != $('.btn-nav').eq(4)) {
			event.preventDefault();
			$('.btn-nav').removeClass('active btn-tema-nav');
			var enlace = $(this).attr('href');
			if (
				enlace == 'sesion.html' &&
				localStorage.getItem('isLoggedIn') == 'true'
			) {
				$('#contenido').load('calc.html #info');
			} else {
				$('#contenido').load(enlace + ' #info');
			}
			$(this).addClass('active btn-tema-nav');
		}
	});
	$('.navbar-nav').on('click', '#cerrar', function (e) {
		e.preventDefault();
		localStorage.setItem('isLoggedIn', false);
		$('.btn-nav').eq(4).remove();
		$('.btn-nav').removeClass('active btn-tema-nav');
		$('#contenido').load('index.html #info');

		$('.btn-nav').eq(0).addClass('active btn-tema-nav');
	});
	$('.btn-nav').click(function () {
		$('title').text($(this).text() + ' | Mi Solar');
	});
	$('#tema').click(function () {
		$(this).find('i').toggleClass('fa-sun fa-moon');
		$('body').toggleClass('tema-claro tema-oscuro');
	});
	$('#contenido').on('click', '#basic', function () {
		$(this).find('i').toggleClass('fa-eye-slash fa-eye');
		if ($('#contrasena').attr('type') == 'password') {
			$('#contrasena').attr('type', 'text');
		} else if ($('#contrasena').attr('type') == 'text') {
			$('#contrasena').attr('type', 'password');
		}
	});

	$('#contenido').on('submit', '#login-form', function (event) {
		event.preventDefault(); // previene el comportamiento predeterminado del formulario
		// obtiene los valores del formulario
		// var username = $('#email').val();
		var password = $('#contrasena').val();
		let contra = '5653';
		if (password == contra) {
			localStorage.setItem('isLoggedIn', true);
			if (localStorage.getItem('isLoggedIn') == 'true' && btn.length == 4) {
				$('.navbar-nav').append(
					'<li class="nav-item"><a id="cerrar" class="btn-nav btn rounded-pill text-tema" href="cerrar.html">Cerrar Sesion</a></li>'
				);
			}
			// carga la página si los datos son correctos
			$('title').text('Calculadoras | Mi Solar');
			$('#contenido').load('calc.html');
			correo = '';
			contra = '';
		} else {
			// muestra una alerta si los datos son incorrectos
			alert(
				'Los datos ingresados son incorrectos. Por favor, inténtalo de nuevo.'
			);
		}
	});
	$('#contenido').on('click', '#solares', function () {
		$('#instalacion').removeClass('btn-tema');
		$(this).addClass('btn-tema');
		$('#tipo-instalacion').addClass('calc');
		$('#tipo-solares').removeClass('calc');
	});
	$('#contenido').on('click', '#instalacion', function () {
		$('#solares').removeClass('btn-tema');
		$(this).addClass('btn-tema');
		$('#tipo-solares').addClass('calc');
		$('#tipo-instalacion').removeClass('calc');
	});
	//cargar calculadora correspondiente al tipo seleccionado
	$('#contenido').on('click', '#tipo-solares button', function (event) {
		event.preventDefault();
		$('#tipo-solares button').removeClass('btn-tema');
		$(this).addClass('btn-tema');
		var calc = $(this).attr('data-calc');
		var enlace = 'solar.html #form' + calc;
		$('#ejercicio').load(enlace);
	});

	$('#contenido').on('click', '#tipo-instalacion button', function (event) {
		event.preventDefault();
		$('#tipo-instalacion button').removeClass('btn-tema');
		$(this).addClass('btn-tema');
		var calc = $(this).attr('data-calc');
		var enlace = 'instalacion.html #form' + calc;
		$('#ejercicio').load(enlace);
	});

	//calculos
	$('#contenido').on('click', '.btn-borrar', function () {
		var formId = $(this).closest('form').attr('id');
		$('#' + formId)[0].reset();
		$('#estado').removeClass('correcto incorrecto');
	});

	$('#contenido').on('click', '#calcular-sombra', function () {
		var largo = Number($('#largo').val());
		var grado = Number($('#grado').val());
		var angulo = Number($('#angulo').val());
		var resultado =
			largo *
			(Math.sin(((grado + angulo) * Math.PI) / 180) /
				Math.sin((grado * Math.PI) / 180));
		resultado = Math.round(resultado) + ' cm';
		$('#resultado').val(resultado);
	});
	$('#contenido').on('click', '#calcular-potencia', function () {
		var voltaje = Number($('#voltaje').val());
		var corriente = Number($('#corriente').val());
		var resultado = (voltaje * corriente).toFixed(2) + ' W';
		$('#resultado2').val(resultado);
	});

	$('#contenido').on('click', '#calcular-corriente', function () {
		var potencia = Number($('#potencia').val());
		var voltaje = Number($('#voltaje2').val());
		var resultado3 = potencia / voltaje;
		var resultado = Math.round(resultado3) + ' A';
		$('#resultado3').val(resultado);
	});

	$('#contenido').on('click', '#calcular-conductor', function () {
		var corriente = Number($('#corriente2').val());
		if (corriente <= 14) {
			resultado = 1.5;
		} else if (corriente <= 16) {
			resultado = 2.08;
		} else if (corriente <= 18) {
			resultado = 2.5;
		} else if (corriente <= 21) {
			resultado = 3.31;
		} else if (corriente <= 24) {
			resultado = 4;
		} else if (corriente <= 28) {
			resultado = 5.26;
		} else if (corriente <= 31) {
			resultado = 6;
		} else if (corriente <= 38) {
			resultado = 8.37;
		} else if (corriente <= 42) {
			resultado = 10;
		} else if (corriente <= 50) {
			resultado = 13.3;
		} else if (corriente <= 56) {
			resultado = 16;
		} else if (corriente <= 66) {
			resultado = 21.1;
		} else if (corriente <= 73) {
			resultado = 25;
		} else if (corriente <= 76) {
			resultado = 26.7;
		} else if (corriente <= 87) {
			resultado = 33.6;
		} else if (corriente <= 89) {
			resultado = 35;
		} else if (corriente <= 100) {
			resultado = 42.4;
		} else if (corriente <= 108) {
			resultado = 50;
		} else if (corriente <= 116) {
			resultado = 53.5;
		} else if (corriente <= 133) {
			resultado = 67.4;
		} else if (corriente <= 136) {
			resultado = 70;
		} else if (corriente <= 153) {
			resultado = 85;
		} else if (corriente <= 164) {
			resultado = 95;
		} else if (corriente <= 176) {
			resultado = 107.2;
		} else if (corriente <= 188) {
			resultado = 120;
		} else if (corriente <= 195) {
			resultado = 126.7;
		} else if (corriente <= 216) {
			resultado = 150;
		} else if (corriente <= 217) {
			resultado = 152;
		} else if (corriente <= 239) {
			resultado = 177.3;
		} else if (corriente <= 245) {
			resultado = 185;
		} else if (corriente <= 259) {
			resultado = 202.7;
		} else if (corriente <= 286) {
			resultado = 240;
		} else if (corriente <= 296) {
			resultado = 253.3;
		} else if (corriente <= 328) {
			resultado = 300;
		} else {
			resultado = 0;
		}
		var resultado = resultado + ' mm²';
		$('#resultado4').val(resultado);
	});

	$('#contenido').on('click', '#calcular-conductor-dos', function () {
		var corriente = Number($('#corriente3').val());
		if (corriente <= 17) {
			valor = 1.5;
		} else if (corriente <= 21) {
			valor = 2.08;
		} else if (corriente <= 23) {
			valor = 2.5;
		} else if (corriente <= 28) {
			valor = 3.31;
		} else if (corriente <= 31) {
			valor = 4;
		} else if (corriente <= 37) {
			valor = 5.26;
		} else if (corriente <= 40) {
			valor = 6;
		} else if (corriente <= 49) {
			valor = 8.37;
		} else if (corriente <= 54) {
			valor = 10;
		} else if (corriente <= 65) {
			valor = 13.3;
		} else if (corriente <= 73) {
			valor = 16;
		} else if (corriente <= 86) {
			valor = 21.1;
		} else if (corriente <= 95) {
			valor = 25;
		} else if (corriente <= 99) {
			valor = 26.7;
		} else if (corriente <= 114) {
			valor = 33.6;
		} else if (corriente <= 117) {
			valor = 35;
		} else if (corriente <= 132) {
			valor = 42.4;
		} else if (corriente <= 141) {
			valor = 50;
		} else if (corriente <= 152) {
			valor = 53.5;
		} else if (corriente <= 175) {
			valor = 67.4;
		} else if (corriente <= 179) {
			valor = 70;
		} else if (corriente <= 201) {
			valor = 85;
		} else if (corriente <= 216) {
			valor = 95;
		} else if (corriente <= 232) {
			valor = 107.2;
		} else if (corriente <= 249) {
			valor = 120;
		} else if (corriente <= 257) {
			valor = 126.7;
		} else if (corriente <= 285) {
			valor = 150;
		} else if (corriente <= 287) {
			valor = 152;
		} else if (corriente <= 316) {
			valor = 177.3;
		} else if (corriente <= 324) {
			valor = 185;
		} else if (corriente <= 342) {
			valor = 202.7;
		} else if (corriente <= 380) {
			valor = 240;
		} else if (corriente <= 392) {
			valor = 253.3;
		} else if (corriente <= 435) {
			valor = 300;
		}
		var resultado = valor + ' mm²';
		$('#resultado5').val(resultado);
	});
	$('#contenido').on('click', '#calcular-ducto', function () {
		var C24 = Number($('#cables').val());
		var C25 = Number($('#secConductor').val());
		if (
			(C25 <= 1.5 && C24 === 1) ||
			(C25 <= 1.5 && C24 === 2) ||
			(C25 <= 1.5 && C24 === 3) ||
			(C25 <= 1.5 && C24 === 4) ||
			(C25 <= 1.5 && C24 === 5)
		) {
			valor = 16;
		} else if (
			(C25 <= 2.5 && C24 === 1) ||
			(C25 <= 2.5 && C24 === 2) ||
			(C25 <= 2.5 && C24 === 3) ||
			(C25 <= 2.5 && C24 === 4) ||
			(C25 <= 2.5 && C24 === 5)
		) {
			valor = 20;
		} else if (
			(C25 <= 4 && C24 === 1) ||
			(C25 <= 4 && C24 === 2) ||
			(C25 <= 4 && C24 === 3) ||
			(C25 <= 4 && C24 === 4) ||
			(C25 <= 4 && C24 === 5)
		) {
			valor = 25;
		} else if (
			(C25 <= 6 && C24 === 1) ||
			(C25 <= 6 && C24 === 2) ||
			(C25 <= 6 && C24 === 3) ||
			(C25 <= 6 && C24 === 4) ||
			(C25 <= 6 && C24 === 5)
		) {
			valor = 25;
		} else if (
			(C25 <= 10 && C24 === 1) ||
			(C25 <= 10 && C24 === 2) ||
			(C25 <= 10 && C24 === 3) ||
			(C25 <= 10 && C24 === 4) ||
			(C25 <= 10 && C24 === 5)
		) {
			valor = 32;
		} else if (
			(C25 <= 16 && C24 === 1) ||
			(C25 <= 16 && C24 === 2) ||
			(C25 <= 16 && C24 === 3) ||
			(C25 <= 16 && C24 === 4) ||
			(C25 <= 16 && C24 === 5)
		) {
			valor = 40;
		} else if (
			(C25 <= 25 && C24 === 1) ||
			(C25 <= 25 && C24 === 2) ||
			(C25 <= 25 && C24 === 3) ||
			(C25 <= 25 && C24 === 4) ||
			(C25 <= 25 && C24 === 5)
		) {
			valor = 50;
		} else if (
			(C25 <= 35 && C24 === 1) ||
			(C25 <= 35 && C24 === 2) ||
			(C25 <= 35 && C24 === 3) ||
			(C25 <= 35 && C24 === 4) ||
			(C25 <= 35 && C24 === 5)
		) {
			valor = 50;
		} else if (
			(C25 <= 50 && C24 === 1) ||
			(C25 <= 50 && C24 === 2) ||
			(C25 <= 50 && C24 === 3) ||
			(C25 <= 50 && C24 === 4) ||
			(C25 <= 50 && C24 === 5)
		) {
			valor = 63;
		} else if (
			(C25 <= 70 && C24 === 1) ||
			(C25 <= 70 && C24 === 2) ||
			(C25 <= 70 && C24 === 3) ||
			(C25 <= 70 && C24 === 4) ||
			(C25 <= 70 && C24 === 5)
		) {
			valor = 75;
		} else if (
			(C25 <= 95 && C24 === 1) ||
			(C25 <= 95 && C24 === 2) ||
			(C25 <= 95 && C24 === 3) ||
			(C25 <= 95 && C24 === 4) ||
			(C25 <= 95 && C24 === 5)
		) {
			valor = 100;
		} else if (
			(C25 <= 120 && C24 === 1) ||
			(C25 <= 120 && C24 === 2) ||
			(C25 <= 120 && C24 === 3) ||
			(C25 <= 120 && C24 === 4) ||
			(C25 <= 120 && C24 === 5)
		) {
			valor = 100;
		} else {
			valor = 0;
		}
		var resultado = valor + ' mm';
		$('#resultado6').val(resultado);
	});
	$('#contenido').on('click', '#calcular-ductof', function () {
		var C30 = Number($('#cantCables').val());
		var C31 = Number($('#seccConductor').val());
		if (C31 <= 1.5 && C30 === 1) {
			result = 16;
		} else if (C31 <= 1.5 && C30 === 2) {
			result = 16;
		} else if (C31 <= 1.5 && C30 === 3) {
			result = 16;
		} else if (C31 <= 1.5 && C30 === 4) {
			result = 20;
		} else if (C31 <= 1.5 && C30 === 5) {
			result = 25;
		} else if (C31 <= 2.5 && C30 === 1) {
			result = 16;
		} else if (C31 <= 2.5 && C30 === 2) {
			result = 20;
		} else if (C31 <= 2.5 && C30 === 3) {
			result = 20;
		} else if (C31 <= 2.5 && C30 === 4) {
			result = 32;
		} else if (C31 <= 2.5 && C30 === 5) {
			result = 32;
		} else if (C31 <= 4 && C30 === 1) {
			result = 16;
		} else if (C31 <= 4 && C30 === 2) {
			result = 25;
		} else if (C31 <= 4 && C30 === 3) {
			result = 25;
		} else if (C31 <= 4 && C30 === 4) {
			result = 32;
		} else if (C31 <= 4 && C30 === 5) {
			result = 40;
		} else if (C31 <= 6 && C30 === 1) {
			result = 16;
		} else if (C31 <= 6 && C30 === 2) {
			result = 25;
		} else if (C31 <= 6 && C30 === 3) {
			result = 32;
		} else if (C31 <= 6 && C30 === 4) {
			result = 32;
		} else if (C31 <= 6 && C30 === 5) {
			result = 40;
		} else if (C31 <= 10 && C30 === 1) {
			result = 20;
		} else if (C31 <= 10 && C30 === 2) {
			result = 32;
		} else if (C31 <= 10 && C30 === 3) {
			result = 32;
		} else if (C31 <= 10 && C30 === 4) {
			result = 40;
		} else if (C31 <= 10 && C30 === 5) {
			result = 50;
		} else if (C31 <= 16 && C30 === 1) {
			result = 25;
		} else if (C31 <= 16 && C30 === 2) {
			result = 32;
		} else if (C31 <= 16 && C30 === 3) {
			result = 40;
		} else if (C31 <= 16 && C30 === 4) {
			result = 50;
		} else if (C31 <= 16 && C30 === 5) {
			result = 50;
		} else if (C31 <= 25 && C30 === 1) {
			result = 25;
		} else if (C31 <= 25 && C30 === 2) {
			result = 40;
		} else if (C31 <= 25 && C30 === 3) {
			result = 50;
		} else if (C31 <= 25 && C30 === 4) {
			result = 50;
		} else if (C31 <= 25 && C30 === 5) {
			result = 63;
		} else if (C31 <= 35 && C30 === 1) {
			result = 32;
		} else if (C31 <= 35 && C30 === 2) {
			result = 40;
		} else if (C31 <= 35 && C30 === 3) {
			result = 50;
		} else if (C31 <= 35 && C30 === 4) {
			result = 63;
		} else if (C31 <= 35 && C30 === 5) {
			result = 63;
		} else if (C31 <= 50 && C30 === 1) {
			result = 32;
		} else if (C31 <= 50 && C30 === 2) {
			result = 50;
		} else if (C31 <= 50 && C30 === 3) {
			result = 63;
		} else if (C31 <= 50 && C30 === 4) {
			result = 63;
		} else if (C31 <= 50 && C30 === 5) {
			result = 75;
		} else if (C31 <= 70 && C30 === 1) {
			result = 40;
		} else if (C31 <= 70 && C30 === 2) {
			result = 50;
		} else if (C31 <= 70 && C30 === 3) {
			result = 63;
		} else if (C31 <= 70 && C30 === 4) {
			result = 75;
		} else if (C31 <= 70 && C30 === 5) {
			result = 75;
		} else if (C31 <= 95 && C30 === 1) {
			result = 40;
		} else if (C31 <= 95 && C30 === 2) {
			result = 63;
		} else if (C31 <= 95 && C30 === 3) {
			result = 75;
		} else if (C31 <= 95 && C30 === 4) {
			result = 100;
		} else if (C31 <= 95 && C30 === 5) {
			result = 100;
		} else if (C31 <= 120 && C30 === 1) {
			result = 50;
		} else if (C31 <= 120 && C30 === 2) {
			result = 63;
		} else if (C31 <= 120 && C30 === 3) {
			result = 75;
		} else if (C31 <= 120 && C30 === 4) {
			result = 100;
		} else if (C31 <= 120 && C30 === 5) {
			result = 100;
		} else {
			result = 0;
		}
		var resultado = result + ' mm';
		$('#resultado7').val(resultado);
	});

	$('#contenido').on('click', '#calcular-ducto-sub', function () {
		var C36 = Number($('#canCables').val());
		var C37 = Number($('#seccConducto').val());
		if (C37 <= 1.5 && C36 == 1) {
			valor = 25;
		} else if (C37 <= 1.5 && C36 == 2) {
			valor = 25;
		} else if (C37 <= 1.5 && C36 == 3) {
			valor = 25;
		} else if (C37 <= 1.5 && C36 == 4) {
			valor = 32;
		} else if (C37 <= 1.5 && C36 == 5) {
			valor = 32;
		} else if (C37 <= 2.5 && C36 == 1) {
			valor = 25;
		} else if (C37 <= 2.5 && C36 == 2) {
			valor = 25;
		} else if (C37 <= 2.5 && C36 == 3) {
			valor = 32;
		} else if (C37 <= 2.5 && C36 == 4) {
			valor = 32;
		} else if (C37 <= 2.5 && C36 == 5) {
			valor = 40;
		} else if (C37 <= 4 && C36 == 1) {
			valor = 25;
		} else if (C37 <= 4 && C36 == 2) {
			valor = 32;
		} else if (C37 <= 4 && C36 == 3) {
			valor = 40;
		} else if (C37 <= 4 && C36 == 4) {
			valor = 40;
		} else if (C37 <= 4 && C36 == 5) {
			valor = 40;
		} else if (C37 <= 6 && C36 == 1) {
			valor = 32;
		} else if (C37 <= 6 && C36 == 2) {
			valor = 32;
		} else if (C37 <= 6 && C36 == 3) {
			valor = 50;
		} else if (C37 <= 6 && C36 == 4) {
			valor = 50;
		} else if (C37 <= 6 && C36 == 5) {
			valor = 50;
		} else if (C37 <= 10 && C36 == 1) {
			valor = 40;
		} else if (C37 <= 10 && C36 == 2) {
			valor = 50;
		} else if (C37 <= 10 && C36 == 3) {
			valor = 63;
		} else if (C37 <= 10 && C36 == 4) {
			valor = 63;
		} else if (C37 <= 10 && C36 == 5) {
			valor = 63;
		} else if (C37 <= 16 && C36 == 1) {
			valor = 50;
		} else if (C37 <= 16 && C36 == 2) {
			valor = 50;
		} else if (C37 <= 16 && C36 == 3) {
			valor = 63;
		} else if (C37 <= 16 && C36 == 4) {
			valor = 63;
		} else if (C37 <= 16 && C36 == 5) {
			valor = 63;
		} else if (C37 <= 25 && C36 == 1) {
			valor = 63;
		} else if (C37 <= 25 && C36 == 2) {
			valor = 63;
		} else if (C37 <= 25 && C36 == 3) {
			valor = 75;
		} else if (C37 <= 25 && C36 == 4) {
			valor = 75;
		} else if (C37 <= 25 && C36 == 5) {
			valor = 75;
		} else if (C37 <= 35 && C36 == 1) {
			valor = 63;
		} else if (C37 <= 35 && C36 == 2) {
			valor = 75;
		} else if (C37 <= 35 && C36 == 3) {
			valor = 75;
		} else if (C37 <= 35 && C36 == 4) {
			valor = 90;
		} else if (C37 <= 35 && C36 == 5) {
			valor = 90;
		} else if (C37 <= 50 && C36 == 1) {
			valor = 75;
		} else if (C37 <= 50 && C36 == 2) {
			valor = 75;
		} else if (C37 <= 50 && C36 == 3) {
			valor = 90;
		} else if (C37 <= 50 && C36 == 4) {
			valor = 90;
		} else if (C37 <= 50 && C36 == 5) {
			valor = 110;
		} else if (C37 <= 70 && C36 == 1) {
			valor = 90;
		} else if (C37 <= 70 && C36 == 2) {
			valor = 90;
		} else if (C37 <= 70 && C36 == 3) {
			valor = 110;
		} else if (C37 <= 70 && C36 == 4) {
			valor = 110;
		} else if (C37 <= 70 && C36 == 5) {
			valor = 110;
		} else if (C37 <= 95 && C36 == 1) {
			valor = 110;
		} else if (C37 <= 95 && C36 == 2) {
			valor = 110;
		} else if (C37 <= 95 && C36 == 3) {
			valor = 110;
		} else if (C37 <= 95 && C36 == 4) {
			valor = 140;
		} else if (C37 <= 95 && C36 == 5) {
			valor = 140;
		} else if (C37 <= 120 && C36 == 1) {
			valor = 140;
		} else if (C37 <= 120 && C36 == 2) {
			valor = 140;
		} else if (C37 <= 120 && C36 == 3) {
			valor = 160;
		} else if (C37 <= 120 && C36 == 4) {
			valor = 160;
		} else if (C37 <= 120 && C36 == 5) {
			valor = 160;
		} else {
			valor = 0;
		}
		var resultado = valor + ' mm';
		$('#resultado8').val(resultado);
	});
	//calcular paneles
	$('#contenido').on('click', '#calcular-paneles', function () {
		var energia = Number($('#energia').val());
		var hora = Number($('#hora').val());
		var potencia = Number($('#potencia').val());
		var eficencia = Number($('#eficencia').val() / 100);
		var resultado = energia / (hora * potencia * eficencia);
		resultado = Math.ceil(resultado);
		$('#resultado').val(resultado);
	});
	//calcular baterias
	$('#contenido').on('click', '#calcular-bateria', function () {
		var energia = Number($('#energia').val());
		var dias = Number($('#dias').val());
		var profundidad = Number($('#profundidad').val() / 100);
		var voltaje = Number($('#voltaje').val());
		var capacidad = Number($('#capacidad').val());
		var resultado = (energia * dias) / (profundidad * voltaje) / capacidad;
		resultado = Math.ceil(resultado);
		$('#resultado2').val(resultado);
	});

	//comprobar disyuntor
	var energia;
	var disyuntor;
	var corrienteProteccion;
	var resultado;
	$('#contenido').on('keyup', '#energia', function () {
		energia = Number($('#energia').val());
		corrienteProteccion = ((energia / (220 * 0.9)) * 100) / 90;
		corrienteProteccion = corrienteProteccion.toFixed(2);
		$('#corriente-proteccion').val(corrienteProteccion);
	});
	$('#contenido').on('click', '#comprobar-disyuntor', function () {
		disyuntor = Number($('#disyuntor').val());
		resultado = (corrienteProteccion / disyuntor) * 100;
		if (resultado % 1 >= 0.5) {
			// Si el resultado tiene decimales mayores o iguales a 0.5
			resultado = Math.ceil(resultado); // Redondear hacia arriba
		} else {
			// Si el resultado tiene decimales menores a 0.5
			resultado = Math.trunc(resultado); // Truncar el resultado
		}
		$('#resultado3').val(resultado + '%');
		if (resultado <= 90) {
			$('#estado').removeClass('incorrecto');
			$('#estado').addClass('correcto');
		} else {
			$('#estado').removeClass('correcto');
			$('#estado').addClass('incorrecto');
		}
	});
	$('#contenido').on('click', '#comprobar-cantidad', function () {
		var largoPanel = Number($('#largo-panel').val());
		var anchoPanel = Number($('#ancho-panel').val());
		var largoLugar = Number($('#largo-lugar').val());
		var anchoLugar = Number($('#ancho-lugar').val());
		var largoDimension = largoLugar / largoPanel;
		largoDimension = Math.trunc(largoDimension);
		$('#largo-dimension').val(largoDimension);
		var anchoDimension = anchoLugar / anchoPanel;
		anchoDimension = Math.trunc(anchoDimension);
		$('#ancho-dimension').val(anchoDimension);
	});
});
