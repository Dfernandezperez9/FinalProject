function JugadorMapamundi(posicionInicialEnPixeles) {
    this.ancho = 48;
    this.alto = 48;

    this.rutaHojaSprites = "img/AssetsGlobal.png?v=" + Date.now();
    this.personaje = 24;

    this.origenXSprite = this.ancho * 15;
    this.origenYSprite = this.alto * this.personaje;

    this.velocidadMovimiento = 2;

    this.velocidadX = 0;
    this.velocidadY = 0;

    this.enMovimiento = false;
    this.framesAnimacion = 0;

    let centroX = Math.trunc(dimensiones.ancho / 2 - this.ancho / 2);
    let centroY = Math.trunc(dimensiones.alto / 2 - this.alto / 2);
    this.posicionCentrada = new Punto(centroX, centroY);
    this.rectanguloGeneral = new Rectangulo(centroX, centroY, this.ancho, this.alto, "jugador");

    this.limiteArriba = new Rectangulo(centroX + this.ancho / 3, centroY, this.ancho / 3, 1);
    this.limiteAbajo = new Rectangulo(centroX + this.ancho / 3, centroY + this.alto - 1, this.ancho / 3, 1);
    this.limiteIzquierda = new Rectangulo(centroX, centroY + this.alto / 3, 1, this.alto / 3);
    this.limiteDerecha = new Rectangulo(centroX + this.ancho - 1, centroY + this.alto / 3, 1, this.alto / 3);

    this.colisionArriba = false;
    this.colisionAbajo = false;
    this.colisionIzquierda = false;
    this.colisionDerecha = false;
    
    posicionInicialEnPixeles.x *= -1;
    posicionInicialEnPixeles.y *= -1;

    this.posicionEnMapaEnPixeles = new Punto(this.posicionCentrada.x + posicionInicialEnPixeles.x, this.posicionCentrada.y + posicionInicialEnPixeles.y);
    this.aplicarEstilos();
}


JugadorMapamundi.prototype.aplicarEstilos = function () {
    let idHTML = 'jugador';
 
    document.getElementById(idHTML).style.position = 'absolute';
    document.getElementById(idHTML).style.left = this.posicionCentrada.x + 'px';
    document.getElementById(idHTML).style.top = this.posicionCentrada.y + 'px';
    document.getElementById(idHTML).style.width = this.ancho + 'px';
    document.getElementById(idHTML).style.height = this.alto + 'px';
    document.getElementById(idHTML).style.zIndex = '10';
    document.getElementById(idHTML).style.background = "url('" + this.rutaHojaSprites + "')";
    document.getElementById(idHTML).style.backgroundPosition = "-" + this.origenXSprite + "px -" + this.origenYSprite + "px";
    document.getElementById(idHTML).style.backgroundClip = "border-box";
    document.getElementById(idHTML).style.outline = "1px solid transparent";
}

