function EstadoMapamundi (idEstado, rutaMapa, xInicial, yInicial) {
    let that = this;
    this.idEstado = idEstado;
    this.mapaListo = false;
    this.mapa = null;
    this.jugadorMapamundi = null;
    ajax.cargarArchivo(rutaMapa, function (objetoJSON) {
        that.mapa = new Mapa(objetoJSON, idEstado);
        that.mapaListo = true;
        that.jugadorMapamundi = new JugadorMapamundi(new Punto(xInicial, yInicial), idEstado); // 624, 48
    });
}

EstadoMapamundi.prototype.actualizar = function (registroTemporal) {
   if (!this.mapaListo || this.mapa == null || this.jugadorMapamundi == null) {
    return;
   }

   this.jugadorMapamundi.actualizar(registroTemporal, this.mapa);
   this.mapa.actualizar(registroTemporal, this.jugadorMapamundi.posicionEnMapaEnPixeles);

   let localizacionAtravesada = false;
   
   
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
                    this.jugadorMapamundi = new JugadorMapamundi(new Punto(818, 1290));
                }
            }
            if (teclado.teclaPulsada(controlesTeclado.entrarLocalizacion) || teclado.teclaPulsada(controlesTeclado.entrarLocalizacion2)) {
                if (rTemporal.cruza(this.jugadorMapamundi.rectanguloGeneral) && nombre == "Caseta abandonada dos") {
                    this.jugadorMapamundi = new JugadorMapamundi(new Punto(864, 920));
                }
            }
            if (teclado.teclaPulsada(controlesTeclado.entrarLocalizacion) || teclado.teclaPulsada(controlesTeclado.entrarLocalizacion2)) {
                if (rTemporal.cruza(this.jugadorMapamundi.rectanguloGeneral) && nombre == "Caseta abandonada tres") {
                    this.jugadorMapamundi = new JugadorMapamundi(new Punto(1824, 1720));
                }
            }
            if (teclado.teclaPulsada(controlesTeclado.entrarLocalizacion) || teclado.teclaPulsada(controlesTeclado.entrarLocalizacion2)) {
                if (rTemporal.cruza(this.jugadorMapamundi.rectanguloGeneral) && nombre == "Caseta abandonada cuatro") {
                    this.jugadorMapamundi = new JugadorMapamundi(new Punto(960, 1058));
                }
            }
            if (teclado.teclaPulsada(controlesTeclado.entrarLocalizacion) || teclado.teclaPulsada(controlesTeclado.entrarLocalizacion2)) {
                if (rTemporal.cruza(this.jugadorMapamundi.rectanguloGeneral) && nombre == "Hacia Afueras") {
                    maquinaEstados.cambiarEstado(listadoEstados.NIVEL, objetoEntradaLocalizacion);
                }
            }
            if (teclado.teclaPulsada(controlesTeclado.entrarLocalizacion) || teclado.teclaPulsada(controlesTeclado.entrarLocalizacion2)) {
                if (rTemporal.cruza(this.jugadorMapamundi.rectanguloGeneral) && nombre == "Caseta abandonada cinco") {
                    this.jugadorMapamundi = new JugadorMapamundi(new Punto(1200, 1332));
                }
            }
            if (teclado.teclaPulsada(controlesTeclado.entrarLocalizacion) || teclado.teclaPulsada(controlesTeclado.entrarLocalizacion2)) {
                if (rTemporal.cruza(this.jugadorMapamundi.rectanguloGeneral) && nombre == "Caseta abandonada seis") {
                    this.jugadorMapamundi = new JugadorMapamundi(new Punto(336, 994));
                }
            }
            if (teclado.teclaPulsada(controlesTeclado.entrarLocalizacion) || teclado.teclaPulsada(controlesTeclado.entrarLocalizacion2)) {
                if (rTemporal.cruza(this.jugadorMapamundi.rectanguloGeneral) && nombre == "De vuelta a casa") {
                    maquinaEstados.cambiarEstado(listadoEstados.FINAL, objetoEntradaLocalizacion);
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