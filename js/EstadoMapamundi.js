function EstadoMapamundi (idEstado, rutaMapa, xInicial, yInicial) {
    let that = this;
    this.idEstado = idEstado;
    this.mapaListo = false;
    this.mapa = null;
    this.jugadorMapamundi = null;
    ajax.cargarArchivo(rutaMapa, function (objetoJSON) {
        that.mapa = new Mapa(objetoJSON, idEstado);
        that.mapaListo = true;
        that.jugadorMapamundi = new JugadorMapamundi(new Punto(xInicial, yInicial), idEstado);
    });
}

EstadoMapamundi.prototype.actualizar = function (registroTemporal) {
   if (!this.mapaListo || this.mapa == null || this.jugadorMapamundi == null) {
    return;
   }

   this.jugadorMapamundi.actualizar(registroTemporal, this.mapa);
   this.mapa.actualizar(registroTemporal, this.jugadorMapamundi.posicionEnMapaEnPixeles);

   let localizacionAtravesada = false;

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
   
   
   for (let i = 0; i < this.mapa.rectangulosLocalizaciones.length; i++) {
        let rActual = this.mapa.rectangulosLocalizaciones[i].rectangulo;
        let nombre = this.mapa.rectangulosLocalizaciones[i].nombre;
        let rTemporal = new Rectangulo(rActual.x + this.mapa.posicion.x, rActual.y + this.mapa.posicion.y, rActual.ancho, rActual.alto);
        let objetoEntradaLocalizacion = null;

        if (rTemporal.cruza(this.jugadorMapamundi.rectanguloGeneral)) {
            localizacionAtravesada = true;
            objetoEntradaLocalizacion = registroLocalizaciones.obtenerLocalizacion(nombre);
            if (!popup.visible) {
                if (rTemporal.cruza(this.jugadorMapamundi.rectanguloGeneral) && nombre == "Hacia Afueras" && JugadorMapamundi.contadorObjetos < 10 || rTemporal.cruza(this.jugadorMapamundi.rectanguloGeneral) && nombre == "De vuelta a casa" && JugadorMapamundi.contadorObjetos < 10) {
                   popup.mostrar(dimensiones.ancho / 2 - 150, dimensiones.alto / 2 - 180, 300, `Creo que aun quedan programadores potenciales en esta area`); 
                }else {
                    popup.mostrar(dimensiones.ancho / 2 - 150, dimensiones.alto / 2 - 180, 300, `Pulsa "R" para entrar en "${nombre}"`);
                }
            }
            if (teclado.teclaPulsada(controlesTeclado.entrarLocalizacion) || teclado.teclaPulsada(controlesTeclado.entrarLocalizacion2)) {
                if (rTemporal.cruza(this.jugadorMapamundi.rectanguloGeneral) && nombre == "Caseta abandonada uno") {
                    document.body.appendChild(carga);
                    setTimeout(function() {
                        this.jugadorMapamundi = new JugadorMapamundi(new Punto(818, 1290));
                    }.bind(this), 300);
                    
                    controlesTeclado.arriba = null;
                    controlesTeclado.abajo = null;
                    controlesTeclado.izquierda = null;
                    controlesTeclado.derecha = null;
                    
                    setTimeout(function() {

                        controlesTeclado.arriba = "ArrowUp";
                        controlesTeclado.abajo = "ArrowDown";
                        controlesTeclado.izquierda = "ArrowLeft";
                        controlesTeclado.derecha = "ArrowRight";
    
                        document.body.removeChild(carga);
                        
                    }, 3000);
                }
            }
            if (teclado.teclaPulsada(controlesTeclado.entrarLocalizacion) || teclado.teclaPulsada(controlesTeclado.entrarLocalizacion2)) {
                if (rTemporal.cruza(this.jugadorMapamundi.rectanguloGeneral) && nombre == "Caseta abandonada dos") {
                    document.body.appendChild(carga);
                    setTimeout(function() {
                        this.jugadorMapamundi = new JugadorMapamundi(new Punto(864, 920));   
                    }.bind(this), 300);
                    
                    controlesTeclado.arriba = null;
                    controlesTeclado.abajo = null;
                    controlesTeclado.izquierda = null;
                    controlesTeclado.derecha = null;
                    
                    setTimeout(function() {

                        controlesTeclado.arriba = "ArrowUp";
                        controlesTeclado.abajo = "ArrowDown";
                        controlesTeclado.izquierda = "ArrowLeft";
                        controlesTeclado.derecha = "ArrowRight";
    
                        document.body.removeChild(carga);
                        
                    }, 3000);
                }
            }
            if (teclado.teclaPulsada(controlesTeclado.entrarLocalizacion) || teclado.teclaPulsada(controlesTeclado.entrarLocalizacion2)) {
                if (rTemporal.cruza(this.jugadorMapamundi.rectanguloGeneral) && nombre == "Caseta abandonada tres") {
                    document.body.appendChild(carga);
                    setTimeout(function() {
                        this.jugadorMapamundi = new JugadorMapamundi(new Punto(1824, 1720));
                    }.bind(this), 300);
                    
                    controlesTeclado.arriba = null;
                    controlesTeclado.abajo = null;
                    controlesTeclado.izquierda = null;
                    controlesTeclado.derecha = null;
                    
                    setTimeout(function() {

                        controlesTeclado.arriba = "ArrowUp";
                        controlesTeclado.abajo = "ArrowDown";
                        controlesTeclado.izquierda = "ArrowLeft";
                        controlesTeclado.derecha = "ArrowRight";
    
                        document.body.removeChild(carga);
                        
                    }, 3000);
                }
            }
            if (teclado.teclaPulsada(controlesTeclado.entrarLocalizacion) || teclado.teclaPulsada(controlesTeclado.entrarLocalizacion2)) {
                if (rTemporal.cruza(this.jugadorMapamundi.rectanguloGeneral) && nombre == "Caseta abandonada cuatro") {
                    document.body.appendChild(carga);
                    setTimeout(function() {
                        this.jugadorMapamundi = new JugadorMapamundi(new Punto(960, 1058));
                    }.bind(this), 300);
                    
                    controlesTeclado.arriba = null;
                    controlesTeclado.abajo = null;
                    controlesTeclado.izquierda = null;
                    controlesTeclado.derecha = null;
                    
                    setTimeout(function() {

                        controlesTeclado.arriba = "ArrowUp";
                        controlesTeclado.abajo = "ArrowDown";
                        controlesTeclado.izquierda = "ArrowLeft";
                        controlesTeclado.derecha = "ArrowRight";
    
                        document.body.removeChild(carga);
                        
                    }, 3000);
                }
            }
            if (teclado.teclaPulsada(controlesTeclado.entrarLocalizacion) || teclado.teclaPulsada(controlesTeclado.entrarLocalizacion2)) {
                if (rTemporal.cruza(this.jugadorMapamundi.rectanguloGeneral) && nombre == "Hacia Afueras") {
                    document.body.appendChild(carga);
                    setTimeout(function() {
                        maquinaEstados.cambiarEstado(listadoEstados.NIVEL, objetoEntradaLocalizacion); 
                    },500);

                    setTimeout(function() {
                        document.body.removeChild(carga);
                    }, 3000);
                }
            }
            if (teclado.teclaPulsada(controlesTeclado.entrarLocalizacion) || teclado.teclaPulsada(controlesTeclado.entrarLocalizacion2)) {
                if (rTemporal.cruza(this.jugadorMapamundi.rectanguloGeneral) && nombre == "Caseta abandonada cinco") {
                    document.body.appendChild(carga);
                    setTimeout(function() {
                        this.jugadorMapamundi = new JugadorMapamundi(new Punto(1200, 1332));    
                    }.bind(this), 300);
                    
                    controlesTeclado.arriba = null;
                    controlesTeclado.abajo = null;
                    controlesTeclado.izquierda = null;
                    controlesTeclado.derecha = null;
                    
                    setTimeout(function() {

                        controlesTeclado.arriba = "ArrowUp";
                        controlesTeclado.abajo = "ArrowDown";
                        controlesTeclado.izquierda = "ArrowLeft";
                        controlesTeclado.derecha = "ArrowRight";
    
                        document.body.removeChild(carga);
                        
                    }, 3000);
                }
            }
            if (teclado.teclaPulsada(controlesTeclado.entrarLocalizacion) || teclado.teclaPulsada(controlesTeclado.entrarLocalizacion2)) {
                if (rTemporal.cruza(this.jugadorMapamundi.rectanguloGeneral) && nombre == "Caseta abandonada seis") {
                    document.body.appendChild(carga);
                    setTimeout(function() {
                        this.jugadorMapamundi = new JugadorMapamundi(new Punto(336, 994));    
                    }.bind(this), 300);
                    
                    controlesTeclado.arriba = null;
                    controlesTeclado.abajo = null;
                    controlesTeclado.izquierda = null;
                    controlesTeclado.derecha = null;
                    
                    setTimeout(function() {

                        controlesTeclado.arriba = "ArrowUp";
                        controlesTeclado.abajo = "ArrowDown";
                        controlesTeclado.izquierda = "ArrowLeft";
                        controlesTeclado.derecha = "ArrowRight";
    
                        document.body.removeChild(carga);
                        
                    }, 3000);
                }
            }
            if (teclado.teclaPulsada(controlesTeclado.entrarLocalizacion) || teclado.teclaPulsada(controlesTeclado.entrarLocalizacion2)) {
                if (rTemporal.cruza(this.jugadorMapamundi.rectanguloGeneral) && nombre == "De vuelta a casa") {
                    document.body.appendChild(carga);
                    setTimeout(function() {
                        maquinaEstados.cambiarEstado(listadoEstados.FINAL, objetoEntradaLocalizacion);     
                    }, 500);

                    setTimeout(function() {
                        document.body.removeChild(carga);
                    }, 3000);
                }
            }
        }

        if (!localizacionAtravesada && popup.visible) {
            popup.ocultar();
        }
    }
}

EstadoMapamundi.prototype.dibujar = function () {
    if (!this.mapaListo) {
        return;
    }
    this.mapa.dibujar();   
}