JugadorMapamundi.prototype.comprobarColisiones = function (mapa) {

    this.colisionArriba = false;
    this.colisionAbajo = false;
    this.colisionIzquierda = false;
    this.colisionDerecha = false;

    
    if (JugadorMapamundi.contadorObjetos == undefined || JugadorMapamundi.contadorObjetos == NaN) {
        JugadorMapamundi.contadorObjetos = 0;
    }
    if (JugadorMapamundi.contadorEaster == undefined || JugadorMapamundi.contadorEaster == NaN) {
        JugadorMapamundi.contadorEaster = 0;
    }

    if (JugadorMapamundi.contadorTexto == undefined || JugadorMapamundi.contadorTexto == NaN) {
        JugadorMapamundi.contadorTexto = 0;
    }

    if (JugadorMapamundi.todosColectablesRecogidos == undefined) {
        JugadorMapamundi.todosColectablesRecogidos = false;
    }
    if (JugadorMapamundi.todosEasterRecogidos == undefined) {
        JugadorMapamundi.todosEasterRecogidos = false;
    }
    if (JugadorMapamundi.todosTextoDisparados == undefined) {
        JugadorMapamundi.todosTextoDisparados = false;
    }


    if (JugadorMapamundi.objetoRecogido1 == undefined) {
        JugadorMapamundi.objetoRecogido1 = false;
    }
    if (JugadorMapamundi.objetoRecogido2 == undefined) {
        JugadorMapamundi.objetoRecogido2 = false;
    }
    if (JugadorMapamundi.objetoRecogido3 == undefined) {
        JugadorMapamundi.objetoRecogido3 = false;
    }
    if (JugadorMapamundi.objetoRecogido4 == undefined) {
        JugadorMapamundi.objetoRecogido4 = false;
    }
    if (JugadorMapamundi.objetoRecogido5 == undefined) {
        JugadorMapamundi.objetoRecogido5 = false;
    }
    if (JugadorMapamundi.objetoRecogido6 == undefined) {
        JugadorMapamundi.objetoRecogido6 = false;
    }
    if (JugadorMapamundi.objetoRecogido7 == undefined) {
        JugadorMapamundi.objetoRecogido7 = false;
    }
    if (JugadorMapamundi.objetoRecogido8 == undefined) {
        JugadorMapamundi.objetoRecogido8 = false;
    }
    if (JugadorMapamundi.objetoRecogido9 == undefined) {
        JugadorMapamundi.objetoRecogido9 = false;
    }
    if (JugadorMapamundi.objetoRecogido10 == undefined) {
        JugadorMapamundi.objetoRecogido10 = false;
    }


    if (JugadorMapamundi.easterRecogido1 == undefined) {
        JugadorMapamundi.easterRecogido1 = false;
    }
    if (JugadorMapamundi.easterRecogido2 == undefined) {
        JugadorMapamundi.easterRecogido2 = false;
    }
    if (JugadorMapamundi.easterRecogido3 == undefined) {
        JugadorMapamundi.easterRecogido3 = false;
    }


    if (JugadorMapamundi.textoDisparado1 == undefined) {
        JugadorMapamundi.textoDisparado1 = false;
    }
    if (JugadorMapamundi.textoDisparado2 == undefined) {
        JugadorMapamundi.textoDisparado2 = false;
    }
    if (JugadorMapamundi.textoDisparado3 == undefined) {
        JugadorMapamundi.textoDisparado3 = false;
    }
    if (JugadorMapamundi.textoDisparado4 == undefined) {
        JugadorMapamundi.textoDisparado4 = false;
    }
    if (JugadorMapamundi.textoDisparado5 == undefined) {    
        JugadorMapamundi.textoDisparado5 = false;
    }


    if (!this.limiteArriba.cruza(mapa.limiteMapa)) {
        this.colisionArriba = true;
    }
    if (!this.limiteAbajo.cruza(mapa.limiteMapa)) {
        this.colisionAbajo = true;
    }
    if (!this.limiteIzquierda.cruza(mapa.limiteMapa)) {
        this.colisionIzquierda = true;
    }
    if (!this.limiteDerecha.cruza(mapa.limiteMapa)) {
        this.colisionDerecha = true;
    }


    const traduccionTemporalColision1 = new Rectangulo(mapa.objetoColectable1[0].x + mapa.posicion.x, mapa.objetoColectable1[0].y + mapa.posicion.y, mapa.objetoColectable1[0].ancho, mapa.objetoColectable1[0].alto);
    if (traduccionTemporalColision1.cruza(this.rectanguloGeneral)) {
        if (!JugadorMapamundi.objetoRecogido1) {
            let popup = document.createElement("div");
            if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
                popup.innerHTML = "Ahora ya has pagao...";
            } else if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
                popup.innerHTML = "Tu eres un perro... pero bueno... ¿tienes dinero?";
            }
            
            popup.style.position = "fixed";
            popup.style.zIndex = "20";
            popup.style.top = "40%";
            popup.style.left = "50%";
            popup.style.transform = "translate(-50%, -50%)";
            popup.style.backgroundColor = "black";
            popup.style.color = "white";
            popup.style.padding = "20px";
            popup.style.border = "1px solid white";
            popup.style.borderRadius = "10px";
            popup.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";

            document.body.appendChild(popup);
            setTimeout(function() {
                popup.remove();
            }, 4000);
            
            document.getElementById('objeto1').style.display = 'none';
            JugadorMapamundi.contadorObjetos++;
            document.getElementById('pInfo').innerText = `Has captado ${JugadorMapamundi.contadorObjetos}/10 incautos!`;
            JugadorMapamundi.objetoRecogido1 = true;
        }
    }
    
    const traduccionTemporalColision2 = new Rectangulo(mapa.objetoColectable2[0].x + mapa.posicion.x, mapa.objetoColectable2[0].y + mapa.posicion.y, mapa.objetoColectable2[0].ancho, mapa.objetoColectable2[0].alto);
    if (traduccionTemporalColision2.cruza(this.rectanguloGeneral)) {
        if (!JugadorMapamundi.objetoRecogido2) {
            let popup = document.createElement("div");
            if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
                popup.innerHTML = "Dudas...preguntas...";
            } else if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
                popup.innerHTML = "Me debes una cena!";
            }
            
            popup.style.position = "fixed";
            popup.style.zIndex = "20";
            popup.style.top = "40%";
            popup.style.left = "50%";
            popup.style.transform = "translate(-50%, -50%)";
            popup.style.backgroundColor = "black";
            popup.style.color = "white";
            popup.style.padding = "20px";
            popup.style.border = "1px solid white";
            popup.style.borderRadius = "10px";
            popup.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";

            document.body.appendChild(popup);
            setTimeout(function() {
                popup.remove();
            }, 4000);

            document.getElementById('objeto2').style.display = 'none';
            JugadorMapamundi.contadorObjetos++;
            document.getElementById('pInfo').innerText = `Has captado ${JugadorMapamundi.contadorObjetos}/10 incautos!`;
            JugadorMapamundi.objetoRecogido2 = true;
        }
    }
    
    const traduccionTemporalColision3 = new Rectangulo(mapa.objetoColectable3[0].x + mapa.posicion.x, mapa.objetoColectable3[0].y + mapa.posicion.y, mapa.objetoColectable3[0].ancho, mapa.objetoColectable3[0].alto);
    if (traduccionTemporalColision3.cruza(this.rectanguloGeneral)) {
        if (!JugadorMapamundi.objetoRecogido3) {
            let popup = document.createElement("div");
            if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
                popup.innerHTML = "React MOLA!";
            } else if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
                popup.innerHTML = "¿Que eres japonesa? Reyes te lo traduce!";
            }
            
            popup.style.position = "fixed";
            popup.style.zIndex = "20";
            popup.style.top = "40%";
            popup.style.left = "50%";
            popup.style.transform = "translate(-50%, -50%)";
            popup.style.backgroundColor = "black";
            popup.style.color = "white";
            popup.style.padding = "20px";
            popup.style.border = "1px solid white";
            popup.style.borderRadius = "10px";
            popup.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";

            document.body.appendChild(popup);
            setTimeout(function() {
                popup.remove();
            }, 4000);

            document.getElementById('objeto3').style.display = 'none';
            JugadorMapamundi.contadorObjetos++;
            document.getElementById('pInfo').innerText = `Has captado ${JugadorMapamundi.contadorObjetos}/10 incautos!`;
            JugadorMapamundi.objetoRecogido3 = true;
        }
    }
    
    const traduccionTemporalColision4 = new Rectangulo(mapa.objetoColectable4[0].x + mapa.posicion.x, mapa.objetoColectable4[0].y + mapa.posicion.y, mapa.objetoColectable4[0].ancho, mapa.objetoColectable4[0].alto);
    if (traduccionTemporalColision4.cruza(this.rectanguloGeneral)) {
        if (!JugadorMapamundi.objetoRecogido4) {
            let popup = document.createElement("div");
            if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
                popup.innerHTML = "Recuerda, yo copio y pego... vosotros no!";
            } else if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
                popup.innerHTML = "Necesitamos programadores declarativos!";
            }
            
            popup.style.position = "fixed";
            popup.style.zIndex = "20";
            popup.style.top = "40%";
            popup.style.left = "50%";
            popup.style.transform = "translate(-50%, -50%)";
            popup.style.backgroundColor = "black";
            popup.style.color = "white";
            popup.style.padding = "20px";
            popup.style.border = "1px solid white";
            popup.style.borderRadius = "10px";
            popup.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";

            document.body.appendChild(popup);
            setTimeout(function() {
                popup.remove();
            }, 4000);

            document.getElementById('objeto4').style.display = 'none';
            JugadorMapamundi.contadorObjetos++;
            document.getElementById('pInfo').innerText = `Has captado ${JugadorMapamundi.contadorObjetos}/10 incautos!`;
            JugadorMapamundi.objetoRecogido4 = true;
        }
    }
    
    const traduccionTemporalColision5 = new Rectangulo(mapa.objetoColectable5[0].x + mapa.posicion.x, mapa.objetoColectable5[0].y + mapa.posicion.y, mapa.objetoColectable5[0].ancho, mapa.objetoColectable5[0].alto);
    if (traduccionTemporalColision5.cruza(this.rectanguloGeneral)) {
        if (!JugadorMapamundi.objetoRecogido5) {
            let popup = document.createElement("div");
            if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
                popup.innerHTML = "CHANANAAAAA!!";
            } else if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
                popup.innerHTML = "Tu eres un gato... pero antes he aceptado a un perro...";
            }
            
            popup.style.position = "fixed";
            popup.style.zIndex = "20";
            popup.style.top = "40%";
            popup.style.left = "50%";
            popup.style.transform = "translate(-50%, -50%)";
            popup.style.backgroundColor = "black";
            popup.style.color = "white";
            popup.style.padding = "20px";
            popup.style.border = "1px solid white";
            popup.style.borderRadius = "10px";
            popup.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";

            document.body.appendChild(popup);
            setTimeout(function() {
                popup.remove();
            }, 4000);

            document.getElementById('objeto5').style.display = 'none';
            JugadorMapamundi.contadorObjetos++;
            document.getElementById('pInfo').innerText = `Has captado ${JugadorMapamundi.contadorObjetos}/10 incautos!`;
            JugadorMapamundi.objetoRecogido5 = true;
        }
    }
    
    const traduccionTemporalColision6 = new Rectangulo(mapa.objetoColectable6[0].x + mapa.posicion.x, mapa.objetoColectable6[0].y + mapa.posicion.y, mapa.objetoColectable6[0].ancho, mapa.objetoColectable6[0].alto);
    if (traduccionTemporalColision6.cruza(this.rectanguloGeneral)) {
        if (!JugadorMapamundi.objetoRecogido6) {
            let popup = document.createElement("div");
            if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
                popup.innerHTML = "JELOOOOOOOU!!";
            } else if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
                popup.innerHTML = "Aqui nadie aprueba ni suspende!";
            }
            
            popup.style.position = "fixed";
            popup.style.zIndex = "20";
            popup.style.top = "40%";
            popup.style.left = "50%";
            popup.style.transform = "translate(-50%, -50%)";
            popup.style.backgroundColor = "black";
            popup.style.color = "white";
            popup.style.padding = "20px";
            popup.style.border = "1px solid white";
            popup.style.borderRadius = "10px";
            popup.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";

            document.body.appendChild(popup);
            setTimeout(function() {
                popup.remove();
            }, 4000);

            document.getElementById('objeto6').style.display = 'none';
            JugadorMapamundi.contadorObjetos++;
            document.getElementById('pInfo').innerText = `Has captado ${JugadorMapamundi.contadorObjetos}/10 incautos!`;
            JugadorMapamundi.objetoRecogido6 = true;
        }
    }
    
    const traduccionTemporalColision7 = new Rectangulo(mapa.objetoColectable7[0].x + mapa.posicion.x, mapa.objetoColectable7[0].y + mapa.posicion.y, mapa.objetoColectable7[0].ancho, mapa.objetoColectable7[0].alto);
    if (traduccionTemporalColision7.cruza(this.rectanguloGeneral)) {
        if (!JugadorMapamundi.objetoRecogido7) {
            let popup = document.createElement("div");
            if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
                popup.innerHTML = "Yo me muevo en limusina!!";
            } else if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
                popup.innerHTML = "Mas vale que no te olvides de mi cumpleaños!";
            }
            
            popup.style.position = "fixed";
            popup.style.zIndex = "20";
            popup.style.top = "40%";
            popup.style.left = "50%";
            popup.style.transform = "translate(-50%, -50%)";
            popup.style.backgroundColor = "black";
            popup.style.color = "white";
            popup.style.padding = "20px";
            popup.style.border = "1px solid white";
            popup.style.borderRadius = "10px";
            popup.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";

            document.body.appendChild(popup);
            setTimeout(function() {
                popup.remove();
            }, 4000);

            document.getElementById('objeto7').style.display = 'none';
            JugadorMapamundi.contadorObjetos++;
            document.getElementById('pInfo').innerText = `Has captado ${JugadorMapamundi.contadorObjetos}/10 incautos!`;
            JugadorMapamundi.objetoRecogido7 = true;
        }
    }
    
    const traduccionTemporalColision8 = new Rectangulo(mapa.objetoColectable8[0].x + mapa.posicion.x, mapa.objetoColectable8[0].y + mapa.posicion.y, mapa.objetoColectable8[0].ancho, mapa.objetoColectable8[0].alto);
    if (traduccionTemporalColision8.cruza(this.rectanguloGeneral)) {
        if (!JugadorMapamundi.objetoRecogido8) {
            let popup = document.createElement("div");
            if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
                popup.innerHTML = "¿Cuantos años tengo?... pues 22 claramente!";
            } else if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
                popup.innerHTML = "Tu no tienes muy buen aspecto... pero aun quedan plazas libres!";
            }
            
            popup.style.position = "fixed";
            popup.style.zIndex = "20";
            popup.style.top = "40%";
            popup.style.left = "50%";
            popup.style.transform = "translate(-50%, -50%)";
            popup.style.backgroundColor = "black";
            popup.style.color = "white";
            popup.style.padding = "20px";
            popup.style.border = "1px solid white";
            popup.style.borderRadius = "10px";
            popup.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";

            document.body.appendChild(popup);
            setTimeout(function() {
                popup.remove();
            }, 4000);

            document.getElementById('objeto8').style.display = 'none';
            JugadorMapamundi.contadorObjetos++;
            document.getElementById('pInfo').innerText = `Has captado ${JugadorMapamundi.contadorObjetos}/10 incautos!`;
            JugadorMapamundi.objetoRecogido8 = true;
        }
    }
    
    const traduccionTemporalColision9 = new Rectangulo(mapa.objetoColectable9[0].x + mapa.posicion.x, mapa.objetoColectable9[0].y + mapa.posicion.y, mapa.objetoColectable9[0].ancho, mapa.objetoColectable9[0].alto);
    if (traduccionTemporalColision9.cruza(this.rectanguloGeneral)) {
        if (!JugadorMapamundi.objetoRecogido9) {
            let popup = document.createElement("div");
            if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
                popup.innerHTML = "JAJA, pobre incauto!";
            } else if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
                popup.innerHTML = "Bienvenido a The Bridge!";
            }
            
            popup.style.position = "fixed";
            popup.style.zIndex = "20";
            popup.style.top = "40%";
            popup.style.left = "50%";
            popup.style.transform = "translate(-50%, -50%)";
            popup.style.backgroundColor = "black";
            popup.style.color = "white";
            popup.style.padding = "20px";
            popup.style.border = "1px solid white";
            popup.style.borderRadius = "10px";
            popup.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";

            document.body.appendChild(popup);
            setTimeout(function() {
                popup.remove();
            }, 4000);

            document.getElementById('objeto9').style.display = 'none';
            JugadorMapamundi.contadorObjetos++;
            document.getElementById('pInfo').innerText = `Has captado ${JugadorMapamundi.contadorObjetos}/10 incautos!`;
            JugadorMapamundi.objetoRecogido9 = true;
        }
    }
    
    const traduccionTemporalColision10 = new Rectangulo(mapa.objetoColectable10[0].x + mapa.posicion.x, mapa.objetoColectable10[0].y + mapa.posicion.y, mapa.objetoColectable10[0].ancho, mapa.objetoColectable10[0].alto);
    if (traduccionTemporalColision10.cruza(this.rectanguloGeneral)) {
        if (!JugadorMapamundi.objetoRecogido10) {
            let popup = document.createElement("div");
            if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
                popup.innerHTML = "¿Pagaras en efectivo o con Visa?";
            } else if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
                popup.innerHTML = "www.eldata.es, recuerdalo!";
            }
            
            popup.style.position = "fixed";
            popup.style.zIndex = "20";
            popup.style.top = "40%";
            popup.style.left = "50%";
            popup.style.transform = "translate(-50%, -50%)";
            popup.style.backgroundColor = "black";
            popup.style.color = "white";
            popup.style.padding = "20px";
            popup.style.border = "1px solid white";
            popup.style.borderRadius = "10px";
            popup.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";

            document.body.appendChild(popup);
            setTimeout(function() {
                popup.remove();
            }, 4000);

            document.getElementById('objeto10').style.display = 'none';
            JugadorMapamundi.contadorObjetos++;
            document.getElementById('pInfo').innerText = `Has captado ${JugadorMapamundi.contadorObjetos}/10 incautos!`;
            JugadorMapamundi.objetoRecogido10 = true;
        }
    }



    const traduccionTemporalColision11 = new Rectangulo(mapa.easterColectable1[0].x + mapa.posicion.x, mapa.easterColectable1[0].y + mapa.posicion.y, mapa.easterColectable1[0].ancho, mapa.easterColectable1[0].alto);
    if (traduccionTemporalColision11.cruza(this.rectanguloGeneral)) {
        if (!JugadorMapamundi.easterRecogido1) {
            let popup = document.createElement("div");
            popup.innerHTML = `He encontrado ${JugadorMapamundi.contadorEaster + 1} objetos extraños!`;
            popup.style.position = "fixed";
            popup.style.zIndex = "20";
            popup.style.top = "40%";
            popup.style.left = "50%";
            popup.style.transform = "translate(-50%, -50%)";
            popup.style.backgroundColor = "black";
            popup.style.color = "white";
            popup.style.padding = "20px";
            popup.style.border = "1px solid white";
            popup.style.borderRadius = "10px";
            popup.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";

            document.body.appendChild(popup);
            setTimeout(function() {
                popup.remove();
            }, 4000);

            document.getElementById('easter1').style.display = 'none';
            JugadorMapamundi.contadorEaster++;
            JugadorMapamundi.easterRecogido1 = true;
        }
    }

    const traduccionTemporalColision12 = new Rectangulo(mapa.easterColectable2[0].x + mapa.posicion.x, mapa.easterColectable2[0].y + mapa.posicion.y, mapa.easterColectable2[0].ancho, mapa.easterColectable2[0].alto);
    if (traduccionTemporalColision12.cruza(this.rectanguloGeneral)) {
        if (!JugadorMapamundi.easterRecogido2) {
            let popup = document.createElement("div");
            popup.innerHTML = `He encontrado ${JugadorMapamundi.contadorEaster + 1} objetos extraños!`;
            popup.style.position = "fixed";
            popup.style.zIndex = "20";
            popup.style.top = "40%";
            popup.style.left = "50%";
            popup.style.transform = "translate(-50%, -50%)";
            popup.style.backgroundColor = "black";
            popup.style.color = "white";
            popup.style.padding = "20px";
            popup.style.border = "1px solid white";
            popup.style.borderRadius = "10px";
            popup.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";

            document.body.appendChild(popup);
            setTimeout(function() {
                popup.remove();
            }, 4000);

            document.getElementById('easter2').style.display = 'none';
            JugadorMapamundi.contadorEaster++;
            JugadorMapamundi.easterRecogido2 = true;
        }
    }

    const traduccionTemporalColision13 = new Rectangulo(mapa.easterColectable3[0].x + mapa.posicion.x, mapa.easterColectable3[0].y + mapa.posicion.y, mapa.easterColectable3[0].ancho, mapa.easterColectable3[0].alto);
    if (traduccionTemporalColision13.cruza(this.rectanguloGeneral)) {
        if (!JugadorMapamundi.easterRecogido3) {
            let popup = document.createElement("div");
            popup.innerHTML = `He encontrado ${JugadorMapamundi.contadorEaster + 1} objetos extraños!`;
            popup.style.position = "fixed";
            popup.style.zIndex = "20";
            popup.style.top = "40%";
            popup.style.left = "50%";
            popup.style.transform = "translate(-50%, -50%)";
            popup.style.backgroundColor = "black";
            popup.style.color = "white";
            popup.style.padding = "20px";
            popup.style.border = "1px solid white";
            popup.style.borderRadius = "10px";
            popup.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";

            document.body.appendChild(popup);
            setTimeout(function() {
                popup.remove();
            }, 4000);

            document.getElementById('easter3').style.display = 'none';
            JugadorMapamundi.contadorEaster++;
            JugadorMapamundi.easterRecogido3 = true;
        }
    }


    const traduccionTemporalColision14 = new Rectangulo(mapa.objetoTexto1[0].x + mapa.posicion.x, mapa.objetoTexto1[0].y + mapa.posicion.y, mapa.objetoTexto1[0].ancho, mapa.objetoTexto1[0].alto);
    if (traduccionTemporalColision14.cruza(this.rectanguloGeneral)) {
        if (!JugadorMapamundi.textoDisparado1) {
            let popup = document.createElement("div");
            if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
                popup.innerHTML = "En verdad tendria que haberme traido un bocata";
            } else if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
                popup.innerHTML = "No me hagas correr que soy desarrollador, soy vago";
            }
            popup.style.position = "fixed";
            popup.style.zIndex = "20";
            popup.style.top = "40%";
            popup.style.left = "50%";
            popup.style.transform = "translate(-50%, -50%)";
            popup.style.backgroundColor = "black";
            popup.style.color = "white";
            popup.style.padding = "20px";
            popup.style.border = "1px solid white";
            popup.style.borderRadius = "10px";
            popup.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";

            document.body.appendChild(popup);
            setTimeout(function() {
                popup.remove();
            }, 4000);

            JugadorMapamundi.contadorTexto++;
            JugadorMapamundi.textoDisparado1 = true;
        }
    }
    
    const traduccionTemporalColision15 = new Rectangulo(mapa.objetoTexto2[0].x + mapa.posicion.x, mapa.objetoTexto2[0].y + mapa.posicion.y, mapa.objetoTexto2[0].ancho, mapa.objetoTexto2[0].alto);
    if (traduccionTemporalColision15.cruza(this.rectanguloGeneral)) {
        if (!JugadorMapamundi.textoDisparado2) {
            let popup = document.createElement("div");
            if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
                popup.innerHTML = "Por aqui hay peña para el bootcamp fijo";
            } else if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
                popup.innerHTML = "Si por lo menos encontrase otro como David...";
            }
            popup.style.position = "fixed";
            popup.style.zIndex = "20";
            popup.style.top = "40%";
            popup.style.left = "50%";
            popup.style.transform = "translate(-50%, -50%)";
            popup.style.backgroundColor = "black";
            popup.style.color = "white";
            popup.style.padding = "20px";
            popup.style.border = "1px solid white";
            popup.style.borderRadius = "10px";
            popup.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";

            document.body.appendChild(popup);
            setTimeout(function() {
                popup.remove();
            }, 4000);

            JugadorMapamundi.contadorTexto++;
            JugadorMapamundi.textoDisparado2 = true;
        }
    }

    const traduccionTemporalColision16 = new Rectangulo(mapa.objetoTexto3[0].x + mapa.posicion.x, mapa.objetoTexto3[0].y + mapa.posicion.y, mapa.objetoTexto3[0].ancho, mapa.objetoTexto3[0].alto);
    if (traduccionTemporalColision16.cruza(this.rectanguloGeneral)) {
        if (!JugadorMapamundi.textoDisparado3) {
            let popup = document.createElement("div");
            if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
                popup.innerHTML = "Menos mal que me he traido el IPOD, siempre Apple";
            } else if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
                popup.innerHTML = "Una chaqueta ahora no veas";
            }
            popup.style.position = "fixed";
            popup.style.zIndex = "20";
            popup.style.top = "40%";
            popup.style.left = "50%";
            popup.style.transform = "translate(-50%, -50%)";
            popup.style.backgroundColor = "black";
            popup.style.color = "white";
            popup.style.padding = "20px";
            popup.style.border = "1px solid white";
            popup.style.borderRadius = "10px";
            popup.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";

            document.body.appendChild(popup);
            setTimeout(function() {
                popup.remove();
            }, 4000);

            JugadorMapamundi.contadorTexto++;
            JugadorMapamundi.textoDisparado3 = true;
        }
    }

    const traduccionTemporalColision17 = new Rectangulo(mapa.objetoTexto4[0].x + mapa.posicion.x, mapa.objetoTexto4[0].y + mapa.posicion.y, mapa.objetoTexto4[0].ancho, mapa.objetoTexto4[0].alto);
    if (traduccionTemporalColision17.cruza(this.rectanguloGeneral)) {
        if (!JugadorMapamundi.textoDisparado4) {
            let popup = document.createElement("div");
            if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
                popup.innerHTML = "Estos tiran de IA que flipas... se creen que no me doy cuenta ¿sabes?";
            } else if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
                popup.innerHTML = "En cuanto llegue a casa hago una docena de cocretas";
            }
            popup.style.position = "fixed";
            popup.style.zIndex = "20";
            popup.style.top = "40%";
            popup.style.left = "50%";
            popup.style.transform = "translate(-50%, -50%)";
            popup.style.backgroundColor = "black";
            popup.style.color = "white";
            popup.style.padding = "20px";
            popup.style.border = "1px solid white";
            popup.style.borderRadius = "10px";
            popup.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";

            document.body.appendChild(popup);
            setTimeout(function() {
                popup.remove();
            }, 4000);

            JugadorMapamundi.contadorTexto++;
            JugadorMapamundi.textoDisparado4 = true;
        }
    }

    const traduccionTemporalColision18 = new Rectangulo(mapa.objetoTexto5[0].x + mapa.posicion.x, mapa.objetoTexto5[0].y + mapa.posicion.y, mapa.objetoTexto5[0].ancho, mapa.objetoTexto5[0].alto);
    if (traduccionTemporalColision18.cruza(this.rectanguloGeneral)) {
        if (!JugadorMapamundi.textoDisparado5) {
            let popup = document.createElement("div");
            if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.MAPAMUNDI) {
                popup.innerHTML = "Ayyyy... Mi precioso Madrid, ¡como te quiero!";
            } else if (maquinaEstados.estadoActual instanceof EstadoMapamundi && maquinaEstados.estadoActual.idEstado === listadoEstados.NIVEL) {
                popup.innerHTML = "Con la tonteria he bajao 2 kilos";
            }
            popup.style.position = "fixed";
            popup.style.zIndex = "20";
            popup.style.top = "40%";
            popup.style.left = "50%";
            popup.style.transform = "translate(-50%, -50%)";
            popup.style.backgroundColor = "black";
            popup.style.color = "white";
            popup.style.padding = "20px";
            popup.style.border = "1px solid white";
            popup.style.borderRadius = "10px";
            popup.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";

            document.body.appendChild(popup);
            setTimeout(function() {
                popup.remove();
            }, 4000);

            JugadorMapamundi.contadorTexto++;
            JugadorMapamundi.textoDisparado5 = true;
        }
    }


    if (JugadorMapamundi.contadorObjetos === 10 && !JugadorMapamundi.todosObjetosRecogidos) {
        document.getElementById('pInfo').innerText = `Has captado a todos los incautos del la zona!`;
        setTimeout(function() {
            let popup = document.createElement("div");
            popup.innerHTML = `Creo que no hay mas programadores potenciales en esta zona.`;
            popup.style.position = "fixed";
            popup.style.zIndex = "20";
            popup.style.top = "40%";
            popup.style.left = "50%";
            popup.style.transform = "translate(-50%, -50%)";
            popup.style.backgroundColor = "black";
            popup.style.color = "white";
            popup.style.padding = "20px";
            popup.style.border = "1px solid white";
            popup.style.borderRadius = "10px";
            popup.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";

            document.body.appendChild(popup);
            setTimeout(function() {
                popup.remove();
            }, 4000);
        },5000);
        JugadorMapamundi.todosObjetosRecogidos = true;
    }

    if (JugadorMapamundi.contadorEaster === 3 && !JugadorMapamundi.todosEasterRecogidos) {
        setTimeout(function() {
            let popup = document.createElement("div");
            popup.innerHTML = `He encontrado todos los objetos extraños de la zona!`;
            popup.style.position = "fixed";
            popup.style.zIndex = "20";
            popup.style.top = "40%";
            popup.style.left = "50%";
            popup.style.transform = "translate(-50%, -50%)";
            popup.style.backgroundColor = "black";
            popup.style.color = "white";
            popup.style.padding = "20px";
            popup.style.border = "1px solid white";
            popup.style.borderRadius = "10px";
            popup.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";

            document.body.appendChild(popup);
            setTimeout(function() {
                popup.remove();
            }, 4000);  
        },5000);
        JugadorMapamundi.todosEasterRecogidos = true;
    }

    
    for (let i = 0; i < mapa.rectangulosColisiones.length; i++) {
        let traduccionTemporalColision = new Rectangulo(mapa.rectangulosColisiones[i].x + mapa.posicion.x, mapa.rectangulosColisiones[i].y + mapa.posicion.y, mapa.rectangulosColisiones[i].ancho, mapa.rectangulosColisiones[i].alto);

        if (this.limiteArriba.cruza(traduccionTemporalColision)) {
            this.colisionArriba = true;
        }
        if (this.limiteAbajo.cruza(traduccionTemporalColision)) {
            this.colisionAbajo = true;
        }
        if (this.limiteIzquierda.cruza(traduccionTemporalColision)) {
            this.colisionIzquierda = true;
        }
        if (this.limiteDerecha.cruza(traduccionTemporalColision)) {
            this.colisionDerecha = true;
        }
    }

    for (let i = 0; i < mapa.rectangulosEdificios.length; i++) {
        let traduccionTemporalColision = new Rectangulo(mapa.rectangulosEdificios[i].x + mapa.posicion.x, mapa.rectangulosEdificios[i].y + mapa.posicion.y, mapa.rectangulosEdificios[i].ancho, mapa.rectangulosEdificios[i].alto);

        if (this.limiteArriba.cruza(traduccionTemporalColision)) {
            this.colisionArriba = true;
        }
        if (this.limiteAbajo.cruza(traduccionTemporalColision)) {
            this.colisionAbajo = true;
        }
        if (this.limiteIzquierda.cruza(traduccionTemporalColision)) {
            this.colisionIzquierda = true;
        }
        if (this.limiteDerecha.cruza(traduccionTemporalColision)) {
            this.colisionDerecha = true;
        }
    }
}

