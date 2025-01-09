

function Mapa (objetoJSON) {
    
    this.posicion = new Punto (0, 0);
    this.posicionActualizada = new Punto (0, 0);


    this.anchoMedidoEnTiles = parseInt(objetoJSON.width);
    this.altoMedidoEnTiles = parseInt(objetoJSON.height);
    this.anchoDeLosTiles = parseInt(objetoJSON.tilewidth);
    this.altoDeLosTiles = parseInt(objetoJSON.tileheight);

    this.paletasSprites = [];
    this.iniciarPaletasSprites(objetoJSON.tilesets);

    this.rectangulosColisiones = [];
    this.rectangulosEdificios = [];
    this.rectangulosLocalizaciones = [];

    this.objetoColectable1 = [];
    this.objetoColectable2 = [];
    this.objetoColectable3 = [];
    this.objetoColectable4 = [];
    this.objetoColectable5 = [];
    this.objetoColectable6 = [];
    this.objetoColectable7 = [];
    this.objetoColectable8 = [];
    this.objetoColectable9 = [];
    this.objetoColectable10 = [];

    this.easterColectable1 = [];
    this.easterColectable2 = [];
    this.easterColectable3 = [];

    this.objetoTexto1 = [];
    this.objetoTexto2 = [];
    this.objetoTexto3 = [];
    this.objetoTexto4 = [];
    this.objetoTexto5 = [];

    this.objetoEnemigo1 = [];
    this.objetoEnemigo2 = [];
    this.objetoEnemigo3 = [];
    this.objetoEnemigo4 = [];
    this.objetoEnemigo5 = [];
    this.objetoEnemigo6 = [];
    this.objetoEnemigo7 = [];
    this.objetoEnemigo8 = [];
    this.objetoEnemigo9 = [];

    this.capasTiles = [];
    this.iniciarCapas(objetoJSON.layers);

    this.iniciarRejilla();

    this.limiteMapa = new Rectangulo(this.posicion.x, this.posicion.y, this.anchoMedidoEnTiles * this.anchoDeLosTiles, this.altoMedidoEnTiles * this.altoDeLosTiles, "colision");
    this.iniciarDeteccionColisiones(jugador);
}


Mapa.prototype.iniciarPaletasSprites = function (datosCapas) {
    for (let i = 0; i < datosCapas.length; i++) {
        this.paletasSprites.push(new PaletaSprites(datosCapas[i]));
    }
}


Mapa.prototype.iniciarCapas = function (datosCapas) {
    for (let i = 0; i < datosCapas.length; i++) {
        switch(datosCapas[i].type) {
            case "tilelayer":
                this.capasTiles.push(new CapaMapaTiles(datosCapas[i], i, this.anchoDeLosTiles, this.altoDeLosTiles, this.paletasSprites));
            break;

            case "objectgroup":
                if (datosCapas[i].name == "ObjetoBordes") {
                    for (let b = 0; b < datosCapas[i].objects.length; b++) {
                        this.rectangulosColisiones.push(new Rectangulo(datosCapas[i].objects[b].x, datosCapas[i].objects[b].y, datosCapas[i].objects[b].width, datosCapas[i].objects[b].height, "colision"));
                    }
                }
                if (datosCapas[i].name == "ObjetoColectables") {
                    const objeto1 = new Rectangulo(datosCapas[i].objects[0].x, datosCapas[i].objects[0].y, datosCapas[i].objects[0].width, datosCapas[i].objects[0].height, "colectable");
                    const objeto2 = new Rectangulo(datosCapas[i].objects[1].x, datosCapas[i].objects[1].y, datosCapas[i].objects[1].width, datosCapas[i].objects[1].height, "colectable");
                    const objeto3 = new Rectangulo(datosCapas[i].objects[2].x, datosCapas[i].objects[2].y, datosCapas[i].objects[2].width, datosCapas[i].objects[2].height, "colectable");
                    const objeto4 = new Rectangulo(datosCapas[i].objects[3].x, datosCapas[i].objects[3].y, datosCapas[i].objects[3].width, datosCapas[i].objects[3].height, "colectable");
                    const objeto5 = new Rectangulo(datosCapas[i].objects[4].x, datosCapas[i].objects[4].y, datosCapas[i].objects[4].width, datosCapas[i].objects[4].height, "colectable");
                    const objeto6 = new Rectangulo(datosCapas[i].objects[5].x, datosCapas[i].objects[5].y, datosCapas[i].objects[5].width, datosCapas[i].objects[5].height, "colectable");
                    const objeto7 = new Rectangulo(datosCapas[i].objects[6].x, datosCapas[i].objects[6].y, datosCapas[i].objects[6].width, datosCapas[i].objects[6].height, "colectable");
                    const objeto8 = new Rectangulo(datosCapas[i].objects[7].x, datosCapas[i].objects[7].y, datosCapas[i].objects[7].width, datosCapas[i].objects[7].height, "colectable");
                    const objeto9 = new Rectangulo(datosCapas[i].objects[8].x, datosCapas[i].objects[8].y, datosCapas[i].objects[8].width, datosCapas[i].objects[8].height, "colectable");
                    const objeto10 = new Rectangulo(datosCapas[i].objects[9].x, datosCapas[i].objects[9].y, datosCapas[i].objects[9].width, datosCapas[i].objects[9].height, "colectable");
                    
                    this.objetoColectable1.push(objeto1);
                    this.objetoColectable2.push(objeto2);
                    this.objetoColectable3.push(objeto3);
                    this.objetoColectable4.push(objeto4);
                    this.objetoColectable5.push(objeto5);
                    this.objetoColectable6.push(objeto6);
                    this.objetoColectable7.push(objeto7);
                    this.objetoColectable8.push(objeto8);
                    this.objetoColectable9.push(objeto9);
                    this.objetoColectable10.push(objeto10);
                }
                if (datosCapas[i].name == "ObjetoEaster") {
                    const easter1 = new Rectangulo(datosCapas[i].objects[0].x, datosCapas[i].objects[0].y, datosCapas[i].objects[0].width, datosCapas[i].objects[0].height, "easter");
                    const easter2 = new Rectangulo(datosCapas[i].objects[1].x, datosCapas[i].objects[1].y, datosCapas[i].objects[1].width, datosCapas[i].objects[1].height, "easter");
                    const easter3 = new Rectangulo(datosCapas[i].objects[2].x, datosCapas[i].objects[2].y, datosCapas[i].objects[2].width, datosCapas[i].objects[2].height, "easter");

                    this.easterColectable1.push(easter1);
                    this.easterColectable2.push(easter2);
                    this.easterColectable3.push(easter3);
                }
                if (datosCapas[i].name == "ObjetoTexto") {
                    const texto1 = new Rectangulo(datosCapas[i].objects[0].x, datosCapas[i].objects[0].y, datosCapas[i].objects[0].width, datosCapas[i].objects[0].height, "texto");
                    const texto2 = new Rectangulo(datosCapas[i].objects[1].x, datosCapas[i].objects[1].y, datosCapas[i].objects[1].width, datosCapas[i].objects[1].height, "texto");
                    const texto3 = new Rectangulo(datosCapas[i].objects[2].x, datosCapas[i].objects[2].y, datosCapas[i].objects[2].width, datosCapas[i].objects[2].height, "texto");
                    const texto4 = new Rectangulo(datosCapas[i].objects[3].x, datosCapas[i].objects[3].y, datosCapas[i].objects[3].width, datosCapas[i].objects[3].height, "texto");
                    const texto5 = new Rectangulo(datosCapas[i].objects[4].x, datosCapas[i].objects[4].y, datosCapas[i].objects[4].width, datosCapas[i].objects[4].height, "texto");

                    this.objetoTexto1.push(texto1);
                    this.objetoTexto2.push(texto2);
                    this.objetoTexto3.push(texto3);
                    this.objetoTexto4.push(texto4);
                    this.objetoTexto5.push(texto5);
                }
                if (datosCapas[i].name == "ObjetoEnemigos") {
                    const enemigo1 = new Rectangulo(datosCapas[i].objects[0].x, datosCapas[i].objects[0].y, datosCapas[i].objects[0].width, datosCapas[i].objects[0].height, "enemigo");
                    const enemigo2 = new Rectangulo(datosCapas[i].objects[1].x, datosCapas[i].objects[1].y, datosCapas[i].objects[1].width, datosCapas[i].objects[1].height, "enemigo");
                    const enemigo3 = new Rectangulo(datosCapas[i].objects[2].x, datosCapas[i].objects[2].y, datosCapas[i].objects[2].width, datosCapas[i].objects[2].height, "enemigo");
                    const enemigo4 = new Rectangulo(datosCapas[i].objects[3].x, datosCapas[i].objects[3].y, datosCapas[i].objects[3].width, datosCapas[i].objects[3].height, "enemigo");
                    const enemigo5 = new Rectangulo(datosCapas[i].objects[4].x, datosCapas[i].objects[4].y, datosCapas[i].objects[4].width, datosCapas[i].objects[4].height, "enemigo");
                    const enemigo6 = new Rectangulo(datosCapas[i].objects[5].x, datosCapas[i].objects[5].y, datosCapas[i].objects[5].width, datosCapas[i].objects[5].height, "enemigo");
                    const enemigo7 = new Rectangulo(datosCapas[i].objects[6].x, datosCapas[i].objects[6].y, datosCapas[i].objects[6].width, datosCapas[i].objects[6].height, "enemigo");
                    const enemigo8 = new Rectangulo(datosCapas[i].objects[7].x, datosCapas[i].objects[7].y, datosCapas[i].objects[7].width, datosCapas[i].objects[7].height, "enemigo");
                    const enemigo9 = new Rectangulo(datosCapas[i].objects[8].x, datosCapas[i].objects[8].y, datosCapas[i].objects[8].width, datosCapas[i].objects[8].height, "enemigo");

                    this.objetoEnemigo1.push(enemigo1);
                    this.objetoEnemigo2.push(enemigo2);
                    this.objetoEnemigo3.push(enemigo3);
                    this.objetoEnemigo4.push(enemigo4);
                    this.objetoEnemigo5.push(enemigo5);
                    this.objetoEnemigo6.push(enemigo6);
                    this.objetoEnemigo7.push(enemigo7);
                    this.objetoEnemigo8.push(enemigo8);
                    this.objetoEnemigo9.push(enemigo9);
                }
                if (datosCapas[i].name == "ObjetoEdificios") {
                    for (let e = 0; e < datosCapas[i].objects.length; e++) {
                        this.rectangulosEdificios.push(new Rectangulo(datosCapas[i].objects[e].x, datosCapas[i].objects[e].y, datosCapas[i].objects[e].width, datosCapas[i].objects[e].height, "edificio"));
                    }
                }
                if (datosCapas[i].name == "ObjetoPuertas") {
                    for (let p = 0; p < datosCapas[i].objects.length; p++) {
                        this.rectangulosLocalizaciones.push(new Localizacion(new Rectangulo(datosCapas[i].objects[p].x, datosCapas[i].objects[p].y, datosCapas[i].objects[p].width, datosCapas[i].objects[p].height, "puerta"), /*datosCapas[i].objects[p].id,*/ datosCapas[i].objects[p].name));
                    }
                }
            break;
        }
    } 
}


