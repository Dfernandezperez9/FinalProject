function EstadoPantallaTitulo () {
    this.rutaImagenTitulo = "./img/titulo.png?v=" + Date.now();
    this.idHTML = "pantalla-titulo";
    this.anchoImagen = "894";
    this.altoImagen = "714";

    this.movimientoY = 0;

    this.framesAnimacion = 0;

    document.getElementById("info").style.display = "none";
    document.getElementById(this.idHTML).style.position = "absolute";
    document.getElementById(this.idHTML).style.width = this.anchoImagen + 'px';
    document.getElementById(this.idHTML).style.height = this.altoImagen + 'px';
    document.getElementById(this.idHTML).style.background = "url('" + this.rutaImagenTitulo + "')";
    document.getElementById(this.idHTML).style.backgroundClip = "border-box";
    document.getElementById(this.idHTML).style.outline = "1px solid transparent";
    document.getElementById(this.idHTML).style.transform = 'translate3d(' + (dimensiones.ancho / 2 - this.anchoImagen / 2) + 'px, ' + (dimensiones.alto / 2 - this.altoImagen / 2)  + 'px, 0)';

    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    document.getElementsByTagName("body")[0].style.backgroundColor = "black";

    audio.reproducir(audio.pista1);

    document.getElementsByTagName("body")[0].onclick = function () {
        document.getElementById("pantalla-titulo").style.display = "none";

        let popup = document.createElement("div");
        popup.innerHTML = "Utiliza las flechas del teclado para moverte por las afueras de madrid y capta a todos los incautos.";
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

        document.body.appendChild(popup);
        setTimeout(function() {
            popup.remove();
        }, 5000);

        document.getElementsByTagName("body")[0].onclick = "";
        document.getElementById("info").style.display = "block";

        maquinaEstados.cambiarEstado(listadoEstados.MAPAMUNDI);
    }
}

EstadoPantallaTitulo.prototype.actualizar = function (registroTemporal) {
    if (this.framesAnimacion < 30) {
        this.movimientoY++;
    }
    if (this.framesAnimacion >= 30 && this.framesAnimacion < 90) {
        this.movimientoY--;
    }
    if (this.framesAnimacion >= 90 && this.framesAnimacion < 120) {
        this.movimientoY++;
    }

    this.framesAnimacion++;

    if (this.framesAnimacion >= 120) {
        this.framesAnimacion = 0;
        this.movimientoY = 0;
    }
}

EstadoPantallaTitulo.prototype.dibujar = function () {
    document.getElementById(this.idHTML).style.transform = 'translate3d(' + (dimensiones.ancho / 2 - this.anchoImagen / 2) + 'px, ' + (dimensiones.alto / 2 - this.altoImagen / 2 + this.movimientoY) + 'px, 0)';
}