JugadorMapamundi.prototype.mover = function () {
    this.velocidadX = 0;
    this.velocidadY = 0;

    if (!this.colisionArriba && teclado.teclaPulsada(controlesTeclado.arriba)) {
        this.velocidadY += this.velocidadMovimiento;
    }
    if (!this.colisionAbajo && teclado.teclaPulsada(controlesTeclado.abajo)) {
        this.velocidadY -= this.velocidadMovimiento;
    }
    if (!this.colisionIzquierda && teclado.teclaPulsada(controlesTeclado.izquierda)) {
        this.velocidadX += this.velocidadMovimiento;
    }
    if (!this.colisionDerecha && teclado.teclaPulsada(controlesTeclado.derecha)) {
        this.velocidadX -= this.velocidadMovimiento;
    }

    this.posicionEnMapaEnPixeles.x += this.velocidadX;
    this.posicionEnMapaEnPixeles.y += this.velocidadY;
}

JugadorMapamundi.prototype.dirigir = function () {
    if (this.velocidadX < 0) { // izquierda
        this.origenXSprite = this.ancho * 14;
    }
    if (this.velocidadX > 0) { // derecha
        this.origenXSprite = this.ancho * 16;
    }
    if (this.velocidadY < 0) { // abajo
        this.origenXSprite = this.ancho * 15;
    }
    if (this.velocidadY > 0) { // arriba
        this.origenXSprite = this.ancho * 13;
    }

    document.getElementById("jugador").style.backgroundPosition = "-" + this.origenXSprite + "px -" + this.origenYSprite + "px";
}

