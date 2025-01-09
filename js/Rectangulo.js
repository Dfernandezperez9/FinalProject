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


Rectangulo.prototype.animacionEnemigoUnoMapaUno = function (imagenFondo1, imagenFondo2, imagenFondo3, imagenFondo4, imagenFondo5, imagenFondo6, imagenFondo7, imagenFondo8, imagenFondo9, imagenFondo10) {
    const elem = document.getElementById(this.idHTML);
    if (!elem) {
        throw ("EL ID " + this.idHTML + " NO EXISTE");
    }

    elem.style.position = "absolute";
    elem.style.left = this.x + 'px';
    elem.style.top = this.y + 'px';
    elem.style.width = this.ancho + 'px';
    elem.style.height = this.alto + 'px';
    elem.style.zIndex = "5";
    elem.style.transition = "left 0.2s ease-in-out , top 0.2s ease-in-out";

    const keyframes = [
        { pct: 0, left: this.x + 'px', top: this.y + 'px', background: `url(${imagenFondo1})` },
        { pct: 10, left: this.x + 'px', top: this.y + 'px', background: `url(${imagenFondo1})` },
        { pct: 11, left: this.x + 'px', top: (this.y + 14) + 'px', background: `url(${imagenFondo2})` },
        { pct: 12, left: this.x + 'px', top: (this.y + 28) + 'px', background: `url(${imagenFondo3})` },
        { pct: 13, left: this.x + 'px', top: (this.y + 42) + 'px', background: `url(${imagenFondo2})` },
        { pct: 14, left: this.x + 'px', top: (this.y + 56) + 'px', background: `url(${imagenFondo3})` },
        { pct: 15, left: this.x + 'px', top: (this.y + 70) + 'px', background: `url(${imagenFondo2})` },
        { pct: 16, left: this.x + 'px', top: (this.y + 84) + 'px', background: `url(${imagenFondo3})` },
        { pct: 17, left: this.x + 'px', top: (this.y + 98) + 'px', background: `url(${imagenFondo2})` },
        { pct: 18, left: this.x + 'px', top: (this.y + 112) + 'px', background: `url(${imagenFondo3})` },
        { pct: 19, left: this.x + 'px', top: (this.y + 126) + 'px', background: `url(${imagenFondo2})` },
        { pct: 20, left: this.x + 'px', top: (this.y + 130) + 'px', background: `url(${imagenFondo3})` },
        { pct: 22, left: this.x + 'px', top: (this.y + 130) + 'px', background: `url(${imagenFondo1})` },
        { pct: 30, left: this.x + 'px', top: (this.y + 130) + 'px', background: `url(${imagenFondo1})` },
        { pct: 31, left: (this.x + 15) + 'px', top: (this.y + 130) + 'px', background: `url(${imagenFondo4})` },
        { pct: 32, left: (this.x + 29) + 'px', top: (this.y + 130) + 'px', background: `url(${imagenFondo5})` },
        { pct: 33, left: (this.x + 43) + 'px', top: (this.y + 130) + 'px', background: `url(${imagenFondo4})` },
        { pct: 34, left: (this.x + 57) + 'px', top: (this.y + 130) + 'px', background: `url(${imagenFondo5})` },
        { pct: 35, left: (this.x + 71) + 'px', top: (this.y + 130) + 'px', background: `url(${imagenFondo4})` },
        { pct: 36, left: (this.x + 85) + 'px', top: (this.y + 130) + 'px', background: `url(${imagenFondo5})` },
        { pct: 37, left: (this.x + 99) + 'px', top: (this.y + 130) + 'px', background: `url(${imagenFondo4})` },
        { pct: 38, left: (this.x + 113) + 'px', top: (this.y + 130) + 'px', background: `url(${imagenFondo5})` },
        { pct: 39, left: (this.x + 127) + 'px', top: (this.y + 130) + 'px', background: `url(${imagenFondo4})` },
        { pct: 40, left: (this.x + 134) + 'px', top: (this.y + 130) + 'px', background: `url(${imagenFondo5})` },
        { pct: 42, left: (this.x + 134) + 'px', top: (this.y + 130) + 'px', background: `url(${imagenFondo1})` },
        { pct: 50, left: (this.x + 134) + 'px', top: (this.y + 130) + 'px', background: `url(${imagenFondo1})` },
        { pct: 51, left: (this.x + 127) + 'px', top: (this.y + 130) + 'px', background: `url(${imagenFondo6})` },
        { pct: 52, left: (this.x + 113) + 'px', top: (this.y + 130) + 'px', background: `url(${imagenFondo7})` },
        { pct: 53, left: (this.x + 99) + 'px', top: (this.y + 130) + 'px', background: `url(${imagenFondo6})` },
        { pct: 54, left: (this.x + 85) + 'px', top: (this.y + 130) + 'px', background: `url(${imagenFondo7})` },
        { pct: 55, left: (this.x + 71) + 'px', top: (this.y + 130) + 'px', background: `url(${imagenFondo6})` },
        { pct: 56, left: (this.x + 57) + 'px', top: (this.y + 130) + 'px', background: `url(${imagenFondo7})` },
        { pct: 57, left: (this.x + 43) + 'px', top: (this.y + 130) + 'px', background: `url(${imagenFondo6})` },
        { pct: 58, left: (this.x + 29) + 'px', top: (this.y + 130) + 'px', background: `url(${imagenFondo7})` },
        { pct: 59, left: (this.x + 15) + 'px', top: (this.y + 130) + 'px', background: `url(${imagenFondo6})` },
        { pct: 60, left: this.x + 'px', top: (this.y + 130) + 'px', background: `url(${imagenFondo7})` },
        { pct: 62, left: this.x + 'px', top: (this.y + 130) + 'px', background: `url(${imagenFondo1})` },
        { pct: 68, left: this.x + 'px', top: (this.y + 130) + 'px', background: `url(${imagenFondo10})` },
        { pct: 71, left: this.x + 'px', top: (this.y + 126) + 'px', background: `url(${imagenFondo8})` },
        { pct: 72, left: this.x + 'px', top: (this.y + 112) + 'px', background: `url(${imagenFondo9})` },
        { pct: 73, left: this.x + 'px', top: (this.y + 98) + 'px', background: `url(${imagenFondo8})` },
        { pct: 74, left: this.x + 'px', top: (this.y + 84) + 'px', background: `url(${imagenFondo9})` },
        { pct: 75, left: this.x + 'px', top: (this.y + 70) + 'px', background: `url(${imagenFondo8})` },
        { pct: 76, left: this.x + 'px', top: (this.y + 56) + 'px', background: `url(${imagenFondo9})` },
        { pct: 77, left: this.x + 'px', top: (this.y + 42) + 'px', background: `url(${imagenFondo8})` },
        { pct: 78, left: this.x + 'px', top: (this.y + 28) + 'px', background: `url(${imagenFondo9})` },
        { pct: 79, left: this.x + 'px', top: (this.y + 14) + 'px', background: `url(${imagenFondo8})` },
        { pct: 80, left: this.x + 'px', top: this.y + 'px', background: `url(${imagenFondo9})` },
        { pct: 82, left: this.x + 'px', top: this.y + 'px', background: `url(${imagenFondo10})` },
        { pct: 90, left: this.x + 'px', top: this.y + 'px', background: `url(${imagenFondo10})` }
    ];

    let frameIndex = 0;
    const totalDuration = 45000;
    const frameDuration = totalDuration / 90;

    function updateStyle() {
        const keyframe = keyframes[frameIndex];
        elem.style.left = keyframe.left;
        elem.style.top = keyframe.top;
        elem.style.backgroundImage = keyframe.background;

        frameIndex = (frameIndex + 1) % keyframes.length;

        const nextFrame = keyframes[frameIndex];
        const duration = (nextFrame.pct - keyframe.pct) * frameDuration;
        setTimeout(updateStyle, duration);
    }

    updateStyle();
};


Rectangulo.prototype.animacionEnemigoDosMapaUno = function (imagenFondo1, imagenFondo2, imagenFondo3, imagenFondo4, imagenFondo5, imagenFondo6, imagenFondo7, imagenFondo8, imagenFondo9, imagenFondo10) {
    const elem = document.getElementById(this.idHTML);
    if (!elem) {
        throw ("EL ID " + this.idHTML + " NO EXISTE");
    }

    elem.style.position = "absolute";
    elem.style.left = this.x + 'px';
    elem.style.top = this.y + 'px';
    elem.style.width = this.ancho + 'px';
    elem.style.height = this.alto + 'px';
    elem.style.zIndex = "5";
    elem.style.transition = "left 0.2s ease-in-out , top 0.2s ease-in-out";

    const keyframes = [
        { pct: 0, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo1})` },
        { pct: 10, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo1})` },
        { pct: 11, left: (this.x) + 'px', top: (this.y + 20) + 'px', background: `url(${imagenFondo2})` },
        { pct: 12, left: (this.x) + 'px', top: (this.y + 40) + 'px', background: `url(${imagenFondo3})` },
        { pct: 13, left: (this.x) + 'px', top: (this.y + 60) + 'px', background: `url(${imagenFondo2})` },
        { pct: 14, left: (this.x) + 'px', top: (this.y + 80) + 'px', background: `url(${imagenFondo3})` },
        { pct: 15, left: (this.x) + 'px', top: (this.y + 100) + 'px', background: `url(${imagenFondo2})` },
        { pct: 16, left: (this.x) + 'px', top: (this.y + 120) + 'px', background: `url(${imagenFondo3})` },
        { pct: 17, left: (this.x) + 'px', top: (this.y + 140) + 'px', background: `url(${imagenFondo2})` },
        { pct: 18, left: (this.x) + 'px', top: (this.y + 160) + 'px', background: `url(${imagenFondo3})` },
        { pct: 19, left: (this.x) + 'px', top: (this.y + 180) + 'px', background: `url(${imagenFondo2})` },
        { pct: 20, left: (this.x) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo3})` },
        { pct: 22, left: (this.x) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo1})` },
        { pct: 30, left: (this.x) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo1})` },
        { pct: 31, left: (this.x - 19) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo6})` },
        { pct: 32, left: (this.x - 38) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo7})` },
        { pct: 33, left: (this.x - 57) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo6})` },
        { pct: 34, left: (this.x - 76) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo7})` },
        { pct: 35, left: (this.x - 95) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo6})` },
        { pct: 36, left: (this.x - 114) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo7})` },
        { pct: 37, left: (this.x - 133) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo6})` },
        { pct: 38, left: (this.x - 152) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo7})` },
        { pct: 39, left: (this.x - 171) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo6})` },
        { pct: 40, left: (this.x - 190) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo7})` },
        { pct: 42, left: (this.x - 190) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo1})` },
        { pct: 50, left: (this.x - 190) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo1})` },
        { pct: 51, left: (this.x - 171) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo4})` },
        { pct: 52, left: (this.x - 152) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo5})` },
        { pct: 53, left: (this.x - 133) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo4})` },
        { pct: 54, left: (this.x - 114) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo5})` },
        { pct: 55, left: (this.x - 95) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo4})` },
        { pct: 56, left: (this.x - 76) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo5})` },
        { pct: 57, left: (this.x - 57) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo4})` },
        { pct: 58, left: (this.x - 38) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo5})` },
        { pct: 59, left: (this.x - 19) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo4})` },
        { pct: 60, left: (this.x) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo5})` },
        { pct: 62, left: (this.x) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo1})` },
        { pct: 68, left: (this.x) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo10})` },
        { pct: 71, left: (this.x) + 'px', top: (this.y + 180) + 'px', background: `url(${imagenFondo8})` },
        { pct: 72, left: (this.x) + 'px', top: (this.y + 160) + 'px', background: `url(${imagenFondo9})` },
        { pct: 73, left: (this.x) + 'px', top: (this.y + 140) + 'px', background: `url(${imagenFondo8})` },
        { pct: 74, left: (this.x) + 'px', top: (this.y + 120) + 'px', background: `url(${imagenFondo9})` },
        { pct: 75, left: (this.x) + 'px', top: (this.y + 100) + 'px', background: `url(${imagenFondo8})` },
        { pct: 76, left: (this.x) + 'px', top: (this.y + 80) + 'px', background: `url(${imagenFondo9})` },
        { pct: 77, left: (this.x) + 'px', top: (this.y + 60) + 'px', background: `url(${imagenFondo8})` },
        { pct: 78, left: (this.x) + 'px', top: (this.y + 40) + 'px', background: `url(${imagenFondo9})` },
        { pct: 79, left: (this.x) + 'px', top: (this.y + 20) + 'px', background: `url(${imagenFondo8})` },
        { pct: 80, left: (this.x) + 'px', top: this.y + 'px', background: `url(${imagenFondo9})` },
        { pct: 82, left: (this.x) + 'px', top: this.y + 'px', background: `url(${imagenFondo10})` },
        { pct: 90, left: (this.x) + 'px', top: this.y + 'px', background: `url(${imagenFondo10})` }
    ];

    let frameIndex = 0;
    const totalDuration = 45000;
    const frameDuration = totalDuration / 90;

    function updateStyle() {
        const keyframe = keyframes[frameIndex];
        elem.style.left = keyframe.left;
        elem.style.top = keyframe.top;
        elem.style.backgroundImage = keyframe.background;

        frameIndex = (frameIndex + 1) % keyframes.length;

        const nextFrame = keyframes[frameIndex];
        const duration = (nextFrame.pct - keyframe.pct) * frameDuration;
        setTimeout(updateStyle, duration);
    }

    updateStyle();
};


Rectangulo.prototype.animacionEnemigoTresMapaUno = function (imagenFondo1, imagenFondo2, imagenFondo3, imagenFondo4, imagenFondo5) {
    const elem = document.getElementById(this.idHTML);
    if (!elem) {
        throw ("EL ID " + this.idHTML + " NO EXISTE");
    }

    elem.style.position = "absolute";
    elem.style.left = this.x + 'px';
    elem.style.top = this.y + 'px';
    elem.style.width = this.ancho + 'px';
    elem.style.height = this.alto + 'px';
    elem.style.zIndex = "5";
    elem.style.transition = "left 0.2s ease-in-out , top 0.2s ease-in-out";

    const keyframes = [
        { pct: 0, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo1})` },
        { pct: 10, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo1})` },
        { pct: 12, left: (this.x + 19) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo2})` },
        { pct: 14, left: (this.x + 38) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo3})` },
        { pct: 16, left: (this.x + 57) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo2})` },
        { pct: 18, left: (this.x + 76) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo3})` },
        { pct: 20, left: (this.x + 95) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo2})` },
        { pct: 22, left: (this.x + 114) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo3})` },
        { pct: 24, left: (this.x + 133) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo2})` },
        { pct: 26, left: (this.x + 152) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo3})` },
        { pct: 28, left: (this.x + 171) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo2})` },
        { pct: 30, left: (this.x + 190) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo3})` },
        { pct: 32, left: (this.x + 209) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo2})` },
        { pct: 34, left: (this.x + 228) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo3})` },
        { pct: 36, left: (this.x + 247) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo2})` },
        { pct: 38, left: (this.x + 266) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo3})` },
        { pct: 40, left: (this.x + 280) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo2})` },       
        { pct: 42, left: (this.x + 280) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo1})` },
        { pct: 50, left: (this.x + 280) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo1})` },
        { pct: 52, left: (this.x + 266) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo4})` },
        { pct: 54, left: (this.x + 247) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo5})` },
        { pct: 56, left: (this.x + 228) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo4})` },
        { pct: 58, left: (this.x + 209) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo5})` },
        { pct: 60, left: (this.x + 190) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo4})` },
        { pct: 62, left: (this.x + 171) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo5})` },
        { pct: 64, left: (this.x + 152) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo4})` },
        { pct: 66, left: (this.x + 133) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo5})` },
        { pct: 68, left: (this.x + 114) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo4})` },
        { pct: 70, left: (this.x + 95) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo5})` },
        { pct: 72, left: (this.x + 76) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo4})` },
        { pct: 74, left: (this.x + 57) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo5})` },
        { pct: 76, left: (this.x + 38) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo4})` },
        { pct: 78, left: (this.x + 19) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo5})` },
        { pct: 80, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo4})` },
        { pct: 82, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo1})` },
        { pct: 90, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo1})` }
    ];

    let frameIndex = 0;
    const totalDuration = 25000;
    const frameDuration = totalDuration / 90;

    function updateStyle() {
        const keyframe = keyframes[frameIndex];
        elem.style.left = keyframe.left;
        elem.style.top = keyframe.top;
        elem.style.backgroundImage = keyframe.background;

        frameIndex = (frameIndex + 1) % keyframes.length;

        const nextFrame = keyframes[frameIndex];
        const duration = (nextFrame.pct - keyframe.pct) * frameDuration;
        setTimeout(updateStyle, duration);
    }

    updateStyle();
};


Rectangulo.prototype.animacionEnemigoCuatroMapaUno = function (imagenFondo1, imagenFondo2, imagenFondo3, imagenFondo4, imagenFondo5, imagenFondo6) {
    const elem = document.getElementById(this.idHTML);
    if (!elem) {
        throw ("EL ID " + this.idHTML + " NO EXISTE");
    }

    elem.style.position = "absolute";
    elem.style.left = this.x + 'px';
    elem.style.top = this.y + 'px';
    elem.style.width = this.ancho + 'px';
    elem.style.height = this.alto + 'px';
    elem.style.zIndex = "5";
    elem.style.transition = "left 0.2s ease-in-out , top 0.2s ease-in-out";

    const keyframes = [
        { pct: 0, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo1})` },
        { pct: 10, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo1})` },
        { pct: 12, left: (this.x) + 'px', top: (this.y + 16) + 'px', background: `url(${imagenFondo2})` },
        { pct: 14, left: (this.x) + 'px', top: (this.y + 32) + 'px', background: `url(${imagenFondo3})` },
        { pct: 16, left: (this.x) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo2})` },
        { pct: 18, left: (this.x) + 'px', top: (this.y + 64) + 'px', background: `url(${imagenFondo3})` },
        { pct: 20, left: (this.x) + 'px', top: (this.y + 80) + 'px', background: `url(${imagenFondo2})` },
        { pct: 22, left: (this.x) + 'px', top: (this.y + 96) + 'px', background: `url(${imagenFondo3})` },
        { pct: 24, left: (this.x) + 'px', top: (this.y + 112) + 'px', background: `url(${imagenFondo2})` },
        { pct: 26, left: (this.x) + 'px', top: (this.y + 128) + 'px', background: `url(${imagenFondo3})` },
        { pct: 28, left: (this.x) + 'px', top: (this.y + 144) + 'px', background: `url(${imagenFondo2})` },
        { pct: 30, left: (this.x) + 'px', top: (this.y + 160) + 'px', background: `url(${imagenFondo3})` },
        { pct: 32, left: (this.x) + 'px', top: (this.y + 176) + 'px', background: `url(${imagenFondo2})` },
        { pct: 34, left: (this.x) + 'px', top: (this.y + 192) + 'px', background: `url(${imagenFondo3})` },
        { pct: 36, left: (this.x) + 'px', top: (this.y + 208) + 'px', background: `url(${imagenFondo2})` },
        { pct: 38, left: (this.x) + 'px', top: (this.y + 224) + 'px', background: `url(${imagenFondo3})` },
        { pct: 40, left: (this.x) + 'px', top: (this.y + 240) + 'px', background: `url(${imagenFondo2})` },       
        { pct: 42, left: (this.x) + 'px', top: (this.y + 240) + 'px', background: `url(${imagenFondo1})` },
        { pct: 46, left: (this.x) + 'px', top: (this.y + 240) + 'px', background: `url(${imagenFondo6})` },
        { pct: 52, left: (this.x) + 'px', top: (this.y + 224) + 'px', background: `url(${imagenFondo4})` },
        { pct: 54, left: (this.x) + 'px', top: (this.y + 208) + 'px', background: `url(${imagenFondo5})` },
        { pct: 56, left: (this.x) + 'px', top: (this.y + 192) + 'px', background: `url(${imagenFondo4})` },
        { pct: 58, left: (this.x) + 'px', top: (this.y + 176) + 'px', background: `url(${imagenFondo5})` },
        { pct: 60, left: (this.x) + 'px', top: (this.y + 160) + 'px', background: `url(${imagenFondo4})` },
        { pct: 62, left: (this.x) + 'px', top: (this.y + 144) + 'px', background: `url(${imagenFondo5})` },
        { pct: 64, left: (this.x) + 'px', top: (this.y + 128) + 'px', background: `url(${imagenFondo4})` },
        { pct: 66, left: (this.x) + 'px', top: (this.y + 112) + 'px', background: `url(${imagenFondo5})` },
        { pct: 68, left: (this.x) + 'px', top: (this.y + 96) + 'px', background: `url(${imagenFondo4})` },
        { pct: 70, left: (this.x) + 'px', top: (this.y + 80) + 'px', background: `url(${imagenFondo5})` },
        { pct: 72, left: (this.x) + 'px', top: (this.y + 64) + 'px', background: `url(${imagenFondo4})` },
        { pct: 74, left: (this.x) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo5})` },
        { pct: 76, left: (this.x) + 'px', top: (this.y + 32) + 'px', background: `url(${imagenFondo4})` },
        { pct: 78, left: (this.x) + 'px', top: (this.y + 16) + 'px', background: `url(${imagenFondo5})` },
        { pct: 80, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo4})` },
        { pct: 82, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo6})` },
        { pct: 90, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo6})` }
    ];

    let frameIndex = 0;
    const totalDuration = 25000;
    const frameDuration = totalDuration / 90;

    function updateStyle() {
        const keyframe = keyframes[frameIndex];
        elem.style.left = keyframe.left;
        elem.style.top = keyframe.top;
        elem.style.backgroundImage = keyframe.background;

        frameIndex = (frameIndex + 1) % keyframes.length;

        const nextFrame = keyframes[frameIndex];
        const duration = (nextFrame.pct - keyframe.pct) * frameDuration;
        setTimeout(updateStyle, duration);
    }

    updateStyle();
};


