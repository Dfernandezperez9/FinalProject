let inicio = {
    iniciadores: [
        dimensiones.iniciar(),
        maquinaEstados.iniciar(),
        teclado.iniciar(),
        //mando.iniciar(),
        buclePrincipal.iterar()
    ],

    iniciarJuego: function () {
        inicio.encadenarInicios(inicio.iniciadores.shift());
    },
    encadenarInicios: function (iniciador) {
        if (iniciador) {
            iniciador (() => inicio.encadenarInicios(this.iniciadores.shift()));
        }
    }
};

document.addEventListener("DOMContentLoaded", function () {
    inicio.iniciarJuego();

}, false);