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

    this.capasTiles = [];
    this.iniciarCapas(objetoJSON.layers);

    this.iniciarRejilla();

    this.limiteMapa = new Rectangulo(this.posicion.x, this.posicion.y, this.anchoMedidoEnTiles * this.anchoDeLosTiles, this.altoMedidoEnTiles * this.altoDeLosTiles, "colision");
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
                    let objeto1 = new Rectangulo(datosCapas[i].objects[0].x, datosCapas[i].objects[0].y, datosCapas[i].objects[0].width, datosCapas[i].objects[0].height, "colectable");
                    let objeto2 = new Rectangulo(datosCapas[i].objects[1].x, datosCapas[i].objects[1].y, datosCapas[i].objects[1].width, datosCapas[i].objects[1].height, "colectable");
                    let objeto3 = new Rectangulo(datosCapas[i].objects[2].x, datosCapas[i].objects[2].y, datosCapas[i].objects[2].width, datosCapas[i].objects[2].height, "colectable");
                    let objeto4 = new Rectangulo(datosCapas[i].objects[3].x, datosCapas[i].objects[3].y, datosCapas[i].objects[3].width, datosCapas[i].objects[3].height, "colectable");
                    let objeto5 = new Rectangulo(datosCapas[i].objects[4].x, datosCapas[i].objects[4].y, datosCapas[i].objects[4].width, datosCapas[i].objects[4].height, "colectable");
                    let objeto6 = new Rectangulo(datosCapas[i].objects[5].x, datosCapas[i].objects[5].y, datosCapas[i].objects[5].width, datosCapas[i].objects[5].height, "colectable");
                    let objeto7 = new Rectangulo(datosCapas[i].objects[6].x, datosCapas[i].objects[6].y, datosCapas[i].objects[6].width, datosCapas[i].objects[6].height, "colectable");
                    let objeto8 = new Rectangulo(datosCapas[i].objects[7].x, datosCapas[i].objects[7].y, datosCapas[i].objects[7].width, datosCapas[i].objects[7].height, "colectable");
                    let objeto9 = new Rectangulo(datosCapas[i].objects[8].x, datosCapas[i].objects[8].y, datosCapas[i].objects[8].width, datosCapas[i].objects[8].height, "colectable");
                    let objeto10 = new Rectangulo(datosCapas[i].objects[9].x, datosCapas[i].objects[9].y, datosCapas[i].objects[9].width, datosCapas[i].objects[9].height, "colectable");
                    
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
                    let easter1 = new Rectangulo(datosCapas[i].objects[0].x, datosCapas[i].objects[0].y, datosCapas[i].objects[0].width, datosCapas[i].objects[0].height, "easter");
                    let easter2 = new Rectangulo(datosCapas[i].objects[1].x, datosCapas[i].objects[1].y, datosCapas[i].objects[1].width, datosCapas[i].objects[1].height, "easter");
                    let easter3 = new Rectangulo(datosCapas[i].objects[2].x, datosCapas[i].objects[2].y, datosCapas[i].objects[2].width, datosCapas[i].objects[2].height, "easter");

                    this.easterColectable1.push(easter1);
                    this.easterColectable2.push(easter2);
                    this.easterColectable3.push(easter3);
                }
                if (datosCapas[i].name == "ObjetoTexto") {
                    let texto1 = new Rectangulo(datosCapas[i].objects[0].x, datosCapas[i].objects[0].y, datosCapas[i].objects[0].width, datosCapas[i].objects[0].height, "texto");
                    let texto2 = new Rectangulo(datosCapas[i].objects[1].x, datosCapas[i].objects[1].y, datosCapas[i].objects[1].width, datosCapas[i].objects[1].height, "texto");
                    let texto3 = new Rectangulo(datosCapas[i].objects[2].x, datosCapas[i].objects[2].y, datosCapas[i].objects[2].width, datosCapas[i].objects[2].height, "texto");
                    let texto4 = new Rectangulo(datosCapas[i].objects[3].x, datosCapas[i].objects[3].y, datosCapas[i].objects[3].width, datosCapas[i].objects[3].height, "texto");
                    let texto5 = new Rectangulo(datosCapas[i].objects[4].x, datosCapas[i].objects[4].y, datosCapas[i].objects[4].width, datosCapas[i].objects[4].height, "texto");

                    this.objetoTexto1.push(texto1);
                    this.objetoTexto2.push(texto2);
                    this.objetoTexto3.push(texto3);
                    this.objetoTexto4.push(texto4);
                    this.objetoTexto5.push(texto5);
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