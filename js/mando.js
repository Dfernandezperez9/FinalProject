const mando = {
    objeto: null,
    eventosDisponibles: 'ongamepadconnected' in window,
    conectado: false,
    iniciar: function () {
        if (mando.eventosDisponibles) {
            window.addEventListener("gamepadconnected", mando.conectar);
            window.addEventListener("gamepaddisconnected", mando.desconectar);
        }
        else {
            mando.actualizar();
        }
    },
    conectar: function (evento) {
        mando.objeto = evento.gamepad;
        mando.identificar();
    },
    desconectar: function (evento) {
        console.log("mando desconectado del indice %d: %s", evento.gamepad.index, evento.gamepad.id);
    },
    actualizar: function () {
        if (!mando.eventosDisponibles) {
            mando = null;

            try {
                mando = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
                mando.objeto = mando[0];
                if (!mando.conectado) {
                    mando.conectado = true;
                    mando.identificar();
                }
            }catch (error) {
                console.log(error);
            }
        }

        if (!mando.objeto) {
            return;
        }

        if (mando.botonPulsado(mando.objeto.buttons[0])) {
            console.log("Mando: A");
        }
        
    },
    botonPulsado: function (boton) {
        if (typeof(boton) == "object") {
            return boton.pressed;
        }
        else {
            return boton == 1.0;
        }
    },
    identificar: function () {
        console.log("Mando conectado en el indice %d: %s. %d botones, %d ejes.",
            mando.objeto.index, mando.objeto.id, mando.objeto.buttons.length, mando.objeto.axes.length);
    }
};

// Funcion no implementada en el producto final.