Mapa.prototype.iniciarRejilla = function () {

    let html = "";

    for (let ct = 0; ct < this.capasTiles.length; ct++) {
        for (let t = 0; t < this.capasTiles[ct].tiles.length; t++) {
            if (this.capasTiles[ct].tiles[t] == null) {
                continue;
            }
            let tileActual = this.capasTiles[ct].tiles[t];
            html += tileActual.html;
        }
    }
    document.getElementById("mapa").innerHTML = html;


    let htmlColisiones = "";
    for (let c =0; c < this.rectangulosColisiones.length; c++) {
        htmlColisiones += this.rectangulosColisiones[c].html;
    }
    document.getElementById("colisiones").innerHTML = htmlColisiones;

    let htmlLocalizaciones = "";
    for (let l =0; l < this.rectangulosLocalizaciones.length; l++) {
        htmlLocalizaciones += this.rectangulosLocalizaciones[l].rectangulo.html;
    }
    document.getElementById("localizaciones").innerHTML = htmlLocalizaciones;

    let htmlEdificios = "";
    for (let e =0; e < this.rectangulosEdificios.length; e++) {
        htmlEdificios += this.rectangulosEdificios[e].html;
    }
    document.getElementById("edificios").innerHTML = htmlEdificios;



    let htmlColectable1 = "";
    for (let c1 =0; c1 < this.objetoColectable1.length; c1++) {
        htmlColectable1 = this.objetoColectable1[c1].html;
    }
    document.getElementById("objeto1").innerHTML = htmlColectable1;
    
    let htmlColectable2 = "";
    for (let c2 =0; c2 < this.objetoColectable2.length; c2++) {
        htmlColectable2 = this.objetoColectable2[c2].html;
    }
    document.getElementById("objeto2").innerHTML = htmlColectable2;
    
    let htmlColectable3 = "";
    for (let c3 =0; c3 < this.objetoColectable3.length; c3++) {
        htmlColectable3 = this.objetoColectable3[c3].html;
    }
    document.getElementById("objeto3").innerHTML = htmlColectable3;
    
    let htmlColectable4 = "";
    for (let c4 =0; c4 < this.objetoColectable4.length; c4++) {
        htmlColectable4 = this.objetoColectable4[c4].html;
    }
    document.getElementById("objeto4").innerHTML = htmlColectable4;
    
    let htmlColectable5 = "";
    for (let c5 =0; c5 < this.objetoColectable5.length; c5++) {
        htmlColectable5 = this.objetoColectable5[c5].html;
    }
    document.getElementById("objeto5").innerHTML = htmlColectable5;
    
    let htmlColectable6 = "";
    for (let c6 =0; c6 < this.objetoColectable6.length; c6++) {
        htmlColectable6 = this.objetoColectable6[c6].html;
    }
    document.getElementById("objeto6").innerHTML = htmlColectable6;
    
    let htmlColectable7 = "";
    for (let c7 =0; c7 < this.objetoColectable7.length; c7++) {
        htmlColectable7 = this.objetoColectable7[c7].html;
    }
    document.getElementById("objeto7").innerHTML = htmlColectable7;

    let htmlColectable8 = "";
    for (let c8 =0; c8 < this.objetoColectable8.length; c8++) {
        htmlColectable8 = this.objetoColectable8[c8].html;
    }
    document.getElementById("objeto8").innerHTML = htmlColectable8;

    let htmlColectable9 = "";
    for (let c9 =0; c9 < this.objetoColectable9.length; c9++) {
        htmlColectable9 = this.objetoColectable9[c9].html;
    }
    document.getElementById("objeto9").innerHTML = htmlColectable9;

    let htmlColectable10 = "";
    for (let c10 =0; c10 < this.objetoColectable10.length; c10++) {
        htmlColectable10 = this.objetoColectable10[c10].html;
    }
    document.getElementById("objeto10").innerHTML = htmlColectable10;



    let htmlEaster1 = "";
    for (let e1 =0; e1 < this.easterColectable1.length; e1++) {
        htmlEaster1 = this.easterColectable1[e1].html;
    }
    document.getElementById("easter1").innerHTML = htmlEaster1;

    let htmlEaster2 = "";
    for (let e2 =0; e2 < this.easterColectable2.length; e2++) {
        htmlEaster2 = this.easterColectable2[e2].html;
    }
    document.getElementById("easter2").innerHTML = htmlEaster2;

    let htmlEaster3 = "";
    for (let e3 =0; e3 < this.easterColectable3.length; e3++) {
        htmlEaster3 = this.easterColectable3[e3].html;
    }
    document.getElementById("easter3").innerHTML = htmlEaster3;



    let htmlTexto1 = "";
    for (let t1 =0; t1 < this.objetoTexto1.length; t1++) {
        htmlTexto1 = this.objetoTexto1[t1].html;
    }
    document.getElementById("texto1").innerHTML = htmlTexto1;

    let htmlTexto2 = "";
    for (let t2 =0; t2 < this.objetoTexto2.length; t2++) {
        htmlTexto2 = this.objetoTexto2[t2].html;
    }
    document.getElementById("texto2").innerHTML = htmlTexto2;

    let htmlTexto3 = "";
    for (let t3 =0; t3 < this.objetoTexto3.length; t3++) {
        htmlTexto3 = this.objetoTexto3[t3].html;
    }
    document.getElementById("texto3").innerHTML = htmlTexto3;

    let htmlTexto4 = "";
    for (let t4 =0; t4 < this.objetoTexto4.length; t4++) {
        htmlTexto4 = this.objetoTexto4[t4].html;
    }
    document.getElementById("texto4").innerHTML = htmlTexto4;

    let htmlTexto5 = "";
    for (let t5 =0; t5 < this.objetoTexto5.length; t5++) {
        htmlTexto5 = this.objetoTexto5[t5].html;
    }
    document.getElementById("texto5").innerHTML = htmlTexto5;



    let htmlEnemigo1 = "";
    for (let en1 =0; en1 < this.objetoEnemigo1.length; en1++) {
        htmlEnemigo1 = this.objetoEnemigo1[en1].html;
    }
    document.getElementById("enemigo1").innerHTML = htmlEnemigo1;

    let htmlEnemigo2 = "";
    for (let en2 =0; en2 < this.objetoEnemigo2.length; en2++) {
        htmlEnemigo2 = this.objetoEnemigo2[en2].html;
    }
    document.getElementById("enemigo2").innerHTML = htmlEnemigo2;

    let htmlEnemigo3 = "";
    for (let en3 =0; en3 < this.objetoEnemigo3.length; en3++) {
        htmlEnemigo3 = this.objetoEnemigo3[en3].html;
    }
    document.getElementById("enemigo3").innerHTML = htmlEnemigo3;

    let htmlEnemigo4 = "";
    for (let en4 =0; en4 < this.objetoEnemigo4.length; en4++) {
        htmlEnemigo4 = this.objetoEnemigo4[en4].html;
    }
    document.getElementById("enemigo4").innerHTML = htmlEnemigo4;

    let htmlEnemigo5 = "";
    for (let en5 =0; en5 < this.objetoEnemigo5.length; en5++) {
        htmlEnemigo5 = this.objetoEnemigo5[en5].html;
    }
    document.getElementById("enemigo5").innerHTML = htmlEnemigo5;

    let htmlEnemigo6 = "";
    for (let en6 =0; en6 < this.objetoEnemigo6.length; en6++) {
        htmlEnemigo6 = this.objetoEnemigo6[en6].html;
    }
    document.getElementById("enemigo6").innerHTML = htmlEnemigo6;

    let htmlEnemigo7 = "";
    for (let en7 =0; en7 < this.objetoEnemigo7.length; en7++) {
        htmlEnemigo7 = this.objetoEnemigo7[en7].html;
    }
    document.getElementById("enemigo7").innerHTML = htmlEnemigo7;

    let htmlEnemigo8 = "";
    for (let en8 =0; en8 < this.objetoEnemigo8.length; en8++) {
        htmlEnemigo8 = this.objetoEnemigo8[en8].html;
    }
    document.getElementById("enemigo8").innerHTML = htmlEnemigo8;

    let htmlEnemigo9 = "";
    for (let en9 =0; en9 < this.objetoEnemigo9.length; en9++) {
        htmlEnemigo9 = this.objetoEnemigo9[en9].html;
    }
    document.getElementById("enemigo9").innerHTML = htmlEnemigo9;




    for (let ct = 0; ct < this.capasTiles.length; ct++) {
        for (let t = 0; t < this.capasTiles[ct].tiles.length; t++) {
            if (this.capasTiles[ct].tiles[t] == null) {
                continue;
            }
            let tileActual = this.capasTiles[ct].tiles[t];
            tileActual.aplicarEstilos();
        }
    }


    for (let c1 = 0; c1 < this.objetoColectable1.length; c1++) {
        if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
            this.objetoColectable1[c1].aplicarEstiloTemporal1('./incautos/incauto1.png');
        } else if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
            this.objetoColectable1[c1].aplicarEstiloTemporal1('./incautos/incauto11.png');
        }
    }
   
    for (let c2 = 0; c2 < this.objetoColectable2.length; c2++) {
        if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
            this.objetoColectable2[c2].aplicarEstiloTemporal1('./incautos/incauto2.png');
        } else if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
            this.objetoColectable2[c2].aplicarEstiloTemporal1('./incautos/incauto12.png');
        }
    }

    for (let c3 = 0; c3 < this.objetoColectable3.length; c3++) {
        if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
            this.objetoColectable3[c3].aplicarEstiloTemporal1('./incautos/incauto3.png');
        } else if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
            this.objetoColectable3[c3].aplicarEstiloTemporal1('./incautos/incauto13.png');
        }
    }
   
    for (let c4 = 0; c4 < this.objetoColectable4.length; c4++) {
        if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
            this.objetoColectable4[c4].aplicarEstiloTemporal1('./incautos/incauto4.png');
        } else if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
            this.objetoColectable4[c4].aplicarEstiloTemporal1('./incautos/incauto14.png');
        }
    }
   
    for (let c5 = 0; c5 < this.objetoColectable5.length; c5++) {
        if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
            this.objetoColectable5[c5].aplicarEstiloTemporal1('./incautos/incauto5.png');
        } else if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
            this.objetoColectable5[c5].aplicarEstiloTemporal1('./incautos/incauto15.png');
        }
    }
   
    for (let c6 = 0; c6 < this.objetoColectable6.length; c6++) {
        if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
            this.objetoColectable6[c6].aplicarEstiloTemporal1('./incautos/incauto6.png');
        } else if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
            this.objetoColectable6[c6].aplicarEstiloTemporal1('./incautos/incauto16.png');
        }
    }
   
    for (let c7 = 0; c7 < this.objetoColectable7.length; c7++) {
        if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
            this.objetoColectable7[c7].aplicarEstiloTemporal1('./incautos/incauto7.png');
        } else if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
            this.objetoColectable7[c7].aplicarEstiloTemporal1('./incautos/incauto17.png');
        }
    }

    for (let c8 = 0; c8 < this.objetoColectable8.length; c8++) {
        if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
            this.objetoColectable8[c8].aplicarEstiloTemporal1('./incautos/incauto8.png');
        } else if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
            this.objetoColectable8[c8].aplicarEstiloTemporal1('./incautos/incauto18.png');
        }
    }
 
    for (let c9 = 0; c9 < this.objetoColectable9.length; c9++) {
        if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
            this.objetoColectable9[c9].aplicarEstiloTemporal1('./incautos/incauto9.png');
        } else if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
            this.objetoColectable9[c9].aplicarEstiloTemporal1('./incautos/incauto19.png');
        }
    }

    for (let c10 = 0; c10 < this.objetoColectable10.length; c10++) {
        if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
            this.objetoColectable10[c10].aplicarEstiloTemporal1('./incautos/incauto10.png');
        } else if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
            this.objetoColectable10[c10].aplicarEstiloTemporal1('./incautos/incauto20.png');
        }
    }




    for (let e1 = 0; e1 < this.easterColectable1.length; e1++) {
        if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
            this.easterColectable1[e1].aplicarEstiloTemporal1('./easter/easter2.png');
        } else if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
            this.easterColectable1[e1].aplicarEstiloTemporal1('./easter/easter4.png');
        }
    }

    for (let e2 = 0; e2 < this.easterColectable2.length; e2++) {
        if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
            this.easterColectable2[e2].aplicarEstiloTemporal1('./easter/easter3.png');
        } else if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
            this.easterColectable2[e2].aplicarEstiloTemporal1('./easter/easter5.png');
        }
    }

    for (let e3 = 0; e3 < this.easterColectable3.length; e3++) {
        if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
            this.easterColectable3[e3].aplicarEstiloTemporal1('./easter/easter1.png');
        } else if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
            this.easterColectable3[e3].aplicarEstiloTemporal1('./easter/easter6.png');
        }
    }



    for (let en1 = 0; en1 < this.objetoEnemigo1.length; en1++) {
        if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
            this.objetoEnemigo1[en1].animacionEnemigoUnoMapaUno('./enemigos/enemigo_uno_cara.png', './enemigos/enemigo_uno_frontal_uno.png', './enemigos/enemigo_uno_frontal_dos.png', './enemigos/enemigo_uno_derecha_uno.png', './enemigos/enemigo_uno_derecha_dos.png', './enemigos/enemigo_uno_izquierda_uno.png', './enemigos/enemigo_uno_izquierda_dos.png', './enemigos/enemigo_uno_espalda_uno.png', './enemigos/enemigo_uno_espalda_dos.png', './enemigos/enemigo_uno_espalda.png');
        } else if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
            this.objetoEnemigo1[en1].animacionEnemigoUnoMapaDos('./enemigos/enemigo_dos_cara.png', './enemigos/enemigo_dos_frontal_uno.png', './enemigos/enemigo_dos_frontal_dos.png', './enemigos/enemigo_dos_derecha_uno.png', './enemigos/enemigo_dos_derecha_dos.png', './enemigos/enemigo_dos_izquierda_uno.png', './enemigos/enemigo_dos_izquierda_dos.png', './enemigos/enemigo_dos_espalda_uno.png', './enemigos/enemigo_dos_espalda_dos.png', './enemigos/enemigo_dos_espalda.png');
        }
    }

    for (let en2 = 0; en2 < this.objetoEnemigo2.length; en2++) {
        if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
            this.objetoEnemigo2[en2].animacionEnemigoDosMapaUno('./enemigos/enemigo_uno_cara.png', './enemigos/enemigo_uno_frontal_uno.png', './enemigos/enemigo_uno_frontal_dos.png', './enemigos/enemigo_uno_derecha_uno.png', './enemigos/enemigo_uno_derecha_dos.png', './enemigos/enemigo_uno_izquierda_uno.png', './enemigos/enemigo_uno_izquierda_dos.png', './enemigos/enemigo_uno_espalda_uno.png', './enemigos/enemigo_uno_espalda_dos.png', './enemigos/enemigo_uno_espalda.png');
        } else if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
            this.objetoEnemigo2[en2].animacionEnemigoDosMapaDos('./enemigos/enemigo_dos_cara.png', './enemigos/enemigo_dos_frontal_uno.png', './enemigos/enemigo_dos_frontal_dos.png', './enemigos/enemigo_dos_derecha_uno.png', './enemigos/enemigo_dos_derecha_dos.png', './enemigos/enemigo_dos_izquierda_uno.png', './enemigos/enemigo_dos_izquierda_dos.png', './enemigos/enemigo_dos_espalda_uno.png', './enemigos/enemigo_dos_espalda_dos.png', './enemigos/enemigo_dos_espalda.png');
        }
    }

    for (let en3 = 0; en3 < this.objetoEnemigo3.length; en3++) {
        if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
            this.objetoEnemigo3[en3].animacionEnemigoTresMapaUno('./enemigos/enemigo_uno_cara.png', './enemigos/enemigo_uno_derecha_uno.png', './enemigos/enemigo_uno_derecha_dos.png', './enemigos/enemigo_uno_izquierda_uno.png', './enemigos/enemigo_uno_izquierda_dos.png');
        } else if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
            this.objetoEnemigo3[en3].animacionEnemigoTresMapaDos('./enemigos/enemigo_dos_cara.png', './enemigos/enemigo_dos_frontal_uno.png', './enemigos/enemigo_dos_frontal_dos.png', './enemigos/enemigo_dos_derecha_uno.png', './enemigos/enemigo_dos_derecha_dos.png', './enemigos/enemigo_dos_izquierda_uno.png', './enemigos/enemigo_dos_izquierda_dos.png', './enemigos/enemigo_dos_espalda_uno.png', './enemigos/enemigo_dos_espalda_dos.png', './enemigos/enemigo_dos_espalda.png');
        }
    }

    for (let en4 = 0; en4 < this.objetoEnemigo4.length; en4++) {
        if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
            this.objetoEnemigo4[en4].animacionEnemigoCuatroMapaUno('./enemigos/enemigo_uno_cara.png', './enemigos/enemigo_uno_frontal_uno.png', './enemigos/enemigo_uno_frontal_dos.png', './enemigos/enemigo_uno_espalda_uno.png', './enemigos/enemigo_uno_espalda_dos.png', './enemigos/enemigo_uno_espalda.png');
        } else if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
            this.objetoEnemigo4[en4].animacionEnemigoCuatroMapaDos('./enemigos/enemigo_dos_cara.png', './enemigos/enemigo_dos_frontal_uno.png', './enemigos/enemigo_dos_frontal_dos.png', './enemigos/enemigo_dos_derecha_uno.png', './enemigos/enemigo_dos_derecha_dos.png', './enemigos/enemigo_dos_izquierda_uno.png', './enemigos/enemigo_dos_izquierda_dos.png', './enemigos/enemigo_dos_espalda_uno.png', './enemigos/enemigo_dos_espalda_dos.png', './enemigos/enemigo_dos_espalda.png');
        }
    }

    for (let en5 = 0; en5 < this.objetoEnemigo5.length; en5++) {
        if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
            this.objetoEnemigo5[en5].animacionEnemigoCincoMapaUno('./enemigos/enemigo_uno_cara.png', './enemigos/enemigo_uno_frontal_uno.png', './enemigos/enemigo_uno_frontal_dos.png', './enemigos/enemigo_uno_espalda_uno.png', './enemigos/enemigo_uno_espalda_dos.png', './enemigos/enemigo_uno_espalda.png');
        } else if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
            this.objetoEnemigo5[en5].animacionEnemigoCincoMapaDos('./enemigos/enemigo_dos_cara.png', './enemigos/enemigo_dos_frontal_uno.png', './enemigos/enemigo_dos_frontal_dos.png', './enemigos/enemigo_dos_derecha_uno.png', './enemigos/enemigo_dos_derecha_dos.png', './enemigos/enemigo_dos_izquierda_uno.png', './enemigos/enemigo_dos_izquierda_dos.png', './enemigos/enemigo_dos_espalda_uno.png', './enemigos/enemigo_dos_espalda_dos.png', './enemigos/enemigo_dos_espalda.png');
        }
    }

    for (let en6 = 0; en6 < this.objetoEnemigo6.length; en6++) {
        if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
            this.objetoEnemigo6[en6].animacionEnemigoSeisMapaUno('./enemigos/enemigo_uno_cara.png', './enemigos/enemigo_uno_frontal_uno.png', './enemigos/enemigo_uno_frontal_dos.png', './enemigos/enemigo_uno_derecha_uno.png', './enemigos/enemigo_uno_derecha_dos.png', './enemigos/enemigo_uno_izquierda_uno.png', './enemigos/enemigo_uno_izquierda_dos.png', './enemigos/enemigo_uno_espalda_uno.png', './enemigos/enemigo_uno_espalda_dos.png', './enemigos/enemigo_uno_espalda.png');
        } else if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
            this.objetoEnemigo6[en6].animacionEnemigoSeisMapaDos('./enemigos/enemigo_dos_cara.png', './enemigos/enemigo_dos_frontal_uno.png', './enemigos/enemigo_dos_frontal_dos.png', './enemigos/enemigo_dos_derecha_uno.png', './enemigos/enemigo_dos_derecha_dos.png', './enemigos/enemigo_dos_izquierda_uno.png', './enemigos/enemigo_dos_izquierda_dos.png', './enemigos/enemigo_dos_espalda_uno.png', './enemigos/enemigo_dos_espalda_dos.png', './enemigos/enemigo_dos_espalda.png');
        }
    }

    for (let en7 = 0; en7 < this.objetoEnemigo7.length; en7++) {
        if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
            this.objetoEnemigo7[en7].animacionEnemigoSieteMapaUno('./enemigos/enemigo_uno_cara.png', './enemigos/enemigo_uno_frontal_uno.png', './enemigos/enemigo_uno_frontal_dos.png', './enemigos/enemigo_uno_espalda_uno.png', './enemigos/enemigo_uno_espalda_dos.png', './enemigos/enemigo_uno_espalda.png');
        } else if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
            this.objetoEnemigo7[en7].animacionEnemigoSieteMapaDos('./enemigos/enemigo_dos_cara.png', './enemigos/enemigo_dos_frontal_uno.png', './enemigos/enemigo_dos_frontal_dos.png', './enemigos/enemigo_dos_derecha_uno.png', './enemigos/enemigo_dos_derecha_dos.png', './enemigos/enemigo_dos_izquierda_uno.png', './enemigos/enemigo_dos_izquierda_dos.png', './enemigos/enemigo_dos_espalda_uno.png', './enemigos/enemigo_dos_espalda_dos.png', './enemigos/enemigo_dos_espalda.png');
        }
    }

    for (let en8 = 0; en8 < this.objetoEnemigo8.length; en8++) {
        if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
            this.objetoEnemigo8[en8].animacionEnemigoOchoMapaUno('./enemigos/enemigo_uno_cara.png', './enemigos/enemigo_uno_derecha_uno.png', './enemigos/enemigo_uno_derecha_dos.png', './enemigos/enemigo_uno_frontal_uno.png', './enemigos/enemigo_uno_frontal_dos.png', './enemigos/enemigo_uno_izquierda_uno.png', './enemigos/enemigo_uno_izquierda_dos.png', './enemigos/enemigo_uno_espalda_uno.png', './enemigos/enemigo_uno_espalda_dos.png', './enemigos/enemigo_uno_espalda.png');
        } else if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
            this.objetoEnemigo8[en8].animacionEnemigoOchoMapaDos('./enemigos/enemigo_dos_cara.png', './enemigos/enemigo_dos_frontal_uno.png', './enemigos/enemigo_dos_frontal_dos.png', './enemigos/enemigo_dos_espalda_uno.png', './enemigos/enemigo_dos_espalda_dos.png', './enemigos/enemigo_dos_espalda.png');
        }
    }

    for (let en9 = 0; en9 < this.objetoEnemigo9.length; en9++) {
        if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
            this.objetoEnemigo9[en9].animacionEnemigoNueveMapaUno('./enemigos/enemigo_uno_cara.png', './enemigos/enemigo_uno_frontal_uno.png', './enemigos/enemigo_uno_frontal_dos.png', './enemigos/enemigo_uno_espalda_uno.png', './enemigos/enemigo_uno_espalda_dos.png', './enemigos/enemigo_uno_espalda.png');
        } else if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
            this.objetoEnemigo9[en9].animacionEnemigoNueveMapaDos('./enemigos/enemigo_dos_cara.png', './enemigos/enemigo_dos_frontal_uno.png', './enemigos/enemigo_dos_frontal_dos.png', './enemigos/enemigo_dos_derecha_uno.png', './enemigos/enemigo_dos_derecha_dos.png', './enemigos/enemigo_dos_izquierda_uno.png', './enemigos/enemigo_dos_izquierda_dos.png', './enemigos/enemigo_dos_espalda_uno.png', './enemigos/enemigo_dos_espalda_dos.png', './enemigos/enemigo_dos_espalda.png');
        }
    }




    if (debug.debugging) {
        for (let b = 0; b < this.rectangulosColisiones.length; b++) {
            this.rectangulosColisiones[b].aplicarEstiloTemporal("#808080"); 
        }
     
        for (let p = 0; p < this.rectangulosLocalizaciones.length; p++) {
            this.rectangulosLocalizaciones[p].rectangulo.aplicarEstiloTemporal("#ffa500");
        }

        for (let e = 0; e < this.rectangulosEdificios.length; e++) {
            this.rectangulosEdificios[e].aplicarEstiloTemporal("#ff0084");
        }
    }

    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    document.getElementsByTagName("body")[0].style.backgroundColor = "black";
}