Rectangulo.prototype.animacionEnemigoCincoMapaUno = function (imagenFondo1, imagenFondo2, imagenFondo3, imagenFondo4, imagenFondo5, imagenFondo6) {
    const elem = document.getElementById(this.idHTML);
    if (!elem) {
        throw ("EL ID " + this.idHTML + " NO EXISTE");
    }

    elem.style.position = "absolute";
    elem.style.left = this.x + 'px';
    elem.style.top = this.y + 'px';
    elem.style.width = this.ancho + 'px';
    elem.style.height = this.alto + 'px';
    elem.style.zIndex = "5";
    elem.style.transition = "left 0.2s ease-in-out , top 0.2s ease-in-out";

    const keyframes = [
        { pct: 0, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo1})` },
        { pct: 10, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo1})` },
        { pct: 12, left: (this.x) + 'px', top: (this.y + 16) + 'px', background: `url(${imagenFondo2})` },
        { pct: 14, left: (this.x) + 'px', top: (this.y + 32) + 'px', background: `url(${imagenFondo3})` },
        { pct: 16, left: (this.x) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo2})` },
        { pct: 18, left: (this.x) + 'px', top: (this.y + 64) + 'px', background: `url(${imagenFondo3})` },
        { pct: 20, left: (this.x) + 'px', top: (this.y + 80) + 'px', background: `url(${imagenFondo2})` },
        { pct: 22, left: (this.x) + 'px', top: (this.y + 96) + 'px', background: `url(${imagenFondo3})` },
        { pct: 24, left: (this.x) + 'px', top: (this.y + 112) + 'px', background: `url(${imagenFondo2})` },
        { pct: 26, left: (this.x) + 'px', top: (this.y + 128) + 'px', background: `url(${imagenFondo3})` },
        { pct: 28, left: (this.x) + 'px', top: (this.y + 144) + 'px', background: `url(${imagenFondo2})` },
        { pct: 30, left: (this.x) + 'px', top: (this.y + 160) + 'px', background: `url(${imagenFondo3})` },
        { pct: 32, left: (this.x) + 'px', top: (this.y + 176) + 'px', background: `url(${imagenFondo2})` },
        { pct: 34, left: (this.x) + 'px', top: (this.y + 192) + 'px', background: `url(${imagenFondo3})` },
        { pct: 36, left: (this.x) + 'px', top: (this.y + 208) + 'px', background: `url(${imagenFondo2})` },
        { pct: 38, left: (this.x) + 'px', top: (this.y + 224) + 'px', background: `url(${imagenFondo3})` },
        { pct: 40, left: (this.x) + 'px', top: (this.y + 240) + 'px', background: `url(${imagenFondo2})` },       
        { pct: 42, left: (this.x) + 'px', top: (this.y + 240) + 'px', background: `url(${imagenFondo1})` },
        { pct: 46, left: (this.x) + 'px', top: (this.y + 240) + 'px', background: `url(${imagenFondo6})` },
        { pct: 52, left: (this.x) + 'px', top: (this.y + 224) + 'px', background: `url(${imagenFondo4})` },
        { pct: 54, left: (this.x) + 'px', top: (this.y + 208) + 'px', background: `url(${imagenFondo5})` },
        { pct: 56, left: (this.x) + 'px', top: (this.y + 192) + 'px', background: `url(${imagenFondo4})` },
        { pct: 58, left: (this.x) + 'px', top: (this.y + 176) + 'px', background: `url(${imagenFondo5})` },
        { pct: 60, left: (this.x) + 'px', top: (this.y + 160) + 'px', background: `url(${imagenFondo4})` },
        { pct: 62, left: (this.x) + 'px', top: (this.y + 144) + 'px', background: `url(${imagenFondo5})` },
        { pct: 64, left: (this.x) + 'px', top: (this.y + 128) + 'px', background: `url(${imagenFondo4})` },
        { pct: 66, left: (this.x) + 'px', top: (this.y + 112) + 'px', background: `url(${imagenFondo5})` },
        { pct: 68, left: (this.x) + 'px', top: (this.y + 96) + 'px', background: `url(${imagenFondo4})` },
        { pct: 70, left: (this.x) + 'px', top: (this.y + 80) + 'px', background: `url(${imagenFondo5})` },
        { pct: 72, left: (this.x) + 'px', top: (this.y + 64) + 'px', background: `url(${imagenFondo4})` },
        { pct: 74, left: (this.x) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo5})` },
        { pct: 76, left: (this.x) + 'px', top: (this.y + 32) + 'px', background: `url(${imagenFondo4})` },
        { pct: 78, left: (this.x) + 'px', top: (this.y + 16) + 'px', background: `url(${imagenFondo5})` },
        { pct: 80, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo4})` },
        { pct: 82, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo6})` },
        { pct: 90, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo6})` }
    ];

    let frameIndex = 0;
    const totalDuration = 26000;
    const frameDuration = totalDuration / 90;

    function updateStyle() {
        const keyframe = keyframes[frameIndex];
        elem.style.left = keyframe.left;
        elem.style.top = keyframe.top;
        elem.style.backgroundImage = keyframe.background;

        frameIndex = (frameIndex + 1) % keyframes.length;

        const nextFrame = keyframes[frameIndex];
        const duration = (nextFrame.pct - keyframe.pct) * frameDuration;
        setTimeout(updateStyle, duration);
    }

    updateStyle();
};


Rectangulo.prototype.animacionEnemigoSeisMapaUno = function (imagenFondo1, imagenFondo2, imagenFondo3, imagenFondo4, imagenFondo5, imagenFondo6, imagenFondo7, imagenFondo8, imagenFondo9, imagenFondo10) {
    const elem = document.getElementById(this.idHTML);
    if (!elem) {
        throw ("EL ID " + this.idHTML + " NO EXISTE");
    }

    elem.style.position = "absolute";
    elem.style.left = this.x + 'px';
    elem.style.top = this.y + 'px';
    elem.style.width = this.ancho + 'px';
    elem.style.height = this.alto + 'px';
    elem.style.zIndex = "5";
    elem.style.transition = "left 0.2s ease-in-out , top 0.2s ease-in-out";

    const keyframes = [
        { pct: 0, left: this.x + 'px', top: this.y + 'px', background: `url(${imagenFondo1})` },
        { pct: 10, left: this.x + 'px', top: this.y + 'px', background: `url(${imagenFondo1})` },
        { pct: 11, left: this.x + 'px', top: (this.y + 19) + 'px', background: `url(${imagenFondo2})` },
        { pct: 12, left: this.x + 'px', top: (this.y + 38) + 'px', background: `url(${imagenFondo3})` },
        { pct: 13, left: this.x + 'px', top: (this.y + 57) + 'px', background: `url(${imagenFondo2})` },
        { pct: 14, left: this.x + 'px', top: (this.y + 76) + 'px', background: `url(${imagenFondo3})` },
        { pct: 15, left: this.x + 'px', top: (this.y + 95) + 'px', background: `url(${imagenFondo2})` },
        { pct: 16, left: this.x + 'px', top: (this.y + 114) + 'px', background: `url(${imagenFondo3})` },
        { pct: 17, left: this.x + 'px', top: (this.y + 133) + 'px', background: `url(${imagenFondo2})` },
        { pct: 18, left: this.x + 'px', top: (this.y + 152) + 'px', background: `url(${imagenFondo3})` },
        { pct: 19, left: this.x + 'px', top: (this.y + 171) + 'px', background: `url(${imagenFondo2})` },
        { pct: 20, left: this.x + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo3})` },
        { pct: 22, left: this.x + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo1})` },
        { pct: 30, left: this.x + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo1})` },
        { pct: 31, left: (this.x + 19) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo4})` },
        { pct: 32, left: (this.x + 38) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo5})` },
        { pct: 33, left: (this.x + 57) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo4})` },
        { pct: 34, left: (this.x + 76) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo5})` },
        { pct: 35, left: (this.x + 95) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo4})` },
        { pct: 36, left: (this.x + 114) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo5})` },
        { pct: 37, left: (this.x + 133) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo4})` },
        { pct: 38, left: (this.x + 152) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo5})` },
        { pct: 39, left: (this.x + 171) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo4})` },
        { pct: 40, left: (this.x + 186) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo5})` },
        { pct: 42, left: (this.x + 186) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo1})` },
        { pct: 50, left: (this.x + 186) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo1})` },
        { pct: 51, left: (this.x + 171) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo6})` },
        { pct: 52, left: (this.x + 152) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo7})` },
        { pct: 53, left: (this.x + 133) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo6})` },
        { pct: 54, left: (this.x + 114) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo7})` },
        { pct: 55, left: (this.x + 95) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo6})` },
        { pct: 56, left: (this.x + 76) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo7})` },
        { pct: 57, left: (this.x + 57) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo6})` },
        { pct: 58, left: (this.x + 38) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo7})` },
        { pct: 59, left: (this.x + 19) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo6})` },
        { pct: 60, left: this.x + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo7})` },
        { pct: 62, left: this.x + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo1})` },
        { pct: 68, left: this.x + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo10})` },
        { pct: 71, left: this.x + 'px', top: (this.y + 171) + 'px', background: `url(${imagenFondo8})` },
        { pct: 72, left: this.x + 'px', top: (this.y + 152) + 'px', background: `url(${imagenFondo9})` },
        { pct: 73, left: this.x + 'px', top: (this.y + 133) + 'px', background: `url(${imagenFondo8})` },
        { pct: 74, left: this.x + 'px', top: (this.y + 114) + 'px', background: `url(${imagenFondo9})` },
        { pct: 75, left: this.x + 'px', top: (this.y + 95) + 'px', background: `url(${imagenFondo8})` },
        { pct: 76, left: this.x + 'px', top: (this.y + 76) + 'px', background: `url(${imagenFondo9})` },
        { pct: 77, left: this.x + 'px', top: (this.y + 57) + 'px', background: `url(${imagenFondo8})` },
        { pct: 78, left: this.x + 'px', top: (this.y + 38) + 'px', background: `url(${imagenFondo9})` },
        { pct: 79, left: this.x + 'px', top: (this.y + 19) + 'px', background: `url(${imagenFondo8})` },
        { pct: 80, left: this.x + 'px', top: this.y + 'px', background: `url(${imagenFondo9})` },
        { pct: 82, left: this.x + 'px', top: this.y + 'px', background: `url(${imagenFondo10})` },
        { pct: 90, left: this.x + 'px', top: this.y + 'px', background: `url(${imagenFondo10})` }
    ];

    let frameIndex = 0;
    const totalDuration = 45000;
    const frameDuration = totalDuration / 90;

    function updateStyle() {
        const keyframe = keyframes[frameIndex];
        elem.style.left = keyframe.left;
        elem.style.top = keyframe.top;
        elem.style.backgroundImage = keyframe.background;

        frameIndex = (frameIndex + 1) % keyframes.length;

        const nextFrame = keyframes[frameIndex];
        const duration = (nextFrame.pct - keyframe.pct) * frameDuration;
        setTimeout(updateStyle, duration);
    }

    updateStyle();
};


