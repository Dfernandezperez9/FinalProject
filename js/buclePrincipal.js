let buclePrincipal = {
    idEjecucion: null,
    ultimoRegistro: 0,
    aps: 0,
    fps: 0,
    iterar: function (registroTemporal) {
        buclePrincipal.idEjecucion = requestAnimationFrame(buclePrincipal.iterar);

        buclePrincipal.actualizar(registroTemporal);
        buclePrincipal.dibujar();

        if (registroTemporal - buclePrincipal.ultimoRegistro > 999) {
            buclePrincipal.ultimoRegistro = registroTemporal;
            buclePrincipal.aps = 0;
            buclePrincipal.fps = 0;
        }
    },
    detener: function () {

    },
    actualizar: function (registroTemporal) {
        //mando.actualizar();
        //controles.actualizar();
        maquinaEstados.actualizar(registroTemporal);
        //teclado.reiniciar();
        //controles.reiniciar();
        buclePrincipal.aps++;
    },
    dibujar: function (registroTemporal) {
        maquinaEstados.dibujar();
        buclePrincipal.fps++;
    }
}