JugadorMapamundi.prototype.animar = function () {
    
    if (this.velocidadX == 0 && this.velocidadY == 0) {
        this.framesAnimacion = 0;
        return
    }
    if (this.contadorAnimacion == undefined) {
        this.contadorAnimacion = 0;
    }
    this.contadorAnimacion++;
    if (this.contadorAnimacion >= 10) {
        this.framesAnimacion++;
        this.contadorAnimacion = 0;
    }

    let origenXSpriteTemporal = this.origenXSprite;


    if (teclado.teclaPulsada(controlesTeclado.izquierda) && teclado.teclaPulsada(controlesTeclado.arriba)) {
        if (this.framesAnimacion % 2 == 0) {
            origenXSpriteTemporal = this.ancho * 104;
        } else {
            origenXSpriteTemporal = this.ancho * 103;
        }
    } else if (teclado.teclaPulsada(controlesTeclado.izquierda) && teclado.teclaPulsada(controlesTeclado.abajo)) {
        if (this.framesAnimacion % 2 == 0) {
            origenXSpriteTemporal = this.ancho * 104;
        } else {
            origenXSpriteTemporal = this.ancho * 103;
        }
    } else if (teclado.teclaPulsada(controlesTeclado.derecha) && teclado.teclaPulsada(controlesTeclado.arriba)) {
        if (this.framesAnimacion % 2 == 0) {
            origenXSpriteTemporal = this.ancho * 99;
        } else {
            origenXSpriteTemporal = this.ancho * 100;
        }
    } else if (teclado.teclaPulsada(controlesTeclado.derecha) && teclado.teclaPulsada(controlesTeclado.abajo)) {
        if (this.framesAnimacion % 2 == 0) {
            origenXSpriteTemporal = this.ancho * 99;
        } else {
            origenXSpriteTemporal = this.ancho * 100;
        }
    } else if (teclado.teclaPulsada(controlesTeclado.izquierda)) {
        if (this.framesAnimacion % 2 == 0) {
            origenXSpriteTemporal += this.ancho * 8;
        } else {
            origenXSpriteTemporal += this.ancho * 7;
        }
    } else if (teclado.teclaPulsada(controlesTeclado.derecha)) {
        if (this.framesAnimacion % 2 == 0) {
            origenXSpriteTemporal += this.ancho * 6;
        } else {
            origenXSpriteTemporal += this.ancho * 5;
        }    
    } else if (teclado.teclaPulsada(controlesTeclado.abajo)) {
        if (this.framesAnimacion % 2 == 0) {
            origenXSpriteTemporal += this.ancho * 7;
        } else {
            origenXSpriteTemporal += this.ancho * 6;
        }    
    } else if (teclado.teclaPulsada(controlesTeclado.arriba)) {
        if (this.framesAnimacion % 2 == 0) {
            origenXSpriteTemporal += this.ancho * 5;
        } else {
            origenXSpriteTemporal += this.ancho * 4;
        }    
    }

    document.getElementById("jugador").style.backgroundPosition = "-" + origenXSpriteTemporal + "px -" + this.origenYSprite + "px";
}