Rectangulo.prototype.animacionEnemigoSieteMapaUno = function (imagenFondo1, imagenFondo2, imagenFondo3, imagenFondo4, imagenFondo5, imagenFondo6) {
    const elem = document.getElementById(this.idHTML);
    if (!elem) {
        throw ("EL ID " + this.idHTML + " NO EXISTE");
    }

    elem.style.position = "absolute";
    elem.style.left = this.x + 'px';
    elem.style.top = this.y + 'px';
    elem.style.width = this.ancho + 'px';
    elem.style.height = this.alto + 'px';
    elem.style.zIndex = "5";
    elem.style.transition = "left 0.2s ease-in-out , top 0.2s ease-in-out";

    const keyframes = [
        { pct: 0, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo1})` },
        { pct: 10, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo1})` },
        { pct: 12, left: (this.x) + 'px', top: (this.y + 16) + 'px', background: `url(${imagenFondo2})` },
        { pct: 14, left: (this.x) + 'px', top: (this.y + 32) + 'px', background: `url(${imagenFondo3})` },
        { pct: 16, left: (this.x) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo2})` },
        { pct: 18, left: (this.x) + 'px', top: (this.y + 64) + 'px', background: `url(${imagenFondo3})` },
        { pct: 20, left: (this.x) + 'px', top: (this.y + 80) + 'px', background: `url(${imagenFondo2})` },
        { pct: 22, left: (this.x) + 'px', top: (this.y + 96) + 'px', background: `url(${imagenFondo3})` },
        { pct: 24, left: (this.x) + 'px', top: (this.y + 112) + 'px', background: `url(${imagenFondo2})` },
        { pct: 26, left: (this.x) + 'px', top: (this.y + 128) + 'px', background: `url(${imagenFondo3})` },
        { pct: 28, left: (this.x) + 'px', top: (this.y + 144) + 'px', background: `url(${imagenFondo2})` },
        { pct: 30, left: (this.x) + 'px', top: (this.y + 160) + 'px', background: `url(${imagenFondo3})` },
        { pct: 32, left: (this.x) + 'px', top: (this.y + 176) + 'px', background: `url(${imagenFondo2})` },
        { pct: 34, left: (this.x) + 'px', top: (this.y + 192) + 'px', background: `url(${imagenFondo3})` },
        { pct: 36, left: (this.x) + 'px', top: (this.y + 208) + 'px', background: `url(${imagenFondo2})` },
        { pct: 38, left: (this.x) + 'px', top: (this.y + 224) + 'px', background: `url(${imagenFondo3})` },
        { pct: 40, left: (this.x) + 'px', top: (this.y + 240) + 'px', background: `url(${imagenFondo2})` },       
        { pct: 42, left: (this.x) + 'px', top: (this.y + 240) + 'px', background: `url(${imagenFondo1})` },
        { pct: 46, left: (this.x) + 'px', top: (this.y + 240) + 'px', background: `url(${imagenFondo6})` },
        { pct: 52, left: (this.x) + 'px', top: (this.y + 224) + 'px', background: `url(${imagenFondo4})` },
        { pct: 54, left: (this.x) + 'px', top: (this.y + 208) + 'px', background: `url(${imagenFondo5})` },
        { pct: 56, left: (this.x) + 'px', top: (this.y + 192) + 'px', background: `url(${imagenFondo4})` },
        { pct: 58, left: (this.x) + 'px', top: (this.y + 176) + 'px', background: `url(${imagenFondo5})` },
        { pct: 60, left: (this.x) + 'px', top: (this.y + 160) + 'px', background: `url(${imagenFondo4})` },
        { pct: 62, left: (this.x) + 'px', top: (this.y + 144) + 'px', background: `url(${imagenFondo5})` },
        { pct: 64, left: (this.x) + 'px', top: (this.y + 128) + 'px', background: `url(${imagenFondo4})` },
        { pct: 66, left: (this.x) + 'px', top: (this.y + 112) + 'px', background: `url(${imagenFondo5})` },
        { pct: 68, left: (this.x) + 'px', top: (this.y + 96) + 'px', background: `url(${imagenFondo4})` },
        { pct: 70, left: (this.x) + 'px', top: (this.y + 80) + 'px', background: `url(${imagenFondo5})` },
        { pct: 72, left: (this.x) + 'px', top: (this.y + 64) + 'px', background: `url(${imagenFondo4})` },
        { pct: 74, left: (this.x) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo5})` },
        { pct: 76, left: (this.x) + 'px', top: (this.y + 32) + 'px', background: `url(${imagenFondo4})` },
        { pct: 78, left: (this.x) + 'px', top: (this.y + 16) + 'px', background: `url(${imagenFondo5})` },
        { pct: 80, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo4})` },
        { pct: 82, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo6})` },
        { pct: 90, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo6})` }
    ];

    let frameIndex = 0;
    const totalDuration = 22000;
    const frameDuration = totalDuration / 90;

    function updateStyle() {
        const keyframe = keyframes[frameIndex];
        elem.style.left = keyframe.left;
        elem.style.top = keyframe.top;
        elem.style.backgroundImage = keyframe.background;

        frameIndex = (frameIndex + 1) % keyframes.length;

        const nextFrame = keyframes[frameIndex];
        const duration = (nextFrame.pct - keyframe.pct) * frameDuration;
        setTimeout(updateStyle, duration);
    }

    updateStyle();
};


Rectangulo.prototype.animacionEnemigoOchoMapaUno = function (imagenFondo1, imagenFondo2, imagenFondo3, imagenFondo4, imagenFondo5, imagenFondo6, imagenFondo7, imagenFondo8, imagenFondo9, imagenFondo10) {
    const elem = document.getElementById(this.idHTML);
    if (!elem) {
        throw ("EL ID " + this.idHTML + " NO EXISTE");
    }

    elem.style.position = "absolute";
    elem.style.left = this.x + 'px';
    elem.style.top = this.y + 'px';
    elem.style.width = this.ancho + 'px';
    elem.style.height = this.alto + 'px';
    elem.style.zIndex = "5";
    elem.style.transition = "left 0.5s ease-in-out , top 0.2s ease-in-out";

    const keyframes = [
        { pct: 0, left: this.x + 'px', top: this.y + 'px', background: `url(${imagenFondo10})` },
        { pct: 10, left: this.x + 'px', top: this.y + 'px', background: `url(${imagenFondo10})` },
        { pct: 11, left: (this.x + 19) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo2})` },
        { pct: 12, left: (this.x + 38) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo3})` },
        { pct: 13, left: (this.x + 57) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo2})` },
        { pct: 14, left: (this.x + 76) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo3})` },
        { pct: 15, left: (this.x + 95) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo2})` },
        { pct: 16, left: (this.x + 114) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo3})` },
        { pct: 17, left: (this.x + 133) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo2})` },
        { pct: 18, left: (this.x + 152) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo3})` },
        { pct: 19, left: (this.x + 171) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo2})` },
        { pct: 20, left: (this.x + 190) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo3})` },
        { pct: 21, left: (this.x + 209) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo2})` },
        { pct: 22, left: (this.x + 228) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo3})` },
        { pct: 23, left: (this.x + 247) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo2})` },
        { pct: 24, left: (this.x + 266) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo3})` },
        { pct: 25, left: (this.x + 285) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo2})` },
        { pct: 26, left: (this.x + 304) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo3})` },
        { pct: 27, left: (this.x + 323) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo2})` },
        { pct: 28, left: (this.x + 342) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo3})` },
        { pct: 29, left: (this.x + 361) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo2})` },
        { pct: 30, left: (this.x + 380) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo3})` },
        { pct: 32, left: (this.x + 380) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo1})` },
        { pct: 45, left: (this.x + 380) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo1})` },
        { pct: 46, left: (this.x + 380) + 'px', top: (this.y + 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 47, left: (this.x + 380) + 'px', top: (this.y + 20) + 'px', background: `url(${imagenFondo5})` },
        { pct: 48, left: (this.x + 380) + 'px', top: (this.y + 29) + 'px', background: `url(${imagenFondo4})` },
        { pct: 49, left: (this.x + 380) + 'px', top: (this.y + 39) + 'px', background: `url(${imagenFondo5})` },
        { pct: 50, left: (this.x + 380) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo4})` },
        { pct: 52, left: (this.x + 380) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo1})` },
        { pct: 60, left: (this.x + 380) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo1})` },
        { pct: 61, left: (this.x + 361) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo6})` },
        { pct: 62, left: (this.x + 342) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo7})` },
        { pct: 63, left: (this.x + 323) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo6})` },
        { pct: 64, left: (this.x + 304) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo7})` },
        { pct: 65, left: (this.x + 285) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo6})` },
        { pct: 66, left: (this.x + 266) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo7})` },
        { pct: 67, left: (this.x + 247) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo6})` },
        { pct: 68, left: (this.x + 228) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo7})` },
        { pct: 69, left: (this.x + 209) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo6})` },
        { pct: 70, left: (this.x + 190) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo7})` },
        { pct: 71, left: (this.x + 171) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo6})` },
        { pct: 72, left: (this.x + 152) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo7})` },
        { pct: 73, left: (this.x + 133) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo6})` },
        { pct: 74, left: (this.x + 114) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo7})` },
        { pct: 75, left: (this.x + 95) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo6})` },
        { pct: 76, left: (this.x + 76) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo7})` },
        { pct: 77, left: (this.x + 57) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo6})` },
        { pct: 78, left: (this.x + 38) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo7})` },
        { pct: 79, left: (this.x + 19) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo6})` },
        { pct: 80, left: (this.x) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo7})` },
        { pct: 81, left: (this.x) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo10})` },
        { pct: 95, left: (this.x) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo10})` },
        { pct: 96, left: this.x + 'px', top: (this.y + 39) + 'px', background: `url(${imagenFondo8})` },
        { pct: 97, left: this.x + 'px', top: (this.y + 29) + 'px', background: `url(${imagenFondo9})` },
        { pct: 98, left: this.x + 'px', top: (this.y + 20) + 'px', background: `url(${imagenFondo8})` },
        { pct: 99, left: this.x + 'px', top: (this.y + 10) + 'px', background: `url(${imagenFondo9})` },
        { pct: 100, left: this.x + 'px', top: (this.y) + 'px', background: `url(${imagenFondo10})` }
    ];

    let frameIndex = 0;
    const totalDuration = 38000;
    const frameDuration = totalDuration / 90;

    function updateStyle() {
        const keyframe = keyframes[frameIndex];
        elem.style.left = keyframe.left;
        elem.style.top = keyframe.top;
        elem.style.backgroundImage = keyframe.background;

        frameIndex = (frameIndex + 1) % keyframes.length;

        const nextFrame = keyframes[frameIndex];
        const duration = (nextFrame.pct - keyframe.pct) * frameDuration;
        setTimeout(updateStyle, duration);
    }

    updateStyle();
};


