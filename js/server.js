var server = {
	path: null,
	regSend: function(nom, tel, mail, foto){
		server.path = foto;
		$.ajax({
			method: "POST",
			url: "http://carlos.igitsoft.com/apps/test.php",
			data: { nom: nom, mail: mail, tel: tel }
		}).done(server.regDone);
	},
	regDone: function(msg){
		if(msg == 1){
			fileTransfer.sendPhoto(server.path);
		}else
			navigator.notification.alert("Hubo un error al enviar los datos", null, "Error al enviar datos", "Aceptar");
	},
	envRes: function(th,np,nh,nd){
		$.mobile.loadding("show");
		$.ajax({
			method: "POST",
			url: "http://carlos.igitsoft.com/apps/test.php",
			data: { tipo: th, nump: np,numh: nh,dias: nds }
		}).done(function(respuesta){
			$.mobile.loadding("hide");
			if(respuesta == "1"){
				//Agregar al historial de Reservas
			}else{
				alert("Error al guardar datos en el servidor");
			}
		}
		);
	}
};