JugadorMapamundi.prototype.actualizar = function (registroTemporal, mapa) {
    
    this.comprobarColisiones(mapa);
    this.mover();
    this.dirigir();
    this.animar();
}

JugadorMapamundi.guardarEstado = function() {
    return {
        objetoRecogido1: this.objetoRecogido1,
        objetoRecogido2: this.objetoRecogido2,
        objetoRecogido3: this.objetoRecogido3,
        objetoRecogido4: this.objetoRecogido4,
        objetoRecogido5: this.objetoRecogido5,
        objetoRecogido6: this.objetoRecogido6,
        objetoRecogido7: this.objetoRecogido7,
        objetoRecogido8: this.objetoRecogido8,
        objetoRecogido9: this.objetoRecogido9,
        objetoRecogido10: this.objetoRecogido10,
        easterRecogido1: this.easterRecogido1,
        easterRecogido2: this.easterRecogido2,
        easterRecogido3: this.easterRecogido3,
        contadorObjetos: this.contadorObjetos,
        contadorEaster: this.contadorEaster,
        todosEasteresRecogidos: this.todosEasteresRecogidos,
        todosColectablesRecogidos: this.todosColectablesRecogidos,
        todosTextosDisparados: this.todosTextosDisparados
    };
};

JugadorMapamundi.restaurarEstado = function(estado) {
    this.objetoRecogido1 = estado.objetoRecogido1;
    this.objetoRecogido2 = estado.objetoRecogido2;
    this.objetoRecogido3 = estado.objetoRecogido3;
    this.objetoRecogido4 = estado.objetoRecogido4;
    this.objetoRecogido5 = estado.objetoRecogido5;
    this.objetoRecogido6 = estado.objetoRecogido6;
    this.objetoRecogido7 = estado.objetoRecogido7;
    this.objetoRecogido8 = estado.objetoRecogido8;
    this.objetoRecogido9 = estado.objetoRecogido9;
    this.objetoRecogido10 = estado.objetoRecogido10;
    this.easterRecogido1 = estado.easterRecogido1;
    this.easterRecogido2 = estado.easterRecogido2;
    this.easterRecogido3 = estado.easterRecogido3;
    this.contadorObjetos = estado.contadorObjetos;
    this.contadorEaster = estado.contadorEaster;
    this.todosEasteresRecogidos = estado.todosEasteresRecogidos;
    this.todosColectablesRecogidos = estado.todosColectablesRecogidos;
    this.todosTextosDisparados = estado.todosTextosDisparados;
};