Rectangulo.prototype.animacionEnemigoNueveMapaUno = function (imagenFondo1, imagenFondo2, imagenFondo3, imagenFondo4, imagenFondo5, imagenFondo6) {
    const elem = document.getElementById(this.idHTML);
    if (!elem) {
        throw ("EL ID " + this.idHTML + " NO EXISTE");
    }

    elem.style.position = "absolute";
    elem.style.left = this.x + 'px';
    elem.style.top = this.y + 'px';
    elem.style.width = this.ancho + 'px';
    elem.style.height = this.alto + 'px';
    elem.style.zIndex = "5";
    elem.style.transition = "left 0.2s ease-in-out , top 0.2s ease-in-out";

    const keyframes = [
        { pct: 0, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo1})` },
        { pct: 10, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo1})` },
        { pct: 12, left: (this.x) + 'px', top: (this.y + 13) + 'px', background: `url(${imagenFondo2})` },
        { pct: 14, left: (this.x) + 'px', top: (this.y + 26) + 'px', background: `url(${imagenFondo3})` },
        { pct: 16, left: (this.x) + 'px', top: (this.y + 39) + 'px', background: `url(${imagenFondo2})` },
        { pct: 18, left: (this.x) + 'px', top: (this.y + 52) + 'px', background: `url(${imagenFondo3})` },
        { pct: 20, left: (this.x) + 'px', top: (this.y + 65) + 'px', background: `url(${imagenFondo2})` },
        { pct: 22, left: (this.x) + 'px', top: (this.y + 78) + 'px', background: `url(${imagenFondo3})` },
        { pct: 24, left: (this.x) + 'px', top: (this.y + 91) + 'px', background: `url(${imagenFondo2})` },
        { pct: 26, left: (this.x) + 'px', top: (this.y + 104) + 'px', background: `url(${imagenFondo3})` },
        { pct: 28, left: (this.x) + 'px', top: (this.y + 117) + 'px', background: `url(${imagenFondo2})` },
        { pct: 30, left: (this.x) + 'px', top: (this.y + 130) + 'px', background: `url(${imagenFondo3})` },
        { pct: 32, left: (this.x) + 'px', top: (this.y + 143) + 'px', background: `url(${imagenFondo2})` },
        { pct: 34, left: (this.x) + 'px', top: (this.y + 156) + 'px', background: `url(${imagenFondo3})` },
        { pct: 36, left: (this.x) + 'px', top: (this.y + 169) + 'px', background: `url(${imagenFondo2})` },
        { pct: 38, left: (this.x) + 'px', top: (this.y + 181) + 'px', background: `url(${imagenFondo3})` },
        { pct: 40, left: (this.x) + 'px', top: (this.y + 192) + 'px', background: `url(${imagenFondo2})` },       
        { pct: 42, left: (this.x) + 'px', top: (this.y + 192) + 'px', background: `url(${imagenFondo1})` },
        { pct: 46, left: (this.x) + 'px', top: (this.y + 192) + 'px', background: `url(${imagenFondo6})` },
        { pct: 52, left: (this.x) + 'px', top: (this.y + 181) + 'px', background: `url(${imagenFondo4})` },
        { pct: 54, left: (this.x) + 'px', top: (this.y + 169) + 'px', background: `url(${imagenFondo5})` },
        { pct: 56, left: (this.x) + 'px', top: (this.y + 156) + 'px', background: `url(${imagenFondo4})` },
        { pct: 58, left: (this.x) + 'px', top: (this.y + 143) + 'px', background: `url(${imagenFondo5})` },
        { pct: 60, left: (this.x) + 'px', top: (this.y + 130) + 'px', background: `url(${imagenFondo4})` },
        { pct: 62, left: (this.x) + 'px', top: (this.y + 117) + 'px', background: `url(${imagenFondo5})` },
        { pct: 64, left: (this.x) + 'px', top: (this.y + 104) + 'px', background: `url(${imagenFondo4})` },
        { pct: 66, left: (this.x) + 'px', top: (this.y + 91) + 'px', background: `url(${imagenFondo5})` },
        { pct: 68, left: (this.x) + 'px', top: (this.y + 78) + 'px', background: `url(${imagenFondo4})` },
        { pct: 70, left: (this.x) + 'px', top: (this.y + 65) + 'px', background: `url(${imagenFondo5})` },
        { pct: 72, left: (this.x) + 'px', top: (this.y + 52) + 'px', background: `url(${imagenFondo4})` },
        { pct: 74, left: (this.x) + 'px', top: (this.y + 39) + 'px', background: `url(${imagenFondo5})` },
        { pct: 76, left: (this.x) + 'px', top: (this.y + 26) + 'px', background: `url(${imagenFondo4})` },
        { pct: 78, left: (this.x) + 'px', top: (this.y + 13) + 'px', background: `url(${imagenFondo5})` },
        { pct: 80, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo4})` },
        { pct: 82, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo6})` },
        { pct: 90, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo6})` }
    ];

    let frameIndex = 0;
    const totalDuration = 23000;
    const frameDuration = totalDuration / 90;

    function updateStyle() {
        const keyframe = keyframes[frameIndex];
        elem.style.left = keyframe.left;
        elem.style.top = keyframe.top;
        elem.style.backgroundImage = keyframe.background;

        frameIndex = (frameIndex + 1) % keyframes.length;

        const nextFrame = keyframes[frameIndex];
        const duration = (nextFrame.pct - keyframe.pct) * frameDuration;
        setTimeout(updateStyle, duration);
    }

    updateStyle();
};




Rectangulo.prototype.animacionEnemigoUnoMapaDos = function (imagenFondo1, imagenFondo2, imagenFondo3, imagenFondo4, imagenFondo5, imagenFondo6, imagenFondo7, imagenFondo8, imagenFondo9, imagenFondo10) {
    const elem = document.getElementById(this.idHTML);
    if (!elem) {
        throw ("EL ID " + this.idHTML + " NO EXISTE");
    }

    elem.style.position = "absolute";
    elem.style.left = this.x + 'px';
    elem.style.top = this.y + 'px';
    elem.style.width = this.ancho + 'px';
    elem.style.height = this.alto + 'px';
    elem.style.zIndex = "5";
    elem.style.transition = "left 0.2s ease-in-out , top 0.2s ease-in-out";

    const keyframes = [
        { pct: 0, left: (this.x) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo1})` },
        { pct: 10, left: (this.x) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo1})` },
        { pct: 11, left: (this.x + 17) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 12, left: (this.x + 34) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 13, left: (this.x + 51) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 14, left: (this.x + 68) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 15, left: (this.x + 85) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 16, left: (this.x + 102) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 17, left: (this.x + 119) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 18, left: (this.x + 137) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 19, left: (this.x + 157) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 20, left: (this.x + 174) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 21, left: (this.x + 192) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 22, left: (this.x + 192) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo1})` },
        { pct: 30, left: (this.x + 192) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo1})` },
        { pct: 31, left: (this.x + 184) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 32, left: (this.x + 176) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },
        { pct: 33, left: (this.x + 168) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },       
        { pct: 34, left: (this.x + 160) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },
        { pct: 35, left: (this.x + 152) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 36, left: (this.x + 144) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },
        { pct: 37, left: (this.x + 136) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 38, left: (this.x + 129) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },
        { pct: 39, left: (this.x + 117) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 40, left: (this.x + 108) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },
        { pct: 41, left: (this.x + 94) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 42, left: (this.x + 94) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo1})` },
        { pct: 50, left: (this.x + 94) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo1})` },
        { pct: 51, left: (this.x + 94) + 'px', top: (this.y + 5) + 'px', background: `url(${imagenFondo2})` },
        { pct: 52, left: (this.x + 94) + 'px', top: (this.y + 14) + 'px', background: `url(${imagenFondo3})` },
        { pct: 53, left: (this.x + 94) + 'px', top: (this.y + 24) + 'px', background: `url(${imagenFondo2})` },
        { pct: 54, left: (this.x + 94) + 'px', top: (this.y + 40) + 'px', background: `url(${imagenFondo3})` },
        { pct: 55, left: (this.x + 94) + 'px', top: (this.y + 56) + 'px', background: `url(${imagenFondo2})` },
        { pct: 56, left: (this.x + 94) + 'px', top: (this.y + 72) + 'px', background: `url(${imagenFondo3})` },
        { pct: 57, left: (this.x + 94) + 'px', top: (this.y + 88) + 'px', background: `url(${imagenFondo2})` },
        { pct: 58, left: (this.x + 94) + 'px', top: (this.y + 104) + 'px', background: `url(${imagenFondo3})` },
        { pct: 59, left: (this.x + 94) + 'px', top: (this.y + 120) + 'px', background: `url(${imagenFondo2})` },
        { pct: 60, left: (this.x + 94) + 'px', top: (this.y + 136) + 'px', background: `url(${imagenFondo3})` },
        { pct: 61, left: (this.x + 94) + 'px', top: (this.y + 144) + 'px', background: `url(${imagenFondo2})` },
        { pct: 62, left: (this.x + 94) + 'px', top: (this.y + 144) + 'px', background: `url(${imagenFondo1})` },
        { pct: 65, left: (this.x + 94) + 'px', top: (this.y + 144) + 'px', background: `url(${imagenFondo10})` },
        { pct: 70, left: (this.x + 94) + 'px', top: (this.y + 144) + 'px', background: `url(${imagenFondo10})` },
        { pct: 71, left: (this.x + 94) + 'px', top: (this.y + 136) + 'px', background: `url(${imagenFondo8})` },
        { pct: 72, left: (this.x + 94) + 'px', top: (this.y + 120) + 'px', background: `url(${imagenFondo9})` },
        { pct: 73, left: (this.x + 94) + 'px', top: (this.y + 104) + 'px', background: `url(${imagenFondo8})` },
        { pct: 74, left: (this.x + 94) + 'px', top: (this.y + 88) + 'px', background: `url(${imagenFondo9})` },
        { pct: 75, left: (this.x + 94) + 'px', top: (this.y + 72) + 'px', background: `url(${imagenFondo8})` },
        { pct: 76, left: (this.x + 94) + 'px', top: (this.y + 56) + 'px', background: `url(${imagenFondo9})` },
        { pct: 77, left: (this.x + 94) + 'px', top: (this.y + 40) + 'px', background: `url(${imagenFondo8})` },
        { pct: 78, left: (this.x + 94) + 'px', top: (this.y + 24) + 'px', background: `url(${imagenFondo9})` },
        { pct: 79, left: (this.x + 94) + 'px', top: (this.y + 14) + 'px', background: `url(${imagenFondo8})` },
        { pct: 80, left: (this.x + 94) + 'px', top: (this.y + 5) + 'px', background: `url(${imagenFondo9})` },
        { pct: 81, left: (this.x + 94) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo8})` },
        { pct: 82, left: (this.x + 94) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo10})` },
        { pct: 85, left: (this.x + 94) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo1})` },
        { pct: 90, left: (this.x + 94) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo1})` },
        { pct: 91, left: (this.x + 86) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 92, left: (this.x + 76) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },
        { pct: 93, left: (this.x + 66) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 94, left: (this.x + 56) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },
        { pct: 95, left: (this.x + 46) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 96, left: (this.x + 36) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },
        { pct: 97, left: (this.x + 26) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 98, left: (this.x + 16) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },
        { pct: 99, left: (this.x + 6) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 100, left: (this.x) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo1})` }
    ];

    let frameIndex = 0;
    const totalDuration = 45000;
    const frameDuration = totalDuration / 90;

    function updateStyle() {
        const keyframe = keyframes[frameIndex];
        elem.style.left = keyframe.left;
        elem.style.top = keyframe.top;
        elem.style.backgroundImage = keyframe.background;

        frameIndex = (frameIndex + 1) % keyframes.length;

        const nextFrame = keyframes[frameIndex];
        const duration = (nextFrame.pct - keyframe.pct) * frameDuration;
        setTimeout(updateStyle, duration);
    }

    updateStyle();
};


Rectangulo.prototype.animacionEnemigoDosMapaDos = function (imagenFondo1, imagenFondo2, imagenFondo3, imagenFondo4, imagenFondo5, imagenFondo6, imagenFondo7, imagenFondo8, imagenFondo9, imagenFondo10) {
    const elem = document.getElementById(this.idHTML);
    if (!elem) {
        throw ("EL ID " + this.idHTML + " NO EXISTE");
    }

    elem.style.position = "absolute";
    elem.style.left = this.x + 'px';
    elem.style.top = this.y + 'px';
    elem.style.width = this.ancho + 'px';
    elem.style.height = this.alto + 'px';
    elem.style.zIndex = "5";
    elem.style.transition = "left 0.2s ease-in-out, top 0.2s ease-in-out";

    const keyframes = [
        { pct: 0, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo10})` },
        { pct: 1, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo1})` },
        { pct: 10, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo1})` },
        { pct: 11, left: (this.x) + 'px', top: (this.y + 5) + 'px', background: `url(${imagenFondo2})` },
        { pct: 12, left: (this.x) + 'px', top: (this.y + 10) + 'px', background: `url(${imagenFondo3})` },
        { pct: 13, left: (this.x) + 'px', top: (this.y + 14) + 'px', background: `url(${imagenFondo2})` },
        { pct: 14, left: (this.x) + 'px', top: (this.y + 19) + 'px', background: `url(${imagenFondo3})` },
        { pct: 15, left: (this.x) + 'px', top: (this.y + 23) + 'px', background: `url(${imagenFondo2})` },
        { pct: 16, left: (this.x) + 'px', top: (this.y + 28) + 'px', background: `url(${imagenFondo3})` },
        { pct: 17, left: (this.x) + 'px', top: (this.y + 32) + 'px', background: `url(${imagenFondo2})` },
        { pct: 18, left: (this.x) + 'px', top: (this.y + 37) + 'px', background: `url(${imagenFondo3})` },
        { pct: 19, left: (this.x) + 'px', top: (this.y + 41) + 'px', background: `url(${imagenFondo2})` },
        { pct: 20, left: (this.x) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo1})` },
        { pct: 25, left: (this.x) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo1})` },
        { pct: 26, left: (this.x - 5) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo6})` },
        { pct: 27, left: (this.x - 10) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo7})` },
        { pct: 28, left: (this.x - 14) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo6})` },
        { pct: 29, left: (this.x - 19) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo7})` },
        { pct: 30, left: (this.x - 23) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo6})` },       
        { pct: 31, left: (this.x - 28) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo7})` },
        { pct: 32, left: (this.x - 32) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo6})` },
        { pct: 33, left: (this.x - 37) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo7})` },
        { pct: 34, left: (this.x - 41) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo6})` },
        { pct: 35, left: (this.x - 48) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo7})` },
        { pct: 36, left: (this.x - 48) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo10})` },
        { pct: 40, left: (this.x - 48) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo10})` },
        { pct: 41, left: (this.x - 48) + 'px', top: (this.y +41) + 'px', background: `url(${imagenFondo8})` },
        { pct: 42, left: (this.x - 48) + 'px', top: (this.y + 37) + 'px', background: `url(${imagenFondo9})` },
        { pct: 43, left: (this.x - 48) + 'px', top: (this.y + 32) + 'px', background: `url(${imagenFondo8})` },
        { pct: 44, left: (this.x - 48) + 'px', top: (this.y + 28) + 'px', background: `url(${imagenFondo9})` },
        { pct: 45, left: (this.x - 48) + 'px', top: (this.y + 23) + 'px', background: `url(${imagenFondo8})` },
        { pct: 46, left: (this.x - 48) + 'px', top: (this.y + 19) + 'px', background: `url(${imagenFondo9})` },
        { pct: 47, left: (this.x - 48) + 'px', top: (this.y + 14) + 'px', background: `url(${imagenFondo8})` },
        { pct: 48, left: (this.x - 48) + 'px', top: (this.y + 10) + 'px', background: `url(${imagenFondo9})` },
        { pct: 49, left: (this.x - 48) + 'px', top: (this.y + 5) + 'px', background: `url(${imagenFondo8})` },
        { pct: 50, left: (this.x - 48) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo10})` },
        { pct: 51, left: (this.x - 48) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo1})` },
        { pct: 55, left: (this.x - 48) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo1})` },
        { pct: 56, left: (this.x - 48) + 'px', top: (this.y + 5) + 'px', background: `url(${imagenFondo2})` },
        { pct: 57, left: (this.x - 48) + 'px', top: (this.y + 10) + 'px', background: `url(${imagenFondo3})` },
        { pct: 58, left: (this.x - 48) + 'px', top: (this.y + 14) + 'px', background: `url(${imagenFondo2})` },
        { pct: 59, left: (this.x - 48) + 'px', top: (this.y + 19) + 'px', background: `url(${imagenFondo3})` },
        { pct: 60, left: (this.x - 48) + 'px', top: (this.y + 23) + 'px', background: `url(${imagenFondo2})` },
        { pct: 61, left: (this.x - 48) + 'px', top: (this.y + 28) + 'px', background: `url(${imagenFondo3})` },
        { pct: 62, left: (this.x - 48) + 'px', top: (this.y + 32) + 'px', background: `url(${imagenFondo2})` },
        { pct: 63, left: (this.x - 48) + 'px', top: (this.y + 37) + 'px', background: `url(${imagenFondo3})` },
        { pct: 64, left: (this.x - 48) + 'px', top: (this.y + 41) + 'px', background: `url(${imagenFondo2})` },
        { pct: 65, left: (this.x - 48) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo1})` },
        { pct: 70, left: (this.x - 48) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo1})` },
        { pct: 71, left: (this.x - 41) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo4})` },
        { pct: 72, left: (this.x - 37) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo5})` },
        { pct: 73, left: (this.x - 32) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo4})` },
        { pct: 74, left: (this.x - 28) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo5})` },
        { pct: 75, left: (this.x - 23) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo4})` },
        { pct: 76, left: (this.x - 19) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo5})` },
        { pct: 77, left: (this.x - 14) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo4})` },
        { pct: 78, left: (this.x - 10) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo5})` },
        { pct: 79, left: (this.x - 5) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo4})` },
        { pct: 80, left: (this.x) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo5})` },
        { pct: 81, left: (this.x) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo10})` },
        { pct: 85, left: (this.x) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo10})` },
        { pct: 86, left: (this.x) + 'px', top: (this.y + 41) + 'px', background: `url(${imagenFondo8})` },
        { pct: 87, left: (this.x) + 'px', top: (this.y + 37) + 'px', background: `url(${imagenFondo9})` },
        { pct: 88, left: (this.x) + 'px', top: (this.y + 32) + 'px', background: `url(${imagenFondo8})` },
        { pct: 89, left: (this.x) + 'px', top: (this.y + 28) + 'px', background: `url(${imagenFondo9})` },
        { pct: 90, left: (this.x) + 'px', top: (this.y + 23) + 'px', background: `url(${imagenFondo8})` },
        { pct: 91, left: (this.x) + 'px', top: (this.y + 19) + 'px', background: `url(${imagenFondo9})` },
        { pct: 92, left: (this.x) + 'px', top: (this.y + 14) + 'px', background: `url(${imagenFondo8})` },
        { pct: 93, left: (this.x) + 'px', top: (this.y + 10) + 'px', background: `url(${imagenFondo9})` },
        { pct: 94, left: (this.x) + 'px', top: (this.y + 5) + 'px', background: `url(${imagenFondo8})` },
        { pct: 95, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo10})` },
        { pct: 97, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo10})` }
    ];

    let frameIndex = 0;
    const totalDuration = 30000;
    const frameDuration = totalDuration / 100;

    function updateStyle() {
        const keyframe = keyframes[frameIndex];
        elem.style.left = keyframe.left;
        elem.style.top = keyframe.top;
        elem.style.backgroundImage = keyframe.background;

        frameIndex = (frameIndex + 1) % keyframes.length;

        const nextFrame = keyframes[frameIndex];
        const duration = (nextFrame.pct - keyframe.pct) * frameDuration;
        setTimeout(updateStyle, duration);
    }

    updateStyle();
};


