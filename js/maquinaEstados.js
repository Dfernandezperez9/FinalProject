const maquinaEstados = {
    estadoActual: null,
    iniciar: function () {
        maquinaEstados.cambiarEstado(listadoEstados.PANTALLA_TITULO);
    },

    cambiarEstado: function (nuevoEstado, objetoEntradaLocalizacion) {
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

        switch (nuevoEstado) {

            case listadoEstados.MAPAMUNDI:
                document.body.appendChild(carga);

                setTimeout(function() {
                    maquinaEstados.estadoActual = new EstadoMapamundi(listadoEstados.MAPAMUNDI, "mapas/Valdemoro.json?v=" + Date.now(), 624, 48);    
                }, 300);

                setTimeout(function() {
                    document.getElementById("info").classList.add("info");
                }, 1000);
                
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
                break;

            case listadoEstados.NIVEL:
                maquinaEstados.estadoActual = new EstadoMapamundi(listadoEstados.NIVEL, objetoEntradaLocalizacion.rutaMapa, objetoEntradaLocalizacion.coordenadaXInicial, objetoEntradaLocalizacion.coordenadaYInicial);     
                
                controlesTeclado.arriba = null;
                controlesTeclado.abajo = null;
                controlesTeclado.izquierda = null;
                controlesTeclado.derecha = null;
                
                JugadorMapamundi.objetoRecogido1 = false;
                JugadorMapamundi.objetoRecogido2 = false;
                JugadorMapamundi.objetoRecogido3 = false;
                JugadorMapamundi.objetoRecogido4 = false;
                JugadorMapamundi.objetoRecogido5 = false;
                JugadorMapamundi.objetoRecogido6 = false;
                JugadorMapamundi.objetoRecogido7 = false;
                JugadorMapamundi.objetoRecogido8 = false;
                JugadorMapamundi.objetoRecogido9 = false;
                JugadorMapamundi.objetoRecogido10 = false;
        
                JugadorMapamundi.easterRecogido1 = false;
                JugadorMapamundi.easterRecogido2 = false;
                JugadorMapamundi.easterRecogido3 = false;

                JugadorMapamundi.textoDisparado1 = false;
                JugadorMapamundi.textoDisparado2 = false;
                JugadorMapamundi.textoDisparado3 = false;
                JugadorMapamundi.textoDisparado4 = false;
                JugadorMapamundi.textoDisparado5 = false;
        
                JugadorMapamundi.contadorObjetos = 0;
                JugadorMapamundi.contadorEaster = 0;

                JugadorMapamundi.todosEasterRecogidos = false;
                JugadorMapamundi.todosObjetosRecogidos = false;

                document.getElementById('pInfo').innerText = `Capta a los incautos de las afueras!`;
                
                setTimeout(function () {
                    document.getElementById('objeto1').style.display = 'initial';
                    document.getElementById('objeto2').style.display = 'initial';
                    document.getElementById('objeto3').style.display = 'initial';
                    document.getElementById('objeto4').style.display = 'initial';
                    document.getElementById('objeto5').style.display = 'initial';
                    document.getElementById('objeto6').style.display = 'initial';
                    document.getElementById('objeto7').style.display = 'initial';
                    document.getElementById('objeto8').style.display = 'initial';
                    document.getElementById('objeto9').style.display = 'initial';
                    document.getElementById('objeto10').style.display = 'initial';

                    document.getElementById('easter1').style.display = 'initial';
                    document.getElementById('easter2').style.display = 'initial';
                    document.getElementById('easter3').style.display = 'initial';
                }, 100);

                setTimeout(function() {

                    controlesTeclado.arriba = "ArrowUp";
                    controlesTeclado.abajo = "ArrowDown";
                    controlesTeclado.izquierda = "ArrowLeft";
                    controlesTeclado.derecha = "ArrowRight";

                }, 3000);
                break;

            case listadoEstados.FINAL:

                function reducirVolumen() {
                    audio.musica.volume -= 0.01;
                    if (audio.musica.volume <= 0.03) {
                        audio.musica.volume = 0;
                    }
                }

                let intervaloId = setInterval(reducirVolumen, 500);
                maquinaEstados.estadoActual = new EstadoMapamundi(listadoEstados.FINAL, "mapas/Valdemoro.json?v=" + Date.now(), 480, 288);
                reducirVolumen();
        
                
                JugadorMapamundi.objetoRecogido1 = false;
                JugadorMapamundi.objetoRecogido2 = false;
                JugadorMapamundi.objetoRecogido3 = false;
                JugadorMapamundi.objetoRecogido4 = false;
                JugadorMapamundi.objetoRecogido5 = false;
                JugadorMapamundi.objetoRecogido6 = false;
                JugadorMapamundi.objetoRecogido7 = false;
                JugadorMapamundi.objetoRecogido8 = false;
                JugadorMapamundi.objetoRecogido9 = false;
                JugadorMapamundi.objetoRecogido10 = false;
    
                JugadorMapamundi.easterRecogido1 = false;
                JugadorMapamundi.easterRecogido2 = false;
                JugadorMapamundi.easterRecogido3 = false;
    
                JugadorMapamundi.contadorObjetos = 0;
                JugadorMapamundi.contadorEaster = 0;

                JugadorMapamundi.todosEasteresRecogidos = false;
                JugadorMapamundi.todosColectablesRecogidos = false;
                JugadorMapamundi.todosTextosDisparados = true;

                document.getElementById('info').style.display = 'none';

                document.getElementById('objeto1').style.display = 'none';
                document.getElementById('objeto2').style.display = 'none';
                document.getElementById('objeto3').style.display = 'none';
                document.getElementById('objeto4').style.display = 'none';
                document.getElementById('objeto5').style.display = 'none';
                document.getElementById('objeto6').style.display = 'none';
                document.getElementById('objeto7').style.display = 'none';
                document.getElementById('objeto8').style.display = 'none';
                document.getElementById('objeto9').style.display = 'none';
                document.getElementById('objeto10').style.display = 'none';

                document.getElementById('easter1').style.display = 'none';
                document.getElementById('easter2').style.display = 'none';
                document.getElementById('easter3').style.display = 'none';

                controlesTeclado.arriba = null;
                controlesTeclado.abajo = null;
                controlesTeclado.izquierda = null;
                controlesTeclado.derecha = null;

                setTimeout(function () {

                    let popup = document.createElement("div");
                    popup.innerHTML = "Uff... Por fin de vuelta en Madrid... Ha sido un dia de captacion muy duro...";
                    popup.style.position = "fixed";
                    popup.style.top = "40%";
                    popup.style.left = "50%";
                    popup.style.transform = "translate(-50%, -50%)";
                    popup.style.backgroundColor = "black";
                    popup.style.color = "white";
                    popup.style.padding = "20px";
                    popup.style.border = "1px solid white";
                    popup.style.borderRadius = "10px";
                    popup.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";

                    document.body.appendChild(popup);

                    setTimeout(function() {

                        popup.remove();

                    }, 6000);
                }, 4500);

                setTimeout(function () {

                    let popup = document.createElement("div");
                    popup.innerHTML = "Pero al menos ya tenemos la siguiente promocion lista, ¡no puedo decepcionar a The Bridge!";
                    popup.style.position = "fixed";
                    popup.style.top = "40%";
                    popup.style.left = "50%";
                    popup.style.transform = "translate(-50%, -50%)";
                    popup.style.backgroundColor = "black";
                    popup.style.color = "white";
                    popup.style.padding = "20px";
                    popup.style.border = "1px solid white";
                    popup.style.borderRadius = "10px";
                    popup.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";

                    document.body.appendChild(popup);

                    setTimeout(function() {

                        popup.remove();

                    }, 6000);
                }, 12000);

                setTimeout(function () {

                    let popup = document.createElement("div");
                    popup.innerHTML = "Bueno... nos vemos en el Live Review y... ¡HACED EL CHALLENGE!";
                    popup.style.position = "fixed";
                    popup.style.top = "40%";
                    popup.style.left = "50%";
                    popup.style.transform = "translate(-50%, -50%)";
                    popup.style.backgroundColor = "black";
                    popup.style.color = "white";
                    popup.style.padding = "20px";
                    popup.style.border = "1px solid white";
                    popup.style.borderRadius = "10px";
                    popup.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";

                    document.body.appendChild(popup);

                    setTimeout(function() {

                        popup.remove();

                    }, 10000);
                }, 19500);

                setTimeout(function () {

                    var overlay = document.createElement('div');
                    overlay.style.position = 'absolute';
                    overlay.style.top = '0px';
                    overlay.style.left = '0px';
                    overlay.style.width = '100%';
                    overlay.style.height = '100%';
                    overlay.style.backgroundColor = 'black';
                    overlay.style.opacity = 0;
                    document.body.appendChild(overlay);
                    
                    overlay.animate([
                      { opacity: 0 },
                      { opacity: 0.5 },
                      { opacity: 1 }
                    ], {
                      duration: 5000,
                      fill: 'forwards'
                    });

                    setTimeout(function () {

                      document.getElementById('juego').style.display = 'none';
                      overlay.style.backgroundImage = "url('./img/black.png')";

                      overlay.animate([
                        { opacity: 0 },
                        { opacity: 1 }
                      ], {
                        duration: 7000,
                        fill: 'forwards'
                      });

                      setTimeout(function () {

                        overlay.style.backgroundImage = "url('./img/final.png?v=" + Date.now() + "')";
                        overlay.style.backgroundRepeat = "no-repeat";
                        overlay.style.backgroundPosition = "50% 60%";

                        clearInterval(intervaloId);
                        audio.musica.volume = 1;
                      }, 100);
                    }, 20000);
                }, 9500);
                break;

            case listadoEstados.PANTALLA_TITULO:

                maquinaEstados.estadoActual = new EstadoPantallaTitulo();
            break;
        }
    },
    actualizar: function (registroTemporal) {
        maquinaEstados.estadoActual.actualizar(registroTemporal);
    },
    dibujar: function () {
        maquinaEstados.estadoActual.dibujar();
    }
}