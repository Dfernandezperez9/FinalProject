let ajax = {
    cargarArchivo: function (ruta, manipularDatos) {
        let peticion = new XMLHttpRequest();

        peticion.onreadystatechange = function () {
            if (peticion.readyState == XMLHttpRequest.DONE) {
                if (peticion.status == 200) {
                    manipularDatos(JSON.parse(peticion.responseText));
                    console.log(`DETENTE! Esta función del navegador está pensada para desarrolladores. Si alguien te ha indicado que copiaras y pegaras algo aquí para habilitar una función de Facebook o para "hackear" la cuenta de alguien, se trata de un fraude. Si lo haces, esta persona podrá acceder a tu cuenta.Ver www.cocreta.com para obtener más información.`);
                }
                else if (peticion.status == 404) {
                    console.log("Error de obtencion de datos");
                }
                else {
                    console.log("Resultado inesperado");
                }
            }
        };

        peticion.open("GET", ruta, true);
        peticion.send();
    }
}