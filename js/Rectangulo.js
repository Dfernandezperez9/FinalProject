function Rectangulo (x, y, ancho, alto, tipo) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.idHTML = tipo + "x" + x + "y" + y;
    this.html = '<div id="' + this.idHTML + '"></div>';
}

Rectangulo.prototype.cruza = function (rectangulo) {
    return (this.x < rectangulo.x + rectangulo.ancho && this.x + this.ancho > rectangulo.x && this.y < rectangulo.y + rectangulo.alto && this.y + this.alto > rectangulo.y ) ? true : false;
}

Rectangulo.prototype.aplicarEstiloTemporal = function (colorHexadecimal) {
    if (!document.getElementById(this.idHTML)) {
        throw ("EL ID " + this.idHTML + " NO EXISTE");
    }

    document.getElementById(this.idHTML).style.backgroundColor = colorHexadecimal;

    document.getElementById(this.idHTML).style.position = "absolute";
    document.getElementById(this.idHTML).style.left = this.x + 'px';
    document.getElementById(this.idHTML).style.top = this.y + 'px';
    document.getElementById(this.idHTML).style.width = this.ancho + 'px';
    document.getElementById(this.idHTML).style.height = this.alto + 'px';
    document.getElementById(this.idHTML).style.zIndex = "5";

    if (this.sprite && this.sprite.rutaHojaOrigen) {
        document.getElementById(this.idHTML).style.background = "url('" + this.sprite.rutaHojaOrigen + "')";
    }
}

Rectangulo.prototype.mover = function (x, y) {
    document.getElementById(this.idHTML).style.transform = 'translate3d(' + x + 'px,' + y + 'px, 0)';
}

Rectangulo.prototype.aplicarEstiloTemporal1 = function (imagenFondo) {
    if (!document.getElementById(this.idHTML)) {
        throw ("EL ID " + this.idHTML + " NO EXISTE");
    }

    document.getElementById(this.idHTML).style.backgroundImage = "url('" + imagenFondo + "')";

    document.getElementById(this.idHTML).style.position = "absolute";
    document.getElementById(this.idHTML).style.left = this.x + 'px';
    document.getElementById(this.idHTML).style.top = this.y + 'px';
    document.getElementById(this.idHTML).style.width = this.ancho + 'px';
    document.getElementById(this.idHTML).style.height = this.alto + 'px';
    document.getElementById(this.idHTML).style.zIndex = "5";
    
    if (this.sprite && this.sprite.rutaHojaOrigen) {
        document.getElementById(this.idHTML).style.background = "url('" + this.sprite.rutaHojaOrigen + "')";
    }
}