Rectangulo.prototype.animacionEnemigoTresMapaDos = function (imagenFondo1, imagenFondo2, imagenFondo3, imagenFondo4, imagenFondo5, imagenFondo6, imagenFondo7, imagenFondo8, imagenFondo9, imagenFondo10) {
    const elem = document.getElementById(this.idHTML);
    if (!elem) {
        throw ("EL ID " + this.idHTML + " NO EXISTE");
    }

    elem.style.position = "absolute";
    elem.style.left = this.x + 'px';
    elem.style.top = this.y + 'px';
    elem.style.width = this.ancho + 'px';
    elem.style.height = this.alto + 'px';
    elem.style.zIndex = "5";
    elem.style.transition = "left 0.2s ease-in-out, top 0.2s ease-in-out";

    const keyframes = [
        { pct: 0, left: (this.x) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo1})` },
        { pct: 10, left: (this.x) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo1})` },
        { pct: 11, left: (this.x - 14) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 12, left: (this.x - 28) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },
        { pct: 13, left: (this.x - 42) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 14, left: (this.x - 56) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },
        { pct: 15, left: (this.x - 70) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 16, left: (this.x - 84) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },
        { pct: 17, left: (this.x - 98) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 18, left: (this.x - 112) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },
        { pct: 19, left: (this.x - 126) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 20, left: (this.x - 140) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },
        { pct: 21, left: (this.x - 154) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 22, left: (this.x - 169) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },
        { pct: 23, left: (this.x - 183) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 24, left: (this.x - 198) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },
        { pct: 25, left: (this.x - 212) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 26, left: (this.x - 226) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },
        { pct: 27, left: (this.x - 241) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 28, left: (this.x - 255) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },
        { pct: 29, left: (this.x - 270) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },       
        { pct: 30, left: (this.x - 288) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },
        { pct: 31, left: (this.x - 288) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo1})` },
        { pct: 40, left: (this.x - 288) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo1})` },
        { pct: 41, left: (this.x - 268) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 42, left: (this.x - 248) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 43, left: (this.x - 228) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 44, left: (this.x - 207) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 45, left: (this.x - 187) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 46, left: (this.x - 167) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 47, left: (this.x - 146) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 48, left: (this.x - 126) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 49, left: (this.x - 106) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 50, left: (this.x - 98) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 51, left: (this.x - 98) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo10})` },
        { pct: 60, left: (this.x - 98) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo10})` },
        { pct: 61, left: (this.x - 98) + 'px', top: (this.y - 24) + 'px', background: `url(${imagenFondo8})` },
        { pct: 62, left: (this.x - 98) + 'px', top: (this.y - 38) + 'px', background: `url(${imagenFondo9})` },
        { pct: 63, left: (this.x - 98) + 'px', top: (this.y - 52) + 'px', background: `url(${imagenFondo8})` },
        { pct: 64, left: (this.x - 98) + 'px', top: (this.y - 66) + 'px', background: `url(${imagenFondo9})` },
        { pct: 65, left: (this.x - 98) + 'px', top: (this.y - 80) + 'px', background: `url(${imagenFondo8})` },
        { pct: 66, left: (this.x - 98) + 'px', top: (this.y - 94) + 'px', background: `url(${imagenFondo9})` },
        { pct: 67, left: (this.x - 98) + 'px', top: (this.y - 108) + 'px', background: `url(${imagenFondo8})` },
        { pct: 68, left: (this.x - 98) + 'px', top: (this.y - 123) + 'px', background: `url(${imagenFondo9})` },
        { pct: 69, left: (this.x - 98) + 'px', top: (this.y - 138) + 'px', background: `url(${imagenFondo8})` },
        { pct: 70, left: (this.x - 98) + 'px', top: (this.y - 154) + 'px', background: `url(${imagenFondo9})` },
        { pct: 71, left: (this.x - 98) + 'px', top: (this.y - 154) + 'px', background: `url(${imagenFondo10})` },
        { pct: 75, left: (this.x - 98) + 'px', top: (this.y - 154) + 'px', background: `url(${imagenFondo1})` },
        { pct: 80, left: (this.x - 98) + 'px', top: (this.y - 154) + 'px', background: `url(${imagenFondo1})` },
        { pct: 81, left: (this.x - 98) + 'px', top: (this.y - 138) + 'px', background: `url(${imagenFondo2})` },
        { pct: 82, left: (this.x - 98) + 'px', top: (this.y - 123) + 'px', background: `url(${imagenFondo3})` },
        { pct: 83, left: (this.x - 98) + 'px', top: (this.y - 108) + 'px', background: `url(${imagenFondo2})` },
        { pct: 84, left: (this.x - 98) + 'px', top: (this.y - 94) + 'px', background: `url(${imagenFondo3})` },
        { pct: 85, left: (this.x - 98) + 'px', top: (this.y - 80) + 'px', background: `url(${imagenFondo2})` },
        { pct: 86, left: (this.x - 98) + 'px', top: (this.y - 66) + 'px', background: `url(${imagenFondo3})` },
        { pct: 87, left: (this.x - 98) + 'px', top: (this.y - 52) + 'px', background: `url(${imagenFondo2})` },
        { pct: 88, left: (this.x - 98) + 'px', top: (this.y - 38) + 'px', background: `url(${imagenFondo3})` },
        { pct: 89, left: (this.x - 98) + 'px', top: (this.y - 24) + 'px', background: `url(${imagenFondo2})` },
        { pct: 90, left: (this.x - 98) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo3})` },
        { pct: 91, left: (this.x - 98) + 'px', top: (this.y  - 10) + 'px', background: `url(${imagenFondo1})` },
        { pct: 100, left: (this.x - 98) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo1})` },
        { pct: 101, left: (this.x - 90) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 102, left: (this.x - 81) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 103, left: (this.x - 72) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 104, left: (this.x - 63) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 105, left: (this.x - 54) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 106, left: (this.x - 45) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 107, left: (this.x - 36) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 108, left: (this.x - 27) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 109, left: (this.x - 18) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 110, left: (this.x - 9) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 111, left: (this.x) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` }
    ];

    let frameIndex = 0;
    const totalDuration = 40000;
    const frameDuration = totalDuration / 100;

    function updateStyle() {
        const keyframe = keyframes[frameIndex];
        elem.style.left = keyframe.left;
        elem.style.top = keyframe.top;
        elem.style.backgroundImage = keyframe.background;

        frameIndex = (frameIndex + 1) % keyframes.length;

        const nextFrame = keyframes[frameIndex];
        const duration = (nextFrame.pct - keyframe.pct) * frameDuration;
        setTimeout(updateStyle, duration);
    }

    updateStyle();
};


Rectangulo.prototype.animacionEnemigoCuatroMapaDos = function (imagenFondo1, imagenFondo2, imagenFondo3, imagenFondo4, imagenFondo5, imagenFondo6, imagenFondo7, imagenFondo8, imagenFondo9, imagenFondo10) {
    const elem = document.getElementById(this.idHTML);
    if (!elem) {
        throw ("EL ID " + this.idHTML + " NO EXISTE");
    }

    elem.style.position = "absolute";
    elem.style.left = this.x + 'px';
    elem.style.top = this.y + 'px';
    elem.style.width = this.ancho + 'px';
    elem.style.height = this.alto + 'px';
    elem.style.zIndex = "5";
    elem.style.transition = "left 0.2s ease-in-out, top 0.2s ease-in-out";

    const keyframes = [
        { pct: 0, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo1})` },
        { pct: 10, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo1})` },
        { pct: 11, left: (this.x - 24) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo6})` },
        { pct: 12, left: (this.x - 48) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo7})` },
        { pct: 13, left: (this.x - 72) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo6})` },
        { pct: 14, left: (this.x - 96) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo7})` },
        { pct: 15, left: (this.x - 120) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo6})` },
        { pct: 16, left: (this.x - 144) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo7})` },
        { pct: 17, left: (this.x - 168) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo6})` },
        { pct: 18, left: (this.x - 192) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo7})` },
        { pct: 19, left: (this.x - 216) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo6})` },
        { pct: 20, left: (this.x - 240) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo7})` },
        { pct: 21, left: (this.x - 240) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo10})` },
        { pct: 30, left: (this.x - 240) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo10})` },
        { pct: 31, left: (this.x - 240) + 'px', top: (this.y - 19) + 'px', background: `url(${imagenFondo8})` },
        { pct: 32, left: (this.x - 240) + 'px', top: (this.y - 38) + 'px', background: `url(${imagenFondo9})` },
        { pct: 33, left: (this.x - 240) + 'px', top: (this.y - 57) + 'px', background: `url(${imagenFondo8})` },
        { pct: 34, left: (this.x - 240) + 'px', top: (this.y - 76) + 'px', background: `url(${imagenFondo9})` },
        { pct: 35, left: (this.x - 240) + 'px', top: (this.y - 96) + 'px', background: `url(${imagenFondo8})` },
        { pct: 36, left: (this.x - 240) + 'px', top: (this.y - 96) + 'px', background: `url(${imagenFondo10})` },
        { pct: 45, left: (this.x - 240) + 'px', top: (this.y - 96) + 'px', background: `url(${imagenFondo10})` },       
        { pct: 46, left: (this.x - 216) + 'px', top: (this.y - 96) + 'px', background: `url(${imagenFondo4})` },
        { pct: 47, left: (this.x - 192) + 'px', top: (this.y - 96) + 'px', background: `url(${imagenFondo5})` },
        { pct: 48, left: (this.x - 168) + 'px', top: (this.y - 96) + 'px', background: `url(${imagenFondo4})` },
        { pct: 49, left: (this.x - 144) + 'px', top: (this.y - 96) + 'px', background: `url(${imagenFondo5})` },
        { pct: 50, left: (this.x - 120) + 'px', top: (this.y - 96) + 'px', background: `url(${imagenFondo4})` },
        { pct: 51, left: (this.x - 96) + 'px', top: (this.y - 96) + 'px', background: `url(${imagenFondo5})` },
        { pct: 52, left: (this.x - 72) + 'px', top: (this.y - 96) + 'px', background: `url(${imagenFondo4})` },
        { pct: 53, left: (this.x - 48) + 'px', top: (this.y - 96) + 'px', background: `url(${imagenFondo5})` },
        { pct: 54, left: (this.x - 24) + 'px', top: (this.y - 96) + 'px', background: `url(${imagenFondo4})` },
        { pct: 55, left: (this.x) + 'px', top: (this.y - 96) + 'px', background: `url(${imagenFondo5})` },
        { pct: 56, left: (this.x) + 'px', top: (this.y - 96) + 'px', background: `url(${imagenFondo1})` },
        { pct: 65, left: (this.x) + 'px', top: (this.y - 96) + 'px', background: `url(${imagenFondo1})` },
        { pct: 66, left: (this.x - 24) + 'px', top: (this.y - 96) + 'px', background: `url(${imagenFondo6})` },
        { pct: 67, left: (this.x - 48) + 'px', top: (this.y - 96) + 'px', background: `url(${imagenFondo7})` },
        { pct: 68, left: (this.x - 72) + 'px', top: (this.y - 96) + 'px', background: `url(${imagenFondo6})` },
        { pct: 69, left: (this.x - 96) + 'px', top: (this.y - 96) + 'px', background: `url(${imagenFondo7})` },
        { pct: 70, left: (this.x - 120) + 'px', top: (this.y - 96) + 'px', background: `url(${imagenFondo6})` },
        { pct: 71, left: (this.x - 144) + 'px', top: (this.y - 96) + 'px', background: `url(${imagenFondo7})` },
        { pct: 72, left: (this.x - 168) + 'px', top: (this.y - 96) + 'px', background: `url(${imagenFondo6})` },
        { pct: 73, left: (this.x - 192) + 'px', top: (this.y - 96) + 'px', background: `url(${imagenFondo7})` },
        { pct: 74, left: (this.x - 216) + 'px', top: (this.y - 96) + 'px', background: `url(${imagenFondo6})` },
        { pct: 75, left: (this.x - 240) + 'px', top: (this.y - 96) + 'px', background: `url(${imagenFondo7})` },
        { pct: 76, left: (this.x - 240) + 'px', top: (this.y - 96) + 'px', background: `url(${imagenFondo1})` },
        { pct: 85, left: (this.x - 240) + 'px', top: (this.y - 96) + 'px', background: `url(${imagenFondo1})` },
        { pct: 86, left: (this.x - 240) + 'px', top: (this.y - 76) + 'px', background: `url(${imagenFondo2})` },
        { pct: 87, left: (this.x - 240) + 'px', top: (this.y - 57) + 'px', background: `url(${imagenFondo3})` },
        { pct: 88, left: (this.x - 240) + 'px', top: (this.y - 38) + 'px', background: `url(${imagenFondo2})` },
        { pct: 89, left: (this.x - 240) + 'px', top: (this.y - 19) + 'px', background: `url(${imagenFondo3})` },
        { pct: 90, left: (this.x - 240) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo2})` },
        { pct: 91, left: (this.x - 240) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo1})` },
        { pct: 100, left: (this.x - 240) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo1})` },
        { pct: 101, left: (this.x - 216) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo4})` },
        { pct: 102, left: (this.x - 192) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo5})` },
        { pct: 103, left: (this.x - 168) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo4})` },
        { pct: 104, left: (this.x - 144) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo5})` },
        { pct: 105, left: (this.x - 120) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo4})` },
        { pct: 106, left: (this.x - 96) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo5})` },
        { pct: 107, left: (this.x - 72) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo4})` },
        { pct: 108, left: (this.x - 48) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo5})` },
        { pct: 109, left: (this.x - 24) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo4})` },
        { pct: 110, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo5})` }
    ];

    let frameIndex = 0;
    const totalDuration = 40000;
    const frameDuration = totalDuration / 100;

    function updateStyle() {
        const keyframe = keyframes[frameIndex];
        elem.style.left = keyframe.left;
        elem.style.top = keyframe.top;
        elem.style.backgroundImage = keyframe.background;

        frameIndex = (frameIndex + 1) % keyframes.length;

        const nextFrame = keyframes[frameIndex];
        const duration = (nextFrame.pct - keyframe.pct) * frameDuration;
        setTimeout(updateStyle, duration);
    }

    updateStyle();
};


