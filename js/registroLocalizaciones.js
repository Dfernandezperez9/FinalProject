const registroLocalizaciones = {
    obtenerLocalizacion: function (nombreLocalizacion) {
        const localizaciones = new Array();
        localizaciones.push(new RegistroLocalizacionEntrada("Hacia Afueras", "mapas/Afueras.json?v=" + Date.now(), "img/AssetsGlobal.png", 48, 225));
        localizaciones.push(new RegistroLocalizacionEntrada("De vuelta a casa", "mapas/Afueras.json?v=" + Date.now(), "img/AssetsGlobal.png", 480, 288));
        localizaciones.push(new RegistroLocalizacionEntrada("Caseta abandonada uno", "mapas/Valdemoro.json", "img/AssetsGlobal.png", "img/AssetsGlobal.png", 818, 1290)); //850, 1290
        localizaciones.push(new RegistroLocalizacionEntrada("Caseta abandonada dos", "mapas/Valdemoro.json", "img/AssetsGlobal.png", "img/AssetsGlobal.png", 864, 920));
        localizaciones.push(new RegistroLocalizacionEntrada("Caseta abandonada tres", "mapas/Valdemoro.json", "img/AssetsGlobal.png", "img/AssetsGlobal.png", 1824, 1720));
        localizaciones.push(new RegistroLocalizacionEntrada("Caseta abandonada cuatro", "mapas/Valdemoro.json", "img/AssetsGlobal.png", "img/AssetsGlobal.png", 960, 1058)); // 964, 1064
        localizaciones.push(new RegistroLocalizacionEntrada("Caseta abandonada cinco", "mapas/Afueras.json?v=" + Date.now(), "img/AssetsGlobal.png", 1200, 1332)); // 0, 0
        localizaciones.push(new RegistroLocalizacionEntrada("Caseta abandonada seis", "mapas/Afueras.json?v=" + Date.now(), "img/AssetsGlobal.png", 336, 994)); // 0, 0

        for (let i = 0; i < localizaciones.length; i++) {
            if (nombreLocalizacion == localizaciones[i].nombre) {
                return localizaciones[i];
            }
        }
    }
}