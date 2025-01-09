const teclado = {
    teclas: new Array(),
    teclasDesactivadas: new Set(),
    teclasParaDesactivar: ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
    iniciar: function () {
        document.onkeydown = teclado.guardarTecla;
        document.onkeyup = teclado.borrarTecla;
    },
    guardarTecla: function (e) {
        if (teclado.teclasDesactivadas.has(e.key)) {
            return;
        }
        if (teclado.teclas.indexOf(e.key) == -1) {
            teclado.teclas.push(e.key);
        }
    },
    borrarTecla: function (e) {
        if (teclado.teclasDesactivadas.has(e.key)) {
            return;
        }
        let posicion = teclado.teclas.indexOf(e.key);
        if (posicion !== -1) {
            teclado.teclas.splice(posicion, 1);
        }
    },
    teclaPulsada: function (codigoTecla) {
        return (teclado.teclas.indexOf(codigoTecla) !== -1) ? true : false;
    },
    desactivarControles: function () {
        teclado.teclasParaDesactivar.forEach(tecla => teclado.teclasDesactivadas.add(tecla));
    },
    reactivarControles: function () {
        teclado.teclasParaDesactivar.forEach(tecla => teclado.teclasDesactivadas.delete(tecla));
    }
};