Rectangulo.prototype.animacionEnemigoCincoMapaDos = function (imagenFondo1, imagenFondo2, imagenFondo3, imagenFondo4, imagenFondo5, imagenFondo6, imagenFondo7, imagenFondo8, imagenFondo9, imagenFondo10) {
    const elem = document.getElementById(this.idHTML);
    if (!elem) {
        throw ("EL ID " + this.idHTML + " NO EXISTE");
    }

    elem.style.position = "absolute";
    elem.style.left = this.x + 'px';
    elem.style.top = this.y + 'px';
    elem.style.width = this.ancho + 'px';
    elem.style.height = this.alto + 'px';
    elem.style.zIndex = "5";
    elem.style.transition = "left 0.2s ease-in-out, top 0.2s ease-in-out";

    const keyframes = [
        { pct: 0, left: (this.x) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo1})` },
        { pct: 10, left: (this.x) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo1})` },
        { pct: 11, left: (this.x - 9) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 12, left: (this.x - 18) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },
        { pct: 13, left: (this.x - 25) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 14, left: (this.x - 35) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },
        { pct: 15, left: (this.x - 45) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 16, left: (this.x - 55) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },
        { pct: 17, left: (this.x - 65) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 18, left: (this.x - 75) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },
        { pct: 19, left: (this.x - 85) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 20, left: (this.x - 95) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },
        { pct: 21, left: (this.x - 105) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 22, left: (this.x - 115) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },
        { pct: 23, left: (this.x - 125) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 24, left: (this.x - 135) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },
        { pct: 25, left: (this.x - 145) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 26, left: (this.x - 155) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },
        { pct: 27, left: (this.x - 165) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 28, left: (this.x - 175) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },
        { pct: 29, left: (this.x - 185) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },       
        { pct: 30, left: (this.x - 192) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },
        { pct: 31, left: (this.x - 192) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo10})` },
        { pct: 40, left: (this.x - 192) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo10})` },
        { pct: 41, left: (this.x - 192) + 'px', top: (this.y - 19) + 'px', background: `url(${imagenFondo8})` },
        { pct: 42, left: (this.x - 192) + 'px', top: (this.y - 28) + 'px', background: `url(${imagenFondo9})` },
        { pct: 43, left: (this.x - 192) + 'px', top: (this.y - 35) + 'px', background: `url(${imagenFondo8})` },
        { pct: 44, left: (this.x - 192) + 'px', top: (this.y - 45) + 'px', background: `url(${imagenFondo9})` },
        { pct: 45, left: (this.x - 192) + 'px', top: (this.y - 55) + 'px', background: `url(${imagenFondo8})` },
        { pct: 46, left: (this.x - 192) + 'px', top: (this.y - 65) + 'px', background: `url(${imagenFondo9})` },
        { pct: 47, left: (this.x - 192) + 'px', top: (this.y - 75) + 'px', background: `url(${imagenFondo8})` },
        { pct: 48, left: (this.x - 192) + 'px', top: (this.y - 85) + 'px', background: `url(${imagenFondo9})` },
        { pct: 49, left: (this.x - 192) + 'px', top: (this.y - 95) + 'px', background: `url(${imagenFondo8})` },
        { pct: 50, left: (this.x - 192) + 'px', top: (this.y - 105) + 'px', background: `url(${imagenFondo9})` },
        { pct: 51, left: (this.x - 192) + 'px', top: (this.y - 115) + 'px', background: `url(${imagenFondo8})` },
        { pct: 52, left: (this.x - 192) + 'px', top: (this.y - 125) + 'px', background: `url(${imagenFondo9})` },
        { pct: 53, left: (this.x - 192) + 'px', top: (this.y - 135) + 'px', background: `url(${imagenFondo8})` },
        { pct: 54, left: (this.x - 192) + 'px', top: (this.y - 145) + 'px', background: `url(${imagenFondo9})` },
        { pct: 55, left: (this.x - 192) + 'px', top: (this.y - 155) + 'px', background: `url(${imagenFondo8})` },
        { pct: 56, left: (this.x - 192) + 'px', top: (this.y - 165) + 'px', background: `url(${imagenFondo9})` },
        { pct: 57, left: (this.x - 192) + 'px', top: (this.y - 175) + 'px', background: `url(${imagenFondo8})` },
        { pct: 58, left: (this.x - 192) + 'px', top: (this.y - 185) + 'px', background: `url(${imagenFondo9})` },
        { pct: 59, left: (this.x - 192) + 'px', top: (this.y - 195) + 'px', background: `url(${imagenFondo8})` },
        { pct: 60, left: (this.x - 192) + 'px', top: (this.y - 202) + 'px', background: `url(${imagenFondo9})` },
        { pct: 61, left: (this.x - 192) + 'px', top: (this.y - 202) + 'px', background: `url(${imagenFondo10})` },
        { pct: 63, left: (this.x - 192) + 'px', top: (this.y - 202) + 'px', background: `url(${imagenFondo1})` },
        { pct: 70, left: (this.x - 192) + 'px', top: (this.y - 202) + 'px', background: `url(${imagenFondo1})` },
        { pct: 71, left: (this.x - 192) + 'px', top: (this.y - 195) + 'px', background: `url(${imagenFondo2})` },
        { pct: 72, left: (this.x - 192) + 'px', top: (this.y - 185) + 'px', background: `url(${imagenFondo3})` },
        { pct: 73, left: (this.x - 192) + 'px', top: (this.y - 175) + 'px', background: `url(${imagenFondo2})` },
        { pct: 74, left: (this.x - 192) + 'px', top: (this.y - 165) + 'px', background: `url(${imagenFondo3})` },
        { pct: 75, left: (this.x - 192) + 'px', top: (this.y - 155) + 'px', background: `url(${imagenFondo2})` },
        { pct: 76, left: (this.x - 192) + 'px', top: (this.y - 145) + 'px', background: `url(${imagenFondo3})` },
        { pct: 77, left: (this.x - 192) + 'px', top: (this.y - 135) + 'px', background: `url(${imagenFondo2})` },
        { pct: 78, left: (this.x - 192) + 'px', top: (this.y - 125) + 'px', background: `url(${imagenFondo3})` },
        { pct: 79, left: (this.x - 192) + 'px', top: (this.y - 115) + 'px', background: `url(${imagenFondo2})` },
        { pct: 80, left: (this.x - 192) + 'px', top: (this.y - 105) + 'px', background: `url(${imagenFondo3})` },
        { pct: 81, left: (this.x - 192) + 'px', top: (this.y - 95) + 'px', background: `url(${imagenFondo2})` },
        { pct: 82, left: (this.x - 192) + 'px', top: (this.y - 85) + 'px', background: `url(${imagenFondo3})` },
        { pct: 83, left: (this.x - 192) + 'px', top: (this.y - 75) + 'px', background: `url(${imagenFondo2})` },
        { pct: 84, left: (this.x - 192) + 'px', top: (this.y - 65) + 'px', background: `url(${imagenFondo3})` },
        { pct: 85, left: (this.x - 192) + 'px', top: (this.y - 55) + 'px', background: `url(${imagenFondo2})` },
        { pct: 86, left: (this.x - 192) + 'px', top: (this.y - 45) + 'px', background: `url(${imagenFondo3})` },
        { pct: 87, left: (this.x - 192) + 'px', top: (this.y - 35) + 'px', background: `url(${imagenFondo2})` },
        { pct: 88, left: (this.x - 192) + 'px', top: (this.y - 28) + 'px', background: `url(${imagenFondo3})` },
        { pct: 89, left: (this.x - 192) + 'px', top: (this.y - 19) + 'px', background: `url(${imagenFondo2})` },
        { pct: 90, left: (this.x - 192) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo3})` },
        { pct: 91, left: (this.x - 192) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo1})` },
        { pct: 100, left: (this.x - 192) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo1})` },
        { pct: 101, left: (this.x - 185) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 102, left: (this.x - 175) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 103, left: (this.x - 165) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 104, left: (this.x - 155) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 105, left: (this.x - 145) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 106, left: (this.x - 135) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 107, left: (this.x - 125) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 108, left: (this.x - 115) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 109, left: (this.x - 105) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 110, left: (this.x - 95) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 111, left: (this.x - 85) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 112, left: (this.x - 75) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 113, left: (this.x - 65) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 114, left: (this.x - 55) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 115, left: (this.x - 45) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 116, left: (this.x - 35) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 117, left: (this.x - 25) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 118, left: (this.x -18) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 119, left: (this.x - 9) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 120, left: (this.x) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` }
    ];

    let frameIndex = 0;
    const totalDuration = 40000;
    const frameDuration = totalDuration / 100;

    function updateStyle() {
        const keyframe = keyframes[frameIndex];
        elem.style.left = keyframe.left;
        elem.style.top = keyframe.top;
        elem.style.backgroundImage = keyframe.background;

        frameIndex = (frameIndex + 1) % keyframes.length;

        const nextFrame = keyframes[frameIndex];
        const duration = (nextFrame.pct - keyframe.pct) * frameDuration;
        setTimeout(updateStyle, duration);
    }

    updateStyle();
};