Mapa.prototype.actualizar = function (registroTemporal, posicionJugadorEnPixeles) {
    this.posicion.x = posicionJugadorEnPixeles.x;
    this.posicion.y = posicionJugadorEnPixeles.y;

    this.limiteMapa.x = this.posicion.x;
    this.limiteMapa.y = this.posicion.y;
}


Mapa.prototype.dibujar = function () {
    for (let c = 0; c < this.capasTiles.length; c++) {
        for (let i = 0; i < this.capasTiles[c].tiles.length; i++) {
            if (this.capasTiles[c].tiles[i] !== null) {
                this.capasTiles[c].tiles[i].mover(this.posicion.x, this.posicion.y);
            }
        }
    }

    for (let c1 = 0; c1 < this.objetoColectable1.length; c1++) {
        this.objetoColectable1[c1].mover(this.posicion.x, this.posicion.y);
    }
    
    for (let c2 = 0; c2 < this.objetoColectable2.length; c2++) {
        this.objetoColectable2[c2].mover(this.posicion.x, this.posicion.y);
    }

    for (let c3 = 0; c3 < this.objetoColectable3.length; c3++) {
        this.objetoColectable3[c3].mover(this.posicion.x, this.posicion.y);
    }
    
    for (let c4 = 0; c4 < this.objetoColectable4.length; c4++) {
        this.objetoColectable4[c4].mover(this.posicion.x, this.posicion.y);
    }
    
    for (let c5 = 0; c5 < this.objetoColectable5.length; c5++) {
        this.objetoColectable5[c5].mover(this.posicion.x, this.posicion.y);
    }
    
    for (let c6 = 0; c6 < this.objetoColectable6.length; c6++) {
        this.objetoColectable6[c6].mover(this.posicion.x, this.posicion.y);
    }
    
    for (let c7 = 0; c7 < this.objetoColectable7.length; c7++) {
        this.objetoColectable7[c7].mover(this.posicion.x, this.posicion.y);
    }

    for (let c8 = 0; c8 < this.objetoColectable8.length; c8++) {
        this.objetoColectable8[c8].mover(this.posicion.x, this.posicion.y);
    }

    for (let c9 = 0; c9 < this.objetoColectable9.length; c9++) {
        this.objetoColectable9[c9].mover(this.posicion.x, this.posicion.y);
    }

    for (let c10 = 0; c10 < this.objetoColectable10.length; c10++) {
        this.objetoColectable10[c10].mover(this.posicion.x, this.posicion.y);
    }




    for (let e1 = 0; e1 < this.easterColectable1.length; e1++) {
        this.easterColectable1[e1].mover(this.posicion.x, this.posicion.y);
    }

    for (let e2 = 0; e2 < this.easterColectable2.length; e2++) {
        this.easterColectable2[e2].mover(this.posicion.x, this.posicion.y);
    }

    for (let e3 = 0; e3 < this.easterColectable3.length; e3++) {
        this.easterColectable3[e3].mover(this.posicion.x, this.posicion.y);
    }




    for (let t1 = 0; t1 < this.objetoTexto1.length; t1++) {
        this.objetoTexto1[t1].mover(this.posicion.x, this.posicion.y);
    }

    for (let t2 = 0; t2 < this.objetoTexto2.length; t2++) {
        this.objetoTexto2[t2].mover(this.posicion.x, this.posicion.y);
    }

    for (let t3 = 0; t3 < this.objetoTexto3.length; t3++) {
        this.objetoTexto3[t3].mover(this.posicion.x, this.posicion.y);
    }

    for (let t4 = 0; t4 < this.objetoTexto4.length; t4++) {
        this.objetoTexto4[t4].mover(this.posicion.x, this.posicion.y);
    }

    for (let t5 = 0; t5 < this.objetoTexto5.length; t5++) {
        this.objetoTexto5[t5].mover(this.posicion.x, this.posicion.y);
    }
    

    

    for (let en1 = 0; en1 < this.objetoEnemigo1.length; en1++) {
        this.objetoEnemigo1[en1].mover(this.posicion.x, this.posicion.y);
    }

    for (let en2 = 0; en2 < this.objetoEnemigo2.length; en2++) {
        this.objetoEnemigo2[en2].mover(this.posicion.x, this.posicion.y);
    }

    for (let en3 = 0; en3 < this.objetoEnemigo3.length; en3++) {
        this.objetoEnemigo3[en3].mover(this.posicion.x, this.posicion.y);
    }

    for (let en4 = 0; en4 < this.objetoEnemigo4.length; en4++) {
        this.objetoEnemigo4[en4].mover(this.posicion.x, this.posicion.y);
    }

    for (let en5 = 0; en5 < this.objetoEnemigo5.length; en5++) {
        this.objetoEnemigo5[en5].mover(this.posicion.x, this.posicion.y);
    }

    for (let en6 = 0; en6 < this.objetoEnemigo6.length; en6++) {
        this.objetoEnemigo6[en6].mover(this.posicion.x, this.posicion.y);
    }

    for (let en7 = 0; en7 < this.objetoEnemigo7.length; en7++) {
        this.objetoEnemigo7[en7].mover(this.posicion.x, this.posicion.y);
    }

    for (let en8 = 0; en8 < this.objetoEnemigo8.length; en8++) {
        this.objetoEnemigo8[en8].mover(this.posicion.x, this.posicion.y);
    }

    for (let en9 = 0; en9 < this.objetoEnemigo9.length; en9++) {
        this.objetoEnemigo9[en9].mover(this.posicion.x, this.posicion.y);
    }


    if (debug.debugging) {
        for (let rc = 0; rc < this.rectangulosColisiones.length; rc++) {
            this.rectangulosColisiones[rc].mover(this.posicion.x, this.posicion.y);
        }

        for (let rl = 0; rl < this.rectangulosLocalizaciones.length; rl++) {
         this.rectangulosLocalizaciones[rl].rectangulo.mover(this.posicion.x, this.posicion.y);
        }

        for (let ed = 0; ed < this.rectangulosEdificios.length; ed++) {
        this.rectangulosEdificios[ed].mover(this.posicion.x, this.posicion.y);
        }
    }
}