Rectangulo.prototype.animacionEnemigoSeisMapaDos = function (imagenFondo1, imagenFondo2, imagenFondo3, imagenFondo4, imagenFondo5, imagenFondo6, imagenFondo7, imagenFondo8, imagenFondo9, imagenFondo10) {
    const elem = document.getElementById(this.idHTML);
    if (!elem) {
        throw ("EL ID " + this.idHTML + " NO EXISTE");
    }

    elem.style.position = "absolute";
    elem.style.left = this.x + 'px';
    elem.style.top = this.y + 'px';
    elem.style.width = this.ancho + 'px';
    elem.style.height = this.alto + 'px';
    elem.style.zIndex = "5";
    elem.style.transition = "left 0.2s ease-in-out, top 0.2s ease-in-out";

    const keyframes = [
        { pct: 0, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo1})` },
        { pct: 10, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo1})` },
        { pct: 11, left: (this.x + 9) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo4})` },
        { pct: 12, left: (this.x + 18) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo5})` },
        { pct: 13, left: (this.x + 27) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo4})` },
        { pct: 14, left: (this.x + 36) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo5})` },
        { pct: 15, left: (this.x + 45) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo4})` },
        { pct: 16, left: (this.x + 54) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo5})` },
        { pct: 17, left: (this.x + 63) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo4})` },
        { pct: 18, left: (this.x + 72) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo5})` },
        { pct: 19, left: (this.x + 81) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo4})` },
        { pct: 20, left: (this.x + 92) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo5})` },
        { pct: 21, left: (this.x + 92) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo1})` },
        { pct: 30, left: (this.x + 92) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo1})` },
        { pct: 31, left: (this.x + 92) + 'px', top: (this.y + 9) + 'px', background: `url(${imagenFondo2})` },
        { pct: 32, left: (this.x + 92) + 'px', top: (this.y + 19) + 'px', background: `url(${imagenFondo3})` },
        { pct: 33, left: (this.x + 92) + 'px', top: (this.y + 28) + 'px', background: `url(${imagenFondo2})` },
        { pct: 34, left: (this.x + 92) + 'px', top: (this.y + 37) + 'px', background: `url(${imagenFondo3})` },
        { pct: 35, left: (this.x + 92) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo2})` },
        { pct: 36, left: (this.x + 92) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo1})` },
        { pct: 45, left: (this.x + 92) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo1})` },
        { pct: 46, left: (this.x + 101) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo4})` },
        { pct: 47, left: (this.x + 111) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo5})` },       
        { pct: 48, left: (this.x + 120) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo4})` },
        { pct: 49, left: (this.x + 130) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo5})` },
        { pct: 50, left: (this.x + 140) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo4})` },
        { pct: 51, left: (this.x + 150) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo5})` },
        { pct: 52, left: (this.x + 160) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo4})` },
        { pct: 53, left: (this.x + 171) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo5})` },
        { pct: 54, left: (this.x + 181) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo4})` },
        { pct: 55, left: (this.x + 192) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo5})` },
        { pct: 56, left: (this.x + 192) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo1})` },
        { pct: 65, left: (this.x + 192) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo1})` },
        { pct: 66, left: (this.x + 181) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo6})` },
        { pct: 67, left: (this.x + 171) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo7})` },
        { pct: 68, left: (this.x + 160) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo6})` },
        { pct: 69, left: (this.x + 150) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo7})` },
        { pct: 70, left: (this.x + 140) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo6})` },
        { pct: 71, left: (this.x + 130) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo7})` },
        { pct: 72, left: (this.x + 120) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo6})` },
        { pct: 73, left: (this.x + 111) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo7})` },
        { pct: 74, left: (this.x + 101) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo6})` },
        { pct: 75, left: (this.x + 92) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo7})` },
        { pct: 76, left: (this.x + 92) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo10})` },
        { pct: 85, left: (this.x + 92) + 'px', top: (this.y + 48) + 'px', background: `url(${imagenFondo10})` },
        { pct: 86, left: (this.x + 92) + 'px', top: (this.y + 37) + 'px', background: `url(${imagenFondo8})` },
        { pct: 87, left: (this.x + 92) + 'px', top: (this.y + 28) + 'px', background: `url(${imagenFondo9})` },
        { pct: 88, left: (this.x + 92) + 'px', top: (this.y + 19) + 'px', background: `url(${imagenFondo8})` },
        { pct: 89, left: (this.x + 92) + 'px', top: (this.y + 9) + 'px', background: `url(${imagenFondo9})` },
        { pct: 90, left: (this.x + 92) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo8})` },
        { pct: 91, left: (this.x + 92) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo10})` },
        { pct: 100, left: (this.x + 92) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo10})` },
        { pct: 101, left: (this.x + 81) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo6})` },
        { pct: 102, left: (this.x + 72) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo7})` },
        { pct: 103, left: (this.x + 63) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo6})` },
        { pct: 104, left: (this.x + 54) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo7})` },
        { pct: 105, left: (this.x + 45) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo6})` },
        { pct: 106, left: (this.x + 36) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo7})` },
        { pct: 107, left: (this.x + 27) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo6})` },
        { pct: 108, left: (this.x + 18) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo7})` },
        { pct: 109, left: (this.x + 9) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo6})` },
        { pct: 110, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo7})` }
    ];

    let frameIndex = 0;
    const totalDuration = 40000;
    const frameDuration = totalDuration / 100;

    function updateStyle() {
        const keyframe = keyframes[frameIndex];
        elem.style.left = keyframe.left;
        elem.style.top = keyframe.top;
        elem.style.backgroundImage = keyframe.background;

        frameIndex = (frameIndex + 1) % keyframes.length;

        const nextFrame = keyframes[frameIndex];
        const duration = (nextFrame.pct - keyframe.pct) * frameDuration;
        setTimeout(updateStyle, duration);
    }

    updateStyle();
};


Rectangulo.prototype.animacionEnemigoSieteMapaDos = function (imagenFondo1, imagenFondo2, imagenFondo3, imagenFondo4, imagenFondo5, imagenFondo6, imagenFondo7, imagenFondo8, imagenFondo9, imagenFondo10) {
    const elem = document.getElementById(this.idHTML);
    if (!elem) {
        throw ("EL ID " + this.idHTML + " NO EXISTE");
    }

    elem.style.position = "absolute";
    elem.style.left = this.x + 'px';
    elem.style.top = this.y + 'px';
    elem.style.width = this.ancho + 'px';
    elem.style.height = this.alto + 'px';
    elem.style.zIndex = "5";
    elem.style.transition = "left 0.2s ease-in-out, top 0.2s ease-in-out";

    const keyframes = [
        { pct: 0, left: (this.x) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo1})` },
        { pct: 10, left: (this.x) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo1})` },
        { pct: 11, left: (this.x + 9) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 12, left: (this.x + 18) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 13, left: (this.x + 27) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 14, left: (this.x + 36) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 15, left: (this.x + 45) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 16, left: (this.x + 54) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 17, left: (this.x + 63) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 18, left: (this.x + 72) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 19, left: (this.x + 81) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 20, left: (this.x + 92) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 21, left: (this.x + 101) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 22, left: (this.x + 111) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 23, left: (this.x + 120) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 24, left: (this.x + 130) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 25, left: (this.x + 140) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 26, left: (this.x + 150) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 27, left: (this.x + 160) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 28, left: (this.x + 171) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 29, left: (this.x + 181) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 30, left: (this.x + 192) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 31, left: (this.x + 192) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo1})` },
        { pct: 40, left: (this.x + 192) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo1})` },
        { pct: 41, left: (this.x + 181) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 42, left: (this.x + 171) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },
        { pct: 43, left: (this.x + 160) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 44, left: (this.x + 150) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },
        { pct: 45, left: (this.x + 140) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 46, left: (this.x + 130) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },
        { pct: 47, left: (this.x + 120) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 48, left: (this.x + 111) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },       
        { pct: 49, left: (this.x + 101) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 50, left: (this.x + 92) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },
        { pct: 51, left: (this.x + 92) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo10})` },
        { pct: 60, left: (this.x + 92) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo10})` },
        { pct: 61, left: (this.x + 92) + 'px', top: (this.y - 19) + 'px', background: `url(${imagenFondo8})` },
        { pct: 62, left: (this.x + 92) + 'px', top: (this.y - 28) + 'px', background: `url(${imagenFondo9})` },
        { pct: 63, left: (this.x + 92) + 'px', top: (this.y - 37) + 'px', background: `url(${imagenFondo8})` },
        { pct: 64, left: (this.x + 92) + 'px', top: (this.y - 46) + 'px', background: `url(${imagenFondo9})` },
        { pct: 65, left: (this.x + 92) + 'px', top: (this.y - 55) + 'px', background: `url(${imagenFondo8})` },
        { pct: 66, left: (this.x + 92) + 'px', top: (this.y - 64) + 'px', background: `url(${imagenFondo9})` },
        { pct: 67, left: (this.x + 92) + 'px', top: (this.y - 73) + 'px', background: `url(${imagenFondo8})` },
        { pct: 68, left: (this.x + 92) + 'px', top: (this.y - 82) + 'px', background: `url(${imagenFondo9})` },
        { pct: 69, left: (this.x + 92) + 'px', top: (this.y - 91) + 'px', background: `url(${imagenFondo8})` },
        { pct: 70, left: (this.x + 92) + 'px', top: (this.y - 102) + 'px', background: `url(${imagenFondo9})` },
        { pct: 71, left: (this.x + 92) + 'px', top: (this.y - 111) + 'px', background: `url(${imagenFondo8})` },
        { pct: 72, left: (this.x + 92) + 'px', top: (this.y - 121) + 'px', background: `url(${imagenFondo9})` },
        { pct: 73, left: (this.x + 92) + 'px', top: (this.y - 130) + 'px', background: `url(${imagenFondo8})` },
        { pct: 74, left: (this.x + 92) + 'px', top: (this.y - 140) + 'px', background: `url(${imagenFondo9})` },
        { pct: 75, left: (this.x + 92) + 'px', top: (this.y - 150) + 'px', background: `url(${imagenFondo8})` },
        { pct: 76, left: (this.x + 92) + 'px', top: (this.y - 160) + 'px', background: `url(${imagenFondo9})` },
        { pct: 77, left: (this.x + 92) + 'px', top: (this.y - 170) + 'px', background: `url(${imagenFondo8})` },
        { pct: 78, left: (this.x + 92) + 'px', top: (this.y - 181) + 'px', background: `url(${imagenFondo9})` },
        { pct: 79, left: (this.x + 92) + 'px', top: (this.y - 191) + 'px', background: `url(${imagenFondo8})` },
        { pct: 80, left: (this.x + 92) + 'px', top: (this.y - 202) + 'px', background: `url(${imagenFondo9})` },
        { pct: 81, left: (this.x + 92) + 'px', top: (this.y - 202) + 'px', background: `url(${imagenFondo10})` },
        { pct: 84, left: (this.x + 92) + 'px', top: (this.y - 202) + 'px', background: `url(${imagenFondo1})` },
        { pct: 90, left: (this.x + 92) + 'px', top: (this.y - 202) + 'px', background: `url(${imagenFondo1})` },
        { pct: 91, left: (this.x + 92) + 'px', top: (this.y - 191) + 'px', background: `url(${imagenFondo2})` },
        { pct: 92, left: (this.x + 92) + 'px', top: (this.y - 181) + 'px', background: `url(${imagenFondo3})` },
        { pct: 93, left: (this.x + 92) + 'px', top: (this.y - 170) + 'px', background: `url(${imagenFondo2})` },
        { pct: 94, left: (this.x + 92) + 'px', top: (this.y - 160) + 'px', background: `url(${imagenFondo3})` },
        { pct: 95, left: (this.x + 92) + 'px', top: (this.y - 150) + 'px', background: `url(${imagenFondo2})` },
        { pct: 96, left: (this.x + 92) + 'px', top: (this.y - 140) + 'px', background: `url(${imagenFondo3})` },
        { pct: 97, left: (this.x + 92) + 'px', top: (this.y - 130) + 'px', background: `url(${imagenFondo2})` },
        { pct: 98, left: (this.x + 92) + 'px', top: (this.y - 121) + 'px', background: `url(${imagenFondo3})` },
        { pct: 99, left: (this.x + 92) + 'px', top: (this.y - 111) + 'px', background: `url(${imagenFondo2})` },
        { pct: 100, left: (this.x + 92) + 'px', top: (this.y - 102) + 'px', background: `url(${imagenFondo3})` },
        { pct: 101, left: (this.x + 92) + 'px', top: (this.y - 91) + 'px', background: `url(${imagenFondo2})` },
        { pct: 102, left: (this.x + 92) + 'px', top: (this.y - 82) + 'px', background: `url(${imagenFondo3})` },
        { pct: 103, left: (this.x + 92) + 'px', top: (this.y - 73) + 'px', background: `url(${imagenFondo2})` },
        { pct: 104, left: (this.x + 92) + 'px', top: (this.y - 64) + 'px', background: `url(${imagenFondo3})` },
        { pct: 105, left: (this.x + 92) + 'px', top: (this.y - 55) + 'px', background: `url(${imagenFondo2})` },
        { pct: 106, left: (this.x + 92) + 'px', top: (this.y - 46) + 'px', background: `url(${imagenFondo3})` },
        { pct: 107, left: (this.x + 92) + 'px', top: (this.y - 37) + 'px', background: `url(${imagenFondo2})` },
        { pct: 108, left: (this.x + 92) + 'px', top: (this.y - 28) + 'px', background: `url(${imagenFondo3})` },
        { pct: 109, left: (this.x + 92) + 'px', top: (this.y -19) + 'px', background: `url(${imagenFondo2})` },
        { pct: 110, left: (this.x + 92) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo3})` },
        { pct: 111, left: (this.x + 92) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo1})` },
        { pct: 120, left: (this.x + 92) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo1})` },
        { pct: 121, left: (this.x + 81) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 122, left: (this.x + 72) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },
        { pct: 123, left: (this.x + 63) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 124, left: (this.x + 54) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },
        { pct: 125, left: (this.x + 45) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 126, left: (this.x + 36) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },
        { pct: 127, left: (this.x + 27) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 128, left: (this.x + 18) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` },
        { pct: 129, left: (this.x + 9) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo6})` },
        { pct: 130, left: (this.x) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo7})` }
    ];

    let frameIndex = 0;
    const totalDuration = 40000;
    const frameDuration = totalDuration / 100;

    function updateStyle() {
        const keyframe = keyframes[frameIndex];
        elem.style.left = keyframe.left;
        elem.style.top = keyframe.top;
        elem.style.backgroundImage = keyframe.background;

        frameIndex = (frameIndex + 1) % keyframes.length;

        const nextFrame = keyframes[frameIndex];
        const duration = (nextFrame.pct - keyframe.pct) * frameDuration;
        setTimeout(updateStyle, duration);
    }

    updateStyle();
};


Rectangulo.prototype.animacionEnemigoOchoMapaDos = function (imagenFondo1, imagenFondo2, imagenFondo3, imagenFondo4, imagenFondo5, imagenFondo6) {
    const elem = document.getElementById(this.idHTML);
    if (!elem) {
        throw ("EL ID " + this.idHTML + " NO EXISTE");
    }

    elem.style.position = "absolute";
    elem.style.left = this.x + 'px';
    elem.style.top = this.y + 'px';
    elem.style.width = this.ancho + 'px';
    elem.style.height = this.alto + 'px';
    elem.style.zIndex = "5";
    elem.style.transition = "left 0.2s ease-in-out, top 0.2s ease-in-out";

    const keyframes = [
        { pct: 0, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo1})` },
        { pct: 20, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo1})` },
        { pct: 21, left: (this.x) + 'px', top: (this.y + 6) + 'px', background: `url(${imagenFondo2})` },
        { pct: 22, left: (this.x) + 'px', top: (this.y + 12) + 'px', background: `url(${imagenFondo3})` },
        { pct: 23, left: (this.x) + 'px', top: (this.y + 18) + 'px', background: `url(${imagenFondo2})` },
        { pct: 24, left: (this.x) + 'px', top: (this.y + 24) + 'px', background: `url(${imagenFondo3})` },
        { pct: 25, left: (this.x) + 'px', top: (this.y + 30) + 'px', background: `url(${imagenFondo2})` },
        { pct: 26, left: (this.x) + 'px', top: (this.y + 37) + 'px', background: `url(${imagenFondo3})` },
        { pct: 27, left: (this.x) + 'px', top: (this.y + 43) + 'px', background: `url(${imagenFondo2})` },
        { pct: 28, left: (this.x) + 'px', top: (this.y + 49) + 'px', background: `url(${imagenFondo3})` },
        { pct: 29, left: (this.x) + 'px', top: (this.y + 55) + 'px', background: `url(${imagenFondo2})` },
        { pct: 30, left: (this.x) + 'px', top: (this.y + 61) + 'px', background: `url(${imagenFondo3})` },
        { pct: 31, left: (this.x) + 'px', top: (this.y + 68) + 'px', background: `url(${imagenFondo2})` },
        { pct: 32, left: (this.x) + 'px', top: (this.y + 74) + 'px', background: `url(${imagenFondo3})` },
        { pct: 33, left: (this.x) + 'px', top: (this.y + 80) + 'px', background: `url(${imagenFondo2})` },
        { pct: 34, left: (this.x) + 'px', top: (this.y + 86) + 'px', background: `url(${imagenFondo3})` },
        { pct: 35, left: (this.x) + 'px', top: (this.y + 92) + 'px', background: `url(${imagenFondo2})` },
        { pct: 36, left: (this.x) + 'px', top: (this.y + 98) + 'px', background: `url(${imagenFondo3})` },
        { pct: 37, left: (this.x) + 'px', top: (this.y + 104) + 'px', background: `url(${imagenFondo2})` },
        { pct: 38, left: (this.x) + 'px', top: (this.y + 110) + 'px', background: `url(${imagenFondo3})` },
        { pct: 39, left: (this.x) + 'px', top: (this.y + 116) + 'px', background: `url(${imagenFondo2})` },
        { pct: 40, left: (this.x) + 'px', top: (this.y + 122) + 'px', background: `url(${imagenFondo3})` },
        { pct: 41, left: (this.x) + 'px', top: (this.y + 128) + 'px', background: `url(${imagenFondo2})` },
        { pct: 42, left: (this.x) + 'px', top: (this.y + 134) + 'px', background: `url(${imagenFondo3})` },
        { pct: 43, left: (this.x) + 'px', top: (this.y + 140) + 'px', background: `url(${imagenFondo2})` },
        { pct: 44, left: (this.x) + 'px', top: (this.y + 146) + 'px', background: `url(${imagenFondo3})` },
        { pct: 45, left: (this.x) + 'px', top: (this.y + 152) + 'px', background: `url(${imagenFondo2})` },
        { pct: 46, left: (this.x) + 'px', top: (this.y + 158) + 'px', background: `url(${imagenFondo3})` },
        { pct: 47, left: (this.x) + 'px', top: (this.y + 166) + 'px', background: `url(${imagenFondo2})` },
        { pct: 48, left: (this.x) + 'px', top: (this.y + 175) + 'px', background: `url(${imagenFondo3})` },
        { pct: 49, left: (this.x) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo2})` },
        { pct: 50, left: (this.x) + 'px', top: (this.y + 192) + 'px', background: `url(${imagenFondo3})` },
        { pct: 51, left: (this.x) + 'px', top: (this.y + 192) + 'px', background: `url(${imagenFondo1})` },
        { pct: 54, left: (this.x) + 'px', top: (this.y + 192) + 'px', background: `url(${imagenFondo1})` },
        { pct: 55, left: (this.x) + 'px', top: (this.y + 192) + 'px', background: `url(${imagenFondo6})` },       
        { pct: 70, left: (this.x) + 'px', top: (this.y + 192) + 'px', background: `url(${imagenFondo6})` },
        { pct: 71, left: (this.x) + 'px', top: (this.y + 186) + 'px', background: `url(${imagenFondo4})` },
        { pct: 72, left: (this.x) + 'px', top: (this.y + 175) + 'px', background: `url(${imagenFondo5})` },
        { pct: 73, left: (this.x) + 'px', top: (this.y + 166) + 'px', background: `url(${imagenFondo4})` },
        { pct: 74, left: (this.x) + 'px', top: (this.y + 158) + 'px', background: `url(${imagenFondo5})` },
        { pct: 75, left: (this.x) + 'px', top: (this.y + 152) + 'px', background: `url(${imagenFondo4})` },
        { pct: 76, left: (this.x) + 'px', top: (this.y + 146) + 'px', background: `url(${imagenFondo5})` },
        { pct: 77, left: (this.x) + 'px', top: (this.y + 140) + 'px', background: `url(${imagenFondo4})` },
        { pct: 78, left: (this.x) + 'px', top: (this.y + 134) + 'px', background: `url(${imagenFondo5})` },
        { pct: 79, left: (this.x) + 'px', top: (this.y + 128) + 'px', background: `url(${imagenFondo4})` },
        { pct: 80, left: (this.x) + 'px', top: (this.y + 122) + 'px', background: `url(${imagenFondo5})` },
        { pct: 81, left: (this.x) + 'px', top: (this.y + 116) + 'px', background: `url(${imagenFondo4})` },
        { pct: 82, left: (this.x) + 'px', top: (this.y + 110) + 'px', background: `url(${imagenFondo5})` },
        { pct: 83, left: (this.x) + 'px', top: (this.y + 104) + 'px', background: `url(${imagenFondo4})` },
        { pct: 84, left: (this.x) + 'px', top: (this.y + 98) + 'px', background: `url(${imagenFondo5})` },
        { pct: 85, left: (this.x) + 'px', top: (this.y + 92) + 'px', background: `url(${imagenFondo4})` },
        { pct: 86, left: (this.x) + 'px', top: (this.y + 86) + 'px', background: `url(${imagenFondo5})` },
        { pct: 87, left: (this.x) + 'px', top: (this.y + 80) + 'px', background: `url(${imagenFondo4})` },
        { pct: 88, left: (this.x) + 'px', top: (this.y + 74) + 'px', background: `url(${imagenFondo5})` },
        { pct: 89, left: (this.x) + 'px', top: (this.y + 68) + 'px', background: `url(${imagenFondo4})` },
        { pct: 90, left: (this.x) + 'px', top: (this.y + 61) + 'px', background: `url(${imagenFondo5})` },
        { pct: 91, left: (this.x) + 'px', top: (this.y + 55) + 'px', background: `url(${imagenFondo4})` },
        { pct: 92, left: (this.x) + 'px', top: (this.y + 49) + 'px', background: `url(${imagenFondo5})` },
        { pct: 93, left: (this.x) + 'px', top: (this.y + 43) + 'px', background: `url(${imagenFondo4})` },
        { pct: 94, left: (this.x) + 'px', top: (this.y + 37) + 'px', background: `url(${imagenFondo5})` },
        { pct: 95, left: (this.x) + 'px', top: (this.y + 30) + 'px', background: `url(${imagenFondo4})` },
        { pct: 96, left: (this.x) + 'px', top: (this.y + 24) + 'px', background: `url(${imagenFondo5})` },
        { pct: 97, left: (this.x) + 'px', top: (this.y + 18) + 'px', background: `url(${imagenFondo4})` },
        { pct: 98, left: (this.x) + 'px', top: (this.y + 12) + 'px', background: `url(${imagenFondo5})` },
        { pct: 99, left: (this.x) + 'px', top: (this.y + 6) + 'px', background: `url(${imagenFondo4})` },
        { pct: 100, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo5})` },
        { pct: 101, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo6})` },
        { pct: 106, left: (this.x) + 'px', top: (this.y) + 'px', background: `url(${imagenFondo6})` }
    ];

    let frameIndex = 0;
    const totalDuration = 25000;
    const frameDuration = totalDuration / 100;

    function updateStyle() {
        const keyframe = keyframes[frameIndex];
        elem.style.left = keyframe.left;
        elem.style.top = keyframe.top;
        elem.style.backgroundImage = keyframe.background;

        frameIndex = (frameIndex + 1) % keyframes.length;

        const nextFrame = keyframes[frameIndex];
        const duration = (nextFrame.pct - keyframe.pct) * frameDuration;
        setTimeout(updateStyle, duration);
    }

    updateStyle();
};


Rectangulo.prototype.animacionEnemigoNueveMapaDos = function (imagenFondo1, imagenFondo2, imagenFondo3, imagenFondo4, imagenFondo5, imagenFondo6, imagenFondo7, imagenFondo8, imagenFondo9, imagenFondo10) {
    const elem = document.getElementById(this.idHTML);
    if (!elem) {
        throw ("EL ID " + this.idHTML + " NO EXISTE");
    }

    elem.style.position = "absolute";
    elem.style.left = this.x + 'px';
    elem.style.top = this.y + 'px';
    elem.style.width = this.ancho + 'px';
    elem.style.height = this.alto + 'px';
    elem.style.zIndex = "5";
    elem.style.transition = "left 0.2s ease-in-out, top 0.2s ease-in-out";

    const keyframes = [
        { pct: 0, left: (this.x) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo1})` },
        { pct: 10, left: (this.x) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo1})` },
        { pct: 11, left: (this.x + 6) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 12, left: (this.x + 12) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 13, left: (this.x + 18) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 14, left: (this.x + 24) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 15, left: (this.x + 30) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 16, left: (this.x + 37) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 17, left: (this.x + 43) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 18, left: (this.x + 49) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 19, left: (this.x + 55) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 20, left: (this.x + 61) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 21, left: (this.x + 68) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 22, left: (this.x + 74) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 23, left: (this.x + 80) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 24, left: (this.x + 86) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 25, left: (this.x + 92) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 26, left: (this.x + 98) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 27, left: (this.x + 104) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 28, left: (this.x + 110) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 29, left: (this.x + 116) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 30, left: (this.x + 122) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 31, left: (this.x + 128) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 32, left: (this.x + 134) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 33, left: (this.x + 140) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 34, left: (this.x + 146) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 35, left: (this.x + 152) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 36, left: (this.x + 158) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 37, left: (this.x + 166) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 38, left: (this.x + 175) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 39, left: (this.x + 186) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo4})` },
        { pct: 40, left: (this.x + 192) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo5})` },
        { pct: 41, left: (this.x + 192) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo10})` },
        { pct: 50, left: (this.x + 192) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo10})` },
        { pct: 51, left: (this.x + 192) + 'px', top: (this.y - 15) + 'px', background: `url(${imagenFondo8})` },
        { pct: 52, left: (this.x + 192) + 'px', top: (this.y - 20) + 'px', background: `url(${imagenFondo9})` },       
        { pct: 53, left: (this.x + 192) + 'px', top: (this.y - 25) + 'px', background: `url(${imagenFondo8})` },
        { pct: 54, left: (this.x + 192) + 'px', top: (this.y - 30) + 'px', background: `url(${imagenFondo9})` },
        { pct: 55, left: (this.x + 192) + 'px', top: (this.y - 35) + 'px', background: `url(${imagenFondo8})` },
        { pct: 56, left: (this.x + 192) + 'px', top: (this.y - 39) + 'px', background: `url(${imagenFondo9})` },
        { pct: 57, left: (this.x + 192) + 'px', top: (this.y - 44) + 'px', background: `url(${imagenFondo8})` },
        { pct: 58, left: (this.x + 192) + 'px', top: (this.y - 48) + 'px', background: `url(${imagenFondo9})` },
        { pct: 59, left: (this.x + 192) + 'px', top: (this.y - 53) + 'px', background: `url(${imagenFondo8})` },
        { pct: 60, left: (this.x + 192) + 'px', top: (this.y - 58) + 'px', background: `url(${imagenFondo9})` },
        { pct: 61, left: (this.x + 192) + 'px', top: (this.y - 58) + 'px', background: `url(${imagenFondo10})` },
        { pct: 70, left: (this.x + 192) + 'px', top: (this.y - 58) + 'px', background: `url(${imagenFondo10})` },
        { pct: 71, left: (this.x + 186) + 'px', top: (this.y - 58) + 'px', background: `url(${imagenFondo6})` },
        { pct: 72, left: (this.x + 175) + 'px', top: (this.y - 58) + 'px', background: `url(${imagenFondo7})` },
        { pct: 73, left: (this.x + 166) + 'px', top: (this.y - 58) + 'px', background: `url(${imagenFondo6})` },
        { pct: 74, left: (this.x + 158) + 'px', top: (this.y - 58) + 'px', background: `url(${imagenFondo7})` },
        { pct: 75, left: (this.x + 152) + 'px', top: (this.y - 58) + 'px', background: `url(${imagenFondo6})` },
        { pct: 76, left: (this.x + 146) + 'px', top: (this.y - 58) + 'px', background: `url(${imagenFondo7})` },
        { pct: 77, left: (this.x + 140) + 'px', top: (this.y - 58) + 'px', background: `url(${imagenFondo6})` },
        { pct: 78, left: (this.x + 134) + 'px', top: (this.y - 58) + 'px', background: `url(${imagenFondo7})` },
        { pct: 79, left: (this.x + 128) + 'px', top: (this.y - 58) + 'px', background: `url(${imagenFondo6})` },
        { pct: 80, left: (this.x + 122) + 'px', top: (this.y - 58) + 'px', background: `url(${imagenFondo7})` },
        { pct: 81, left: (this.x + 116) + 'px', top: (this.y - 58) + 'px', background: `url(${imagenFondo6})` },
        { pct: 82, left: (this.x + 110) + 'px', top: (this.y - 58) + 'px', background: `url(${imagenFondo7})` },
        { pct: 83, left: (this.x + 104) + 'px', top: (this.y - 58) + 'px', background: `url(${imagenFondo6})` },
        { pct: 84, left: (this.x + 98) + 'px', top: (this.y - 58) + 'px', background: `url(${imagenFondo7})` },
        { pct: 85, left: (this.x + 92) + 'px', top: (this.y - 58) + 'px', background: `url(${imagenFondo6})` },
        { pct: 86, left: (this.x + 86) + 'px', top: (this.y - 58) + 'px', background: `url(${imagenFondo7})` },
        { pct: 87, left: (this.x + 80) + 'px', top: (this.y - 58) + 'px', background: `url(${imagenFondo6})` },
        { pct: 88, left: (this.x + 74) + 'px', top: (this.y - 58) + 'px', background: `url(${imagenFondo7})` },
        { pct: 89, left: (this.x + 68) + 'px', top: (this.y - 58) + 'px', background: `url(${imagenFondo6})` },
        { pct: 90, left: (this.x + 61) + 'px', top: (this.y - 58) + 'px', background: `url(${imagenFondo7})` },
        { pct: 91, left: (this.x + 55) + 'px', top: (this.y - 58) + 'px', background: `url(${imagenFondo6})` },
        { pct: 92, left: (this.x + 49) + 'px', top: (this.y - 58) + 'px', background: `url(${imagenFondo7})` },
        { pct: 93, left: (this.x + 43) + 'px', top: (this.y - 58) + 'px', background: `url(${imagenFondo6})` },
        { pct: 94, left: (this.x + 37) + 'px', top: (this.y - 58) + 'px', background: `url(${imagenFondo7})` },
        { pct: 95, left: (this.x + 30) + 'px', top: (this.y - 58) + 'px', background: `url(${imagenFondo6})` },
        { pct: 96, left: (this.x + 24) + 'px', top: (this.y - 58) + 'px', background: `url(${imagenFondo7})` },
        { pct: 97, left: (this.x + 18) + 'px', top: (this.y - 58) + 'px', background: `url(${imagenFondo6})` },
        { pct: 98, left: (this.x + 12) + 'px', top: (this.y - 58) + 'px', background: `url(${imagenFondo7})` },
        { pct: 99, left: (this.x + 6) + 'px', top: (this.y - 58) + 'px', background: `url(${imagenFondo6})` },
        { pct: 100, left: (this.x) + 'px', top: (this.y - 58) + 'px', background: `url(${imagenFondo7})` },
        { pct: 101, left: (this.x) + 'px', top: (this.y - 58) + 'px', background: `url(${imagenFondo1})` },
        { pct: 110, left: (this.x) + 'px', top: (this.y - 58) + 'px', background: `url(${imagenFondo1})` },
        { pct: 111, left: (this.x) + 'px', top: (this.y - 53) + 'px', background: `url(${imagenFondo2})` },
        { pct: 112, left: (this.x) + 'px', top: (this.y - 48) + 'px', background: `url(${imagenFondo3})` },
        { pct: 113, left: (this.x) + 'px', top: (this.y - 44) + 'px', background: `url(${imagenFondo2})` },
        { pct: 114, left: (this.x) + 'px', top: (this.y - 39) + 'px', background: `url(${imagenFondo3})` },
        { pct: 115, left: (this.x) + 'px', top: (this.y - 35) + 'px', background: `url(${imagenFondo2})` },
        { pct: 116, left: (this.x) + 'px', top: (this.y - 30) + 'px', background: `url(${imagenFondo3})` },
        { pct: 117, left: (this.x) + 'px', top: (this.y - 25) + 'px', background: `url(${imagenFondo2})` },
        { pct: 118, left: (this.x) + 'px', top: (this.y - 20) + 'px', background: `url(${imagenFondo3})` },
        { pct: 119, left: (this.x) + 'px', top: (this.y - 15) + 'px', background: `url(${imagenFondo2})` },
        { pct: 120, left: (this.x) + 'px', top: (this.y - 10) + 'px', background: `url(${imagenFondo1})` }


    ];

    let frameIndex = 0;
    const totalDuration = 25000;
    const frameDuration = totalDuration / 100;

    function updateStyle() {
        const keyframe = keyframes[frameIndex];
        elem.style.left = keyframe.left;
        elem.style.top = keyframe.top;
        elem.style.backgroundImage = keyframe.background;

        frameIndex = (frameIndex + 1) % keyframes.length;

        const nextFrame = keyframes[frameIndex];
        const duration = (nextFrame.pct - keyframe.pct) * frameDuration;
        setTimeout(updateStyle, duration);
    }

    updateStyle();
};