Mapa.prototype.detectarColision = function() {
    
    const carga = document.createElement("div");
    carga.style.position = "fixed";
    carga.style.zIndex = "9999";
    carga.style.top = "0px";
    carga.style.left = "0px";
    carga.style.width = "100%";
    carga.style.height = "100%";
    carga.style.backgroundImage = "url('img/loading.png')";
    carga.style.backgroundSize = "cover";
    carga.style.backgroundPosition = "center";
    carga.style.opacity = "1";
    carga.style.pointerEvents = "auto";

    const popup = document.createElement("div");
    popup.innerHTML = "Has sido capturado por un enemigo, ten mas cuidado la proxima vez... Pulsa 'R' para continuar.";
    popup.style.zIndex = "20";
    popup.style.position = "fixed";
    popup.style.top = "60%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.backgroundColor = "black";
    popup.style.color = "white";
    popup.style.fontSize = "20px";
    popup.style.padding = "50px";
    popup.style.border = "1px solid white";
    popup.style.borderRadius = "10px";
    popup.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";


    for (let en1 = 0; en1 < this.objetoEnemigo1.length; en1++) {
        const enemigoUno = document.getElementById(this.objetoEnemigo1[en1].idHTML);
        const personaje = document.getElementById('jugador');

        if (enemigoUno && personaje) {
            const rectEnemigoUno = enemigoUno.getBoundingClientRect();
            const rectPersonaje = personaje.getBoundingClientRect();
    
            if (rectEnemigoUno.left < rectPersonaje.right && rectEnemigoUno.right > rectPersonaje.left && rectEnemigoUno.top < rectPersonaje.bottom && rectEnemigoUno.bottom > rectPersonaje.top) {
                if (maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {       
                    maquinaEstados.cambiarEstado(listadoEstados.MAPAMUNDI);

                    const keysToRelease = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
                    keysToRelease.forEach((key) => {
                        const event = new KeyboardEvent('keyup', { key: key });
                        document.dispatchEvent(event);
                    });

                    teclado.desactivarControles();

                    setTimeout(() => {
                        document.body.appendChild(popup);
                    }, 4000);
                    

                    const keyUpListener = (event) => {
                        if (event.key === controlesTeclado.entrarLocalizacion || event.key === controlesTeclado.entrarLocalizacion2) {
                            document.body.removeChild(popup);
                            teclado.reactivarControles();
                            document.removeEventListener('keyup', keyUpListener);
                        }
                    };
                    document.addEventListener('keyup', keyUpListener);

                } else if (maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {

                    document.body.appendChild(carga);

                    setTimeout(() => {
                        document.body.removeChild(carga);
                    }, 3000);
                        
                    const localizacionEntrada = registroLocalizaciones.obtenerLocalizacion("Hacia Afueras");
                    if (localizacionEntrada) {
                        maquinaEstados.cambiarEstado(listadoEstados.NIVEL, {
                            rutaMapa: localizacionEntrada.rutaMapa,
                            coordenadaXInicial: localizacionEntrada.coordenadaXInicial,
                            coordenadaYInicial: localizacionEntrada.coordenadaYInicial
                        });

                        const keysToRelease = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
                        keysToRelease.forEach((key) => {
                            const event = new KeyboardEvent('keyup', { key: key });
                            document.dispatchEvent(event);
                        });

                        teclado.desactivarControles();

                        setTimeout(() => {
                            document.body.appendChild(popup);
                        }, 4000);
                       
                        const keyUpListener = (event) => {
                            if (event.key === controlesTeclado.entrarLocalizacion || event.key === controlesTeclado.entrarLocalizacion2) {
                                document.body.removeChild(popup);
                                teclado.reactivarControles();
                                document.removeEventListener('keyup', keyUpListener);
                            }
                        };
                        document.addEventListener('keyup', keyUpListener);

                    } else {
                        console.error("No se encontró la localización de entrada 'Hacia Afueras'");
                    }
                }
                this.detenerDeteccionColisiones();
                break;
            }
        }
    }
        
    
    for (let en2 = 0; en2 < this.objetoEnemigo2.length; en2++) {
        const enemigoDos = document.getElementById(this.objetoEnemigo2[en2].idHTML);
        const personaje = document.getElementById('jugador');

        if (enemigoDos && personaje) {
            const rectEnemigoDos = enemigoDos.getBoundingClientRect();
            const rectPersonaje = personaje.getBoundingClientRect();
    
            if (rectEnemigoDos.left < rectPersonaje.right && rectEnemigoDos.right > rectPersonaje.left && rectEnemigoDos.top < rectPersonaje.bottom && rectEnemigoDos.bottom > rectPersonaje.top) {
                if (maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
                    maquinaEstados.cambiarEstado(listadoEstados.MAPAMUNDI);

                    const keysToRelease = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
                    keysToRelease.forEach((key) => {
                        const event = new KeyboardEvent('keyup', { key: key });
                        document.dispatchEvent(event);
                    });

                    teclado.desactivarControles();
                    
                    setTimeout(() => {
                        document.body.appendChild(popup);
                    }, 4000);

                    const keyUpListener = (event) => {
                        if (event.key === controlesTeclado.entrarLocalizacion || event.key === controlesTeclado.entrarLocalizacion2) {
                            document.body.removeChild(popup);
                            teclado.reactivarControles();
                            document.removeEventListener('keyup', keyUpListener);
                        }
                    };
                    document.addEventListener('keyup', keyUpListener);

                } else if (maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
                    document.body.appendChild(carga);

                    setTimeout(() => {
                        document.body.removeChild(carga);
                    }, 3000);
                        
                    const localizacionEntrada = registroLocalizaciones.obtenerLocalizacion("Hacia Afueras");
                    if (localizacionEntrada) {
                        maquinaEstados.cambiarEstado(listadoEstados.NIVEL, {
                            rutaMapa: localizacionEntrada.rutaMapa,
                            coordenadaXInicial: localizacionEntrada.coordenadaXInicial,
                            coordenadaYInicial: localizacionEntrada.coordenadaYInicial
                        });

                        const keysToRelease = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
                        keysToRelease.forEach((key) => {
                            const event = new KeyboardEvent('keyup', { key: key });
                            document.dispatchEvent(event);
                        });

                        teclado.desactivarControles();
                        
                        setTimeout(() => {
                            document.body.appendChild(popup);
                        }, 4000);
    
                        const keyUpListener = (event) => {
                            if (event.key === controlesTeclado.entrarLocalizacion || event.key === controlesTeclado.entrarLocalizacion2) {
                                document.body.removeChild(popup);
                                teclado.reactivarControles();
                                document.removeEventListener('keyup', keyUpListener);
                            }
                        };
                        document.addEventListener('keyup', keyUpListener);

                    } else {
                        console.error("No se encontró la localización de entrada 'Hacia Afueras'");
                    }
                }
                this.detenerDeteccionColisiones();
                break;
            }
        }
    }
    

    for (let en3 = 0; en3 < this.objetoEnemigo3.length; en3++) {
        const enemigoTres = document.getElementById(this.objetoEnemigo3[en3].idHTML);
        const personaje = document.getElementById('jugador');

        if (enemigoTres && personaje) {
            const rectEnemigoTres = enemigoTres.getBoundingClientRect();
            const rectPersonaje = personaje.getBoundingClientRect();
    
            if (rectEnemigoTres.left < rectPersonaje.right && rectEnemigoTres.right > rectPersonaje.left && rectEnemigoTres.top < rectPersonaje.bottom && rectEnemigoTres.bottom > rectPersonaje.top) {
                if (maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
                    maquinaEstados.cambiarEstado(listadoEstados.MAPAMUNDI);

                    const keysToRelease = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
                    keysToRelease.forEach((key) => {
                        const event = new KeyboardEvent('keyup', { key: key });
                        document.dispatchEvent(event);
                    });

                    teclado.desactivarControles();

                    setTimeout(() => {
                        document.body.appendChild(popup);
                    }, 4000);

                    const keyUpListener = (event) => {
                        if (event.key === controlesTeclado.entrarLocalizacion || event.key === controlesTeclado.entrarLocalizacion2) {
                            document.body.removeChild(popup);
                            teclado.reactivarControles();
                            document.removeEventListener('keyup', keyUpListener);
                        }
                    };
                    document.addEventListener('keyup', keyUpListener);

                } else if (maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
                    document.body.appendChild(carga);

                    setTimeout(() => {
                        document.body.removeChild(carga);
                    }, 3000);
                        
                    const localizacionEntrada = registroLocalizaciones.obtenerLocalizacion("Hacia Afueras");
                    if (localizacionEntrada) {
                        maquinaEstados.cambiarEstado(listadoEstados.NIVEL, {
                            rutaMapa: localizacionEntrada.rutaMapa,
                            coordenadaXInicial: localizacionEntrada.coordenadaXInicial,
                            coordenadaYInicial: localizacionEntrada.coordenadaYInicial
                        });

                        const keysToRelease = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
                        keysToRelease.forEach((key) => {
                            const event = new KeyboardEvent('keyup', { key: key });
                            document.dispatchEvent(event);
                        });

                        teclado.desactivarControles();
                        
                        setTimeout(() => {
                            document.body.appendChild(popup);
                        }, 4000);
    
                        const keyUpListener = (event) => {
                            if (event.key === controlesTeclado.entrarLocalizacion || event.key === controlesTeclado.entrarLocalizacion2) {
                                document.body.removeChild(popup);
                                teclado.reactivarControles();
                                document.removeEventListener('keyup', keyUpListener);
                            }
                        };
                        document.addEventListener('keyup', keyUpListener);

                    } else {
                        console.error("No se encontró la localización de entrada 'Hacia Afueras'");
                    }
                }
                this.detenerDeteccionColisiones();
                break;
            }
        }
    }
    

    for (let en4 = 0; en4 < this.objetoEnemigo4.length; en4++) {
        const enemigoCuatro = document.getElementById(this.objetoEnemigo4[en4].idHTML);
        const personaje = document.getElementById('jugador');

        if (enemigoCuatro && personaje) {
            const rectEnemigoCuatro = enemigoCuatro.getBoundingClientRect();
            const rectPersonaje = personaje.getBoundingClientRect();
    
            if (rectEnemigoCuatro.left < rectPersonaje.right && rectEnemigoCuatro.right > rectPersonaje.left && rectEnemigoCuatro.top < rectPersonaje.bottom && rectEnemigoCuatro.bottom > rectPersonaje.top) {
                if (maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
                    maquinaEstados.cambiarEstado(listadoEstados.MAPAMUNDI);

                    const keysToRelease = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
                    keysToRelease.forEach((key) => {
                        const event = new KeyboardEvent('keyup', { key: key });
                        document.dispatchEvent(event);
                    });

                    teclado.desactivarControles();
                    
                    setTimeout(() => {
                        document.body.appendChild(popup);
                    }, 4000);

                    const keyUpListener = (event) => {
                        if (event.key === controlesTeclado.entrarLocalizacion || event.key === controlesTeclado.entrarLocalizacion2) {
                            document.body.removeChild(popup);
                            teclado.reactivarControles();
                            document.removeEventListener('keyup', keyUpListener);
                        }
                    };
                    document.addEventListener('keyup', keyUpListener);

                } else if (maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
                    document.body.appendChild(carga);

                    setTimeout(() => {
                        document.body.removeChild(carga);
                    }, 3000);
                        
                    const localizacionEntrada = registroLocalizaciones.obtenerLocalizacion("Hacia Afueras");
                    if (localizacionEntrada) {
                        maquinaEstados.cambiarEstado(listadoEstados.NIVEL, {
                            rutaMapa: localizacionEntrada.rutaMapa,
                            coordenadaXInicial: localizacionEntrada.coordenadaXInicial,
                            coordenadaYInicial: localizacionEntrada.coordenadaYInicial
                        });

                        const keysToRelease = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
                        keysToRelease.forEach((key) => {
                            const event = new KeyboardEvent('keyup', { key: key });
                            document.dispatchEvent(event);
                        });

                        teclado.desactivarControles();
                        
                        setTimeout(() => {
                            document.body.appendChild(popup);
                        }, 4000);
    
                        const keyUpListener = (event) => {
                            if (event.key === controlesTeclado.entrarLocalizacion || event.key === controlesTeclado.entrarLocalizacion2) {
                                document.body.removeChild(popup);
                                teclado.reactivarControles();
                                document.removeEventListener('keyup', keyUpListener);
                            }
                        };
                        document.addEventListener('keyup', keyUpListener);

                    } else {
                        console.error("No se encontró la localización de entrada 'Hacia Afueras'");
                    }
                }
                this.detenerDeteccionColisiones();
                break;
            }
        }
    }


    for (let en5 = 0; en5 < this.objetoEnemigo5.length; en5++) {
        const enemigoCinco = document.getElementById(this.objetoEnemigo5[en5].idHTML);
        const personaje = document.getElementById('jugador');

        if (enemigoCinco && personaje) {
            const rectEnemigoCinco = enemigoCinco.getBoundingClientRect();
            const rectPersonaje = personaje.getBoundingClientRect();
    
            if (rectEnemigoCinco.left < rectPersonaje.right && rectEnemigoCinco.right > rectPersonaje.left && rectEnemigoCinco.top < rectPersonaje.bottom && rectEnemigoCinco.bottom > rectPersonaje.top) {
                if (maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
                    maquinaEstados.cambiarEstado(listadoEstados.MAPAMUNDI);

                    const keysToRelease = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
                    keysToRelease.forEach((key) => {
                        const event = new KeyboardEvent('keyup', { key: key });
                        document.dispatchEvent(event);
                    });

                    teclado.desactivarControles();
                    
                    setTimeout(() => {
                        document.body.appendChild(popup);
                    }, 4000);

                    const keyUpListener = (event) => {
                        if (event.key === controlesTeclado.entrarLocalizacion || event.key === controlesTeclado.entrarLocalizacion2) {
                            document.body.removeChild(popup);
                            teclado.reactivarControles();
                            document.removeEventListener('keyup', keyUpListener);
                        }
                    };
                    document.addEventListener('keyup', keyUpListener);

                } else if (maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
                    document.body.appendChild(carga);

                    setTimeout(() => {
                        document.body.removeChild(carga);
                    }, 3000);
                        
                    const localizacionEntrada = registroLocalizaciones.obtenerLocalizacion("Hacia Afueras");
                    if (localizacionEntrada) {
                        maquinaEstados.cambiarEstado(listadoEstados.NIVEL, {
                            rutaMapa: localizacionEntrada.rutaMapa,
                            coordenadaXInicial: localizacionEntrada.coordenadaXInicial,
                            coordenadaYInicial: localizacionEntrada.coordenadaYInicial
                        });

                        const keysToRelease = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
                        keysToRelease.forEach((key) => {
                            const event = new KeyboardEvent('keyup', { key: key });
                            document.dispatchEvent(event);
                        });

                        teclado.desactivarControles();
                        
                        setTimeout(() => {
                            document.body.appendChild(popup);
                        }, 4000);
    
                        const keyUpListener = (event) => {
                            if (event.key === controlesTeclado.entrarLocalizacion || event.key === controlesTeclado.entrarLocalizacion2) {
                                document.body.removeChild(popup);
                                teclado.reactivarControles();
                                document.removeEventListener('keyup', keyUpListener);
                            }
                        };
                        document.addEventListener('keyup', keyUpListener);

                    } else {
                        console.error("No se encontró la localización de entrada 'Hacia Afueras'");
                    }
                }
                this.detenerDeteccionColisiones();
                break;
            }
        }
    }
    

    for (let en6 = 0; en6 < this.objetoEnemigo6.length; en6++) {
        const enemigoSeis = document.getElementById(this.objetoEnemigo6[en6].idHTML);
        const personaje = document.getElementById('jugador');

        if (enemigoSeis && personaje) {
            const rectEnemigoSeis = enemigoSeis.getBoundingClientRect();
            const rectPersonaje = personaje.getBoundingClientRect();
    
            if (rectEnemigoSeis.left < rectPersonaje.right && rectEnemigoSeis.right > rectPersonaje.left && rectEnemigoSeis.top < rectPersonaje.bottom && rectEnemigoSeis.bottom > rectPersonaje.top) {
                if (maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
                    maquinaEstados.cambiarEstado(listadoEstados.MAPAMUNDI);

                    const keysToRelease = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
                    keysToRelease.forEach((key) => {
                        const event = new KeyboardEvent('keyup', { key: key });
                        document.dispatchEvent(event);
                    });

                    teclado.desactivarControles();
                    
                    setTimeout(() => {
                        document.body.appendChild(popup);
                    }, 4000);

                    const keyUpListener = (event) => {
                        if (event.key === controlesTeclado.entrarLocalizacion || event.key === controlesTeclado.entrarLocalizacion2) {
                            document.body.removeChild(popup);
                            teclado.reactivarControles();
                            document.removeEventListener('keyup', keyUpListener);
                        }
                    };
                    document.addEventListener('keyup', keyUpListener);

                } else if (maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
                    document.body.appendChild(carga);

                    setTimeout(() => {
                        document.body.removeChild(carga);
                    }, 3000);
                        
                    const localizacionEntrada = registroLocalizaciones.obtenerLocalizacion("Hacia Afueras");
                    if (localizacionEntrada) {
                        maquinaEstados.cambiarEstado(listadoEstados.NIVEL, {
                            rutaMapa: localizacionEntrada.rutaMapa,
                            coordenadaXInicial: localizacionEntrada.coordenadaXInicial,
                            coordenadaYInicial: localizacionEntrada.coordenadaYInicial
                        });

                        const keysToRelease = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
                        keysToRelease.forEach((key) => {
                            const event = new KeyboardEvent('keyup', { key: key });
                            document.dispatchEvent(event);
                        });

                        teclado.desactivarControles();
                        
                        setTimeout(() => {
                            document.body.appendChild(popup);
                        }, 4000);
    
                        const keyUpListener = (event) => {
                            if (event.key === controlesTeclado.entrarLocalizacion || event.key === controlesTeclado.entrarLocalizacion2) {
                                document.body.removeChild(popup);
                                teclado.reactivarControles();
                                document.removeEventListener('keyup', keyUpListener);
                            }
                        };
                        document.addEventListener('keyup', keyUpListener);

                    } else {
                        console.error("No se encontró la localización de entrada 'Hacia Afueras'");
                    }
                }
                this.detenerDeteccionColisiones();
                break;
            }
        }
    }


    for (let en7 = 0; en7 < this.objetoEnemigo7.length; en7++) {
        const enemigoSiete = document.getElementById(this.objetoEnemigo7[en7].idHTML);
        const personaje = document.getElementById('jugador');

        if (enemigoSiete && personaje) {
            const rectEnemigoSiete = enemigoSiete.getBoundingClientRect();
            const rectPersonaje = personaje.getBoundingClientRect();
    
            if (rectEnemigoSiete.left < rectPersonaje.right && rectEnemigoSiete.right > rectPersonaje.left && rectEnemigoSiete.top < rectPersonaje.bottom && rectEnemigoSiete.bottom > rectPersonaje.top) {
                if (maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
                    maquinaEstados.cambiarEstado(listadoEstados.MAPAMUNDI);

                    const keysToRelease = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
                    keysToRelease.forEach((key) => {
                        const event = new KeyboardEvent('keyup', { key: key });
                        document.dispatchEvent(event);
                    });

                    teclado.desactivarControles();
                    
                    setTimeout(() => {
                        document.body.appendChild(popup);
                    }, 4000);

                    const keyUpListener = (event) => {
                        if (event.key === controlesTeclado.entrarLocalizacion || event.key === controlesTeclado.entrarLocalizacion2) {
                            document.body.removeChild(popup);
                            teclado.reactivarControles();
                            document.removeEventListener('keyup', keyUpListener);
                        }
                    };
                    document.addEventListener('keyup', keyUpListener);

                } else if (maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
                    document.body.appendChild(carga);

                    setTimeout(() => {
                        document.body.removeChild(carga);
                    }, 3000);
                        
                    const localizacionEntrada = registroLocalizaciones.obtenerLocalizacion("Hacia Afueras");
                    if (localizacionEntrada) {
                        maquinaEstados.cambiarEstado(listadoEstados.NIVEL, {
                            rutaMapa: localizacionEntrada.rutaMapa,
                            coordenadaXInicial: localizacionEntrada.coordenadaXInicial,
                            coordenadaYInicial: localizacionEntrada.coordenadaYInicial
                        });

                        const keysToRelease = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
                        keysToRelease.forEach((key) => {
                            const event = new KeyboardEvent('keyup', { key: key });
                            document.dispatchEvent(event);
                        });

                        teclado.desactivarControles();
                        
                        setTimeout(() => {
                            document.body.appendChild(popup);
                        }, 4000);
    
                        const keyUpListener = (event) => {
                            if (event.key === controlesTeclado.entrarLocalizacion || event.key === controlesTeclado.entrarLocalizacion2) {
                                document.body.removeChild(popup);
                                teclado.reactivarControles();
                                document.removeEventListener('keyup', keyUpListener);
                            }
                        };
                        document.addEventListener('keyup', keyUpListener);

                    } else {
                        console.error("No se encontró la localización de entrada 'Hacia Afueras'");
                    }
                }
                this.detenerDeteccionColisiones();
                break;
            }
        }
    }


    for (let en8 = 0; en8 < this.objetoEnemigo8.length; en8++) {
        const enemigoOcho = document.getElementById(this.objetoEnemigo8[en8].idHTML);
        const personaje = document.getElementById('jugador');

        if (enemigoOcho && personaje) {
            const rectEnemigoOcho = enemigoOcho.getBoundingClientRect();
            const rectPersonaje = personaje.getBoundingClientRect();
    
            if (rectEnemigoOcho.left < rectPersonaje.right && rectEnemigoOcho.right > rectPersonaje.left && rectEnemigoOcho.top < rectPersonaje.bottom && rectEnemigoOcho.bottom > rectPersonaje.top) {
                if (maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
                    maquinaEstados.cambiarEstado(listadoEstados.MAPAMUNDI);

                    const keysToRelease = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
                    keysToRelease.forEach((key) => {
                        const event = new KeyboardEvent('keyup', { key: key });
                        document.dispatchEvent(event);
                    });

                    teclado.desactivarControles();
                    
                    setTimeout(() => {
                        document.body.appendChild(popup);
                    }, 4000);

                    const keyUpListener = (event) => {
                        if (event.key === controlesTeclado.entrarLocalizacion || event.key === controlesTeclado.entrarLocalizacion2) {
                            document.body.removeChild(popup);
                            teclado.reactivarControles();
                            document.removeEventListener('keyup', keyUpListener);
                        }
                    };
                    document.addEventListener('keyup', keyUpListener);

                } else if (maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
                    document.body.appendChild(carga);

                    setTimeout(() => {
                        document.body.removeChild(carga);
                    }, 3000);
                        
                    const localizacionEntrada = registroLocalizaciones.obtenerLocalizacion("Hacia Afueras");
                    if (localizacionEntrada) {
                        maquinaEstados.cambiarEstado(listadoEstados.NIVEL, {
                            rutaMapa: localizacionEntrada.rutaMapa,
                            coordenadaXInicial: localizacionEntrada.coordenadaXInicial,
                            coordenadaYInicial: localizacionEntrada.coordenadaYInicial
                        });

                        const keysToRelease = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
                        keysToRelease.forEach((key) => {
                            const event = new KeyboardEvent('keyup', { key: key });
                            document.dispatchEvent(event);
                        });

                        teclado.desactivarControles();
                        
                        setTimeout(() => {
                            document.body.appendChild(popup);
                        }, 4000);
    
                        const keyUpListener = (event) => {
                            if (event.key === controlesTeclado.entrarLocalizacion || event.key === controlesTeclado.entrarLocalizacion2) {
                                document.body.removeChild(popup);
                                teclado.reactivarControles();
                                document.removeEventListener('keyup', keyUpListener);
                            }
                        };
                        document.addEventListener('keyup', keyUpListener);

                    } else {
                        console.error("No se encontró la localización de entrada 'Hacia Afueras'");
                    }
                }
                this.detenerDeteccionColisiones();
                break;
            }
        }
    }


    for (let en9 = 0; en9 < this.objetoEnemigo9.length; en9++) {
        const enemigoNueve = document.getElementById(this.objetoEnemigo9[en9].idHTML);
        const personaje = document.getElementById('jugador');

        if (enemigoNueve && personaje) {
            const rectEnemigoNueve = enemigoNueve.getBoundingClientRect();
            const rectPersonaje = personaje.getBoundingClientRect();
    
            if (rectEnemigoNueve.left < rectPersonaje.right && rectEnemigoNueve.right > rectPersonaje.left && rectEnemigoNueve.top < rectPersonaje.bottom && rectEnemigoNueve.bottom > rectPersonaje.top) {
                if (maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
                    maquinaEstados.cambiarEstado(listadoEstados.MAPAMUNDI);

                    const keysToRelease = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
                    keysToRelease.forEach((key) => {
                        const event = new KeyboardEvent('keyup', { key: key });
                        document.dispatchEvent(event);
                    });

                    teclado.desactivarControles();
                    
                    setTimeout(() => {
                        document.body.appendChild(popup);
                    }, 4000);

                    const keyUpListener = (event) => {
                        if (event.key === controlesTeclado.entrarLocalizacion || event.key === controlesTeclado.entrarLocalizacion2) {
                            document.body.removeChild(popup);
                            teclado.reactivarControles();
                            document.removeEventListener('keyup', keyUpListener);
                        }
                    };
                    document.addEventListener('keyup', keyUpListener);

                } else if (maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
                    document.body.appendChild(carga);

                    setTimeout(() => {
                        document.body.removeChild(carga);
                    }, 3000);
                        
                    const localizacionEntrada = registroLocalizaciones.obtenerLocalizacion("Hacia Afueras");
                    if (localizacionEntrada) {
                        maquinaEstados.cambiarEstado(listadoEstados.NIVEL, {
                            rutaMapa: localizacionEntrada.rutaMapa,
                            coordenadaXInicial: localizacionEntrada.coordenadaXInicial,
                            coordenadaYInicial: localizacionEntrada.coordenadaYInicial
                        });

                        const keysToRelease = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
                        keysToRelease.forEach((key) => {
                            const event = new KeyboardEvent('keyup', { key: key });
                            document.dispatchEvent(event);
                        });

                        teclado.desactivarControles();
                        
                        setTimeout(() => {
                            document.body.appendChild(popup);
                        }, 4000);
    
                        const keyUpListener = (event) => {
                            if (event.key === controlesTeclado.entrarLocalizacion || event.key === controlesTeclado.entrarLocalizacion2) {
                                document.body.removeChild(popup);
                                teclado.reactivarControles();
                                document.removeEventListener('keyup', keyUpListener);
                            }
                        };
                        document.addEventListener('keyup', keyUpListener);

                    } else {
                        console.error("No se encontró la localización de entrada 'Hacia Afueras'");
                    }
                }
                this.detenerDeteccionColisiones();
                break;
            }
        }
    }
};


Mapa.prototype.iniciarDeteccionColisiones = function() {
    if (this.deteccionActiva) return;
    this.deteccionActiva = true;

    const loop = () => {
        this.detectarColision();
        if (this.deteccionActiva) requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
};

Mapa.prototype.detenerDeteccionColisiones = function() {
    this.deteccionActiva = false;
};